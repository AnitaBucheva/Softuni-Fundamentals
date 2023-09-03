function extractFile(path) {
    let file = path.split('\\').pop();
    let fileArr = file.split('.');
    if (fileArr.length > 2) {
        console.log(`File name: ${fileArr[0]}.${fileArr[1]}`);
        console.log(`File extension: ${fileArr.pop()}`)
    } else {
        console.log(`File name: ${fileArr[0]}`);
        console.log(`File extension: ${fileArr.pop()}`)
    }
    
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')