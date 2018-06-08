var net = require('net');

var client = new net.Socket();
var name = 'Warintorn';

client.connect(1337, '127.0.0.1', function() {
    console.log('Connected');
    client.write(name);
});

client.on('data', function(data){
    var resp = data.toString().trim();
    if (resp == 'OK')
        client.write('2');
    else
        console.log(name + ": sum = " + resp);
}); 

client.on('close', function(){
    console.log('Connection Closed');
});