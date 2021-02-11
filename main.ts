input.onButtonPressed(Button.A, function () {
    counter += 1
    for (let index = 0; index < counter; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
        basic.showNumber(counter)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    counter += -1
})
let counter = 0
counter = 0
basic.forever(function () {
	
})
