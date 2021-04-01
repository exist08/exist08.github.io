window.onload= function(){

    alert("✅Just Select The Program  \n✅and The OVR  \n✅Click on 👉🏻 MAKE CARD 👈🏻\nget the Card Animation \n\nSwitch to Dark Mode🌚 to Protect Eyes 😄");
    const switcher=document.getElementById('switcher');
    const body= document.body;

    switcher.onclick = ()=>{
        body.classList.toggle('dark');
        if(body.classList.contains('dark')){
            switcher.innerHTML="Switch to Light Mode";
        }
        else{
            switcher.innerHTML="Switch to Dark Mode";
        }
    }

    var cxzw=document.getElementsByTagName("img");
    var jds=0,counter=0;
    var g=setInterval(func,50);
    var mc = document.getElementById('mCard');
    var rc = document.getElementById('rCard');
    var lder=document.getElementById('lder');
    
    var urll=`https://cdn-p2.frzdb.net/fifamobile/images/sprites_21/conv_playeranim_TT_LEGEND_1.png`;

    mc.onclick=()=>{
        var prog=document.getElementById('player-prog').value;
        var categ=document.getElementById('player-vers').value;
        urll=`https://cdn-p2.frzdb.net/fifamobile/images/sprites_21/conv_playeranim_${prog}_${categ}.png`;
        cxzw[0].src=urll;
        lder.style.cssText='display:block';
        cxzw[0].style.cssText='display:none';
    }
    mc.ondblclick=()=>{
        alert("Button is Clicked,\n Wait a moment to get the Animation Completely Loaded😊")
    }
    function func(){
        if(counter>=60){
            counter=0;
            jds=0;
        }   
        cxzw[0].style=`left: ${jds}px`;
        jds-=256;
        counter++;
    };

    cxzw[0].addEventListener('load',()=>{
        lder.style.cssText='display:none';
        cxzw[0].style.cssText='display:block';
    })
};
