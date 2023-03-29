//import { predictVxVy } from "../ghost-of-kyiv/predictiveShot";
let predictionResult = {
    Vx: undefined,
    Vy: undefined,
}
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
    bullet.x = 0; //that we get from oure ship(and bullet). It's possition
    bullet.y = 0;
    ship.x = 600; //that we get from enemy. It's Position of enemy
    ship.y = 220;
    const shipV = -20; //that we get from enemy/ It's his speed
    time();

   function time () {
        bullet.x += vx;
        bullet.y += vy;
        ship.x += shipV;
        const isCollision = detectCollision(bullet,ship);
    /*
        ship.img.style.top = ship.y + 'px';
        ship.img.style.left = ship.x + 'px';
        bullet.img.style.top = bullet.y + 'px';
        bullet.img.style.left = bullet.x + 'px';
    */
        timmer += 1;
        
        const ugeNeDagonit = bullet.y > ship.y + ship.height || bullet.x > ship.x + ship.width;
        if (isCollision) {
            console.log('simulation end');
            console.log('In time Vx: ',Vx,'in time Vy: ',Vy);
            predictionResult.Vx = Vx ;
            predictionResult.Vy = Vy ;
            
            //console.log(result);
            //return result;
        } else {
            if (ugeNeDagonit) {
                Vx += 1;
                Vy = Math.sqrt(50*50-Vx*Vx);
                simulate(Vx,Vy);
            } else {
                time();
            }
        } 
    }
}
// prinimat bullet i ship 
function getPrediction() {
    //and simulate must get bulet and ship and Vx,Vy
    predictionResult.Vx = undefined;
    predictionResult.Vy = undefined;
    simulate(Vx,Vy);
    return predictionResult;
}
//function log(massage) {
   // console.log(massage);
//}

const res = getPrediction();
console.log('return Value of get prediction Vx:',res.Vx,'return Value of get prediction Vy:',res.Vy);
export {getPrediction};