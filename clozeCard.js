/*
* This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
    `module.exports = ClozeCard;`

  * The constructor should accept two arguments: `text` and `cloze`.

  * The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.

  * The constructed object should have a `partial` property that contains _only_ the partial text.

  * The constructed object should have a `fullText` property that contains _only_ the full text.

  * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.

  * Use prototypes to attach these methods, wherever possible.
*/


var ClozeCard = function(text, clozeStr){

		if (text === undefined || text === null || clozeStr === undefined || clozeStr === null){
			throw "ERROR: THERE WAS A PROBLEM MAKING A NEW CLOZE_CARD. ENSURE THAT 2 STRINGS WERE PASSED AS INPUT TO CREATE A CLOZE CARD";
		}

    else if (text.indexOf(clozeStr) === -1){
      throw "ERROR: UNABLE TO GENERATE A CLOZE-DELETION. ENSURE THAT YOU HAVE ENTERED A PARTIAL TEXT THAT APPEARS IN YOUR FULL TEXT EXACTLY (INCLUDING CAPITALIZATION AND PUNCTUATION)";
    }

    else{
		  this.cloze = clozeStr;
		  this.fullText = text;
    }
}

ClozeCard.prototype.partial = function(){

  this.fullText.replace(clozeStr, "______");

}; 

module.exports = ClozeCard;