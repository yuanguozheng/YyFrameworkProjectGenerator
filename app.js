var template = require('art-template');
var path = require('path');
var fs = require('fs');
var moment = require('moment');

var data = require('./config/project_config.js');
var tmlp = require('./utils/getTemplate.js');
data.date = {
    year: moment().format('YYYY'),
    time: moment().format('YYYY/MM/DD HH:mm:ss')
};

var pomContent = template(tmlp.pom(), data);

var webContent = template(tmlp.web(), data);

var classContent = template(tmlp.sql(), data);

console.log(pomContent);

console.log(webContent);

console.log(classContent);

var basedir = 'C:/Users/yuanguozheng.INTERNAL/test';

function createProjectDir() {
    var projDir = path.join(basedir, 'TestProject');
    fs.mkdirSync(projDir);
    fs.mkdirSync(path.join(projDir, 'src'));
}

//createProjectDir();