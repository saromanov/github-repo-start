var repo = require('github-repositories');
var moment = require('moment');
var chalk = require('chalk');

module.exports = function(title) {
    repo(title, function(error, response) {
        response.forEach(function(repo) {
            console.log(chalk.bold.blue(repo.name), chalk.green(moment(repo.created_at).calendar()));
        });
    });
};
