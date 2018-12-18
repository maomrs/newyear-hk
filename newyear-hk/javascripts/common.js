    /*
    *   轮转图封装
    */
    function Carouse(ul, leftBtn, rightBtn){
        var cloneObj = {};
        var clone3_1 = $(ul).html();
        window.clickNum = 0;
        cloneObj.fir = clone3_1;
        $(ul).prepend(cloneObj.fir);
        $(ul).append(cloneObj.fir);
        var n = 3;

        var page3_item1_width = $(ul).children('li').width();
        var page3_item1_length = $(ul).children('li').length;
        var page3_carouse1_width = page3_item1_width * page3_item1_length;
        cloneObj.translate = -page3_carouse1_width/n + 'px';
        
        cloneObj.length1 = page3_item1_length;
        $(ul).width( page3_carouse1_width );
        $(ul).css({ 'left': cloneObj.translate });
        
        $(leftBtn).click(function(){
            $(leftBtn).attr('disabled', 'disabled');
            
            window.clickNum--;
            var carouse_left = $(ul).css('left').split('px')[0]-0;
            var page3_item1_length = $(ul).children('li').length;
            cloneObj.cWidth = page3_item1_width * (page3_item1_length-1);
            cloneObj.toLeft = carouse_left - page3_item1_width  + 'px';
            
            $(ul).animate({ 'left': cloneObj.toLeft });
            setTimeout(function(){
                $(leftBtn).removeAttr('disabled');
                if( cloneObj.toLeft == '-' + cloneObj.cWidth + 'px' ){
                    // console.log('插入后缀');
                    $(ul).append(cloneObj.fir);
                    // $(ul).children('li:first-of-type').remove();
                    // $(ul).children('li:first-of-type').remove();
                    n++;
                    var page3_item1_length = $(ul).children('li').length;
                    var page3_carouse1_width = page3_item1_width * page3_item1_length + 'px';
                    // console.log('page3_carouse1_width: ' + page3_carouse1_width );
                    $(ul).width( page3_carouse1_width );
                }
            }, 500);
        });

        $(rightBtn).click(function(){
            $(rightBtn).attr('disabled', 'disabled');
            window.clickNum++;
            var carouse_left = $(ul).css('left').split('px')[0]-0;
            var page3_item1_length = $(ul).children('li').length;
            cloneObj.toRight = carouse_left + page3_item1_width + 'px';
            $(ul).animate({ 'left': cloneObj.toRight });
            setTimeout(function(){
                $(rightBtn).removeAttr('disabled');
                // '-' + page3_item1_width + 
                if( cloneObj.toRight == '0px' ){
                    // console.log('插入前缀');
                    $(ul).prepend(cloneObj.fir);
                    // $(ul).children('li:last-of-type').remove();
                    // $(ul).children('li:last-of-type').remove();
                    n++;
                    var page3_item1_length = $(ul).children('li').length;
                    var page3_carouse1_width = page3_item1_width * page3_item1_length + 'px';
                    // console.log('page3_carouse1_width: ' + page3_carouse1_width );
                    $(ul).width( page3_carouse1_width );
                    $(ul).css({ 'left': cloneObj.translate });
                }
            }, 500);
        });
    };

    $(function(){

        var cW = $('.top_bar .top_list li').width();
        var cL = $('.top_bar .top_list li').length;
        var pM = $('.top_bar .top_list li').css('margin-right');
        var pW = 0;
        if( pM ){
            pW = $('.top_bar .top_list li').css('margin-right').split('px')[0]-0;
        }
        var lW = cW * cL + pW * (cL-1);
        $('.top_bar .top_list').width(lW);

        var tlW = $('.party_places .party_texts li').width();
        var tlL = $('.party_places .party_texts li').length;
        var tW = tlW * tlL;
        $('.party_places .party_texts').width(tW);

        // $('#downAppK').css({'display': 'none'});
        $('#btn_downApp').click(function(){
            $('#downAppK').toggle();
        });

        $(window).scroll(function(){
            $('#downAppK').hide();
        });

        
        /*
        *   手机端
        */
        if( $(window).width() < 1200 ){
            var wh = $(window).height() - $('.header').height();
            $('#index_c').height(wh);

            $('#mobile_menu_btn').click(function(){
                $('#mobile_menu_list').toggle();
            });
        }

    });

    
    