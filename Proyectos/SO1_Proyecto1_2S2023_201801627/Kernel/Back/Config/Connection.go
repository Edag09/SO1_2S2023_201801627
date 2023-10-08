package Config

import (
	"bufio"
	"database/sql"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

func Conect_db(ram, cpu string) {
	count := 0
	var prevIdleTime, prevTotalTime uint64

	file, err := os.Open("/proc/stat")

	if err != nil {
		log.Fatal(err)
	}

	scanner := bufio.NewScanner(file)
	scanner.Scan()

	fmt.Println(scanner.Text()[5:])
	cpuLine := scanner.Text()[5:]
	file.Close()

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	values := strings.Fields(cpuLine)
	idleTime, _ := strconv.ParseUint(values[3], 10, 64)
	totalTime := uint64(0)

	for _, item := range values[1:] {
		value, _ := strconv.ParseUint(item, 10, 64)
		totalTime += value
	}

	if count > 0 {
		deltaIdleTime := idleTime - prevIdleTime
		deltaTotalTime := totalTime - prevTotalTime
		cpuUsage := (1.0 - float64(deltaIdleTime)/float64(deltaTotalTime)) * 100.0
		cpu += fmt.Sprintf("\"cpu_usage\": %f}", cpuUsage)
	} else {
		cpu += fmt.Sprintf("\"cpu_usage\": %f}", 0.0)
	}

	prevIdleTime = idleTime
	prevTotalTime = totalTime

	count++

	database, err := sql.Open("mysql", "root:090799@tcp(localhost:33064)/modules?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		panic(err.Error())
	}
	defer database.Close()

	inster := fmt.Sprintf("INSERT INTO cpu_modules(cpu) VALUES ('%s')", cpu)
	_, err = database.Exec(inster)

	if err != nil {
		panic(err.Error())
	}

	inster = fmt.Sprintf("INSERT INTO ram_modules(ram) VALUES ('%s')", ram)
	_, err = database.Exec(inster)

	if err != nil {
		panic(err.Error())
	}
}
