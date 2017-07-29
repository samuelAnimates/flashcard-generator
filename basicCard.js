/*
 This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
    `module.exports = BasicCard;`

  * The constructor should accept two arguments: `front` and `back`.

  * The constructed object should have a `front` property that contains the text on the front of the card.

  * The constructed object should have a `back` property that contains the text on the back of the card.
*/

//Accepts two arguments
var BasicCard = function(frontStr, backStr){

		//check for basic error of an empty "front" or "back" input
		if (frontStr === undefined || frontStr === null || backStr === undefined || backStr === null){
			throw "ERROR: THERE WAS A PROBLEM MAKING A NEW BASIC_CARD. ENSURE THAT 2 STRINGS WERE PASSED AS INPUT TO CREATE A BASIC CARD";
		}

		//"front"property that contains the text on the back of the card
		this.front = frontStr;
		//"back" property that contains text on the back of the card
		this.back = backStr;

};

module.exports = BasicCard;