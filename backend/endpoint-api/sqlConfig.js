var dbconfig = {
    development: {
        // อย่าลืมเปลี่ยน ip ดูให้ดีนะจะ
        // server: '10.21.43.203',
        server: 'host.docker.internal',
        // server: '192.168.56.107',
        database:'team6_web_labDB',
        user:'sa',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  false,
            instancename:  '172.24.229.163'  // SQL Server instance name
            // instancename:  '192.168.56.107'  // SQL Server instance name
        }
    },
    production: {
        server: '127.0.0.1',
        // server: 'localhost',
        // server: '192.168.56.107',
        database:'team6_web_labDB',
        user:'sa',
        password:'admin@123',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  false,
            instancename:  '10.21.43.203'  // SQL Server instance name
            // instancename:  '192.168.56.107'  // SQL Server instance name
        }
    },
    

};
var apiconfig = {
    development: {
        serverKey: '1aaZ!ARgAQGuQzp00D5D000000.mOv2jmhXkfIsjgywpCIh7.HZpc6vED1LCbc90DTaVDJwdNqbTW5r4uZicv8AFfkOE1ialqnR8UN5.wnAgh090h',

    },
    production: {
        serverKey: '1aaZ!ARgAQGuQzp00D5D000000.mOv2jmhXkfIsjgywpCIh7.HZpc6vED1LCbc90DTaVDJwdNqbTW5r4uZicv8AFfkOE1ialqnR8UN5.wnAgh090h',

    },

};
module.exports = apiconfig;
module.exports = dbconfig;
