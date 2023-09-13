function calculateDamage(input) {
    let ratings = input.shift().split(', ').map(Number);
    let breakingPoint = Number(input.shift());
    let type = input.shift();
  
    let leftItems = ratings.slice(0, breakingPoint);
    let rightItems = ratings.slice(breakingPoint + 1);
  
    let leftDamage = calculateTotalDamage(leftItems, type);
    let rightDamage = calculateTotalDamage(rightItems, type);
  
    if (leftDamage >= rightDamage) {
      return `Left: ${leftDamage}`;
    } else {
      return `Right: ${rightDamage}`;
    }

    function calculateTotalDamage(items, type) {
        let totalDamage = 0;
      
        for (let i = 0; i < items.length; i++) {
          let currentItem = items[i];
      
          if (type === 'cheap' && currentItem < items[items.length - 1]) {
            totalDamage += currentItem;
          } else if (type === 'expensive' && currentItem >= items[items.length - 1]) {
            totalDamage += currentItem;
          }
        }
      
        return totalDamage;
      }
  }
  
  console.log(calculateDamage([1, 5, 1],
    1,
    "cheap"));
  
 