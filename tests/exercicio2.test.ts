import { exercicio2 } from '../src/exercicio2'

describe(("Exercicio 2"), () => {
    test((`Deve enviar uma data no formato "aaaa/mm/dd" e retornar outra string no formato "dd/mm/aaaa"`), () => {
        const result1 = exercicio2("2023/12/04")
        expect(result1).toBe("04/12/2023")

        const result2 = exercicio2("2023/11/17")
        expect(result2).toEqual("17/11/2023")
    })
})