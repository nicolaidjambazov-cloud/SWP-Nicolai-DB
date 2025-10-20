import { assertEquals } from "@std/assert";
import { primzahl } from "./primzahl.ts";

Deno.test("primzahl - Primzahlen Test", () => {
    // Teste 10 Primzahlen
    const primzahlen = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    for (let i = 0; i < primzahlen.length; i++) {
        const num: number = primzahlen[i];
        const antwort: [boolean, string] = primzahl(num); // zb [true, "Die Zahl 7 ist eine Primzahl"]
        const wahr_oder_falsch: boolean = antwort[0];
        const _message: string = antwort[1];
        assertEquals(
            wahr_oder_falsch,
            true,
            `${num} sollte als Primzahl erkannt werden`,
        );
    }
});

Deno.test("primzahl - Nicht-Primzahlen Test", () => {
    // Teste 10 Nicht-Primzahlen
    const nichtPrimzahlen = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16];
    for (const num of nichtPrimzahlen) {
        const [isPrime, _message] = primzahl(num);
        assertEquals(
            isPrime,
            false,
            `${num} sollte als Nicht-Primzahl erkannt werden`,
        );
    }
});
