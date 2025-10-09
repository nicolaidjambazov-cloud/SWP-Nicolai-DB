import{Bruch} from "./bruch.ts";
import { assertEquals } from "@std/assert";

let e=0

for(e=0;e<15;e++)
{
    const Zähler_ergebnis=Math.ceil(Math.random()*100);
    const zeahler=Math.ceil(Math.random()*100);
    const nenner=Math.ceil(Math.random()*100)
    const erweiterer=Math.ceil(Math.random()*10);
    const zeahler2=Zähler_ergebnis-zeahler;
    
    const erweiterterNenner=nenner*erweiterer;
    const erweiterterZähler1=zeahler*erweiterer;
    const erweiterterZähler2=zeahler2*erweiterer;

    const b1 = new Bruch(0,erweiterterZähler1,erweiterterNenner);
    const b2= new Bruch(0,erweiterterZähler2,erweiterterNenner);
    const b3= new Bruch(0,Zähler_ergebnis,nenner);

    Deno.test(`Bruch Addition Random Test`, () => {
        assertEquals(b1.addiere(b2).toString(), b3.toString());
    });    
   
   
};











