function f(a,b,c){
let x=0;
for(let i=0;i<a.length;i++){
if(a[i].active===true){
if(a[i].age>=18){
x=x+a[i].score;
}
}
}
if(c===true){
return x/b;
}else{
return x;
}
}