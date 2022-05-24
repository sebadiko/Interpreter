import { Add } from "../src/Add";
import { Numeral } from "../src/Numeral";
import { Subtract } from "../src/Substract";

test('Devolver valor 11', () => {
    const SENTENCE = '5 + 4 - 3 + 7 - 2'

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

    expect((AST_ROOT as IAbstractExpression).interpret()).toBe(11);
});

test('Devolver valor 16', () => {
    const SENTENCE = '8 - 3 + 7 - 1 + 5'


    const TOKENS = SENTENCE.split(' ')
    console.log(JSON.stringify(TOKENS))

    // Creación de un array de tipo IAbstractExpression
    const AST: IAbstractExpression[] = []
    AST.push(new Subtract(new Numeral(TOKENS[0]), new Numeral(TOKENS[2]))) // 8 - 3
    AST.push(new Add(AST[0], new Numeral(TOKENS[4]))) // ^ + 7
    AST.push(new Subtract(AST[1], new Numeral(TOKENS[6]))) // ^ - 1
    AST.push(new Add(AST[2], new Numeral(TOKENS[8]))) // ^ + 5

    // Utiliza la última fila de AST como nodo raíz
    const AST_ROOT = AST.pop()

    expect((AST_ROOT as IAbstractExpression).interpret()).toBe(16);
});

test('Devolver valor 39', () => {
    const SENTENCE = '100 - 40 - 7 - 2 - 12'


    const TOKENS = SENTENCE.split(' ')
    //console.log(JSON.stringify(TOKENS))

    // Creación de un array de tipo IAbstractExpression
    const AST: IAbstractExpression[] = []
    AST.push(new Subtract(new Numeral(TOKENS[0]), new Numeral(TOKENS[2]))) // 100 - 40
    AST.push(new Subtract(AST[0], new Numeral(TOKENS[4]))) // ^ -7
    AST.push(new Subtract(AST[1], new Numeral(TOKENS[6]))) // ^ - 2
    AST.push(new Subtract(AST[2], new Numeral(TOKENS[8]))) // ^ - 12

    // Utiliza la última fila de AST como nodo raíz
    const AST_ROOT = AST.pop()

    expect((AST_ROOT as IAbstractExpression).interpret()).toBe(39);
});