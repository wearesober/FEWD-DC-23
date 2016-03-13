$(document).ready(function() {

	// Initial Values
	var count = 0;

	// When the #new form is submitted, add the new item
	$('#new').submit(addNewItem);

	// When an item gets clicked, mark as complete or incomplete
	$('#todos').on('click', '.item', switchStatus);

	// When a remove link is clicked, remove that item
	$('#todos').on('click', '.remove', removeItem);

	// When the Clear List button is clicked, clear out the items 
	$('#clear').click(clearList);

	// When the Clear Completed button is clicked, clear out the completed items
	$('#clearCompleted').click(clearCompleted);


	// Functions

	function updateCount() {

	}

	function addNewItem(event) {

	}

	function removeItem(event) {

	}

	function switchStatus() {

	}

	function clearList() {

	}

	function clearCompleted() {

	}
});