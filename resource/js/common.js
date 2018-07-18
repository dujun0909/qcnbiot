window.onload = function () {

    //***********about-me模块设置**********
    //默认显示
    $("about-me-li-1-content").css('display','block');

    $(".about-me-menu-body").children("li").mouseover(function(){
        var id = $(this).attr('id');
        $(".about-me-menu-body").children("li").removeClass("active");
        $(this).addClass("active");
        //$(".about-me-content").css('display','none');
        //$("#"+id+"-content").css('display','block');
        $(".about-me-content").hide();
        $("#"+id+"-content").fadeIn({
            duration: 600
        });



    });

    $(".about-me-menu-body").children("li").mouseout(function(){
        var id = $(this).attr('id');
        //$("#"+id+"-content").css('display','block');
    });


    //***********product-service模块设置**********
    //默认显示
    $("product-service-li-1-content").css('display','block');

    $(".product-service-menu-body").children("li").mouseover(function(){
        var id = $(this).attr('id');
        $(".product-service-menu-body").children("li").removeClass("active");
        $(this).addClass("active");
        //$(".product-service-content").css('display','none');
        //$("#"+id+"-content").css('display','block');
        $(".product-service-content").hide();
        $("#"+id+"-content").fadeIn({
            duration: 600
        });
    });

    $(".product-service-menu-body").children("li").mouseout(function(){
        var id = $(this).attr('id');
        //$("#"+id+"-content").css('display','block');
    });

    //***********success-case模块设置**************
    $(".success-case-content").children("div").mouseover(function(){
        $(this).children(".image-desc").css('display','block');
    });

    $(".success-case-content").children("div").mouseout(function(){
        $(this).children(".image-desc").css('display','none');
    });

};