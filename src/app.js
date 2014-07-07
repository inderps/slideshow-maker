var SlideShow = {
    init: function(){
        var _this = this;
        this.slideCount = 0;
        this.elementDelay = 0;
        $('body').keyup(function(e){
            if(e.keyCode == 32){
                _this.slideCount = _this.slideCount + 1;
                if(_this.slideCount <= SLIDEDATA.length){
                    _this.renderSlide(_this.slideCount);
                }
            }
        });
    },

    renderSlide: function(slideCount){
        slideCount = slideCount - 1;
        this.flushSlide();
        for(var i=0; i<SLIDEDATA[slideCount].length; i++){
           this.renderElement(SLIDEDATA[slideCount][i]);
        }
    },

    renderElement: function(data){
        $('#slide-area').append("<img src='"+data.src+"' style='left: "+data.left+"px; top: "+data.top+"px;'></img>");
        var startTop = $(window).height();

        var startLeft = -$("#slide-area img").last().width();

        $("#slide-area img").last().css({left: startLeft + 'px', top: startTop + 'px'}).delay(this.elementDelay).animate({left: data.left+'px', top: data.top+'px'}, 1000);
        this.elementDelay = this.elementDelay + 2000;
    },

    flushSlide: function(){
        $('#slide-area').html('');
    }
}

$(document).ready(function(){
    SlideShow.init();
});