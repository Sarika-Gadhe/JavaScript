function SumDigits(no)
{
   let iSum = 0;
   let iDigit = 0

   while(no != 0)
   {
         iDigit = no % 10
          iSum = iSum + iDigit
         no = Math.floor(no / 10)
        
        
   }
   return iSum;
}

let Value = 123
let iRet = 0;

iRet  = SumDigits(Value)

console.log("Summation of Digit is : "+ iRet)