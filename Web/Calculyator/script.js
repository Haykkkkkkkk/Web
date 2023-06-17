let off = document.getElementById('off')
let calc_1 = document.getElementById('calc_1')
let calc = document.getElementById('calc')
let input = document.getElementById('input')
let knopka = document.getElementById('knopka')
knopka.onclick = function () {
    knopka.style.display = 'none';
    calc_1.style.display = 'block';
    calc.style.display = 'block';
    input.style.display = 'block';
}
off.onclick = function () {
    calc_1.style.display = 'none';
    calc.style.display = 'none';
    input.style.display = 'none';
    knopka.style.display = 'block';
}



function f(val) {
    let l = input.value.slice(-1);
    if (l == '+' || l == '-' || l == '*' || l == '/') {
        if (val == '+' || val == '-' || val == '*' || val == '/') {
            let gg = input.value.slice(0, -1);
            input.value = gg;
            input.value += val;
        } else {
            input.value += val;
        }
    } else {
        input.value += val;
    }
}
function e() {
    input.value = eval(input.value);
}
function del() {
    input.value = '';
}
function del_1() {
    let x = input.value.slice(0, -1);
    input.value = x;

}