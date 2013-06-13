**Follow along by writing the directive in the code panel to the right. If you get stuck, check the hint for the answer.**

To finish our first version of the directive let’s create the Url and append an image tag to the element so it will retrieve the Gravatar image.

The pseudo code we need to follow is below:

1. Convert the email value passed in on the attributes instance to a md5 hash.
2. Build up the image tag.
3. Remove any existing gravatar image that resides in the element.
4. Append the image tag to the element.

A service, *md5-service.js*, has been provided that has the code to create an md5 hash, you will need to add it to the dependencies of the module and the directive as well as pass the service instance into your directive's creation function. The namespace of the service is *md5* and the service has the same name. You will need to call the *createHash* method to get the md5 hash and pass in the email address in all lowercase letters.

A sample app has been setup in *app.js* that will load up your directive and the md5 service so you can test your directive by clicking on the *Run* button.