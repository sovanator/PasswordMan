export default generatePassword = ()=>{
    const lengthPass = 10;

    const  randomFunc =  {
         lower: this.generateLowerCase,
         upper: this.generateUpperCase,
         number: this.generateNumber,
         symbol: this.generateSymbol
    }
 

     const keyArray = ['upper','number','symbol','lower']
     let password = ''
    for (let i=0; i<lengthPass; i++){
         let keyLength = keyArray.length
         let randomKeyIndex = Math.floor(Math.random()*keyLength)
         let randomKey = keyArray[randomKeyIndex]
         let randomString = randomFunc[randomKey]
         password = password + randomString()
     
        
    }    
    

     this.setState({password})
     
     
 }

 generateLowerCase = ()=>{
     return String.fromCharCode(Math.floor(Math.random()*26)+97)
 }

 generateUpperCase = ()=>{
     return String.fromCharCode(Math.floor(Math.random()*26)+65)
 }

 generateNumber = ()=>{
     return String.fromCharCode(Math.floor(Math.random()*10)+48)
 }

 generateSymbol = ()=>{
     const symbols = '!@#$%^&*()[]{}=<>/?.,;"`~|'
     return symbols[Math.floor(Math.random()* symbols.length)]
 }