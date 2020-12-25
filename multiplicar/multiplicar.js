const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        console.log('==================='.green);
        console.log(`La tabla del ${base}`.bgBlue);
        console.log('==================='.green);
        //Verificar que lo que llegue es un numero
        if (!Number(base)) {
            reject("No es un numero");
            //Parar el programa 
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i} \n `;
        }

        resolve(data);

    });
}



let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        //Verificar que lo que llegue es un numero
        if (!Number(base)) {
            reject("No es un numero");
            //Parar el programa 
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i} \n `;
        }

        fs.writeFile(`tablas/tablas-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Archivo a sido creado:` + ` tabla-${base}.txt`.blue);
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}