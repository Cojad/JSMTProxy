arr=["a","b","c","d","e","f"];


for(var i=0;i<10;i++)
arr.push(String(i));
for(var x=0;x<10;x++)
{
var sec="";

for(var i=0;i<32;i++)
sec+=arr[Math.floor(Math.random()*arr.length)]

console.log(sec);
}
