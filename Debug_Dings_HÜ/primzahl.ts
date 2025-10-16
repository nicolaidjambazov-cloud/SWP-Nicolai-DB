import { assertEquals } from "@std/assert";

function primzahl(n: number): [boolean, string] {
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

for (let i =4; i < 20; i++) {
    console.log(primzahl(i));
}

Deno.test("primzahl - Primzahlen Test", () => {
    // Teste 10 Primzahlen
    const primzahlen = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    for (const num of primzahlen) {
        const [isPrime, _message] = primzahl(num);
        assertEquals(isPrime, true, `${num} sollte als Primzahl erkannt werden`);
    }
});

Deno.test("primzahl - Nicht-Primzahlen Test", () => {
    // Teste 10 Nicht-Primzahlen
    const nichtPrimzahlen = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16];
    for (const num of nichtPrimzahlen) {
        const [isPrime, _message] = primzahl(num);
        assertEquals(isPrime, false, `${num} sollte als Nicht-Primzahl erkannt werden`);
    }
});
