
const list=document.getElementById('list')
const hmbrgr=document.getElementById('hamburg')
hmbrgr.onclick = () =>{
    list.classList.toggle('active')
    hmbrgr.classList.toggle('active')
}