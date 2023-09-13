function formatGrade(grade) {
    let gradeDescription = "";
    if (grade < 3) {
      gradeDescription = "Fail";
    } else if (grade < 3.5) {
      gradeDescription = "Poor";
    } else if (grade < 4.5) {
      gradeDescription = "Good";
    } else if (grade < 5.5) {
      gradeDescription = "Very good";
    } else {
      gradeDescription = "Excellent";
    }
  
    if (gradeDescription === "Fail") {
      return (`${gradeDescription} (${Math.trunc(grade)})`);
    } else {
      return (`${gradeDescription} (${grade.toFixed(2)})`);
    }
  }
  formatGrade(2.99)