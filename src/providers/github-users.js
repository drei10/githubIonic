"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GithubUsers = (function () {
    function GithubUsers(http) {
        this.http = http;
        this.githubApiUrl = 'https://api.github.com';
        console.log('Hello GithubUsers Provider');
    }
    // Load all github users
    GithubUsers.prototype.load = function () {
        return this.http.get(this.githubApiUrl + "/users")
            .map(function (res) { return res.json(); });
    };
    GithubUsers = __decorate([
        core_1.Injectable()
    ], GithubUsers);
    return GithubUsers;
}());
exports.GithubUsers = GithubUsers;
//# sourceMappingURL=github-users.js.map