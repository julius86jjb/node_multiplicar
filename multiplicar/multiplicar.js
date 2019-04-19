const fs = require('fs'); // hay 3 tipos de required 1-Paquete propio de node, 2-paquetes que no son nativos de node, 3- required de archivos creados por nosotros ('./')
var colors = require('colors');


let crearArchivo = (base) => { //otra opcion : module.exports.crearArchivo.....
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La Base no es un número');
            return; // despues del reject se sigue ejecutando codigo por eso ponemos este return
        }
        let data = '';

        for (let i = 1; i < 10; i++) {
            data += `${base}* ${i} = ${i * base}\n`;
        }

        fs.writeFile(`files/tabla-${base}.txt`, data, (err) => {
            if (err)
                rejec(err)
            else
                resolve(`tabla-${base}.txt`);
            console.log('The file has been saved!');
        });
    })
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La Base no es un número');
            return;
        }
        if (!Number(limite)) {
            reject('El limite no es un número');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}* ${i} = ${i * base}\n`;
        }


        resolve(data);
    });
}

let crearArchivoConLimite = (base, limite) => { //otra opcion : module.exports.crearArchivo.....
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La Base no es un número');
            return; // despues del reject se sigue ejecutando codigo por eso ponemos este return
        }
        if (!Number(limite)) {
            reject('El limite no es un número');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}* ${i} = ${i * base}\n`;
        }

        fs.writeFile(`files/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err)
                rejec(err)
            else
                resolve(`tabla-${base}-limite-${limite}.txt`);
            console.log('The file has been saved!');
        });
    })
}


// CON ASYNC


// let crearArchivo = async(base) => {


//     if (!Number(base)) {
//         throw new Error('La Base no es un número')

//     }
//     let data = '';

//     for (let i = 1; i < 10; i++) {
//         data += `${base}* ${i} = ${i * base}\n`;
//     }

//     fs.writeFile(`files/tabla-${base}.txt`, data, (err) => {
//         if (err)
//             throw new Error(err)

//     });
//     return `tabla-${base}.txt`;
// }

module.exports = {
    crearArchivo,
    listarTabla,
    crearArchivoConLimite

}