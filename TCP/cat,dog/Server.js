var net = require('net');

var server = net.createServer();
server.listen(1337, '127.0.0.1');

var animal = {}

server.on('connection', function(sock){
    var op;
    console.log('Connected');
    sock.on('data', function(data){
        var resp = ("" + data).trim();
        if(data == '+' || data == '-'){
            op = data;
            sock.write('OK')
        }
        else {
            if(animal[data] === undefined)
                animal[data] = 0;
            animal[data] = (op == '+')? animal[data]+1: animal[data]-1;
            console.log(animal);
            sock.destroy();
        }
    });
});