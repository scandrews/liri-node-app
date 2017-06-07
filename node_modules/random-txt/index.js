const ascii = [].concat([], [45, 95], Array(10).fill().map((val, key) => key + 48), Array(26).fill().map((val, key) => key + 65), Array(26).fill().map((val, key) => key + 97))

module.exports = (salt = '', numbers = new Date().valueOf()) => {
	return `${salt}${numbers}`
		.match(/(1\d{1,2})|(\d{1,2})/g)
		.map(val => ascii.indexOf(val) === -1 ? ascii[Math.floor(Math.random() * ascii.length)] : val)
		.map(val => String.fromCharCode(val))
		.join('')
}
