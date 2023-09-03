function replaceRepeatign(text) {
    let charsArr = text.split('');
    let result = '';
    for (let index = 0; index < charsArr.length; index++){
        if (charsArr[index] !== charsArr[index + 1]) {
            result += charsArr[index];
        }
    }
    console.log(result)
}
replaceRepeatign('asasddsqqeqwdadac');