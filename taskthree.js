let resultArray = []
function divisibleTask(num) {
    let arr = []
    let outputArr = []
    for (i = 1; i <= num; i++)
    {
        arr.push(i)
    }
arr.forEach(i => {
    if (i % 2 === 0 && !( i % 3 === 0 || i % 5 === 0)) {
        i = 'yu'
    }
    else if (i % 3 === 0 && !( i % 5 === 0 || i % 2 === 0)) {
        i = 'gi'
    }
    else if (i % 5 === 0 && !( i % 2 === 0 || i % 3 === 0)) {
        i = 'oh'
    }
    else if (i % (2 * 3) === 0  && !(i % (3 * 5) === 0 || i % (2 * 5) === 0)) {
        i = 'yu-gi'
    } else if (i % (3 * 5) === 0  && !(i % (5 * 2) === 0 || i % (2 * 3) === 0)) {
        i = 'gi-oh'
    } else if (i % (2 * 5) === 0  && !(i % (3 * 5) === 0 || i % (2 * 3) === 0)) {
        i = 'yu-oh'
    }
    else if (i % (2 * 3* 5) === 0) {
        i = 'yu-gi-oh'   
    }
    outputArr.push(i)
})
    resultArray = [...outputArr]
    console.log(resultArray)
    return resultArray;
};
divisibleTask(100)
divisibleTask(30)