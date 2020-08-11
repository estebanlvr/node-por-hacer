//requireds
//const fs = require('fs'); //Proyecto propio de node
//const fs = require('express'); //paquete que se instala,no son nativos
//const fs = require('./fs'); // punto pleca archivos propios

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite).then(datos => console.log(`Resultado: ${datos}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

//let base = '3';

//let argv2 = process.argv;


//let parametro = argv[2];
//let base = parametro.split('=')[1];




//console.log(multiplicar);

//este es la linea que ocupo luego

/*crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
*/

/*let data = '';


for (let i = 0; i <= 10; i++) {
    data += `${base} * ${i} = ${base*i}\n`;
}


//const data = new Uint8Array(Buffer.from('Hello Node.js'));

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});*/