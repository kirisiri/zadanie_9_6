var list = document.getElementById('js-list');
var add = document.getElementById('js-addElem');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	list.appendChild(element);
	var newList = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + (newList.length - 1);
} );
