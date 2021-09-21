var countClick = 1;
class Player1 {
    constructor() {
        this.bigCell = Array.from(document.querySelectorAll('.field__Bigcell'));
        this.arr = [...this.bigCell];
    }
    moveFirst(){
        this.bigCell.forEach((item, index) => {
            item.querySelectorAll('.field__smallCell').forEach((elem,i)=>{
                elem.addEventListener('click', (e) => {
                    if (countClick % 2 != 0){
                        elem.insertAdjacentHTML('afterbegin', '<img src="./img/close.svg" alt=".">');
                        elem.style.pointerEvents = "none";
                        countClick++;
                        var el = this.bigCell[i]
                        el.style.border = "2px solid green";
                        this.arr.splice(i,1);
                        this.arr.forEach(el=>{
                            el.style.pointerEvents = "none";
                        })
                    }else{
                        elem.insertAdjacentHTML('afterbegin', '<img src="./img/circle-ring.svg" alt=".">');
                        elem.style.pointerEvents = "none";
                        countClick++;
                        el = this.bigCell[i]
                        el.style.border = "2px solid green";
                        this.arr.splice(i,1);
                        this.arr.forEach(el=>{
                            el.style.pointerEvents = "none";
                        })
                    }
                });
            })
        })
    }
}
let pasha = new Player1();
pasha.moveFirst();

