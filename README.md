# Accelerator_NodeJs_Login

## About
I made this accelerator to speedup the start of a nodeJs+Express+MongoDB projects
Almost any system that you make today will need a login system with token and crypto on the password
And i made this to study aswell

> ## Prerequisites
> NodeJs (used to build was 8.10)
> MongoDB

## Installation
```
git clone https://github.com/LuMizera/accelerator_NodeJs_Login.git
cd accelerator_NodeJs_Login
npm install
```

## Running 
```
npm run dev
```

### Variables

You can change on what name the database will be created by changing this variable on /config/mongodb.js
```
connection = process.env.MONGO_HOST || "mongodb://localhost:" + port + "/LuMizera"
```
By changing "LuMizera" you change the name of the database
And by changing the rest of the variable ***"mongodb://localhost:" + port + "/LuMizera"*** you can change the host to a MLAB or anything you want

## NOTICE
This is a working in progress project, i will implement envoriment variables like dev, prod, test, etc..
And the other features as well that are missing 
