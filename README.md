# **Women In Tech Hack-a-thon, March 2023**

**Team name:** TeamAI

**Project name:** ChatWIT

# Meet ChatWIT!

![homepage screenshots from amiresponsive](documentation/screenshots/ChatWIT-amiresponsive.png)

ChatWIT (Women in Tech) uses the power of AI to enable you to chat directly with a range of pioneering women in tech from history to the present day.

Choose the woman you would like to chat to, and ask her any questions you have about her life and work, achievements and obstacles, and more!  

The live site is deployed at: [https://women-in-tech-hackathon.herokuapp.com/](https://women-in-tech-hackathon.herokuapp.com/)

# Aims of the project

The project brief was to create a product which helps to overcome some of the barriers women face in the tech industry.

## Representation

ChatWIT aims to help contribute to the visibility and representation of women in tech, by reminding all of us that there have always been women who have claimed their place in the "traditionally male-dominated field" of computing, and enabling us to learn more about these women and their accomplishments.  

## Mentoring

ChatWIT's Women in Tech can also act as an AI mentor to people starting out in the field of tech by sharing the stories of their lives, the barriers they overcame and their tips for success.

## Overcoming imposter syndrome

The saying goes that, "You can't be what you can't see". ChatWIT acts as a link to just a selection of the many the women who have made their mark in the tech field, including women of colour, to reassert that women of varied backgrounds do have and have always had a well-deserved place in the tech industry.

## **Table of contents**

* [UX](#user-experience)
    * [Target audience](#target-audience)
    * [User stories](#user-stories)
* [Design](#design)
    * [Website Structure](#web-structure)
    * [Wireframes](#wireframes)
    * [Colour](#colour)
    * [Fonts](#fonts)
    * [Iconography](#iconography)
* [Features](#features)
    * [Navigation Bar](#navigation-bar)
    * [Home Page](#home-page)
    * [AI Selection Page](#ai-selection-page)
    * [Chat Page](#chat-page)
    * [Features for future implementation](#features-for-future-implementation)
* [Testing](#testing)
    * [Manual testing](#manual-testing)
    * [Lighthouse](#lighthouse)
    * [Links](#links)
    * [Responsiveness](#responsiveness)
    * [Validators](#validatorscheckers-used)
* [Bugs during development](#bugs-during-development)
    * [Fixed bugs](#fixed-bugs)
    * [Remaining bugs](#remaining-bugs)
* [Technologies and libraries used](#technologies-and-libraries-used)
    * [Languages](#languages)
    * [Libraries and other resources](#libraries-and-other-resources)
* [Deployment](#deployment)
    * [Local deployment](#local-deployment)
    * [Deployment to Heroku](#deployment-to-heroku)
* [Credits](#credits)
    * [Content](#content)
    * [Media](#media)
    * [Acknowledgments](#acknowledgements)

# UX

## Target audience

The target audience is mainly girls/women or anyone who is interested in learning about the
experiences of women in the tech industry. This includes students and professionals in the tech industry.


## User stories 

* As a user, I can navigate with ease throughout the web application.

* As a woman studying computer science, I want to learn more about the experiences of other historical women in tech to inspire me in my studies and career.

* As a user, I can use this web application on mobile as well as desktop with ease.

* As a professional in the tech industry, I want to learn about the achievements and obstacles faced by women in this field to improve diversity and inclusion in my workplace.

* As a user, I can communicate with the AI model in an online chat environment.

* As someone interested in history, I want to learn about the contributions of women in the development of technology throughout history.

* As a user, I can switch between different AI character models.

* As a parent, I want to expose my child to the positive role models in the tech industry in order to encourage their interest in the field.

# Design

## Website structure

| Page | Description |
| --- | --- |
| Landing page | Main page where site visitors land with a clear outline of the web application |
| Chat page | Where users are able to navigate to engage with the AI chat (ChatGPT) |
| Selection page | A page where users can identify a list of AI mentors to chat with |
| Navigation | Found at the top of every page with a consistent design |
| Footer | Found across all pages with a consistent design |

## Wireframes

A separate document for the wireframes can be found [here](/documentation/wireframes.md). 

## Colour

![Colours palette](/documentation/Wireframes/Colours.jpg)

We chose the current color palette for the website with the goal of creating a visually appealing and empowering experience for our users. The shades of pink represent femininity and convey the message that our platform is dedicated to supporting women in tech. The use of black adds a sense of sophistication and strength, while the light and dark grays create a subtle contrast and help to balance the overall look of the website. Together, these colors work to create a cohesive and inspiring visual identity for our brand.

## Fonts

* Raleway for the Headers
* Roboto for body and general text

## Typography

* H1,H2,H3 - Raleway bold

* H3 - Raleway Medium

* p,a,li - Roboto regular

* Fallback font - Sans-serif

# Features

## **Navigation bar**

* Contains links for site navigation throughout the application, these being "Home" and "Chat".
* The brand logo is a clickable button that returns the user to home page.
* The navbar design has custom scroll effect which blends with the hero-image until scrolled downwards.
* Navbar also responds to smaller viewport sizes.

![navigation-bar](/documentation/features/navbar.png)
![navigation-bar-2](/documentation/features/nabar%202.png)
![navigation-bar-mobile](/documentation/features/navbar%20small.png)

## **Home Page**

* The home page is the first page seen upon visiting the web app.
* It contains the navigation bar, introduction section + hero image, with a button to take users straight to the AI selection page.
* An about section of the landing page which explains the purpose and use of the web app.
* Contains five biography sections.
* Contains the web app footer.

![hero-image](/documentation/features/hero%20image.png)
![mid-upper-section](/documentation/features/chat%20with%20women%20in%20tech%20history.png)
![biographies](/documentation/features/biographies%201.png)
![footer](/documentation/features/footer.png)

## **AI Selection Page**

* Selection page contains links and images of the AI models that can be engaged with.
* Each link will take the user to their respective historical figure.

![selection-page](/documentation/features/selections%20page.png)

## **Chat Page**

* Chat page contains a side bar with all available AI models, which users can use to navigate the AI models.
* Contains the navbar for users to navigate their way back to the main page if necessary.
* Also contains footer.
* Chat with AI is modelled like a chat environment.
* Speech with the AI moves it way upwards.
* When AI is loading the conversation, a loading spinner is seen, indicating that data is being fetched.

![chat-page-side-bar](/documentation/features/chat%20page%20side%20bar.png)
![loader](/documentation/features/asset%20loader.png)

* Below is a sampled conversation with the AI model:

![sample-convo-1](/documentation/features/ai%20convo%20sample%201.png)
![sample-convo-2](/documentation/features/ai%20convo%20sample%202.png)
![sample-convo-3](/documentation/features/ai%20convo%20sample%203.png)

## Features for future implementation
- We would like to add more people to the chat.
- Other than that we would like to update the features for the chat based on new ChatGPT features.


# Testing

## Manual testing

Manual testing of user stories can be found below:

As a **user**, I can **navigate with ease throughout the web application**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 1 | Ensure the functionality of a navigation bar throughout the application | PASS |

As a **woman studying computer science**, I want to **learn more about the experiences of other historical women in tech** to inspire me in my studies and career.

| **Test** | Issue | Result |
| --- | --- | --- |
| 1 | Allow users to have access to AI models of historical women figures in computer science history | PASS |

As a **user**, I can **use this web application on mobile as well as desktop with ease**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 1 | Ensure media query is apt for desktop screens | PASS |
| 2 | Ensure media query is apt for mobile screens | PASS |

As a **professional in the tech industry**, I want to **learn about the achievements and obstacles faced by women in this field** to **improve diversity and inclusion in my workplace**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 1 | Design the web application to be inviting to a diverse number of users | PASS |

As a **user**, I can **communicate with the AI model in an online chat environment**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 1 | Design the chat environment so that users feel they are speaking to another user | PASS |

As **someone interested in history**, I want to learn **about the contributions of women in the development of technology throughout history**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 1 | Allow users to have access to AI that teaches the historical role of women in the field of computer science | PASS |

As a **user**, I can **switch between different AI character models**.

| **Test** | Issue | Result |
| --- | --- | --- |
| 1 | Create a variety of historical figures programmed in the AI chat environment for users to access | PASS |

As a **parent**, I want **to expose my child to positive role models in the tech industry in order to encourage their interest in the field.**

| **Test** | Issue | Result |
| --- | --- | --- |
| 1 | Create a learning environment using ChatGPT AI modelled off tech industry historical figures | PASS |

## Lighthouse 

Lighthouse testing reports:

* Home page (desktop):

![home-page-desktop](/documentation/lighthouse/lighthouse%20home%20page%20desktop.png)

* Home page (mobile):

![home-page-mobile](/documentation/lighthouse/lighthouse%20home%20page%20mobile.png)

* Selection page (desktop):

![selection-page-desktop](/documentation/lighthouse/lighthouse%20selection%20page%20desktop.png)

* Selection page (mobile):

![selection-page-mobile](/documentation/lighthouse/lighthouse%20selection%20page%20mobile.png)

* Chat page (desktop):

![chat-page-desktop](/documentation/lighthouse/lighthouse%20chat%20page%20desktop.png)

* Chat page (mobile):

![chat-page-mobile](/documentation/lighthouse/lighthouse%20chat%20page%20mobile.png)

## Links

- Internal and external links were all checked and found to be working correctly.

## Responsiveness

- Responsiveness was checked on a range of desktop and mobile devices and found to be functioning correctly.
  
## Validators/checkers used

* **W3C HTML Code Validator**

    * The deployed URL was run through the [HTML Markup Validation Service](https://validator.w3.org/) and returned two errors which are related to Flask's template variables.

* **W3C CSS Jigsaw Validator**

    * CSS code was tested with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) via direct input and returned no errors.

* **JSHint validator**

    * JavaScript code was tested with [JSHint](https://jshint.com/) and returned no errors.

* **Python Validator**

    * All Python files across application have by validated during the development process using `pycodestyle`.

# Bugs

## Fixed bugs

All fixed bugs can be found [here](https://github.com/keironchaudhry/women-in-tech-hackathon/pulls?q=is%3Apr+is%3Aclosed+label%3Abug). 

Link will eventually be added with fixes in Kanban board.

## Remaining bugs

There is a margin issue on mobile screens lower than 430px.

Other than this, there are no other known bugs or issues.

## Technologies and libraries used

## **Languages**

The languages used in this project are:

- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Python](https://www.python.org/)

## **Libraries and other resources**

- [Flask](https://flask.palletsprojects.com/en/2.2.x/): Flask is a Python-based web application framework tool designed to be lightweight, flexible and easy to use.
- [ChatGPT](https://openai.com/blog/chatgpt): ChatGPT is an AI model that interacts with users using over a trillion parameters and complex algorithms over many subjects.
- [ChatGPT API](https://openai.com/blog/introducing-chatgpt-and-whisper-apis): API integration to allow developers to dynamically use ChatGPT in their projects.
- [Figma](https://www.figma.com/): Figma is a web-based design and prototyping tool used for creating UI, desktop and mobile app designs.
- [Bootstrap](https://getbootstrap.com/): Bootstrap is a CSS library used to faciliate the design responsiveness of a web application and mobile-first web pages.
- [Google Fonts](https://fonts.google.com/): used to import font utilised throughout site.
- [Font Awesome](https://fontawesome.com/): used for icons across website.
- [GitHub](https://github.com/): used to store, develop and maintain project code.
- [Heroku](https://dashboard.heroku.com/apps): a cloud-based platform that allows developers to store, manage and deploy web applications.


# Deployment

The development environment used for this project was GitPod and VSCode. Regular commits and pushes to Github have been employed to be able to track and trace the development process of the website, as well as the creation of various branches by various members of the hack-a-thon team to be able control the development process of the project using pull requests.

For local deployments instructions shall be written below, along with instructions with deployment to Heroku, the hosting service used to deploy this particular website. Heroku was chosen as the hosting service due to its database maintenance capabilities. 

## **Local Deployment**

**Note**: Please `git clone` project. This can be done by going to the GitHub repository, copying and pasting the available URL link (https://github.com/keironchaudhry/women-in-tech-hackathon.git) and running the command `git clone https://github.com/keironchaudhry/women-in-tech-hackathon.git` in your IDE terminal.

Then use the following instructions:

1. Use the terminal in your IDE (GitPod or VSCode) and go to the root directory of your project.
2. Make sure you're up to date with the latest changes by running the command `git pull origin main`.
4. Add a new file called 'env.py' to the root directory of you project folder (at the same level as the app.py file).
5. Add the following to your env.py file and save it:

`import os`

`os.environ["ENV_DEBUG"] =	"True"`
`os.environ["IP"] = "0.0.0.0"`
`os.environ["PORT"] = "5000"`

You will also need to add the ChatGPT API key - this can be accessed via request to the hack-a-thon backend team, or by entering your own. 

6. Install the project requirements by running the command `pip install -r requirements.txt`
7. Start the development server by running the command `python app.py`
8. If that's all worked, a few messages should pop up to say the server's running.
9. If you're working locally (with VSCode or installed on your computer) one of the messages should say something like "Running on http://127.0.0.1:5000". Copy that address and paste it into your browser to view the site.
10. If you're working in GitPod, when you start the server a popup should appear in the bottom right giving you a few options. Click "Open Browser" to view the site in a new browser window.

## **Deployment to Heroku**

Deployment to Heroku can be done with the following guideline:

1. Create an account on Heroku
2. Create an app and give it the desired name and select a region
3. No database is required for this project.
5. Create a `Procfile` with the following text: `web: gunicorn app:app`
6. Make sure you add your environment variables (env.py) to Heroku's Config Vars
12. Connect the app to GitHub, search for the repository and then enable automatic deploys from `main` (or you can manually deploy).
13. Click 'deploy' to deploy your application to Heroku for the first time.


# Credits

## Media
- [Home Page picture](./static/assets/bg-img.avif) : taken from [Unsplash](https://unsplash.com/photos/nF8xhLMmg0c) Author : Priscilla Du Preez


## Acknowledgements

This project was created collaboratively by TeamAI: Erik, Kieron, Liam, Amen, Wesley, Ben and Charley 
