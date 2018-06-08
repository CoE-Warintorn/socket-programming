var dgram = require("dgram");

var server = dgram.createSocket("udp4");

server.on('message', function(msg, rinfo){
    console.log("Server got: " + msg + " from " + rinfo.address + ":" + rinfo.port + ":" + rinfo.family);
});

server.bind(41234);