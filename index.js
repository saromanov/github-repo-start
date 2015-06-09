var repo = require('github-repositories');
var moment = require('moment');
var chalk = require('chalk');

module.exports = function(title, opts) {
    opts = opts || {};
    repo(title, function(error, response) {
        repos = [];
        response.forEach(function(repo) {
            repos.push([repo.name, repo.created_at]);
        });

        result = repos.sort(function(item1, item2){
            if (moment(item1[1]).isBefore(item2[1])) {
                return 1;
            } else {
                return -1;
            }
        });

        result.forEach(function(repo){
            console.log(chalk.bold.green(repo[0]), chalk.bold.blue(moment(repo[1]).calendar()));
        });
    });
};
