var base = 'https://' + window.location.hostname;
var path = window.location.pathname;
var splitPath = path.split('/')[1];
if (splitPath === 'stories' && window.location.hostname === 'www.facebook.com') {
    var condition = document.getElementsByClassName('k4urcfbm l9j0dhe7 taijpn5t datstx6m j83agx80 bp9cbjyn');
    var lengthVideo = condition.length - 1; 
    var check = condition[lengthVideo].innerHTML;
    var check2 = check.includes('video');
    if (check2 === true) {
        if (condition[lengthVideo].childNodes[1].firstChild.firstChild) {
            var video = condition[lengthVideo].childNodes[1].firstChild.firstChild.firstChild.currentSrc;
            window.open(video, '_blank');
            console.log(true);
        } else {
            var video = condition[1].childNodes[1].firstChild.firstChild.childNodes[0].currentSrc;
            window.open(video, '_blank');
            console.log(true)
        }
    } else if (check2 === false) {
        var stories = document.getElementsByClassName('du4w35lb k4urcfbm ke6wolob rk01pc8j j9ispegn pmk7jnqg n00je7tq arfg74bv g5ia77u1');
        var lengthImg = stories.length;
        var img = stories[length - 1].currentSrc;
        window.open(img, '_blank');
        console.log(true);
    }
}else{
    console.log(null);
    window.location.href = 'https://www.facebook.com/stories';
}
