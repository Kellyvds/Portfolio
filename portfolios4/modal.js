var modal_uxu_1 = window.document.getElementById("modal_uxu_1");
var btn_uxu_1 = window.document.getElementById("btn_modal_uxu_1");
var span_uxu_1 = window.document.getElementsByClassName("close_uxu_1")[0];

btn_uxu_1.onclick = function () {
    modal_uxu_1.style.display = "block";
}

span_uxu_1.onclick = function () {
    modal_uxu_1.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal_uxu_1) {
        modal_uxu_1.style.display = "none";
    }
}

var modal_uxu_2 = window.document.getElementById("modal_uxu_2");
var btn_uxu_2 = window.document.getElementById("btn_modal_uxu_2");
var span_uxu_2 = window.document.getElementsByClassName("close_uxu_2")[0];

btn_uxu_2.onclick = function () {
    modal_uxu_2.style.display = "block";
}

span_uxu_2.onclick = function () {
    modal_uxu_2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal_uxu_2) {
        modal_uxu_2.style.display = "none";
    }
}

var modal_sco_1 = window.document.getElementById("modal_sco_1");
var btn_sco_1 = window.document.getElementById("btn_modal_sco_1");
var span_sco_1 = window.document.getElementsByClassName("close_sco_1")[0];

btn_sco_1.onclick = function () {
    modal_uxu_1.style.display = "block";
}

span_sco_1.onclick = function () {
    modal_sco_1.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal_sco_1) {
        modal_sco_1.style.display = "none";
    }
}