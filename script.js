window.onload = () => { 
    var cxzw=document.getElementsByTagName("img");
    var reuw=document.getElementById("zsc");
    var jds=0,counter=0;
    var g=setInterval(func,50);
    reuw.onblur = ()=>{
        cxzw[0].src=reuw.value;
    }
    
    function func(){
        if(counter>=60){
            counter=0;
            jds=0;
        }   
        cxzw[0].style=`left: ${jds}px`;
        jds-=256;
        counter++;
        console.log(counter,jds);
    };
};
