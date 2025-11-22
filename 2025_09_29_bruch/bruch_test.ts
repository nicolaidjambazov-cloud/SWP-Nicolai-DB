import { assertEquals } from "@std/assert";
import { Bruch } from "./bruch.ts";

Deno.test("Addition von Brüchen", () => {
  const b1 = Bruch.fromString("1 1/2");
  const b2 = Bruch.fromString("2 3/4");
  const result = b1.addiere(b2);
  assertEquals(result.toString(), "4 1/4");
});


Deno.test("Kürzen von Brüchen", () => {
    const b1= Bruch.fromString("1 4/8");
    assertEquals(b1.toString(), "1 1/2");
});

Deno.test("ggt", () => {
    assertEquals(Bruch.ggt(8, 12), 4);
    assertEquals(Bruch.ggt(54, 24), 6);
    assertEquals(Bruch.ggt(101, 10), 1);
});

Deno.test("fromString", () => {
    const b1 = Bruch.fromString("3 2/4");
    assertEquals(b1.ganz, 3);
    assertEquals(b1.zähler, 1);
    assertEquals(b1.nenner, 2);
});

Deno.test("toString",()=>{
    const b1 = new Bruch(3,4,6)
    assertEquals(b1.toString (), "3 2/3")
});
    
