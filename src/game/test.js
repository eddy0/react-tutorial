
let orginArr = [1,1,1,1,1,1,1,1,1]
let n = Math.sqrt(orginArr.length)
let array = []


for( let i = 0; i < orginArr.length; i += n ) {
    let arr = orginArr.slice( i, n + i)
    array.push(arr)
}


const isEqual = (arr, i) => {
    return arr[i] === arr[i + 1] && arr[i] === arr[ i - 1 ]
}

let win = false
array.forEach( (arr, i) => {
    arr.forEach( (r, i) => {
        const eq = isEqual(arr, i)
        if (eq){
             win =  true
        }
    })

    const eq = isEqual(array[i], i)
    if (eq){
         win =  true
    }
})



