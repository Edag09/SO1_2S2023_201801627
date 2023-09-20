package main

import (
	"fmt"
	"log"
	"os/exec"
	"time"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	err := app.Listen(":8000")

	if err != nil {
		log.Fatal("Error: ", err)
	}

	go repetFuncRam()
	time.Sleep(1000 * time.Second)
}

func repetFuncRam() {
	for range time.Tick(1 * time.Second) {
		fmt.Println("RAM")
		getModuleRAM()
		fmt.Println("CPU")
		getModuleCPU()
	}
}

func getModuleRAM() {
	ram, err := exec.Command("sh", "-c", "cat /proc/ram_201801627").Output()
	if err != nil {
		fmt.Println(err)
	}

	out := string(ram)
	fmt.Println(out)
}

func getModuleCPU() {
	cpu, err := exec.Command("sh", "-c", "cat /proc/cpu_201801627").Output()
	if err != nil {
		fmt.Println(err)
	}

	out := string(cpu)
	fmt.Println(out)
}
