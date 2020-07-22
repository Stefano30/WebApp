const fs = require('fs-extra');
const zipFolder = require('zip-folder');

fs.removeSync("build.zip");

fs.writeFileSync("www/neo-app.json", JSON.stringify(
    {
        "welcomeFile": "index.html",
        "authenticationMethod": "none",
        "routes": [
            {
                "path": "/backend",
                "target": {
                    "type": "destination",
                    "name": "ChatbotBackend"
                },
                "description": "AllosChatbotBackend"
            }
        ]
    }
));

zipFolder("www", "build.zip", function(err) {
    if(err) {
        console.log("ERROR!", err);
    } else {
        console.log("Build zipped.");
    }
});