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
    }
    moveFirst(){
        console.log(this.data2)
        this.bigCell.forEach((item, index) => {
            item.querySelectorAll('.field__smallCell').forEach((elem,i)=>{
                elem.addEventListener('click', (e) => {
                    if (countClick % 2 != 0){
                        //Добавление крестика, симуляция хода первого игрока
                        elem.insertAdjacentHTML('afterbegin', '<img src="./img/close.svg" alt=".">');
                        elem.style.pointerEvents = "none";
                        countClick++;
                        //Помощь в игре, блокирвание нажатия не на те ячейки, которые можно по правилам
                        for (let n = 0; n < this.bigCell.length; n++){
                            this.bigCell[n].style.pointerEvents = "auto";
                            this.bigCell[n].style.border = "1px solid #555555";
                        }
                        let k = 0;
                        while (k < this.bigCell.length){
                            if (k!=i){
                                this.bigCell[k].style.pointerEvents = "none";
                            }else if(k == i){
                                var el = this.bigCell[i]
                                el.style.border = "2px solid green";
                            }
                            k++;
                        }
                        //Добавление ходов в массив по индексам, для последующего сравнения
                        this.data1[index].push(parseInt(i));
                        //Сортируем массив значений для удобства и быстроты сравнивания
                        let t = 0;
                        while (t < this.data2.length){
                            this.data2[t].sort((a,b)=>a-b)
                            t++;
                        }
                        //Сравнение массивов для определения победителя
                    }else{
                        //Добавление нолика, симуляция хода второго игрока
                        elem.insertAdjacentHTML('afterbegin', '<img src="./img/circle-ring.svg" alt=".">');
                        elem.style.pointerEvents = "none";
                        countClick++;
                        //Помощь в игре, блокирвание нажатия не на те ячейки, которые можно по правилам
                        for (let n = 0; n < this.bigCell.length; n++){
                            this.bigCell[n].style.pointerEvents = "auto";
                            this.bigCell[n].style.border = "1px solid #555555";
                        }
                        let k = 0;
                        while (k < this.bigCell.length){
                            if (k!=i){
                                this.bigCell[k].style.pointerEvents = "none";
                            }else if(k == i){
                                var el = this.bigCell[i]
                                el.style.border = "2px solid green";
                            }
                            k++;
                        }
                        //Добавление ходов в массив по индексам, для последующего сравнения
                        this.data2[index].push(parseInt(i));
                        //Сортируем массив значений для удобства и быстроты сравнивания
                        let t = 0;
                        while (t < this.data2.length){
                            this.data2[t].sort((a,b)=>a-b)
                            t++;
                        }
                        //Сравнение массивов для определения победителя
                        //*Сравниваем сначла длины подмассивов, если они не одинаковые, то дальше бессмысленно
                        //*Если же они одинаковые прогоняем их итерацией одной по индексам элементов
                        //*И если какой то из элементов одинаков, то кто то выйграл
                    }
                });
            })
        })
    }
}
let pasha = new Player1();
pasha.moveFirst();

