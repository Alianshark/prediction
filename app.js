Vx = 0;
Vy = 50;
let ship = {
    x: 0,
    y: 0,
    width: 300,
    height: 200,
    img: document.querySelector('#ship'),
    }
let bulet = {
    x: 0,
    y: 0,
    width: 20,
    height: 10,
    img: document.querySelector("#bullet"),
}



while(Vx<=50) {
    Vx += 10;
   // Vx^2 + Vy^2 = 50^2;
   // Vy^2 = Vx^2
    Vy = Math.sqrt(50*50-Vx*Vx);
    if (popadaet(Vx, Vy)) {
        alert('podhodit!!');
        alert('vx: '+ Vx);
        alert('vy: '+ Vy);
    }

}

function isCollision() {
    
}

function popadaet(vx,vy) {
    let time = 0;
    let bulletX = 0;
    let droneX = 0;
    const droneV = 20;
    while (time<20) {
        bulletX += vx;
        bulletY += vy;
        droneX += droneV;
        if (isCollision(bulletX,bulletY,droneX,droneY))
        {return true}
        time += 1;
        return false;
        
    }
}
ship.img.style.top = ship.y + 'px';
ship.img.style.left = ship.x + 'px';
bullet.img.style.top = bullet.y + 'px';
bullet.img. style.top = bullet.x + 'px';