import json

from random import randrange
from locust import HttpUser, task, between

debug = False

def printDebug(msg):
    if debug:
        print(msg)

class Reader():
    def __init__(self) -> None:
        self.arrays = []
    
    