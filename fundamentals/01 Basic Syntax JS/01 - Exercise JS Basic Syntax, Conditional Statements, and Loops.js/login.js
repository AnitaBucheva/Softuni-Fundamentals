function demo(array) {
    let name = array.shift();
    let counter = 0;
   for (let index = 0; index < array.length; index++) {
    const pasword = array[index];
    if (pasword === name.split("").reverse()) {
        console.log(`User ${name} logged in.`);
        return;
      } else {
        counter++;
   }
   if (counter === 4) {
    console.log(`User ${name} blocked!`);
    return;
  } else {
    console.log("Incorrect password. Try again.");
  }
  
   }
}
demo(['Acer','login','go','let me in','recA']);