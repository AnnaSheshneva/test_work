let inp = document.querySelector('#inp_calc');

function number(num){
  inp.value += num;
}

function culc (){
    try{
        let res = eval(inp.value);
        inp.value = res;
    } catch{
        inp.value = 'Error'
    }
}
document.querySelector('.equally').onclick = culc;

function delet(){
   inp.value = '';
}
document.querySelector('.del').onclick =  delet;

let elem = document.querySelector('.element');
let btn = document.querySelector('.button_one');

btn.onclick = function() {
  elem.classList.toggle('openn');
};
