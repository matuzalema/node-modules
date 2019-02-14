var os = require('os');

function getTime(){
	var seconds = (os.uptime()/1000).toFixed();
	var minutes = (seconds/60).toFixed();
	var hours = (minutes/60).toFixed();
	seconds = (seconds%60);

	return hours + ' hours ' + minutes + ' minutes and ' + seconds + ' seconds';
}

exports.print = getTime;