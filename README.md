Indecision app is a React web application created to review key features and best practices of React technology. Indecision app is served using webpack. 

# Project Setup


## Install Tools
    Node.JS - Download from web page
    yarn - Run npm install -g yarn

# Some interesting topics you may find:

Webpack
SASS
Styles Reset

Babel
    presets: env, react


Install Babel and required presets
    yarn global add babel-cli@6.24.1 
    or
    npm install -g babel-cli@6.24.1

Compile Babel
    babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch   

# Webpack

    update packege.json with scripts file

    run yarn tasks
    yarn serve
    yarn run build-babel

    yarn run build

*This project is part of Udemy React training course provided by Andrew Mead.* 
