function addOrRemove(input) {
  let num = 0;
  result = [];
  for (let i = 0; i < input.length; i++) {
    num++;
    let action = input[i];
    if (action === "add") {
      result.push(num);
    } else {
      result.pop();
    }
  }
  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}
addOrRemove(["add", "add", "add", "add"]);
addOrRemove(["add", "add", "remove", "add", "add"]);
addOrRemove(['remove', 'remove', 'remove']);
