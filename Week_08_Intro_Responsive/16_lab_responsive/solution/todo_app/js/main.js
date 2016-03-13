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
		var myTodos = $('#todos li:not(.done)');
		count = myTodos.length;

		$("#count").html(count);
	}

	function addNewItem(event) {
		event.preventDefault();

		// Figure out what the user typed.
		var newTodo = $("#newItem").val();

		// Append the new to do to the list on the page.
		$("#todos").append('<li><span class="item">' + newTodo + '</span><span class="remove">remove</span></li>');

		// Update my counter.
		updateCount();

		// Clear the value from the form.
		$("#newItem").val('');
	}

	function removeItem(event) {
		// Remove the thing that the user clicked on.
		$(this).parent().remove();

		// Update the counter.
		updateCount();
	}

	function switchStatus() {
		// Add the "done" class to the parent of the thing that the user clicked on.
		$(this).parent().toggleClass('done');

		// update the counter.
		updateCount();
	}

	function clearList() {
		// Remove all items from the to do list.
		$('#todos li').remove();

		// Reset the counter.
		updateCount();
	}

	function clearCompleted() {
		$('.done').remove();
	}
});