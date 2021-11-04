led.enable(false)
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    lcd1602.clear()
    lcd1602.putString(
    "STOP",
    0,
    0
    )
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    lcd1602.clear()
    lcd1602.putString(
    "GO",
    0,
    0
    )
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    lcd1602.clear()
    lcd1602.putString(
    "YIELD",
    0,
    0
    )
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
