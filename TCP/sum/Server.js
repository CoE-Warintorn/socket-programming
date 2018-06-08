var net = require('net');

var server = net.createServer();
server.listen(1337, '127.0.0.1');

var sum = {}; 

server.on('connection', function(sock){
    var c = 1;
    var name;
    sock.on('data', function(data){
        var resp = data.toString().trim();
        if(c) {
            name = resp;
            if (sum[name] === undefined)
                sum[name] = 0;
            c = 0;
            sock.write('OK');
        }
        else {
            sum[name] += parseInt(resp);
            sock.write(sum[name] +"");
            sock.destroy();
        }
    })
});