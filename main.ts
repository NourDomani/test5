let N = 0
let W = 0
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.clearScreen()
})
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        N += 3
        basic.showNumber(N)
        if (N == 9) {
            W = N * 8
            basic.pause(2000)
            basic.showString("OK")
            basic.showNumber(W)
        }
        
    }
    
    if (input.buttonIsPressed(Button.B)) {
        N += -3
        basic.showNumber(N)
    }
    
})
