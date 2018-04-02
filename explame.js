const net = require('net');

const client = net.createConnection({host: "your_ip", port: 55443}, () => {
	client.write('{"id":0,"method":"toggle","params":[]}\r\n');
});

client.once('data', (data) => {
	console.log(data.toString());
	client.end();
});

client.on('end', () => {
	console.log('disconnected from server');
});