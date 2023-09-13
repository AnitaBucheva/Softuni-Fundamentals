function solve(input) {
    let carType = input.shift().split(">>");
   
    let totalTaxes = 0;
   
    for (i = 0; i < carType.length; i++) {
      let car = carType[i];
   
      let currentCar = car.split(" ");
   
      let type = currentCar[0];
      let yearsOfUse = Number(currentCar[1]);
      let kmOfUse = Number(currentCar[2]);
   
      if (type === "family") {
        let totalCarTypeTax =
          Math.floor(kmOfUse / 3000) * 12 + (50 - yearsOfUse * 5);
        totalTaxes += totalCarTypeTax;
   
        console.log(
          `A ${type} car will pay ${totalCarTypeTax.toFixed(2)} euros in taxes.`
        );
      } else if (type === "heavyDuty") {
        let totalCarTypeTax =
          Math.floor(kmOfUse / 9000) * 14 + (80 - yearsOfUse * 8);
        totalTaxes += totalCarTypeTax;
        console.log(
          `A ${type} car will pay ${totalCarTypeTax.toFixed(2)} euros in taxes.`
        );
      } else if (type === "sports") {
        let totalCarTypeTax =
          Math.floor(kmOfUse / 2000) * 18 + (100 - yearsOfUse * 9);
        totalTaxes += totalCarTypeTax;
        console.log(
          `A ${type} car will pay ${totalCarTypeTax.toFixed(2)} euros in taxes.`
        );
      } else {
        console.log("Invalid car type.");
      }
    }
    console.log(
      `The National Revenue Agency will collect ${totalTaxes.toFixed(
        2
      )} euros in taxes.`
    );
  }
  solve(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);
  solve(["family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012",]);