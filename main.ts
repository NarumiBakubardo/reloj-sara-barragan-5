let Segundos = 0
let Minutos = 0
let horas = 0
basic.forever(function () {
    Segundos += 1
    basic.pause(100)
    if (Segundos == 59) {
        Segundos = 1
        Minutos += 1
    }
    if (Minutos == 59) {
        Segundos = 1
        Minutos += 1
    }
    if (horas == 59) {
        Minutos += 1
        horas = 1
    }
})
