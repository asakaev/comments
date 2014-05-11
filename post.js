function test() {
    var postData = $(this).serializeArray();
    // console.log(postData);
    // console.log(this);
    alert(postData);
}

function send() {
	var name = $('#name').val();
	var email = $('#email').val();
    var message = $('#message').val();
	console.log('name: ' + name + ', email: ' + email + ', message: ' + message);
}