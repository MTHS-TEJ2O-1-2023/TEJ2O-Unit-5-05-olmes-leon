/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program uses the RobotBit's Neopixels
*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Square)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    myStrip.show()
    basic.pause(100)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow)) 
    myStrip.show()
    basic.pause(100)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red)) 
    myStrip.show()
    basic.pause(100)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    myStrip.show()
})
let myStrip = neopixelStrip
myStrip.clear()