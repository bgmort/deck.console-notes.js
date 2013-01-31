(function($, deck, undefined) {
    if(!console || !console.log){
        return;
    }
    $(document).bind('deck.change', function(e, from, to) {
        var slide = $[deck]('getSlide', to);
        if(slide.length){
            slide = slide[0];

            for (var node, i=0; node=slide.childNodes[i]; i++){
                if (node.nodeType == 8){//comment
                    if (node.nodeValue.match(/^\s*notes?:?([\w\W]*)$/i)){
                        console.log(RegExp.$1);
                    }
                }
            }
        }
    });
})(jQuery, 'deck');
