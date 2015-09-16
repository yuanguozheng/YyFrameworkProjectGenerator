/**
 * Created by yuanguozheng on 2015/9/16 0016.
 */
var path = require('path');

var tmpl_paths = {
    'sql': 'sql/db.sql',
    'api': 'java/api_class.java',
    'dao': 'java/dao_class.java',
    'model': 'java/mode_class.java',
    'pom': 'xml/pom.xml',
    'web': 'xml/web.xml'
}

var base_dir = path.join(__dirname, '../templates/');

module.exports.api = function () {
    return path.join(base_dir, tmpl_paths.api);
};
module.exports.dao = function () {
    return path.join(base_dir, tmpl_paths.dao);
};
module.exports.model = function () {
    return path.join(base_dir, tmpl_paths.model);
};
module.exports.sql = function () {
    return path.join(base_dir, tmpl_paths.sql);
};
module.exports.pom = function () {
    return path.join(base_dir, tmpl_paths.pom);
};
module.exports.web = function () {
    return path.join(base_dir, tmpl_paths.web);
};