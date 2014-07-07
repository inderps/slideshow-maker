var SlideShow = {
    init: function(){
        $('body').keyup(function(e){
            if(e.keyCode == 32){
                console.log('hello');
            }
        });
    }
}

$(document).ready(function(){
    SlideShow.init();
});