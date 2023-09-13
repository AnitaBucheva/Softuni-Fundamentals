function movingTargets(inputArray) {
    let targetsArray = inputArray[0].split(' ').map(Number);
    let index = 1;
    let command;

    while ((command = inputArray[index]) !== "End") {
        let commandArray = command.split(' ');
        let action = commandArray[0];
        let targetIndex = Number(commandArray[1]);
        let value = Number(commandArray[2]);
        
        switch (action) {
            case 'Shoot':
                shoot(targetIndex, value);
                break;
            case 'Add':
                add(targetIndex, value);
                break;
            case 'Strike':
                strike(targetIndex, value);
                break;
        }

        function shoot(targetIndex, value) {
            if ((targetIndex >= 0) && (targetIndex <= targetsArray.length-1)) {
                let targetValue = targetsArray[targetIndex];
                if ((targetValue - value) <= 0) {
                    targetsArray.splice(targetIndex, 1);
                } else {
                    targetsArray[targetIndex] = targetValue - value;
                }
            }
        }

        function add(targetIndex, value) {
            if ((targetIndex >= 0) && (targetIndex <= (targetsArray.length-1))) {
                targetsArray.splice(targetIndex, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        }

        function strike(targetIndex, value) {
            if (((targetIndex - value) >= 0) && ((targetIndex + value) <= (targetsArray.length - 1))) {
                targetsArray.splice((targetIndex - value),(value * 2 + 1));
            } else {
                console.log("Strike missed!");
            }
        }
        index++;
    }
    console.log(targetsArray.join('|'));
}
movingTargets([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
//movingTargets(["1 2 3 4 5", "Strike 0 1", "End"]);