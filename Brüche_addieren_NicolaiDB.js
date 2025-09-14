x= "8_5/13"
y= "6_3/15"

function string_to_bruch(bruch)
{

    bruch_trennung1=bruch.split("_")
    ganze_zahl=Number (bruch_trennung1[0])
    bruch_trennung2=bruch_trennung1[1].split("/")
    zähler=Number (bruch_trennung2[0])
    nenner=Number (bruch_trennung2[1])
    return[ganze_zahl, zähler, nenner]
    
}

bruch1=string_to_bruch(x)
bruch2=string_to_bruch(y)


let kgv;
let x1;
let x2;
let b = 0;

for(let i = 1; b == 0; i++) 
{
    x1 = i % bruch1[2];
    x2 = i % bruch2[2];
    if(x1 == 0 && x2 == 0) 
    {
        b = 1;
        kgv = i;
        
    }
}


function multiplikator (bruch,  )
{
    let mult=kgv / bruch[2]
    return mult;
}


function Zählermultiplizieren(bruch, multi)
{
    let NeuZähler = bruch[1] * multi
    return NeuZähler;
}

NeuZähler1 = Zählermultiplizieren(bruch1, multiplikator(bruch1, kgv))
NeuZähler2 = Zählermultiplizieren(bruch2, multiplikator(bruch2, kgv))



let Zählergesamt = NeuZähler1 + NeuZähler2


function ganzezahlenaddieren(bruch1, bruch2, Zählergesamt, kgv)
{
    if(Zählergesamt >= kgv)
    {
        ZählergesamtA=Math.floor(Zählergesamt / kgv)
        Zählergesamt=Zählergesamt % kgv
        ganzezahl=bruch1[0] + bruch2[0] + ZählergesamtA 
        return[ganzezahl, Zählergesamt]
    }
    else if(Zählergesamt < kgv)
    {
        ganzezahl=bruch1[0] + bruch2[0]
        return[ganzezahl, Zählergesamt]
    }
}

ganzezahl=ganzezahlenaddieren(bruch1, bruch2, Zählergesamt, kgv)

console.log("Ergebnis: "+ganzezahl[0]+"_"+ganzezahl[1]+"/"+kgv)

