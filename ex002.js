// 2 - Transforme uma array de dados em uma string com a concatenação
// de todos estes números.
const stringConcat = arr => arr.reduce((acc, cur) => acc + cur.toString(), '');

console.log(stringConcat([1,2,3])); // "123"