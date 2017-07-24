/*
 This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
    `module.exports = BasicCard;`

  * The constructor should accept two arguments: `front` and `back`.

  * The constructed object should have a `front` property that contains the text on the front of the card.

  * The constructed object should have a `back` property that contains the text on the back of the card.
*/

var BasicCard = function(frontStr, backStr){

		if (frontStr === undefined || frontStr === null || backStr === undefined || backStr === null){
			throw "ERROR: THERE WAS A PROBLEM MAKING A NEW BASIC_CARD. \nENSURE THAT 2 STRINGS WERE PASSED AS INPUT TO CREATE A BASIC CARD";
		}

		this.front = frontStr;
		this.back = backStr;

}

module.exports = BasicCard;