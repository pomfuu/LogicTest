// 1
function duckShoot(ammo, aim, ducks) {
    //buat ambil tiap value di arraynya satu persatu
    let ducksArr = ducks.split('');
    //rule buat itung ketembaknya
    let duckShot = Math.floor(ammo * aim);

    let idx = 0
    for (let value of ducksArr) {
        //kalau di array nya ketemu 2 dan rule yang tadi > 0 otomatis dia berhasil nembak
        if (value === '2' && duckShot>0) {
            //ubah si 2 jadi X karena udah ketembak
            ducksArr[idx] = 'X'
            //selama iterasi, itungan aimnya terus berkurang 
            duckShot--
        }
        idx++
    }
    return ducksArr.join('');
}

console.log(duckShoot(4, 0.64, '|~~2~~~22~2~~22~2~~~~2~~~|'));
console.log(duckShoot(9, 0.22, '|~~~~~~~2~2~~~|'));
console.log(duckShoot(6, 0.4, '|~~~~~22~2~~~~~|'));

// 2
// Jawaban:
function isValidWalk(walk) {
    let x = 0, y = 0

    //kalau udh tau gak 10 dia otomatis return false
    if( walk.length !== 10) return false

    //ngitung steps sesuai directionnya
    for(steps of walk){
        if(steps === 'n') y++
        else if(steps === 'e') x++
        else if(steps === 'w') x--
        else if(steps === 's') y--
    }

    //buat liat dia balik ke posisi awal atau ngga
    return x === 0 && y === 0
}
   
   
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));