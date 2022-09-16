const images = ['java.png', 'javascript.png', 'python.ico']
let imagesOrder = assignOrder()
const revealedImages = new Array()
const revealedIds = new Array()


// generating numbers randomly between 0 and 6 but making an array of length 6 having only unique values
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

// assign the images to the random values inside the generated array so they can be shuffled after each play
function assignOrder(){
    const imagesOrder = new Array()
    const randomOrder = randomNumbers()
    let j = 0 
    for(const i of images){
        imagesOrder[randomOrder[j++]] = i
        imagesOrder[randomOrder[j++]] = i
    }
    return imagesOrder
}

// checking for needed conditions before revealing any image
function reveal(event){
    if (revealedImages.length < 2){
        let clickedElement = event.target
        if(clickedElement.nodeName == "DIV"){
            clickedElement = clickedElement.firstChild
        }
        const imageId = parseInt(clickedElement.id.slice(-1))
        clickedElement.src = "images/" + imagesOrder[imageId]
        revealedImages.push(imagesOrder[imageId])
        revealedIds.push(imageId)
        if(revealedImages.length == 2){
            setTimeout(checkResult, 500)
        }
    }
}

// restoring question logo if choices are wrong and making divs hidden if its right
function checkResult(){
    if (revealedImages[0] == revealedImages[1]){
        document.getElementById("div" + revealedIds[0]).style.visibility = "hidden"
        document.getElementById("div" + revealedIds[1]).style.visibility = "hidden"
    }else{
        document.getElementById("img" + revealedIds[0]).src = "images/question.png"
        document.getElementById("img" + revealedIds[1]).src = "images/question.png"
    }
    resetArrays()
}

// resetting the arrays while keeping them as const
function resetArrays(){
    revealedImages.splice(0, 2)
    revealedIds.splice(0, 2)
}