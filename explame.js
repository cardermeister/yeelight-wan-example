const Telnet = require('telnet-rxjs').Telnet;
const yeelight_telnet = Telnet.client('forwarded_ip:forwarded_port');
yeelight_telnet.connect();

yeelight_telnet.sendln('{"id":0,"method":"toggle","params":[]}');

yeelight_telnet.data.subscribe((data) => {
	console.log(data.replace(/(\r\n|\n|\r)/gm," "))
});