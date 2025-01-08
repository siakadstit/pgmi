        // $(function () {
        //     $(document).scroll(function(){
        //         var $nav= $(".navbar");
        //         if($(this)() > $nav.height()) {
        //             $nav.addClass("scrolled");
        //         } else {
        //             $nav.removeClass("scrolled");
        //         }
        //     });
        // });

var count = document.getElementsByClassName("count");
var inc = [];
function intervalFunc(){
        for(let i=0; i<count.length; i++){
                inc.push(1);
                if(inc[i] != count[i].getAttribute("max-data")){
                        inc[i]++;
                }
                count[i].innerHTML = inc[i];
        }
}
var hitung = document.getElementById("hitung");
window.onscroll = function(){
        var timer = setInterval(() => {
        var topElem = hitung.offsetTop;
        var btmElem = hitung.offsetTop + hitung.clientHeight;
        var topScreen = window.pageYOffset;
        var btmScreen = window.pageYOffset + window.innerHeight;
        if(btmScreen > topElem && topScreen < btmElem){
                intervalFunc();                 
        }
        else{
                clearInterval(timer);
                for (let i = 0; i < count.length; i++){
                        count[i].innerHTML = 1;
                        inc = [];
                }

        }
}, 2000);
}