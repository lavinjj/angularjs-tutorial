One of the core features of AngularJS is the ability to extend the HTML Syntax with directives. Directives allow you to componentize segments of HTML into a single tag that can be re-used throughout your AngularJS app. So instead of repeating the following HTML all over your code:

    <div class="row-fluid" ng-repeat="adjunct in adjuncts | filter:search | orderBy:'name'">
        <div class="span1">{{adjunct.Name}}</div>
        <div class="span1">{{adjunct.Type}}</div>
        <div class="span1">{{adjunct.Use}}</div>
        <div class="span1">{{adjunct.Time}}</div>
        <div class="span1">{{adjunct.Amount}}</div>
        <div class="span1">{{adjunct.UseFor}}</div>
        <div class="span1">{{adjunct.Notes}}</div>
        <div><a href="#/editadjunct/{{adjunct._id.$oid}}"><i class="icon-pencil"></i></a></div>
    </div>

With a directive you can use the following HTML:


    <div data-display-adjunct class="row-fluid" ng-repeat="adjunct in adjuncts | filter:search | orderBy:'name'">


Now anywhere where you would use the above HTML, you can use the directive instead and be consistent across you entire site. This also saves you time when changes are required. If the amount of data that needs to be displayed changes you only need to update the directive and your done. You don’t have to hunt around your HTML files looking for every occurrence to change.

Directives allow you to not only specify what data from your app to bind to, but they can also handle the work of transforming the data into different formats, removing that responsibility from your controller, helping you to keep to the single responsibility principle.

If you apply this simple principle on bigger scales, directives can be used to build rich components that bind to your app’s data and reduce the amount of HTML you need to create across your entire site.

In this lesson I’m going to show you how to write a simple directive that generates an image tag with a user’s avatar from the Gravatar site, http://en.gravatar.com/