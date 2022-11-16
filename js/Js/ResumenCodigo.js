// Atajos 
// Ctrl + /             -> Comentar //
// Shift + Alt + a      -> Comentar /**/
/* **********     Curso JavaScript: 10. Funciones - #jonmircha     ********** */

    /*
    Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.
    Las funciones en JavaScript son objetos, un tipo especial de objetos:
    Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
    */

    //Declaración de función
    function estoEsUnaFuncion() {
       console.log("Uno");
       console.log("Dos");
       console.log("Tres");
     }

    //Invocación de función
    estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion();

    function unaFuncionQueDevuelveValor() {
      console.log("Uno");
      return 19;
      console.log("Dos");
      console.log("Tres");
      return "La función ha retornado una Cadena de texto";
    } 

    let valorDeFuncion = unaFuncionQueDevuelveValor();

    console.log(valorDeFuncion);

    function saludar(nombre = "Desconocido", edad = 0) {
       console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
     }

    saludar("kEnAi", 7);
    saludar();

    //Funciones declaradas VS funciones expresadas

    funcionDeclarada();

    function funcionDeclarada() {
      console.log("Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
    } 

    funcionDeclarada();

    //funcionExpresada();
    //función anónima
    const funcionExpresada = function () {
      console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
    }

    funcionExpresada();

    /* **********     Curso JavaScript: 11. Arreglos (Arrays) - #jonmircha     ********** */
        const a = [];
        const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
        // console.log(a);
        // console.log(b);
        // console.log(b.length);
        // console.log(b[2]);
        // console.log(b[0]);
        // console.log(b[3]);

        console.log(b[3][2]);
        console.log(b[3][3][0]);
        const c = Array.of("X", "Y", "Z", 9, 8, 7);
        console.log(c);
        const d = Array(100).fill(false);
        console.log(d);
        const e = new Array();
        console.log(e);
        const f = new Array(1, 2, 3, true, false);
        console.log(f);
        const colores = ["Rojo", "Verde", "Azul"];
        console.log(colores);
        colores.push("Negro");
        console.log(colores);
        colores.pop();
        console.log(colores);
        colores.forEach(function (el, index) {
        //console.log(`<li id="${index}">${el}</li>`);
        console.log(`${index} ... ${el}`);
        });