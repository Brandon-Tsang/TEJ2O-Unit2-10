/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Feb 2026
 * This program will randomly turn on neopixels.
*/

// variables
let lightValue = 0
let neopixelStrip: neopixel.Strip = null

// setup
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// Show Neopixel
input.onButtonPressed(Button.A, function () {
    neopixelStrip.clear()
    basic.clearScreen()
    lightValue = input.lightLevel()
    if (lightValue > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    }

    if (lightValue > 104) {
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    }

    if (lightValue > 156) {
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    }

    if (lightValue > 208) {
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }
    neopixelStrip.show()
})
