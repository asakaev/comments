function send() {
    var obj = {};
	obj.name = $('#name').val();
	obj.email = $('#email').val();
    obj.message = $('#message').val();
    obj.parentId = $('#parent').val();

    $.post( "process.php", obj, function( data ) {
        if(data.status == 'OK') {
            console.log(data.status);
            refreshDOM();
        } else {
            backElem();
        }

    }, "json");
}