// coordinate of a first shot (must be sqrt(VX^2+VY^2)=50);
let Vx = 0; 
// coordinate of a first shot (must be sqrt(VX^2+VY^2)=50);
let Vy = Math.sqrt(50*50-Vx*Vx); 
//enemy or enemies
let ship = {  
    x: 0,
    y: 0,
    width: 250,
    height: 150,
    img: document.querySelector('#ship'),
} 

//position and coordinate of of ship and start bullet position
let bullet = {   
    x: 0,
    y: 0,
    width: 20,
    height: 10,
    img: document.querySelector('#bullet'),
}

/* 

while(Vx<=50) {
    Vx += 10;
   // Vx^2 + Vy^2 = 50^2;
   // Vy^2 = Vx^2
    Vy = Math.sqrt(50*50-Vx*Vx);
    if (simulate(Vx, Vy)) {
        alert('podhodit!!');
        alert('vx: '+ Vx);
        alert('vy: '+ Vy);
    }
}
 */
//looking for collision, if find return true
function detectCollision(bullet,ship) {
   if (
      bullet.x + bullet.width > ship.x && 
      bullet.x < ship.x + ship.width &&
      bullet.y + bullet.height > ship.y && 
      bullet.y < ship.y + ship.height 
    ) {
        return true;
    }
   
}

//simulation of bullet fly 
function simulate(vx,vy) {
    let timmer = 0;
    bullet.x = 0;
    bullet.y = 0;
    ship.x = 400;
    ship.y = 0;
    const shipV = 20;
    time();
   function time () {
        bullet.x += vx;
        bullet.y += vy;
        ship.x += shipV;
        const isCollision = detectCollision(bullet,ship)
        if (isCollision) {
            console.log('est popadanie');
        }

        ship.img.style.top = ship.y + 'px';
        ship.img.style.left = ship.x + 'px';
        bullet.img.style.top = bullet.y + 'px';
        bullet.img.style.left = bullet.x + 'px';

        timmer += 1;
        
        const ugeNeDagonit = bullet.y > ship.y + ship.height || bullet.x > ship.x + ship.width;
        if (isCollision) {
            console.log('simulation end');
            console.log('Vx: ',Vx,'Vy: ',Vy)
        } else {
            if (ugeNeDagonit) {
                Vx += 1;
                
                Vy = Math.sqrt(50*50-Vx*Vx);
                console.log('Vx: ', Vx)
                console.log('Vy: ', Vy)
                simulate(Vx,Vy);
            } else {
                time();
            }
        } 
    }
}

simulate(Vx,Vy);

