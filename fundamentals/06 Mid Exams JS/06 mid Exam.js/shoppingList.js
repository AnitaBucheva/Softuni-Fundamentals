function shoppingList(inputArray) {
    let productsArray = inputArray[0].split("!");
    let index = 1;
    let command;
  
    while ((command = inputArray[index]) !== "Go Shopping!") {
      let commandArray = command.split(" ");
      let action = commandArray[0];
      let item = commandArray[1];
      let newItem = commandArray[2];
  
      switch (action) {
        case "Urgent":
          urgent(item);
          break;
        case "Unnecessary":
          unnecessary(item);
          break;
        case "Correct":
          correct(item, newItem);
          break;
        case "Rearrange":
          rearrange(item);
          break;
      }
  
      function urgent(item) {
        if (!productsArray.includes(item)) {
          productsArray.unshift(item);
        }
      }
  
      function unnecessary(item) {
        if (productsArray.includes(item)) {
          let indexToRemove = productsArray.indexOf(item);
          productsArray.splice(indexToRemove, 1);
        }
      }
  
      function correct(item, newItem) {
        if (productsArray.includes(item)) {
          let indexToRename = productsArray.indexOf(item);
          productsArray[indexToRename] = newItem;
        }
      }
  
      function rearrange(item) {
        if (productsArray.includes(item)) {
          let indexToMove = productsArray.indexOf(item);
          let itemToMove = productsArray.splice(indexToMove, 1).join('');
          productsArray.push(itemToMove);
        }
      }
  
      index++;
      }
      console.log(productsArray.join(', '))
  }
  // shoppingList([
  //   "Tomatoes!Potatoes!Bread",
  //   "Unnecessary Milk",
  //   "Urgent Tomatoes",
  //   "Go Shopping!",
  // ]);
  shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Milk",
    "Correct Tomatoes Potatoes",
    "Go Shopping!",
  ]);