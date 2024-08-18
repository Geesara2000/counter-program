let count=0;
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLable = document.getElementById("countLable");



decreaseBtn.onclick=function(){

  count--;
  countLable.textContent=count;

}
increaseBtn.onclick=function(){

  count++;
  countLable.textContent=count;

}
resetBtn.onclick=function(){

  count=0;
  countLable.textContent=count;

}
