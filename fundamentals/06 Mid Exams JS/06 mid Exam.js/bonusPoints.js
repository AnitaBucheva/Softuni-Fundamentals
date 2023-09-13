function bonusPoints(inputArray) {
    let numberOfStudents = Number(inputArray.shift());
    let totalLectures = Number(inputArray.shift());
    let additionalBonus = Number(inputArray.shift());
    let maxBonus = 0;
    let winnerLectures = 0;
  
    for (let i = 0; i < inputArray.length; i++) {
      let currentStudentAttendance = Number(inputArray[i]);
      let totalBonus =
        (currentStudentAttendance / totalLectures) * (5 + additionalBonus);
      if (totalBonus > maxBonus) {
        maxBonus = totalBonus;
        winnerLectures = currentStudentAttendance;
      }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${winnerLectures} lectures.`);
  }
  bonusPoints(["5", "25", "30", "12", "19", "24", "16", "20"]);
  bonusPoints([
    "10",
    "30",
    "14",
    "8",
    "23",
    "27",
    "28",
    "15",
    "17",
    "25",
    "26",
    "5",
    "18",
  ]);