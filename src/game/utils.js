

// import path from 'path'
// import fs from 'fs'

const isDiaEqual = (arr, i) => {
    if (arr[i+1] == undefined || arr[i-1] == undefined ){
        return false
    }
    return arr[i][i] !== null && arr[i][i] === arr[i + 1][i + 1] && arr[i][i] === arr[i - 1][i - 1]
}
const isEqual = (arr, i) => {

    return arr[i] !== null && arr[i] === arr[i + 1] && arr[i] === arr[ i - 1 ]
}
const rule = (orginArr) => {
    let win = false
    let n = Math.sqrt(orginArr.length)
    let array = []
    // split array
    for( let i = 0; i < orginArr.length; i += n ) {
        let arr = orginArr.slice( i, n + i)
        array.push(arr)
    }

    // vertical equal
    for (let i = 0; i < array.length; i++ ) {
        for (let j = 0; j < array[i].length; j++ ) {
            if (array[i + 2] !== undefined && array[i + 1] !== undefined ){
                if (array[i][j] !==null &&  array[i][j] ==array[i + 1][j] &&  array[i][j] ==array[i + 2][j] ){
                    win =  true
                }
            }
        }
    }

    // horizon equal
    array.forEach( (arr, i) => {
        arr.forEach( (r, i) => {
            const eq = isEqual(arr, i)
            if (eq){
                win =  true
            }
        })
        // dia equal
        const eq = isDiaEqual(array, i)
        if (eq){
            win =  true
        }

    })
    return win
}




const dbpath = () => {
    const p = path.join(__dirname, 'db.json')
    return p
}


const ensureExist = (path) => {
    const exist = fs.existsSync(path)
    if (!exist){
        let data = `[ ${  Array(9).fill('null') } ]`
        fs.writeFileSync(path, data)
    }
}


const loadFile = () => {
    const path = dbpath()
    const options ={
        encoding: 'utf8',
    }
    ensureExist(path)
    const file = fs.readFileSync(path, options )
    const data = JSON.parse(file)
    return data
}

const save = (data) => {
    const path = dbpath()
    data = JSON.stringify(data)
    fs.writeFileSync(path, data)
}


export  {rule}
