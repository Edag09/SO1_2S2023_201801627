#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/mm.h>
#include <linux/init.h>
#include <linux/proc_fs.h>
#include <asm/uaccess.h>
#include <linux/seq_file.h>

const long minute = 60;
const long hour = 60 * minute;
const long day = 24 * hour;
const long mb = 1024 * 1024;

struct sysinfo ram;
char *name = "ram_201801627";

static void init_meminfo(void){
    si_meminfo(&ram);
}

MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("MODULO RAM LABORATORIO SOPES 1 P1");
MODULE_AUTHOR("Eduardo Rene Agustin Mendoza");

static int escribir_archivo(struct seq_file *archivo, void *v){
    init_meminfo();
    seq_printf(archivo, "{\"total\": %ld", (ram.totalram << PAGE_SHIFT));
    seq_printf(archivo, ",");
    seq_printf(archivo, "\"free\": %ld", (ram.freeram << PAGE_SHIFT));
    seq_printf(archivo, ",");
    seq_printf(archivo, "\"used\": %ld", ((ram.totalram - ram.freeram) << PAGE_SHIFT)+'\n');
    seq_printf(archivo, "");
    seq_printf(archivo, "}");
    return 0;
}

//Funcion que se ejecutara cada vez que se lea el archivo con el comando CAT
static int al_abrir(struct inode *inode, struct file *file)
{
    return single_open(file, escribir_archivo, NULL);
}

//Si el kernel es 5.6 o mayor se usa la estructura proc_ops
static struct proc_ops operaciones =
{
    .proc_open = al_abrir,
    .proc_read = seq_read
};

//Funcion a ejecuta al insertar el modulo en el kernel con insmod
static int _insert(void)
{
    proc_create(name, 0, NULL, &operaciones);
    printk(KERN_INFO "Eduardo Rene Agustin Mendoza - 201801627\n");
    return 0;
}

//Funcion a ejecuta al remover el modulo del kernel con rmmod
static void _remove(void)
{
    remove_proc_entry(name, NULL);
    printk(KERN_INFO "Segundo Semestre 2023 SOPES 1\n");
}

module_init(_insert);
module_exit(_remove);