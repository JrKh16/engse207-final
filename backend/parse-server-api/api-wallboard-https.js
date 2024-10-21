const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const path = require('path');
const cron = require("node-cron");
const mongoose = require('mongoose');
var cors = require('cors');
var fs = require('fs');

const databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI

var apiport = 8605;

const config = {
  databaseURI: 'mongodb://wallboarduser:WB1qazxsw2@mongodb:27017/wallboarddb',
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'wallboardapi',
  masterKey: process.env.MASTER_KEY || 'wallboardapi', //Add your master key here. Keep it secret!
  clientKey: 'wallboardapi',
  javascriptKey: 'wallboardapi',
  serverURL: 'https://localhost:' + apiport + '/api',
  publicServerURL: 'https://localhost:' + apiport + '/api',
  liveQuery: {
    classNames: ['OnlineAgentLists', 'WallboardBanners','CallAgentSummaries'],
  },
  directAccess: true,
  enforcePrivateUsers: true,
  allowClientClassCreation: false,
};

const app = express();

app.use(cors());
app.use(cors({ origin: '*' }));

app.use('/', express.static(path.join(__dirname, '/wallboard')));

const mountPath = '/api';
const api = new ParseServer(config);

var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

app.use(mountPath, api);

var httpsServer = require('https').createServer(options, app);

httpsServer.listen(apiport, function () {
  console.log('Wallboard API running on port ' + apiport + '.');
});

ParseServer.createLiveQueryServer(httpsServer);
