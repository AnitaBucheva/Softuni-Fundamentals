function nonDecreasingSubset(arr) {
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= newArr[newArr.length - 1]) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr.join(' '));
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
