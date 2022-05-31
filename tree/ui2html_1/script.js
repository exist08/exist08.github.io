
// random color generator
const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

const names = ['Abbey McVane','Hanson Figura','Gregory Jakab','Nollie Phipson','Christian Paulin','Sidnee	Blodg','Port Golds','Penrod	Aimer','Jennifer Fiske','Cheri	Duddell','Sena	Pimblett','Nissy Plumm']

const songsContainer = document.getElementById('songs-cont')

names.map(name=>{
    songsContainer.innerHTML+=`
    <div class="song">
        <div class="song-img" style="background:${random_hex_color_code()}"></div>
        <h4>${name}</h4>
        <span>${name}</span>
    </div>
    `
})