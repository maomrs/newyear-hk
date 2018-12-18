$(function(){

    var lW = $('.party_pics .party_pic2 .rotate_pic2 li').width();
    var lH = $('.party_pics .party_pic2 .rotate_pic2 li').height();
    var pW = lW * 3;
    $('.party_pic2').width(pW);
    $('.party_pic2').height(lH);

    Carouse('#page3_carouse1', '#page3_toLeft1', '#page3_toRight1');

    Carouse('#page3_carouse2', '#page3_toLeft2', '#page3_toRight2');

    Carouse('#page3_texts1', '#page3_toLeft1', '#page3_toRight1');

    $(document).ready(function () {
        if( $(window).width() < 1000 ){
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                slidesPerView: 3,
                paginationClickable :true,
                spaceBetween: 10,
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                  clickable :true,
                },
                
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                
                // 如果需要滚动条
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
              });  
        }
        
    });

    var t = 0;
    var imgNum = $('.rotate_spots li').length;
    $('#page3_toLeft2').click(function(){
        t++;
        if( t > imgNum-1 ){
            t = 0;
        }
        
        $('.rotate_spots li').eq(t).addClass('active').siblings('li').removeClass('active');
    });

    $('#page3_toRight2').click(function(){
        t--;
        if( t > 0 ){
            t = imgNum;
        }else if(t<=(-imgNum)){
            t=0;
        }
        console.log(t);
        console.log(imgNum);
        $('.rotate_spots li').eq(t).addClass('active').siblings('li').removeClass('active');
    });

    var dec = 0;
    var toL = 0;
    var caroL = 0;
    var parW = $('#page3_carouse2 li').width() - 0;
    
    $('.rotate_spots li').click(function(){
        var par_left = $('#page3_carouse2').css('left').split('px')[0]-0;
        console.log(par_left);
        var index = $(this).attr('index')-0;
        console.log(index);
        console.log(t);
        // if(t>0 && t != index){
            if( index > t ){
                dec = index - t;
                toL = par_left + dec * parW;
            }
            else{
                dec = t - index;
                toL = par_left - dec * parW;
            }
            $('#page3_carouse2').stop().animate({ 'left': toL + 'px' });
        // }
        t = index;
        $(this).addClass('active').siblings('li').removeClass('active');
    });

    /*
    *   产生随机整数
    */
    function getRandom(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    };

    /*
    *   点击下面轮播图片播放对应的视频
    */
    var page3_item1_widths = $('#page3_carouse1').children('li').width();
    var page3_texts1_widths = $('#page3_texts1').children('li').width();
    var page3_item1_lengths = $('#page3_carouse1').children('li').length;
    var page3_true_lengths = page3_item1_lengths / 3;
    var page3_carouse1_width = page3_item1_widths * page3_item1_lengths;
    $('#page3_carouse1').width(page3_carouse1_width);

    var stSev = $('.party_pics').offset().top;

    // getRandom(1, page3_true_lengths)
    //视频随机播放
    var inR;
    if( getRandom(1, page3_true_lengths) == page3_true_lengths-1 ){
        inR = 0;
    }
    else{
        inR = getRandom(1, page3_true_lengths);
    }
    console.log('page3_true_lengths: ' + page3_true_lengths);
    $('#page3_carouse1').css('left', - page3_item1_widths * inR + 'px');
    $('#page3_texts1').css('left', - page3_texts1_widths * inR + 'px');
    
    $('#page3_carouse1 li').eq(inR).find('video').attr('autoplay', 'autoplay');
    
    
    
    $(document).on('click', '#page3_carouse2 li',function(){
        //页面滚动到视频上边
        $("html,body").animate({'scrollTop': stSev});

        var index = $(this).attr('index');
        var idx = index - 1;
        $('#page3_carouse1').css('left', - page3_item1_widths * idx + 'px');
        $('#page3_texts1').css('left', - page3_texts1_widths * idx + 'px' );
        
        
        if( index != page3_true_lengths ){
            $('#page3_carouse1 li').eq(idx).find('video')[0].play();
        }
        
        for( var i=0;i<page3_true_lengths;i++ ){
            if( i != (index-1) ){
                if( $('#page3_carouse1 li').eq(i).find('video').length == 1 ){
                    $('#page3_carouse1 li').eq(i).find('video')[0].pause();
                }
            }
        }
    });


    $('.swiper-slide').click(function(){
        //页面滚动到视频上边
        $("html,body").animate({'scrollTop': stSev});

        var index = $(this).attr('index');
        var idx = index - 1;
        $('#page3_carouse1').css('left', - page3_item1_widths * idx + 'px');
        $('#page3_texts1').css('left', - page3_texts1_widths * idx + 'px' );

        if( index != page3_true_lengths ){
            $('#page3_carouse1 li').eq(idx).find('video')[0].play();
        }
        
        for( var i=0;i<page3_true_lengths;i++ ){
            if( i != (index-1) ){
                if( $('#page3_carouse1 li').eq(i).find('video').length == 1 ){
                    $('#page3_carouse1 li').eq(i).find('video')[0].pause();
                }
            }
        }

    });

});