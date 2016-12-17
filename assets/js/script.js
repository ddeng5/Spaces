var rootref = new Firebase('https://glaring-heat-9037.firebaseio.com/');
    var myDataRef = rootref.child('available2');
    $('name').keypress(function (e) {
        if (e.keyCode == 13) {
            var name = $('#name').val();
            var place = $('#place').val();
            var plate = $('#plate').val();
            var  make= $('#make').val();
            var number = $('#number').val();
            var primarykey = myDataRef.key();
            myDataRef.push({name: name, place: place,plate: plate,make: make, number:       number, id: primarykey});
            $('name').val('');
        }
    });

    myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text, message.id);
    });
    function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
    };
