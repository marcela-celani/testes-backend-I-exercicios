import { exercicio1 } from '../src/exercicio1'

describe(("Exercicio 1"), () => {
    test("Deve retornar o parâmetro enviado em string no formato number", () => {
        const result1 = exercicio1("2")
        expect(result1).toBe(2)

        const result2 = exercicio1("2")
        expect(result2).toEqual(2)
    })
})