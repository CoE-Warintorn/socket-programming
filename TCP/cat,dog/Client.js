var net = require('net');

var client = new net.Socket();

client.connect(1337, '127.0.0.1', function(){
    console.log('Connected');
    client.write('-');
});

client.on('data', function(data){
    var resp = ("" + data).trim();
    if (resp == "OK")
        client.write('bird');
});

client.on('close', function(){
    console.log('Connection closed');
});