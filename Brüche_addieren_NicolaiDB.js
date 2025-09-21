
class Bruch {
    constructor(ganze, zaehler, nenner) {
        this.ganze = ganze;
        this.zaehler = zaehler;
        this.nenner = nenner;
    }

    static fromString(str) {
        const [ganze, bruchteil] = str.split("_");
        const [zaehler, nenner] = bruchteil.split("/").map(Number);
        return new Bruch(Number(ganze), zaehler, nenner);
    }

    toImproper() {
        return this.ganze * this.nenner + this.zaehler;
    }

    static kgv(a, b) {
        let max = Math.max(a, b);
        while (true) {
            if (max % a === 0 && max % b === 0) return max;
            max++;
        }
    }

    add(other) {
        const kgv = Bruch.kgv(this.nenner, other.nenner);
        const mult1 = kgv / this.nenner;
        const mult2 = kgv / other.nenner;
        const z1 = this.toImproper() * mult1;
        const z2 = other.toImproper() * mult2;
        let zaehlerGesamt = z1 + z2;
        const ganze = Math.floor(zaehlerGesamt / kgv);
        zaehlerGesamt = zaehlerGesamt % kgv;
        return new Bruch(ganze, zaehlerGesamt, kgv);
    }

    toString() {
        return `${this.ganze}_${this.zaehler}/${this.nenner}`;
    }
}

const x = "8_5/13";
const y = "6_3/15";

const bruch1 = Bruch.fromString(x);
const bruch2 = Bruch.fromString(y);

const ergebnis = bruch1.add(bruch2);
console.log("Ergebnis: " + ergebnis.toString());

