function test() {
    var postData = $(this).serializeArray();
    // console.log(postData);
    // console.log(this);
    alert(postData);
}

function send() {
	var data = $('#mydata').val();
	var data1 = $('#mydata1').val();
	console.log('data1: ' + data + ', data2: ' + data1);
}