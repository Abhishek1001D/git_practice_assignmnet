//Prime Problem:

let num=5;
let count=0;
for (let i=2; i<=num; i++)
{
     if(num%i==0)
     count++;
} 
     if(count==1)
{
     console.log("Prime Number")
}    
       else
{     
     console.log("Not A Prime Number");
}
