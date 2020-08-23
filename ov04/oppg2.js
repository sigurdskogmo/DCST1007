let arr = ['small', 78, 'and', 'Big', 'ONES']
//let arr = 42

let capitalizeArray = new Promise(
    (resolve, reject) => {
        if (arr.constructor === Array){
            try {
                let message = ""
                let capsArr = arr.map(e => e.toUpperCase())
                resolve(capsArr)      
            } catch(error) {
                reject( new Error("er ikke tekst"))
            }
          
        } else {
            let grunn = new Error(`Variabelen ${arr} er ikke en array`)
            reject(grunn)
        }
    }
)

async function sortere(capsArr) {
    return new Promise(
        (resolve, reject) => {
            let sortedArr = capsArr.sort()
            let message = "";
            for (let i = 0; i < sortedArr.length; i++) {
                message += `${sortedArr[i]} `
            }
            resolve(message)
        }
    )
}

async function lagStoreBokstaver() {
    try{
        let capsArr = await capitalizeArray
        let beskjed = await sortere(capsArr)
        console.log(beskjed)
    } catch(error) {
        console.log(error.message)
    }
}
lagStoreBokstaver()