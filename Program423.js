function CountDigits(no)
{
   
   let iCount = 0;

   while(no != 0)
   {
        no = Math.floor(no / 10)
        console.log(no)
         iCount++;
        
   }
   return iCount;
}

let Value = 123
let iRet = 0;

iRet  = CountDigits(Value)

console.log("Number of digit are : "+ iRet)