Install Toos
    Node.JS - Download from web page
    yarn - Run npm install -g yarn

Install Web Server
    Install live server (no configuration web server)
        yarn global add live-server or npm install -g live-server 
    Navigate into your project folder and run
        live-server public (where public is folder holding index.html file)   

Install Babel and required presets
    yarn global add babel-cli@6.24.1 
    or
    npm install -g babel-cli@6.24.1
Install Babel presets (adds local dependencies to project)
    yarn init
    yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

Compile Babel
    babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch   
