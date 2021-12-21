btn.addEventListener("click",f_out);

function f_out (){
    q = (Number(q2.value) - Number(q1.value))/Number(q1.value) / (Number(p2.value) - Number(p1.value))/Number(p1.value);
    res.innerHTML = q;
}