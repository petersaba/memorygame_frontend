function imagesOrder(){
    const tempArr = new Array()
    let random
    while(tempArr.length < 6){
        random = Math.floor(Math.random() * 6)
        if(tempArr.indexOf(random) == -1){
            tempArr.push(random)
        }
    }
    return tempArr
}
