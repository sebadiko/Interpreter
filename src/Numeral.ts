export class Numeral implements IAbstractExpression {
    // Terminal Expression
    value: number
    constructor(value: string) {
        this.value = parseInt(value)
    }
    interpret(): number {
        return this.value
    }
}