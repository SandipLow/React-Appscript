# About The Project
This is a template to create google appscript project locally with react js.

It uses

1. "Parcel" to compile down whole source code into a single .html file.
2. "Clasp" for appscript support
3. "gas-client" to run server funtions in a js promise syntax in the project.
4. "Tailwind css" built in support

<br>

# Installation and Set up
1. Clone this repsitory, open folder in terminal and install dependencies as usual.

       git clone "https://github.com/SandipLow/React-Appscript.git"
       cd React-Appscript
       npm install

2. Enable the Google Apps Script API: https://script.google.com/home/usersettings

<img src="https://user-images.githubusercontent.com/744973/54870967-a9135780-4d6a-11e9-991c-9f57a508bdf0.gif">

3. Login to Clasp

        npm run glogin

4. Setup an Appscript project

        npm run setup

6. Start development by starting react

        npm start

<br>

# Scripts
- `glogin` : Login to clasp
- `glogout` : Logout to clasp
- `gcreate` : create a new appscript project.
- `gpull` : pull drive appscript code to './appscript' directory
- `gpush` : push './appscript' directory to appscript file
- `gstart` : push project to appscript whenever a file changes everytime (Though it is recommended to push optimised html file during production, Use it to test appscript server functions)
- `setup` : all in one command that create an appscript project in Google Drive.
- `start` : Start react code server locally.
- `build` : build a single optimized html file.
- `deploy` : build a single optimized html file then push to appscript.

<br>

# Folder Structure :
Now this project has two directory :
1. `'/appscript'` => This is the directory which is going to be pushed to appscript file. As you can see It contains `main.js`, `index.html` and `appscript.json`. The main.`js` is going to be compiled to main.`gs`. Thus it is the Script file here which contains server functions. `index.html` is the all in one compile .html file. `appscript.json` contains all deployment, timezone, exceptionLogging settings which neither we've to set or modify.

2. `'/src'` => It is the folder where all our react source code will be there.

Now Lets make some changes to react project. Then build this into a single html file the push
```
npm run gpush
```
But, The size of html file willbe much large (apx - 1.5MB). Thus it is recommended to compile it to a minified version before.
```
npm run build
```
There is command to run both of this during deployment
```
npm run deploy
```
Now to push the changes autometically whenever a file modify
```
npm run gstart
```
!!! IMPORTANT : Whenever you start development after making any changes to Appscript project in the online editor, pull the changes from the appscript file...
```
npm run gpull
```
# Calling Server functions :
This project uses the gas-client package to more easily call server-side functions using promises.

```js
// Google's documentation syntax.
google.script.run
  .withSuccessHandler(res=> setHello(res))
  .withFailureHandler(e=> alert(e))
  .hello();

// The Syntax used here.
const [hello, setHello] = useState("Loading...")

useEffect(()=>{

   server.hello()
    .then(res=> setHello(res))
    .catch(e=> alert(e))

}, [])
```
!!! This works in appscript deployment only... Thus it is recommended to use `npm run gstart` to test the server function call functionality.
