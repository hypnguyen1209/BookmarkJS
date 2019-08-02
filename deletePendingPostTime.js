var time = prompt('TimeStamp')
var tuChoi = document.getElementsByClassName('_idm');
var length = tuChoi.length;
var x = 4;
for (var i = 0; i < length; i++) {
    if (document.getElementsByClassName('_5ptz timestamp livetimestamp')[i].dataset.utime < parseInt(time)) {
        tuChoi[i].childNodes[0].childNodes[1].click();
    }
}
setTimeout(()=>{
    var confirm = document.querySelectorAll('button._42ft._4jy0.layerConfirm.uiOverlayButton._4jy3._4jy1.selected._51sy');
    var lengthConfirm = confirm.length;
    for (j = 0; j < lengthConfirm; j++) {
        confirm[j].click();
    }
}
, 6000);
