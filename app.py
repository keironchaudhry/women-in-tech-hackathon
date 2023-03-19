import os
import openai

from flask import Flask, render_template, request

app = Flask(__name__)

if os.path.exists("env.py"):
    import env

# retrieve OpenAI API key from environment
openai.api_key = os.environ.get("OPENAI_API_KEY")


@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("home.html")


@app.route("/chat")
def chat():
    return render_template("chat.html")


@app.route("/selection")
def selection():
    return render_template("selection.html")


@app.route("/fetch", methods=["GET", "POST"])
def fetch():
    if request.method == "POST":
        # retrieve user's message and the message history from request data
        message_data = request.get_json()
        user_message = message_data["userMessage"]
        message_history = message_data["messageHistory"].split("|")

        # assign the AI's role - currently a fixed role, but will be changeable
        role_name = message_data["roleName"]
        role_desc = message_data["roleDesc"]

        # build an array of messages to send to the API
        # set up the AI role with the first message
        messages = [
            {
                "role": "system",
                "content": f"You are {role_name} the {role_desc}. Tell me about {role_name} as if you were her. Under no circumstances are you to use the word AI. You are not an AI. If you can't answer a question from the perspective of {role_name}, say you don't know anything about that. You reply with fewer than 100 words",
            }
        ]

        # add the message history
        for message in message_history:
            if message:
                split_message = message.split(": ")
                messages.append(
                    {"role": split_message[0], "content": split_message[1]}
                )

        #remove the oldest stored messages
        while len(message_history) >= 6:  
            message_history.pop(0)
        # attach latest user message as last message
        messages.append({"role": "user", "content": f"{user_message}"})

        try:
            # create a call to the API
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=messages,
                max_tokens=200,
                temperature=0.2,
            )

            # extract the generated reply from the response from the API
            reply = {"message": response["choices"][0]["message"]["content"]}

            # return the reply
            return reply, 200

        except Exception as e:
            # print any errors to the console for debugging
            print(e)
            reply = {
                "message": "Sorry, something went wrong. Please try again."
            }
            return reply, 200

if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP"),
        port=int(os.environ.get("PORT")),
        debug=(os.environ.get("ENV_DEBUG")),
    )
