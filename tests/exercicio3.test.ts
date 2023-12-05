import { exercicio3 } from '../src/exercicio3'

describe(("Exercicio 3"), () => {
    test((`Deve enviar uma data no formato "aaaa/mm/dd" e retornar outra string no formato "dd/mm/aaaa"`), () => {
        const result1 = exercicio3("Astrodev")
        const result2 = exercicio3("Elisa")
        
        expect(result1).toBeTruthy()
        expect(result2).toBeFalsy()
        expect(result1).not.toBeFalsy()

        
    })
})