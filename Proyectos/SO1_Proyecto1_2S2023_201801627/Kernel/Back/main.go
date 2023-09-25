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
		fmt.Println("CPU")
		cpu := getModuleCPU()

		fmt.Println("RAM")
		ram := getModuleRAM()

		Config.Conect_db(ram, cpu)
	}
}

func getModuleRAM() string {
	cmd := exec.Command("sh", "-c", "cat /proc/ram_201801627")
	output, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Println(err)
	}

	out := string(output)
	return out
}

func getModuleCPU() string {
	cmd := exec.Command("sh", "-c", "cat /proc/cpu_201801627")
	output, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Println(err)
	}

	out := string(output)
	return out
}
