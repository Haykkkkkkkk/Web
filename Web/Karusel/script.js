let a = document.getElementById('a')
let b = document.getElementById('b')
let div = document.getElementById('div')
x = 0;
const f = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
div.style.backgroundImage = 'url(' + f[0] + ')'
div.style.backgroundSize = 'cover';
a.onclick = function () {
    x--;
    if (x < 0) {
        x = 4;
    }
div.style.backgroundImage = 'url(' + f[x] + ')'
div.style.transition='2s'


}
b.onclick = function () {
    x++;
    if (x > 4) {
        x = 0;
    }
div.style.backgroundImage = 'url(' + f[x] + ')'
div.style.transition='2s'

}