package main

import (
	"Back/Config"
	"fmt"
	"os/exec"
	"time"
)

type Ram_info struct {
	Total int `json:"total"`
	Free  int `json:"free"`
	Used  int `json:"used"`
}

func main() {

	go repetFuncRam()
	time.Sleep(1000 * time.Second)
}

func repetFuncRam() {
	for range time.Tick(1 * time.Second) {
		cpu := getModuleCPU()
		ram := getModuleRAM()

		Config.Conect_db(ram, cpu)
	}
}

func getModuleRAM() string {
	ram, err := exec.Command("sh", "-c", "cat /proc/ram_201801627").Output()
	if err != nil {
		fmt.Println(err)
	}

	out := string(ram)
	return out
}

func getModuleCPU() string {
	cpu, err := exec.Command("sh", "-c", "cat /proc/cpu_201801627").Output()
	if err != nil {
		fmt.Println(err)
	}

	out := string(cpu)
	return out
}
