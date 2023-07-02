const {readFile,writeFile} = require('fs')

readFile('./content/yo.txt', 'utf8',(err,result)=>  {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    const first = result
        readFile('./content/test/sushi.txt', 'utf8', (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log(result)
            const second = result
            writeFile(
                './content/resultNew.txt', 
                first+ "" +second,
                {flag: 'a'},
                (err, result) => {
                    if(err) {
                        console.log(err)
                        return
                    }
                    console.log(result)
                }
            )
        })
})