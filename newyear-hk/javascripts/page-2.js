$(function(){
    judgeTimeView();
    /*
    *   滚动页面时，右侧数字按钮绝对定位和固定定位切换
    */
    function inerFunc(){
        var sT = $(window).scrollTop();
        if( sT >= 2200 ){
            $('#prize_daysi').addClass('prize_days_fixed'); 
        }
        else{
            $('#prize_daysi').removeClass('prize_days_fixed');
        }
    };
    
    /*
    *   七个步骤页面分别距离顶部的距离
    */
    var stFir = $('.item_steps_fir').offset().top;
    var stSec = $('.item_steps_sec').offset().top;
    var stThr = $('.item_steps_thr').offset().top;
    var stFou = $('.item_steps_fou').offset().top;
    var stFiv = $('.item_steps_fiv').offset().top;
    var stSix = $('.item_steps_six').offset().top;
    var stSev = $('.item_steps_sev').offset().top;
    var stFirH = $('.item_steps_fir').height();
    var stSecH = $('.item_steps_sec').height();
    var stThrH = $('.item_steps_thr').height();
    var stFouH = $('.item_steps_fou').height();
    var stFivH = $('.item_steps_fiv').height();
    var stSixH = $('.item_steps_six').height();
    var stSevH = $('.item_steps_sev').height();

    $('.prize_day1').on("click",function(){
        $("html,body").animate({'scrollTop':stFir});
        $(this).siblings('li').removeClass('day_active');
        $(this).addClass('day_active');
    });

    $('.prize_day2').on("click",function(){
        $("html,body").animate({'scrollTop':stSec});
        $(this).siblings('li').removeClass('day_active');
        $(this).addClass('day_active');
    });

    $('.prize_day3').on("click",function(){
        $("html,body").animate({'scrollTop':stThr});
        $(this).siblings('li').removeClass('day_active');
        $(this).addClass('day_active');
    });

    $('.prize_day4').on("click",function(){
        $("html,body").animate({'scrollTop':stFou});
        $(this).siblings('li').removeClass('day_active');
        $(this).addClass('day_active');
    });

    $('.prize_day5').on("click",function(){
        $("html,body").animate({'scrollTop':stFiv});
        $(this).siblings('li').removeClass('day_active');
        $(this).addClass('day_active');
    });

    $('.prize_day6').on("click",function(){
        $("html,body").animate({'scrollTop':stSix});
        $(this).siblings('li').removeClass('day_active');
        $(this).addClass('day_active');
    });

    $('.prize_day7').on("click",function(){
        $("html,body").animate({'scrollTop':stSev});
        $(this).siblings('li').removeClass('day_active');
        $(this).addClass('day_active');
    });

    $('#prize_dayTop').on("click",function(){
        $("html,body").animate({'scrollTop':stFir});
        $(this).siblings('li').removeClass('day_active');
        $(this).addClass('day_active');
    });

    function activeFunc(){
        var scrollTopH = $(window).scrollTop();
        // setTimeout(function(){
            if( scrollTopH <= (stFir + stFirH) - 100 ){
                $('.prize_day1').siblings('li').removeClass('day_active');
                $('.prize_day1').addClass('day_active');
            }
            else if( scrollTopH > stSec - 100 && scrollTopH <=  stSec + stSecH - 100){
                $('.prize_day2').siblings('li').removeClass('day_active');
                $('.prize_day2').addClass('day_active');
            }
            else if( scrollTopH > stThr - 100 && scrollTopH <=  stThr + stThrH - 100){
                $('.prize_day3').siblings('li').removeClass('day_active');
                $('.prize_day3').addClass('day_active');
            }
            else if( scrollTopH > stFou - 100 && scrollTopH <=  stFou + stFouH - 100){
                $('.prize_day4').siblings('li').removeClass('day_active');
                $('.prize_day4').addClass('day_active');
            }
            else if( scrollTopH > stFiv - 100 && scrollTopH <=  stFiv + stFivH - 100){
                $('.prize_day5').siblings('li').removeClass('day_active');
                $('.prize_day5').addClass('day_active');
            }
            else if( scrollTopH > stSix - 100 && scrollTopH <=  stSix + stSixH - 100){
                $('.prize_day6').siblings('li').removeClass('day_active');
                $('.prize_day6').addClass('day_active');
            }
            else if( scrollTopH >= stSev ){
                $('.prize_day7').siblings('li').removeClass('day_active');
                $('.prize_day7').addClass('day_active');
            }
        // }, 10);
    };

    activeFunc();

    $(window).scroll(function(){
        inerFunc();
        activeFunc();
    });
    // 点击右侧边栏图标伸展day
    $("#stretchBtn").on("click",function(){
        $(this).toggleClass("stretch");
        $("#stretchList").stop().slideToggle();
    }); 
    
});
function judgeTimeView(){
    // 根据当前日期判断是否展示
    var dateArr = [10,11,12,13,14,15,16];
    var todayDate = new Date().getDate();
    if(todayDate == dateArr[0]){
        $(".item_steps_fir").removeClass("no_time");
        $(".prize_day1").show();
        $("#prizeDay1").addClass("prize_day1");
    }else if(todayDate == dateArr[1]){
        $(".item_steps_fir,.item_steps_sec").removeClass("no_time");
        $(".prize_day1,.prize_day2").show();
        $("#prizeDay1").addClass("prize_day1");
        $("#prizeDay2").addClass("prize_day2");
    }else if(todayDate == dateArr[2]){
        $(".item_steps_fir,.item_steps_sec,.item_steps_thr").removeClass("no_time");
        $(".prize_day1,.prize_day2,.prize_day3").show();
        $("#prizeDay1").addClass("prize_day1");
        $("#prizeDay2").addClass("prize_day2");
        $("#prizeDay3").addClass("prize_day3");
    }else if(todayDate == dateArr[3]){
        $(".item_steps_fir,.item_steps_sec,.item_steps_thr,.item_steps_fou").removeClass("no_time");
        $(".prize_day1,.prize_day2,.prize_day3,.prize_day4").show();
        $("#prizeDay1").addClass("prize_day1");
        $("#prizeDay2").addClass("prize_day2");
        $("#prizeDay3").addClass("prize_day3");
        $("#prizeDay4").addClass("prize_day4");
    }else if(todayDate == dateArr[4]){
        $(".item_steps_fir,.item_steps_sec,.item_steps_thr,.item_steps_fou,.item_steps_fiv").removeClass("no_time");
        $(".prize_day1,.prize_day2,.prize_day3,.prize_day4,.prize_day5").show();
        $("#prizeDay1").addClass("prize_day1");
        $("#prizeDay2").addClass("prize_day2");
        $("#prizeDay3").addClass("prize_day3");
        $("#prizeDay4").addClass("prize_day4");
        $("#prizeDay5").addClass("prize_day5");
    }else if(todayDate == dateArr[5]){
        $(".item_steps_fir,.item_steps_sec,.item_steps_thr,.item_steps_fou,.item_steps_fiv,.item_steps_six").removeClass("no_time");
        $(".prize_day1,.prize_day2,.prize_day3,.prize_day4,.prize_day5,.prize_day6").show();
        $("#prizeDay1").addClass("prize_day1");
        $("#prizeDay2").addClass("prize_day2");
        $("#prizeDay3").addClass("prize_day3");
        $("#prizeDay4").addClass("prize_day4");
        $("#prizeDay5").addClass("prize_day5");
        $("#prizeDay6").addClass("prize_day6");
    }else if(todayDate >= dateArr[6]){
        $(".item_steps_fir,.item_steps_sec,.item_steps_thr,.item_steps_fou,.item_steps_fiv,.item_steps_six,.item_steps_sev").removeClass("no_time");
        $(".prize_day1,.prize_day2,.prize_day3,.prize_day4,.prize_day5,.prize_day6,.prize_day7").show();
        $("#prizeDay1").addClass("prize_day1");
        $("#prizeDay2").addClass("prize_day2");
        $("#prizeDay3").addClass("prize_day3");
        $("#prizeDay4").addClass("prize_day4");
        $("#prizeDay5").addClass("prize_day5");
        $("#prizeDay6").addClass("prize_day6");
        $("#prizeDay7").addClass("prize_day7");
    }else{
        
    }
    if(todayDate >= dateArr[0]){
        $("#prize_daysi").show();
        $("#priceTitle").show();
    }else{
        
    }
};
