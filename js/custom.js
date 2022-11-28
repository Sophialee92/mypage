$(document).ready(function () {

    var ht = $(window).height();
    $('section').height(ht);

    $(window).on('resize', function () {
        var ht = $(window).height();
        $('section').height(ht);
    });

    //���콺��
    // 섹션에서 마우스휠이벤트가 일어날때
    // if문은 건드릴게 없고, 대상(→'section')을 수정하면됨
    $('section').on('mousewheel', function (event, delta) {
        if (delta > 0) {
            // 
            var prev = $(this).prev().offset().top;
            $('html, body').stop().animate({ 'scrollTop': prev }, 1000, 'easeOutExpo');
        } else if (delta < 0) {
            var next = $(this).next().offset().top;
            $('html, body').stop().animate({ 'scrollTop': next }, 1000, 'easeOutExpo');
        }
    });

});//��

