export class ArgumentException extends Error {
    constructor() {
        super(...arguments);
        this.message = 'Não existe cálculo';
    }
}
//# sourceMappingURL=ArgumentException.js.map