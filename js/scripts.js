var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	list.appendChild(element);
	var newList = document.getElementsByTagName('li');
	element.innerHTML = 'item' + (newList.length - 1);
	console.log(list);
} );
