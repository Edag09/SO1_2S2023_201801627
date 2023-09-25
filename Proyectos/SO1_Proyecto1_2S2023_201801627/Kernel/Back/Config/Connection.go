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
	var antes, despues uint64

	file, err := os.Open("/proc/stat")

	if err != nil {
		log.Fatal(err)
	}

	scanner := bufio.NewScanner(file)
	scanner.Scan()

	fmt.Println(scanner.Text()[5:])
	info_cpu := scanner.Text()[5:]
	file.Close()

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	values := strings.Fields(info_cpu)
	time_ahora, _ := strconv.ParseUint(values[3], 10, 64)
	cuanto_se_tarda := uint64(0)

	for _, item := range values[1:] {
		value, _ := strconv.ParseUint(item, 10, 64)
		cuanto_se_tarda += value
	}

	if count > 0 {
		ahora := time_ahora - antes
		que_vamos_a_usar := cuanto_se_tarda - despues
		usamos_del_cpu := (1.0 - float64(ahora)/float64(que_vamos_a_usar)) * 100.0
		cpu += fmt.Sprintf("\"Use \": %f}", usamos_del_cpu)
	} else {
		cpu += fmt.Sprintf("\"Use \": %f}", 0.0)
	}

	antes = time_ahora
	despues = cuanto_se_tarda

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
