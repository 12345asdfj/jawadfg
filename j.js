
let count = 0;

function add() {
    count ++;
    document.getElementById("heading1"). innerHTML = count;
}function resert() {
    count=0;
    document.getElementById("heading1"). innerHTML = count;
}
function incresmnt() {
    count+=2;
    document.getElementById("heading1"). innerHTML = count;
}
function table() {
let count=0;
for(let count=1; count<11; count++)
 document.getElementById("heading1"). innerHTML+= `2 x ${count} = ${count*2} <br>`;
}
