window.onscroll = function showHead() {
    let header = document.querySelector('.nav');
    if (window.pageYOffset > 200) {
        header.classList.add('header_fixed');
    }
    else {
        header.classList.remove('header_fixed');
    }
}


jQuery(function() {
    let chechBox = document.querySelector('#checkbox');
    $('.menu_link').on('click', function (event) {
        chechBox.checked = false;
    });
});


jQuery(function() {
    var element = document.getElementById('main_8_input_tel');
    var lab = document.querySelector('.main_8_input_tel_lb');
    var maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(element, maskOptions);
    $('.main_8_content_bottom_form').on('submit', function(event) {
        event.preventDefault();
        if($("#main_8_input_tel").val().length < 18){
            lab.innerHTML = `Заполните поле!`;
            lab.classList.add('wrong');
            console.log('Error');
            return;
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/php/mailer.php',
                data: $(this).serialize(),
                success: function (){
                    $(this).addClass('sent');
                    $( this ).find( '.input-submit' ).val("Отправлено!");
                    $('.popup-fade').removeClass('_open');
                    $('.popup-fade_res').addClass('_open');
                    $('body').addClass('lock');
                    lab.innerHTML = `Телефон*`;
                    lab.classList.remove('wrong');
                    document.getElementById('main_8_input_name').value = '';
                    document.getElementById('main_8_input_tel').value = '';
                }
            });
            $('.popup-close_res').on('click', function (event) {
                $('.popup-fade_res').removeClass('_open');
                $('body').removeClass('lock');
                return false;
            });
            $('.popup-fade_res').on('click', function (event) {
                if ($(event.target).closest('.popup_res').length == 0) {
                    $('.popup-fade_res').removeClass('_open');
                    $('body').removeClass('lock');
                }
            });
        }
    });
});


jQuery(function() {
    $('.popup-open').on('click', function (event) {
        $('.popup-fade').addClass('_open');
        $('body').addClass('lock');
        return false;
    });
    $('.popup-close').on('click', function (event) {
        $('.popup-fade').removeClass('_open');
        $('body').removeClass('lock');
        return false;
    });
    $('.popup-fade').on('click', function (event) {
        if ($(event.target).closest('.popup').length == 0) {
            $('.popup-fade').removeClass('_open');
            $('body').removeClass('lock');
        }
    });
});


jQuery(function() {
    var elementi = document.getElementById('calling_req');
    var labs = document.querySelector('.call_req_lb');
    var maskOptionsi = {
      mask: '+{7} (000) 000-00-00'
    };
    var mask = IMask(elementi, maskOptionsi);
    $('.request_form').on('submit', function(event) {
        event.preventDefault()
    
        if($("#calling_req").val().length < 18){
            labs.innerHTML = `Заполните поле!`;
            labs.classList.add('wrong');
            console.log('Error');
            return;
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/php/mailer.php',
                data: $(this).serialize(),
                success: function (){
                    $(this).addClass('sent');
                    $( this ).find( '.input-submit' ).val("Отправлено!");
                    $('.popup-fade').removeClass('_open');
                    $('.popup-fade_res').addClass('_open');
                    $('body').addClass('lock');
                    labs.innerHTML = `Телефон*`;
                    labs.classList.remove('wrong');
                    document.getElementById('name_req').value = '';
                    document.getElementById('calling_req').value = '';
                }
            });
            $('.popup-close_res').on('click', function (event) {
                $('.popup-fade_res').removeClass('_open');
                $('body').removeClass('lock');
                return false;
            });
            $('.popup-fade_res').on('click', function (event) {
                if ($(event.target).closest('.popup_res').length == 0) {
                    $('.popup-fade_res').removeClass('_open');
                    $('body').removeClass('lock');
                }
            });
        }
    });
});


// jQuery(function() {
//     $('.request_form').on('submit', function (event) {
//         $('.popup-fade').removeClass('_open');
//         $('.popup-fade_res').addClass('_open');
//         $('body').addClass('lock');
//         return false;
//     });
//     $('.popup-close_res').on('click', function (event) {
//         $('.popup-fade_res').removeClass('_open');
//         $('body').removeClass('lock');
//         return false;
//     });
//     $('.popup-fade_res').on('click', function (event) {
//         if ($(event.target).closest('.popup_res').length == 0) {
//             $('.popup-fade_res').removeClass('_open');
//             $('body').removeClass('lock');
//         }
//     });
// });


jQuery(function() {
    let showBtn = document.querySelector('.main_5_btn');
    $('.main_5_btn').on('click', function (event) {
        showBtn.innerHTML = "скрыть все";
        $('.main_5_btn').toggleClass('shown');
        if ($(showBtn).hasClass('shown')){
            showBtn.innerHTML = "скрыть";
            $('.main_5_grids').addClass('shown');
            $('.main_5_bl_hidden').addClass('shown');
        }
        else {
            showBtn.innerHTML = "показать еще";
            $('.main_5_grids').removeClass('shown');
            $('.main_5_bl_hidden').removeClass('shown');
        }
    })
});


jQuery(function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        freeMode: true,
        pagination: {
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            640: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
          }
    });
});


jQuery(function() {
    let spBtnMy = document.querySelectorAll('.main_1_catalog_block_content_catalog_btn');
    for (let i = 0; i < spBtnMy.length; i++) {
        $(spBtnMy[i]).on('click', function(event) {
            $(spBtnMy[i]).toggleClass('active');
        });
    }
});


// $('body').on('submit', 'form[data-content="main-form"]', function(event) {
//     event.preventDefault();
//     $.ajax({
//         type: 'POST',
//         url: '/php/mailer.php',
//         data: $(this).serialize(),
//     });
//     $(this).addClass('sent');
//     $( this ).find( '.input-submit' ).val("Отправлено!");
//     return false;
// });




