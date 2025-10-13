function primzahl(n: number): [boolean, string] {
    if (n <= 1) return [false, n+ " ist zu klein"];
    const w=Math.sqrt(n);
    for(let i=2; i< w ; i++)
    {
        if(n%i==0) // also teilbar
        {
            return[false, n+ " Keine Primzahl"];
        }
        else
        {
            return[true, n+ " Ist eine Primzahl"]
        }
    }   
}

for(let i=1;i<20;i++)
{
    console.log(primzahl(i))
}