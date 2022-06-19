input.onButtonPressed(Button.A, function () {
    images.createBigImage(`
        . . . . # # # . . .
        . . . # # . # # . .
        . . . # . # . # . .
        . . . # # . # # . .
        . . . . # # # . . .
        `).showImage(3)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . # . #
        # # . # #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # . # #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Fan!")
})
