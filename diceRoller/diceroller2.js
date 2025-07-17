function rollDice(){
    const numOfDice=document.getElementById("numberofdice").value;
    const res=document.getElementById("p1");
    const image=document.getElementById("dice");
    const val=[];
    const images=[];
    event.preventDefault();
    
    for(let i=0; i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        val.push(value);
        images.push(`<img src="${value}.png" alt="Dice ${value}">`)
    }
    res.textContent =`dice: ${val.join(",")}`;
    image.innerHTML=images.join(" ");
}
