document.onscroll = function () {
    // var q = document.body.scrollTop
    var q = document.documentElement.scrollTop;
    console.log(q);
    if (q >600) {
        document.getElementById('a').classList.add('a_1')
        document.getElementById('b').classList.add('b_1')
        document.getElementById('c').classList.add('c_1')
        document.getElementById('d').classList.add('d_1')
        document.getElementById('e').classList.add('e_1')
    }
    if (q>1400||q<700){
        document.getElementById('a').classList.remove('a_1')
        document.getElementById('b').classList.remove('b_1')
        document.getElementById('c').classList.remove('c_1')
        document.getElementById('d').classList.remove('d_1')
        document.getElementById('e').classList.remove('e_1')
    }

}
