export function primzahl(n: number): [boolean, string] {
    if (n <= 1) return [false, n + " ist zu klein"];
    const w = Math.sqrt(n);
    for (let i = 2; i <= w; i++) {
        if (n % i == 0) { // also teilbar
            return [
                false,
                `Die Zahl ${n} ist keine Primzahl, weil sie durch ${i} teilbar ist`,
            ];
        }
    }
    return [true, `Die Zahl ${n} ist eine Primzahl`];
}

for (let i = 4; i < 20; i++) {
    console.log(primzahl(i));
}
