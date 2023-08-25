let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')

const PLUS =()=>{
let plus=parseInt (num1.value)+ parseInt(num2.value)
document.getElementById('result').innerHTML=plus
}

const minus =()=>{
    let minus=parseInt (num1.value)- parseInt(num2.value)
    document.getElementById('result').innerHTML=minus
    }

    const multiplication =()=>{
        let multiplication=parseInt (num1.value)* parseInt(num2.value)
        document.getElementById('result').innerHTML=multiplication
        }

        const devision =()=>{
            let devision=parseInt (num1.value)/ parseInt(num2.value)
            document.getElementById('result').innerHTML=devision
            }

            const percent =()=>{
                let percent=parseInt (num1.value)%parseInt(num2.value)
                document.getElementById('result').innerHTML=percent
                }
                const delet =()=>{
                    let delet=parseInt (num1.value) * parseInt(num2.value)
                    document.getElementById('result').innerHTML=0
                    }

                    const bracket =()=>{
                        let bracket=parseInt (num1.value) * parseInt(num2.value)
                        document.getElementById('result').innerHTML=bracket
                        }
        
                const whole =()=>{
                    let whole=parseInt (num1.value). parseInt(num2.value)
                    document.getElementById('result').innerHTML=whole
                    }