let Segundos = 0
let Minutos = 0
let horas = 0
basic.forever(function () {
    Segundos += 1
    basic.pause(100)
    if (Segundos == 59) {
        Segundos = 1
    }
    if (Segundos == 59) {
        Segundos += Minutos
        Minutos += 1
    }
})
