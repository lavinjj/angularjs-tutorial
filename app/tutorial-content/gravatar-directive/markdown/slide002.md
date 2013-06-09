Gravatar allows you to upload an image and link it to your email address, so it can be used by the various social networking and forum sites on the web.

If you head over to the Gravatar developer documentation on how to request images, http://en.gravatar.com/site/implement/images/. You’ll see that you need to create a md5 hash of the user’s email and then append that to a Url along with parameters for size, rating, and default image.

So the Url for my email address jlavin@jimlavin.net gets converted into the following image tag:


    <img src="http://www.gravatar.com/avatar/80b03752791145a3fdd027b154d7b42b?s=40&amp;r=pg&amp;d=404">

So we are going to write a directive that will take an email address and inject the resulting image tag into the page. When we are complete the directive will look something like this:

    <gravatar-image data-email="currentBrewer.Email" data-size="40" ></gravatar-image>
