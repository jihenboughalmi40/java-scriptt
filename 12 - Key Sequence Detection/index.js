let secretCode = [74,79,89,67,69]
let input = []
window.addEventListener('keyup', (e)=> {
	console.log(e.keyCode)
	input.push(e.keyCode)
	input.splice(-secretCode.length - 1, input.length - secretCode.length)
	// input.splice(0, input.length - secretCode.length)
	// if (input.length > secretCode.length) {
	//   input.splice(0,1)
	// }
	if(input.join() === secretCode.join()) {
		console.log('DING DING!')
		cornify_add()
	}
	console.log(input)
	console.log(secretCode)
})