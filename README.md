# reactsession
## Agenda

1. Intro - 10 min
2. Break out 1: Setup your environment 15 min
3. Retro - 5 min
4. Concepts  - 20 min
5. Break out 2: React fundamentals - 40 min
6. Retro - 10 min
7. Wrap up


# Agenda
> Envrionment Setup ( Walkthrough of react setup)

> Build a react frontend consuming node js backend

> Deploy to google cloud (app engine)

## Prerequisites

1) Node JS
2) Vs Code Editor

## Envrionment Setup
1) npx create-react-app {appname}
2) Walk through of project files
3) npm start
3) setup lint install eslint as "dev dependency" `npm install eslint --save-dev`
   go through lint setup eslint --init
4) setup prettier `npm install prettier --save-dev`
5) Sample component to display hello world

## Linting and Prettier
* Install Prettier and Eslint extesions in VSCode
* Check(in VSCode) that the extension pick up the config files `.eslintrc.json` and `.prettierrc`,refer references folder you may have to open VSCode in the correct folder.


## Architecure

### Application Diagram

<p align="center">
<img src="architecture.png"/>
</p>

### React application

1) Create a todo app which fetches todos of a user and lists in user
2) Create a todo list component
3) Create a service layer to fetch the todos
4) Bind the todos to the component
5) Create a todo template to present the data


### Deploy application

1) Create a deploy folder in todoapp
2) run npm run build
3) copy build to deploy
4) cd deploy folder
5) gcloud auth login
6) gcloud config set project project name
7) glcoud app deploy app.yaml
