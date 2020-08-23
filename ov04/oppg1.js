let tall = 13

let testTall = new Promise(
    (resolve, reject) => {
        if (tall > 10){
            let message = `Tallet ${tall} er større en 10`
            resolve(message)
        } else {
            let grunn = new Error(`Tallet ${tall} er mindre enn 10`)
            reject(grunn)
        }
    }
)

async function sjekkTall() {
    try {
        console.log(await testTall)
    } catch(error) {
        console.log(error.message)
    }
}

sjekkTall()