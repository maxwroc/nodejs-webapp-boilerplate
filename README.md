# NodeJS WebApp Boilerplate

I know that there is plenty of similar repos but I wanted to create a custom one because of few reasons:

* I haven't found many examples with this set of components (Node+TS+Express+React)
* Most of the templates were using too many dependencies and were overcomplicating stuff
* I'm not a fan of webpack
* I wanted to have a small and easy to adjust template which I could reuse for other projects
* VSCode debugging setup

## What is here?

The following npm packages:
* **express** - I'm not sure yet if this was a good choice (my main concern is performance)
* **body-parser** - Express middleware parsing post requests
* **express-react-views** - Express middleware which could be skipped but it's nice to have if you want to have MasterPage/Layout rendered by React
* **react + react-dom**
* **typescript**
* **ts-node** - To just make everything cleaner (no more generated JS files)
* **nodemon** - File watcher triggering build and restarting server

## How to use it

#### Production
```
npm run start
```

#### Development
```
npm run start:debug
```

#### Development (same as start:debug but with nodemon - watcher)
```
npm run dev
```

#### VSCode
Use "start:debug" or "dev" scripts (look above) and in VSCode press F5
