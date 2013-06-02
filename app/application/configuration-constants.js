'use strict';

/**
* Defines application-wide key value pairs 
*/

Application.Constants.constant('configuration', {
    messages: {
        USER_UPDATED: 'tutorial:userUpdated',
        SLIDES_LOADED: 'tutorial:slidesLoaded',
        MARKDOWN_LOADED: 'tutorial:markdownLoaded',
        SOURCE_FILES_LOADED: 'tutorial:sourceFilesLoaded',
        SLIDE_CHANGED: 'tutorial:slideChanged',
        RUN_EXAMPLE: 'tutorial:runExample'
    },
    urls: {
        HOME: '/',
        REGISTER_USER: '/register',
        USER_PROFILE: '/myprofile',
        USER_EMAIL: '/myemail',
        USER_PASSWORD: '/mypassword',
        SLIDES_URL: 'tutorial-content/slides.json'
    },
    templates: {
        HOME: 'home/home-partial.html',
        REGISTER_USER: 'user/user-register-partial.html',
        USER_PROFILE: 'user/user-profile-partial.html',
        USER_EMAIL: 'user/user-change-email-partial.html',
        USER_PASSWORD: 'user/user-change-password-partial.html',
        ERROR: 'error/error-partial.html',
        EDITOR: 'editor/editor-partial.html',
        TUTORIAL: 'tutorial/tutorial-partial.html',
        RESULTS: 'results/results-partial.html'
    }
});