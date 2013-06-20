We've now configured the $routeProvider to pass the index of the person we want to pull from the persons service and our 'personedit-controller' knows how to retrieve the index value of the person on which to edit. What we now is a way to tell our app which person to edit.

We do this in the 'personlist-controller', displayed on the right, by using the $location service to set the Url with the correct index. If you look at the 'edit' method the 'personlist-controller' appends the selected index to the Url.

Now when the user clicks on the edit icon in the list, the 'personlist-controller' will change the Url to the edit screen with the proper index of the person to edit.