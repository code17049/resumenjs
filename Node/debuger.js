/*
Hacer Debug con el core de Node.js
https://nodejs.org/api/debugger.html
en la terminal ejecutar node debug nombre-script.js
*/

/* 'use strict'

var http = require('http')

function webServer(req, res)
{
	res.writeHead(200, {'Content-Type':'text/html'})
    let Dato1 = "Dato1"
	res.end('<h1>Hola Node.js</h1>')

	let Dato2 = "Dato2"
}
	
http
	.createServer(webServer)
	.listen(3000, 'localhost')

console.log('Servidor corriendo en http://localhost:3000/') */


/* console.count('abc');
console.clear();
console.count('abc'); */
//console.table([{ a: 1, b: 'Y', c: 3 }, { a: 'Z', b: 2 }], ['a']);

/* console.log("Hola Vivo");
process.exit();
console.log("Hola Dead"); */

console.log(process.env);

