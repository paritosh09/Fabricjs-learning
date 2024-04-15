import pyautogui
import time
pyautogui.FAILSAFE = False
while True:
    time.sleep(50)
    # for i in range(0, 100):
    #     pyautogui.moveTo(0, 1*5)
    for i in range(0, 3):
        pyautogui.press('capslock')