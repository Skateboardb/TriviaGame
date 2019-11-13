// for numbers 1-100
// if [n]/3 = integer fizz
// if [n]/5 = integer buzz
// if [n]/3 && [n]/5 = integer fizz buzz
// else log numbers

// for numbers 1-100
// if n%3 = 0 log fizz
// if n%5 = 0 log buzz
// if n%3 && n%5 = 0 log fizz buzz
// else log numbers

for (var i = 1; i < 101; i++) {
	if (i % 3 && i % 5 === 0) {
		console.log("fizz buzz ");
	} else if (i % 3 === 0) {
		console.log("fizz");
	} else if (i % 5 === 0) {
		console.log("buzz");
	} else {
		console.log([i]);
	}
}
