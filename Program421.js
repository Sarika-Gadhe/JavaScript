function CheckPerfect(no)
{
    let iSum = 0;

    for(let i = 1;i<=(no/2);i++)
    {
       if(no % i == 0)
       {
            iSum = iSum + i;
       }
    }
    
    if(iSum == no )
    {
        return true
    }
    else
    {
        return false
    }

    // or return (iSum == no)
}

let Value = 28
let bRet = false;

bRet = CheckPerfect(Value)

if(bRet == true)
{
    console.log(Value +" is a perfect number")
}
else
{
    console.log(Value+ " is not a perfect number")
}


