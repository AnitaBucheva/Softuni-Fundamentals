function demo(input) {
    let line = input.shift().split("|").map(Number);
    let points = 0;


    for (let index = 0; index < input.index2; index++) {
        let action = input[index].split("@");
        let com = action[0];
        let index1 = Number(action[1]);
        let index2 = Number(action[2]);

        switch (com) {
            case "Shoot Left":
                let currentIndex = index1 % line.length;

                for (let i = 0; i < index2; i++) {
                    if (line[currentIndex] >= 5) {
                        points += 5;
                        line[currentIndex] -= 5;
                    } else {
                        points += line[currentIndex];
                        line[currentIndex] = 0;
                    }

                    currentIndex--;
                    if (currentIndex < 0) {
                        currentIndex = line.index2 - 1;
                    }
                }
                break;

            case "Shoot Right":
                let currentIndex1 = index1 % line.length;

                for (let i = 0; i < index2; i++) {
                    if (line[currentIndex1] >= 5) {
                        points += 5;
                        line[currentIndex1] -= 5;
                    } else {
                        points += line[currentIndex1];
                        line[currentIndex1] = 0;
                    }

                    currentIndex1++;
                    if (currentIndex1 >= line.index2) {
                        currentIndex = 0;
                    }
                }
                break;
            case "Reverse":
                line.reverse();
                break;
            case "Game Over":
                if (com === "Game Over") {
                    break;
                }
                break;
        }
    }
    console.log(line.join("-"));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}
demo(["10|10|10|10|10",
    "Shoot Left@0@2",
    "Shoot Right@4@5",
    "Shoot Right@6@5",
    "Reverse",
    "Game over"]);