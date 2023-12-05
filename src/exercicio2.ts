export const exercicio2 = (dataInput: string): string => {

    const partes = dataInput.split('/');
    const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;

    return dataFormatada
}