'use strict';

var tutorial = tutorial || {};

tutorial.LogIn = function() {
    var self = this;
    self.userName = "";
    self.password = "";
};

tutorial.User = function () {
    var self = this;
    self.UserName = "";
    self.FirstName = "";
    self.LastName = "";
    self.Email = "";
    self.Location = "";
    self.Bio = "";
    self.WebSite = "";
    self.Avatar = "";
    self.Photo = "";
    self.Password = "";
    self.Ratings = 0;
    self.DateJoined = "";
    self.DateLastActivity = "";
    self.userIsAdmin = false;
};
