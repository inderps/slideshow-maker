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
        this.elementDelay = 0;
        window.scrollTo(0,0);
        for(var i=0; i<SLIDEDATA[slideCount].length; i++){
           this.renderElement(SLIDEDATA[slideCount][i], slideCount + 's' + i);
        }
    },

    renderElement: function(data, id){
        $('#slide-area').append("<img class='element' id='"+id+"el' src='"+data.src+"'></img>");
        $('#slide-area').append("<img class='hand' id='"+id+"hnd' src='/images/"+data.entry+".png'></img>");

        var startTop = $(window).height();
        var startLeft = -$("#" + id + "el").width();

        $("#" + id + "el").css({left: startLeft + 'px', top: startTop + 'px'}).delay(this.elementDelay).animate({left: data.left+'px', top: data.top+'px'}, 700);
        $("#" + id + "hnd").css({left: startLeft + 'px', top: startTop + 'px'}).delay(this.elementDelay).animate({left: data.left+'px', top: data.top+'px'}, 700).animate({left: startLeft + 'px', top: startTop + 'px'}, 700);

//        this.elementDelay = this.elementDelay + 1500;
//        $("#" + id + "hnd").delay(this.elementDelay).animate({left: startLeft + 'px', top: startTop + 'px'}, 700);
        this.elementDelay = this.elementDelay + 1500;
    },

    flushSlide: function(){
        $('#slide-area').html('');
    }
}

$(document).ready(function(){
    SlideShow.init();
});