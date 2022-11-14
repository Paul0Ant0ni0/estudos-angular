export interface Produto {
    id?: number // com o '?' o campo da interface se torna opcional
    nome: string
    preco: string
    descricao: string
    foto: string
}