// const argv = require('yargs')
//     .command('listar',
//         'Imprime en consola la tabla de multiplicar', {
//             base: {
//                 demand: true, //obligatorio
//                 alias: 'b'
//             },
//             limite: {
//                 alias: 'l',
//                 default: 10 // valor por defecto
//             }
//         }
//     )
//     .command('crearConLimite',
//         'Crear archivo con base y limite', {
//             base: {
//                 demand: true, //obligatorio
//                 alias: 'b'
//             },
//             limite: {
//                 alias: 'l',
//                 default: 10 // valor por defecto
//             }
//         }
//     )
//     .help()
//     .argv;

const options = {
    base: {
        demand: true, //obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 // valor por defecto
    }
}

const argv = require('yargs')
    .command('listar',
        'Imprime en consola la tabla de multiplicar', options)
    .command('crearConLimite',
        'Crear archivo con base y limite', options)
    .help()
    .argv;

module.exports = {
    argv
}