Finally let's talk a bit about how we'll store the localized data for the service. Since our service will be requesting the resource files once the app in bootstrapped, we need a place to store them. To keep the overall size of the service small I thought it was best not to embed the strings in the service class, but put them in directory off the root of the site named i18n. This follows the same pattern you see with several libraries where the localized strings are in a directory co-located with the module.

The files have a specific file naming format; resources-locale_xx-yy.js where xx is the language identifier and yy is the international country code. So resources-locale_en-US.js would mean the file is for English, United States and resources-locale_es_es.js would mean the file is for Spanish, Spain.

There is one more file naming convention we'll use and that is for the default resource file, it will be named resources-locale_default.js.

The format of the language resource file is simple. Since we only really need a few pieces of information, I've kept it to key, value and description. This way if you need to hand the file off to someone for translation they'll have a general description of what the text is for.

This format will also help other developers on the project. When they are getting ready to add a new string resource they'll be able to search the file to see if maybe there is already a string they can use. This comes in real handy for buttons, table headers, etc.

Below is an example of the file format:
