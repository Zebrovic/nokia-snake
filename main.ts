let x0 = 0
let x0_temp = 0
let x1_temp = 0
let x1 = 0
let x2_temp = 0
let x2 = 0
let x3_temp = 0
let x3 = 0
let x4_temp = 0
let x4 = 0
let y0_temp = 0
let y0 = 0
let y1_temp = 0
let y1 = 0
let y2_temp = 0
let y2 = 0
let y3_temp = 0
let y3 = 0
let y4_temp = 0
let y4 = 0
input.onButtonPressed(Button.A, function () {
    if (x0 <= 3) {
        x0_temp = x0
        x1_temp = x1
        x2_temp = x2
        x3_temp = x3
        x4_temp = x4
        y0_temp = y0
        y1_temp = y1
        y2_temp = y2
        y3_temp = y3
        y4_temp = y4
        x0 += 1
        x1 = x0_temp
        x2 = x1_temp
        x3 = x2_temp
        x4 = x3_temp
        y0 = y0_temp
        y1 = y0_temp
        y2 = y1_temp
        y3 = y2_temp
        y4 = y3_temp
    } else {
        x0_temp = x0
        x1_temp = x1
        x2_temp = x2
        x3_temp = x3
        x4_temp = x4
        y0_temp = y0
        y1_temp = y1
        y2_temp = y2
        y3_temp = y3
        y4_temp = y4
        x0 = 0
        x1 = x0_temp
        x2 = x1_temp
        x3 = x2_temp
        x4 = x3_temp
        y0 = y0_temp
        y1 = y0_temp
        y2 = y1_temp
        y3 = y2_temp
        y4 = y3_temp
    }
})
input.onButtonPressed(Button.B, function () {
    if (y0 <= 3) {
        x0_temp = x0
        x1_temp = x1
        x2_temp = x2
        x3_temp = x3
        x4_temp = x4
        y0_temp = y0
        y1_temp = y1
        y2_temp = y2
        y3_temp = y3
        y4_temp = y4
        y0 += 1
        x0 = x0_temp
        x1 = x0_temp
        x2 = x1_temp
        x3 = x2_temp
        x4 = x3_temp
        y1 = y0_temp
        y2 = y1_temp
        y3 = y2_temp
        y4 = y3_temp
    } else {
        x0_temp = x0
        x1_temp = x1
        x2_temp = x2
        x3_temp = x3
        x4_temp = x4
        y0_temp = y0
        y1_temp = y1
        y2_temp = y2
        y3_temp = y3
        y4_temp = y4
        y0 = 0
        x0 = x0_temp
        x1 = x0_temp
        x2 = x1_temp
        x3 = x2_temp
        x4 = x3_temp
        y1 = y0_temp
        y2 = y1_temp
        y3 = y2_temp
        y4 = y3_temp
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    basic.clearScreen()
    x0 = 0
    y0 = 0
    x1 = -1
    y1 = -1
    x2 = -1
    y2 = -1
    x3 = -1
    y3 = -1
    x4 = -1
    y4 = -1
})
basic.forever(function () {
    led.toggle(x0, y0)
    led.plotBrightness(x1, y1, 182)
    led.plotBrightness(x2, y2, 128)
    led.plotBrightness(x3, y3, 64)
    led.plotBrightness(x4, y4, 0)
})
