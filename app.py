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
    if request.method == "POST":
        # retrieve user's message from submitted form
        user_message = request.form.get("user_message")
        # assign the AI's role - currently a fixed role, but will be changeable
        role = "NASA mathematician Katherine Johnson"

        try:
            # create a call to the API
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                        "role": "system",
                        "content": f"You are {role}. You are not an ai model. You are a helpful and enthusiastic mentor. You reply with fewer than 100 words",
                    },
                    {"role": "user", "content": f"{user_message}"},
                ],
                max_tokens=200,
                temperature=0.2,
            )

            # extract the generated reply from the response from the API
            reply = response["choices"][0]["message"]["content"]

        except Exception as e:
            # print any errors to the console for debugging
            print(e)
            reply = "Sorry, something went wrong. Please try again."

        # render the home page with the user's message and the AI's reply
        return render_template("home.html", user_message=user_message, reply=reply)

    return render_template("home.html")


if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP"),
        port=int(os.environ.get("PORT")),
        debug=(os.environ.get("ENV_DEBUG")),
    )
