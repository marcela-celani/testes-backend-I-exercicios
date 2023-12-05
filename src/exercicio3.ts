interface Users {
    name: string,
    age: number,
    member: boolean
}

export const exercicio3 = (str: string): boolean => {
    const lista: Users[] = [
        { name: 'Marcela', age: 30, member: true },
        { name: 'Alexandre', age: 31, member: false },
        { name: 'Astrodev', age: 28, member: true }
    ];

    const contains = lista.some(item => item.name === str);

    return contains;
};
