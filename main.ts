input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 80)
    basic.pause(500)
    wuKong.stopMotor(wuKong.MotorList.M1)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -100)
    } else {
        wuKong.stopMotor(wuKong.MotorList.M2)
    }
})
