# **Women In Tech Hack-a-thon, March 2023**

Readme to be added.

Code Institute template has been used to create this IDE.

## **Creating a Branch**

There are multiple ways to create a branch in your IDE, but this is one of the easiest:

* Go to the GitHub repository for Women-In-Tech-Hackathon.

* You should be able to locate "Branch" (it'll normally say "1 branch" if there's just one). Click it.

* Then click "New branch". You can name it whatever but I would recommend calling it your name (in my case, I've named it "keiron").

* Done. 

* Once you've done this, in your IDE, go right down to the branch label (I will attach a photo).

![branch-label](/documentation/PR%20and%20branch%20instructions/branch%20label.png)

* Click this and it will bring up a list of existing branches. Click the one you have made.

* You should notice then that the branch label has changed to your named branch.


**Useful commands**

A list of useful commands when you're working from branches are:

`git status` (tells you which branch you're on and if you're behind/ahead of `main` branch)

`git pull origin main` (this is very important, please git pull everytime you merge a pull request as it avoids merge conflicts)

`git add` 

`git commit -m "(your commit message)"`

`git push origin (your branch name)` (I recommend just going into source control and clicking `Sync changes`)

`git switch (branch name)` (allows you to switch branch instantaneously)


## **Creating a Pull Request (known as a "PR")**

When you've pushed changes to your branch, you can then head over to the GitHub repository for Women-In-Tech-Hackathon and _normally_ there appears an unmissable message saying that you can `merge changes` and begin a `pull request`.

In case you've pushed changes and this message doesn't appear, don't worry, just go back into "branches", find your name, and alongside your branch name, there'll be a button for "New Pull Request". I've attached the following photo for reference.

![pull-request-button](/documentation/PR%20and%20branch%20instructions/new%20pull%20request.png)

* Once you've begun a PR, it will appear in the "Pull Requests" (next to "Issues") part of the GitHub repository, and you can manage it from there before merging your changes with `main`.

* Please always tag reviewers (you can tag anybody or everybody) to take a look at the changes before merging.


**Potential problems**

When a lot of PRs go up, a "merge conflict" can happen. This is okay and it's bound to happen, it's part of the experience of a hackathon as well (and also working in a team). It can occur for a variety of complex reasons.

An example of how it can occur is when changes are being made by various branches on the same content (say that "keiron" and "erik" are working on the README.md, and then we do a PR, and one of us has forgotten to `git pull` before we began our changes). 

Of course the best way to avoid it is to try and always make sure your branch is up to date and to work on completely different sections. 

If it happens we will just deal with it but let's try avoid it xD 


**Note**

I've tried my best to be as comprehensive as possible in this so that any new-hackathoners and those who are new to branching and PRs can be informed, but overall we will deal with any potential issues as a team. :D 