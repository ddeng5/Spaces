var base = 'https://glaring-heat-9037.firebaseio.com/';
var attach11 = ('#hostMessageInput').val(); // address

var rootref1 = new Firebase(base);
    var myDataRef1 = rootref1.child(attach11);
console.log('hello')

$('#hostDetailInput').keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $('#hostNameInput').val();
        var text = $('#hostMessageInput').val();
        var number = $('#hostNumberInput').val();
        var price = $('#hostPriceInput').val();
        var detail = $('#hostDetailInput').val();
        myDataRef1.push({name: name, message: text, number: number, car: price, detail:detail});
        $('#hostDetailInput').val('');


    }
});

