const { PrismaClient } = require('@prisma/client')
require("dotenv").config();

(function () {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log(`spawn called cwd: ${process.cwd()} and dirname: ${__dirname}`);
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();
 
const store = new PrismaClient({
    log: ['query', 'info', `warn`, `error`],
});

store.challenge.findMany().then((resp) => {
    console.log(`Response ${JSON.stringify(resp, null, 4)}`);
}).catch((err) => {
    console.error("Error: ", err);
})

