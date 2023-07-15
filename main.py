N = 0
W = 0

def on_button_pressed_ab():
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_forever():
    global N, W
    if input.button_is_pressed(Button.A):
        N += 3
        basic.show_number(N)
        if N == 9:
            W = N * 8
            basic.pause(2000)
            basic.show_string("OK")
            basic.show_number(W)
    if input.button_is_pressed(Button.B):
        N += -3
        basic.show_number(N)
basic.forever(on_forever)
