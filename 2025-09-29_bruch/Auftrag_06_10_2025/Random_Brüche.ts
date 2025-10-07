import{Bruch} from "./bruch.ts";
import { assertEquals } from "@std/assert";

let ausgangszähler;
let i;
let e;

for(e=0;e<15;e++)
{
while(i==0)
{
const ganz=Math.ceil(Math.random()*10);
const zeahler=Math.ceil(Math.random()*100);
const nenner=Math.ceil(Math.random()*100)
const zeahler2=Math.ceil(Math.random()*100);
    if(zeahler>zeahler2)
    {
        ausgangszähler=zeahler-zeahler2;
        console.log("Anfangsbruch: "+ganz+" "+zeahler+"/"+nenner);
        console.log("Subtrahierter Bruch: "+ganz+" "+ausgangszähler+"/"+nenner);
        i=1;
    }
}

};











