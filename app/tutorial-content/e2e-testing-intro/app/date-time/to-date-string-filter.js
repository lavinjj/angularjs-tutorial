'use strict'

/**
* @description
*		converts a unix epoc timestamp to a human readable date time.
*
*	@param {number} timeStamp The date time in ms since midnight 1970.
*	@return {Date} The formatted date.
*/

Application.Filters.filter('toDateString', function() {
	return function(timeStamp) {
		var date;
		
		date = new Date(parseInt(timeStamp));
		
		return date.toLocaleDateString();
	}
});