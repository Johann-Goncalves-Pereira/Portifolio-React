# Start React Projects
I want to use react, for a lot of thing and I hate to config the environment every time that I have a new idea.

And why you ask me... - It's so simple just use ``create react`` - The thing is I love [sass](https://sass-lang.com) as well as other tolls, 
like [postcss](https://postcss.org), [open-props](https://open-props.style), [typescript](https://www.typescriptlang.org)... And everything needs to be running smoothly.


So I came up with this repo. 


## Environment
The first thing is came up with al the react and typescript. That is the most simple task becaus of [vite](https://vitejs.dev).

Because of vite the mariolatry of problems vanish. Because than just install sass and will be working as well 
as module.scss and if you want to add postcss just add an postcss.config.js on root folder.

The lasts steps was add the open-props and the postcss plugins.

## Running the project

Fist make a fork of this repo and then on the folder:


```sh
npm install
```

and run any of this scripts:


```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },                            

```
```sh
npm run YourScript
```

