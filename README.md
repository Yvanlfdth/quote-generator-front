# quote-generator-front
This environment uses the API quote-generator-rest to get random quotes

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 20.18.0

# Getting started
- Clone the repository
```
git clone https://github.com/Yvanlfdth/quote-generator-front.git
```
- Install dependencies
```
cd quote-generator-front
npm install
```
- Clone .env.example file to new .env file
- Set yours own `SERVER` and `PORT` in .env for current app, and correct `API_SERVER` and `API_PORT` information to use quote-generator-rest

- Run the project
```
npm run dev
```

# Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from the build after building it.                  |
| **node_modules**         | Contains all npm dependencies                                                             |
| **src**                  | Contains source code that will be compiled to the dist dir                               |
| **src/routes**           | Contain all express routes, separated by module/area of application                      |
| index.js                 | Entry point to the whole app that makes the server running                               |
| package.json             | Contains npm dependencies as well as build scripts                                       |

## Filters
You can use those filters if you want more specific quotes:

 Filter | Type | Description |
| ------------------------- | -------|----------------------------------------------------------------------------------------------------------------- |
| `minLength`               | Number | Sets the minimum length of quotes content to search                                                              |
| `maxLength`               | Number | Sets the maximum length of quotes content to search                                                              |
| `tags`                    | String | Tags separated by a comma (find quotes that have all the tags) or a pipe (find quotes that have any of the tags) |
| `author`                  | String | list of authors separated by a pipe (find quotes that have any of the authors), can be a name or a slug          |