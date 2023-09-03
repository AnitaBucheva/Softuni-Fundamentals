function piccolo(input) {
    let obj = {};
    for (let info of input) {
      let [direction, carNumber] = info.split(", ");
      if (direction === "IN") {
        obj[carNumber] = direction;
      } else if (direction === "OUT") {
        delete obj[carNumber];
      }
    }
    let sortKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b));
    for (let keys of sortKeys) {
      console.log(keys);
    }
  }
  piccolo(['IN, CA2844AA',

  'IN, CA1234TA',
  
  'OUT, CA2844AA',
  
  'IN, CA9999TT',
  
  'IN, CA2866HI',
  
  'OUT, CA1234TA',
  
  'IN, CA2844AA',
  
  'OUT, CA2866HI',
  
  'IN, CA9876HH',
  
  'IN, CA2822UU'])