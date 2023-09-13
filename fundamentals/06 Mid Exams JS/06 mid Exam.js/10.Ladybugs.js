function ladyBug(input) {
	//initial state of field;
	let field = new Array(input[0]).fill(0);
	let initialPositions = input[1].split(' ');
	for (let index = 0; index < initialPositions.length; index++) {
		let position = initialPositions[index];
		if (position >= 0 && position < field.length) {
			field[position] = 1;
		}
	}

	//time for movement;
	for (let index = 2; index < input.length; index++) {
		let commandArray = input[index].split(' ');
		let currentPosition = Number(commandArray[0]);
		let flyLength = Number(commandArray[2]);
		let direction = commandArray[1];

		if (direction === 'left') {
			if (field[currentPosition] === 1) {
				field[currentPosition] = 0;
				currentPosition -= flyLength;
				while (field[currentPosition] === 1) {
					currentPosition -= flyLength;
					if (currentPosition < 0) {
						break;
					}
				}
				if (currentPosition >= 0) {
					field[currentPosition] = 1;
				}
			}
		} else {
			if (field[currentPosition] === 1) {
				field[currentPosition] = 0;
				currentPosition += flyLength;
				while (field[currentPosition] === 1) {
					currentPosition += flyLength;
					if (currentPosition > (field.length - 1)) {
						break;
					}
				}
				if (currentPosition < field.length) {
					field[currentPosition] = 1;
				}
			}
		}


	}
	console.log(field.join(' '))

}