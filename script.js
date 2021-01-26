const mCard=()=>{
    let name=document.getElementById('player-name').value;
    let pos=document.getElementById('player-pos').value;
    let ovr=document.getElementById('player-ovr').value;
    let flag=document.getElementById('player-flag').value;
    // let program=document.getElementById('player-program').value;

    let cardName=document.getElementById('name');
    let cardPos=document.getElementById('pos');
    let cardOvr=document.getElementById('ovr');
    let cardFlag=document.getElementById('flag');
    let cardPlayer=document.getElementById('player-img');
    
    cardName.innerHTML=name;
    cardPos.innerHTML=pos;
    cardOvr.innerHTML=ovr;
    cardFlag.src=`./flags/${flag}.png`;
    cardPlayer.src=`./players/${name}.png`;

    let container=document.getElementById('container');
    container.style.animation='';
    container.style.animation=`anim 1s linear forwards`;
};
const rCard=()=>{
    let container=document.getElementById('container');
    container.style.animation='';
};