//                               R E C U R S I O N

// 1. Es una función que se llama a sí mimsma.

var num = 0;

function LlamadaRecursiva() {
   num++;
   console.log(num);

   return LlamadaRecursiva();
}

LlamadaRecursiva();
