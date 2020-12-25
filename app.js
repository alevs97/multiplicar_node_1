//USANDO YARGS, usar el argv de la importacion 
const argv = require('./config/yargs').argv;
const colors = require('colors');

//Usando multiplicar
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//Acceder a argv para ver el comando 
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`${archivo}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`${archivo}`))
            .catch(e => console.log(e));
        break;

}

console.log(argv.base);
console.log(argv.limite);

//Para poner la base desde consola
/* let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];}
 */