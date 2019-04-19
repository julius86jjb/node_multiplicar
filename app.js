const { crearArchivo, listarTabla, crearArchivoConLimite } = require('./multiplicar/multiplicar') //importamos las funciones por separado, destructuracion
    // const argv = require('./multiplicar/yargs') // importamos todo el modulo
const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((mensaje) => {
                console.log('================================================='.green)
                console.log(`===================Tabla del ${argv.base} ==================`.green)
                console.log('================================================='.green)
                console.log(`Mostrando tabla en consola:\n${mensaje}`)
            })
            .catch((err) => console.log(err));

        break;
    case 'crear':
        crearArchivo(argv.base)
            .then((archivo) => console.log(`Archivo Creado: ${archivo}`))
            .catch((err) => console.log(err));
        break;
    case 'crearConLimite':
        crearArchivoConLimite(argv.base, argv.limite)
            .then((archivo) => {
                console.log('================================================='.green)
                console.log(`===================Tabla del ${argv.base} ==================`.green)
                console.log('================================================='.green)
                console.log(`Archivo Creado: ${archivo.green}`)
            })
            .catch((err) => console.log(err));
    default:
        console.log('comando no reconocido');
}
// let base = '7';


// console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv.base);
// console.log(argv2);
// let parametro = argv[2];


// let base = parametro.split('=')[1];