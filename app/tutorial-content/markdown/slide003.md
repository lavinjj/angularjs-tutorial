To use the filter you can use an expression such as; {{'_FormControllerTitle_' | i18n}} if you want to inject the localized string directly into a tag or you can use the ng-bind='_FormControllerTitle_' | i18n' method to inject the localized string into an element, when AngluarJS compiles and links the DOM.

To use the directive you will provide an attribute to your HTML tags that will take the key of the localized string you want to inject into the element. Below is an example of how use the basic directive:

    <h1 data-i18n="_FormControllerTitle_">New Recipe</h2>
