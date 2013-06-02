## Overview of the feature

The user story for this feature is below. Although it may seem simple, it has far reaching repercussions that will reach every part of your application.

`As a user I want the site to be displayed in my language of preference so that I can understand the site's features with ease.`

To me, this is a cross cutting concern, so there is no better way to implement this than with a service. We will use localized resource files for each language we want to support. We will also have a default resource file that will be used to fall back to the site's native language if a given user's language is not supported.

We will build an AngularJS Service that will be responsible for checking the user's browser culture and requesting the appropriate resource based on the language. If the resource file does not exist it will request the default resource file and use it.

The service will also provide a lookup method that will return a localized string for a given key from the loaded resource file.

Since the service may not be called directly by a controller or app module we'll also provide a mechanism for the service to initialize itself, load the appropriate localized resource file and prepare itself to handle requests.

We will also build both an AngularJS Filter and a couple of Directives that can be used in your HTML as a front-end to the localization service. Using these will help you keep your code clean and keep you controllers from having to know about the localization service.
