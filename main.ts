input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Giraffe)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . # . #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . # . # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # #
        # . # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . # # . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # . # #
        # # # # #
        . . . . .
        `)
})
basic.showString("2D19 Adley")
