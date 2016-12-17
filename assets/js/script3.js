var rootref = new Firebase('https://glaring-heat-9037.firebaseio.com/');
var myDataRef = rootref.child('available2');

$('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        var number = $('#numberInput').val();
        var car = $('#carInput').val();
        var license = $('#licenseInput').val();
        myDataRef.push({name: name, message: text, number: number, car: car, license:license});
        $('#messageInput').val('');
        $('#nameInput').val('');

    }
});