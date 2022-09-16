const images = ['java.png', 'javascript.png', 'python.ico']


function randomNumbers(){
    const randomArr = new Array()
    let random
    while(randomArr.length < 6){
        random = Math.floor(Math.random() * 6)
        if(randomArr.indexOf(random) == -1){
            randomArr.push(random)
        }
    }
    return randomArr
}

function assignOrder(){
    const imagesOrder = new Array()
    const randomOrder = randomNumbers()
    let j = 0 
    for(const i of images){
        imagesOrder[randomOrder[j++]] = i
        imagesOrder[randomOrder[j++]] = i
    }
    console.log(imagesOrder)
    return imagesOrder
}