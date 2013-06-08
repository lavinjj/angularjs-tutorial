'use strict'

describe('The layout', function(){ 

    var i, views = [ 
        '/index.html',
        '/index.html#/item_1',
        '/index.html#/item_2'
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