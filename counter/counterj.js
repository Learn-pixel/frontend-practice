const db=document.getElementById("db");
const rb=document.getElementById("rb");
const ib=document.getElementById("ib");
const countLabel=document.getElementById("countLabel");
let count=0;
db.onclick=function(){
    count--;
    countLabel.textContent=count;
}
rb.onclick=function(){
    count=0;
    countLabel.textContent=count;
}
ib.onclick=function(){
    count++;
    countLabel.textContent=count;
}