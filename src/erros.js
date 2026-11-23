// Erros personalizados do Delivery Baiano

export class ErroValidacao extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "ErroValidacao";
    }
}

export class ErroNaoEncontrado extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.name = "ErroNaoEncontrado";
    }
}