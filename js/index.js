$(function () {
    $('.field').css({"display": "none"})
})

var choose = $('.var');
var chooseFirst = [choose[0], choose[1]]
var chooseSecond = [choose[2], choose[3]]

function check(arr){
    arr.forEach(item => {
        if (item.classList.contains('choose')){
            item.classList.remove('choose')
            return true;
        }
    })
}
chooseFirst.forEach((item) => {
    item.addEventListener('click', () => {
        if (!check(chooseFirst)){
            item.classList.toggle('choose')
        }
    })
})

chooseSecond.forEach((item) => {
    item.addEventListener('click', () => {
        if (!check(chooseSecond)){
            item.classList.toggle('choose')
        }
    })
})

document.querySelector('.start__button').addEventListener('click', () => {
    var firstName = document.querySelector('.start__firstPlayer').value;
    var secondName = document.querySelector('.start__secondPlayer').value;
    if (firstName.length < 2){
        $('.start__firstPlayer-Error').html("Колчество символов менее 2")
        return;
    }else if (secondName.length < 2){
        $('.start__secondPlayer-Error').html("Колчество символов менее 2")
        return;
    }
    $('.field').css({"display": "block"});
    $('.start').css({"display": "none"});
    $('.field__cross-name').html(`${firstName}`);
    $('.field__circle-name').html(`${secondName}`);
    let pasha = new Player1();
    pasha.moveFirst();
})


var countClick = 1;
class Player1 {
    constructor() {
        this.bigCell = Array.from(document.querySelectorAll('.field__Bigcell'));
        this.win = [
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
                    ];
        this.data1 = [[],[],[],[],[],[],[],[],[]];
        this.data2 = [[],[],[],[],[],[],[],[],[]];
        this.winIndex = [];
    }
    comp(index,data) {
        for (var i in this.win){
            var win = true;
            for (var j in this.win[i]){
                var id = this.win[i][j];
                var ind  = data[index].indexOf(id);

                if (ind == -1){
                    win = false;
                }
            }
            if (win) return true;
        }
        return  false
    }
    help(i){
        for (let n = 0; n < this.bigCell.length; n++){
            this.bigCell[n].style.pointerEvents = "auto";
            this.bigCell[n].style.border = "1px solid #555555";
        }
        let k = 0;
        while (k < this.bigCell.length) {
            if (k != i) {
                this.bigCell[k].style.pointerEvents = "none";
            } else if (k == i) {
                var el = this.bigCell[i]
                el.style.border = "2px solid green";
            }
            k++;
        }
    }
    moveFirst(){
        this.bigCell.forEach((item, index) => {
            item.querySelectorAll('.field__smallCell').forEach((elem,i)=>{
                elem.addEventListener('click', (e) => {
                    if (countClick % 2 != 0){
                        elem.insertAdjacentHTML('afterbegin', '<img src="../img/close.svg" alt=".">');
                        elem.style.pointerEvents = "none";
                        countClick++;
                        this.help(i)
                        this.data1[index].push(parseInt(i));
                        let t = 0;
                        while (t < this.data2.length){
                            this.data2[t].sort((a,b)=>a-b)
                            t++;
                        }
                        if (this.comp(index,this.data1)){
                            this.bigCell[index].style.pointerEvents = "none";
                            this.winIndex.push(index);
                            this.bigCell.splice(index,1);
                        }
                    }else{
                        elem.insertAdjacentHTML('afterbegin', '<img src="../img/circle-ring.svg" alt=".">');
                        elem.style.pointerEvents = "none";
                        countClick++;
                        this.help(i)
                        this.data2[index].push(parseInt(i));
                        let t = 0;
                        while (t < this.data2.length){
                            this.data2[t].sort((a,b)=>a-b)
                            t++;
                        }
                        if (this.comp(index,this.data2)) {
                            this.bigCell[index].style.pointerEvents = "none";
                            this.winIndex.push(index);
                            this.bigCell.splice(index,1);
                        }
                    }
                });
            })
        })
    }
}
