const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 't',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts).help()
    .command('crear', 'Crea un archivo a traves de una base y un limite', opts)
    .help()
    .argv;


module.exports = {
    argv

}