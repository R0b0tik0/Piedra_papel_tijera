input.onButtonPressed(Button.A, function () {
    if (Item_humano == 0) {
        basic.showIcon(IconNames.SmallSquare)
        Item_humano = 1
        Turno = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Item_humano == 0) {
        basic.showIcon(IconNames.Scissors)
        Item_humano = 0
        Turno = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Item_humano == 0) {
        basic.showIcon(IconNames.Diamond)
        Item_humano = 2
        Turno = 1
    }
})
let Turno = 0
let Item_humano = 0
let Item_cpu = randint(1, 3)
basic.forever(function () {
    if (Turno == 1) {
        basic.pause(1000)
        if (Item_cpu == 1) {
            basic.showIcon(IconNames.SmallSquare)
            if (Item_humano == 1) {
                basic.showIcon(IconNames.Meh)
            } else if (Item_humano == 2) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        } else if (Item_cpu == 2) {
            basic.showIcon(IconNames.Diamond)
            if (Item_humano == 1) {
                basic.showIcon(IconNames.Sad)
            } else if (Item_humano == 2) {
                basic.showIcon(IconNames.Meh)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            basic.showIcon(IconNames.Scissors)
            if (Item_humano == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (Item_humano == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Meh)
            }
        }
        basic.pause(1500)
        control.reset()
    }
})
