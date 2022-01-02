var avgTemp = []

avgTemp[0] = 31.9 
avgTemp[1] = 35.3
avgTemp[2] = 42
avgTemp[3] = 38
avgTemp[4] = 25.5

// console.log(avgTemp[3])

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function random_day(daysOfWeek){
	return daysOfWeek[Math.floor(Math.random()*daysOfWeek.length)];
}

console.log(random_day(daysOfWeek));