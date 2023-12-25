function fun(min, max) {
    return Math.floor( Math.random() *(max + 1 - min) + min)
}


for (let i = 0; i < 5; i++) {
   let a = fun(1, 100)
   let b = fun(1, 100)

//    Правельный ответ
    let c = a + b

//    Ответ пользователя 
    let d = +prompt(a + " + " + b + " = ?")

    if (d === c) {
        console.log(a + " + " + b + " = " + d +" Правильный ответ: " + c + " крутой!")
    }else{
        console.log(a + " + " + b + " = " + d +" Правильный ответ: " + c + " не крутой!")
    }
}

