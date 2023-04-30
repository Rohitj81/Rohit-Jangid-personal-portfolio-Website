var feet = document.getElementById('feet');
var inch = document.getElementById('inch');

feet.addEventListener('input', function(){
    let f = this.value;
    let i = f*12;

    inch.value = i;
});


inch.addEventListener('input', function(){
    let i = this.value;
    let f = i/12;

    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
    feet.value = f;
});


var mile = document.getElementById('mile');
var kilometer = document.getElementById('kilometer');

mile.addEventListener('input', function(){
    let m = this.value;
    let k = m*1.60;

    kilometer.value = k;
});


kilometer.addEventListener('input', function(){
    let k = this.value;
    let m = k/1.60;

    if(!Number.isInteger(m)){
        m = m.toFixed(2);
    }
    mile.value = m;
});