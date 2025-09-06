function Addition(no1,no2)
{
   return no1 + no2
}

function Demo()
{
   return Addition
}

let Ret = Demo()

let Ans = 0

Ans = Ret(10,11)

console.log(Ans)