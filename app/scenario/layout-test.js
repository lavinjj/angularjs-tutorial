'use strict'

describe('The layout', function(){ 

    var i, views = [ 
        'tutorial-content/e2e-testing-intro/app2/index.html',
        'tutorial-content/e2e-testing-intro/app2/index.html#/item_1',
        'tutorial-content/e2e-testing-intro/app2/index.html#/item_2'
    ];

    for(i=0; i < views.length; i++)   {

        (function(view){

            it('should display a menu in the "' + view + '" view', function() {

                browser().navigateTo(view);
                expect(element('ul.menu').count()).toBe(1);

            });

        })(views[i])
    }
});