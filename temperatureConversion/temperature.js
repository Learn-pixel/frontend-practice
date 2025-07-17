const t=document.getElementById("t");
const c=document.getElementById("C");
const f=document.getElementById("F");
const res=document.getElementById("result");
let tem;
function convert(){
      if(f.checked){
         tem= Number(t.value);
         tem=tem*9/5+32;
         res.textContent=tem.toFixed(1)+`ºF`;

      }
      else if(c.checked){
        tem= Number(t.value);
        tem=(tem-32)*5/9;
        res.textContent=tem.toFixed(1)+`ºC`;
      }
      else{
        res.textContent="Choose the function first";
      }
}