function Maximum(Brr)
{
    let iMax = Brr[0];

    for(let i = 0;i<Brr.length;i++)
    {
       if(Brr[i] > iMax)
       {
            iMax = Brr[i]
       }
    }
    return iMax
}

Arr = [71,88,91,101,151,11]
let iRet = 0;

iRet = Maximum(Arr)

console.log("Maximum is : ",iRet)
