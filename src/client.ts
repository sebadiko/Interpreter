import { Add } from "../src/Add";
import { Numeral } from "../src/Numeral";
import { Subtract } from "../src/Substract";

const SENTENCE = '5 + 4 - 3 + 7 - 2'
console.log(SENTENCE)

// Divide la oración en expresiones individuales que seran agregadas
// a un array
const TOKENS = SENTENCE.split(' ')
console.log(JSON.stringify(TOKENS))

// Creación de un array de tipo IAbstractExpression
const AST: IAbstractExpression[] = [] 
AST.push(new Add(new Numeral(TOKENS[0]), new Numeral(TOKENS[2]))) // 5 + 4
AST.push(new Subtract(AST[0], new Numeral(TOKENS[4]))) // ^ - 3
AST.push(new Add(AST[1], new Numeral(TOKENS[6]))) // ^ + 7
AST.push(new Subtract(AST[2], new Numeral(TOKENS[8]))) // ^ - 2

// Utiliza la última fila de AST como nodo raíz
const AST_ROOT = AST.pop()

// Interpreta recursivamente a través del AST completo comenzando desde la raíz
console.log((AST_ROOT as IAbstractExpression).interpret())

// Muestra la representación del AST_ROOT
console.dir(AST_ROOT, { depth: null })
