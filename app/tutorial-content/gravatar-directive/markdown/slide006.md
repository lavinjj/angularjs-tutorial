**Follow along by writing the directive in the code panel to the right. If you get stuck, check the hint for the answer.**

Now, our directive works great but what if you want to use different sizes of the avatar at different places in your app or maybe you want to only allow PG rated avatars since you have people of all ages using your app and you don’t want to offend anyone.

We could create various version of the directive and name them gravatar-image-small or gravatar-image-pg, but that won’t do. We need to provide those values when we call the directive.

To do this we’ll need to send additional configuration elements to the directive so we can dynamically tell Gravatar what we need.

So, let’s change our directive to look for specific attributes on the element so we can specify the size, rating and default avatar.

We are going to look for three attributes in our directive; size, rating and default. Now we can do this many ways but the simplest is to use data-xxx attributes in the element and then we can read the values using attrs.xxx. This works because Angular will strip off “data-“ from any attributes as it creates the attributes instance, which makes it easy for us.

So now when we call our directive we can use the following HTML:

    <span gravatar-image data-email="email" data-size="120" data-rating="pg" data-default="404" ></span>

The code for directive now needs to includes the logic to parse the attributes and use their values or supply defaults if they are missing. We also want to move the email address we are binding to it’s own attribute data-email, which will make things easier if we decide to use the directive as an element.

The psuedo-code for the directive processing is below:

1. Parse and convert the email value passed in on the attributes instance to a md5 hash.
2. Parse the size attribute or assign a default value.
2. Parse the rating attribute or assign a default value.
2. Parse the default attribute or assign a default value.
2. Build up the image tag.
3. Remove any existing gravatar image that resides in the element.
4. Append the image tag to the element.

