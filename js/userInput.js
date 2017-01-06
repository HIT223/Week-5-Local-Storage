/**
* Scripts for {Project name and url}
*
* author: {name}
* email: {email}
* website: {portfolio}
*/

/*
* TASK 1: Add user input to local storage
*
* localStorage
* https://developer.mozilla.org/en/docs/Web/API/Window/localStorage
*/

/* Wrap code in self-calling function to keep global scope clean*/
(function(){
	var storageIndex = 0;
	var input = document.getElementById('userInput');
	var output = document.getElementById('output');

	var enterBtn = document.getElementById('write');
	var readBtn = document.getElementById('read');
	var resetBtn = document.getElementById('reset');
	
	/*
	* Check for addEventListener support
	* pollyfilled browers will pass this test
	*/
	if(Element.prototype.addEventListener){
		attachEvents();
	}

	function attachEvents(){
		enterBtn.addEventListener('click', storeTextHandler);
		readBtn.addEventListener('click', readDBHandler);
		resetBtn.addEventListener('click', resetDBHandler);
	}

	function storeTextHandler(event){
		event.preventDefault(); // we shouldn't need this, but just to be safe
		var userInput = input.value;
		if(userInput){
			/* userInput isn't empty, store the value and increment our index*/
			localStorage.setItem(storageIndex++, userInput);
		}
		/* set the entry field to blank and set user focus to it*/
		input.value = '';
		input.focus();
		/* empty the output area*/
		output.textContent = '';
	}

	function readDBHandler(event){
		event.preventDefault(); // we shouldn't need this, but just to be safe
		var returnText = '';
		if(localStorage.length === 0){
			returnText = 'The database is empty';
		} else {
			/* loop through localStorage and add valeus to returnText */
			for (var i = 0; i < localStorage.length; i++) {
				returnText += i + ": " + localStorage.getItem(i) + "\n";
			}
		}
		console.log(localStorage);
		output.textContent = returnText;
	}

	function resetDBHandler(event){
		event.preventDefault(); // we shouldn't need this, but just to be safe
		localStorage.clear();
		output.textContent = 'Database cleared';
		/* reset our index */
		storageIndex = 0;
	}
})();