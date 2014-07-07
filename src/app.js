var SlideShow = {
    init: function(){
        var _this = this;
        this.slideCount = 0;
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
        for(var i=0; i<SLIDEDATA[slideCount].length; i++){
           this.renderElement(SLIDEDATA[slideCount][i]);
        }
    },

    renderElement: function(data){
        console.log(data);
    }
}

$(document).ready(function(){
    SlideShow.init();
});