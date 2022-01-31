 $('document').ready(function(){
    $('.open-menu').on('click', function(){
        $('.aside').toggleClass('mobile-open');
    });
    $('.send-work').on('click', function(e){
        e.preventDefault();
        let val = $('.work-result__input--pres2').val(),
            rand = Math.floor(Math.random() * 5);
        if (val < 65){
            $('.message__text').html(answers[0][rand]);
        } else if ((65 < val)&&(val < 89)) {
            $('.message__text').html(answers[1][rand]);
        } else {
            $('.message__text').html(answers[2][rand]);
        }
        $('.curator').addClass('curator--send');
    });
    $('.home-work__header').click(function () {
        $(this).toggleClass('home-work--expand').next().slideToggle();
        $('.home-work__header').not(this).removeClass('home-work--expand').next().slideUp();

        $(".dish-content").hide();
        $(".show_hide").text('Показать подробное меню');
    });

    let answers = [
        [
            'Здравствуйте, [Имя].<br>Спасибо, что остаетесь с нами и продолжаете проходить уроки «120/90».  Я вижу, что показатели вашего давления снижены. В этом случае рекомендация доктора – отдохните в течение получаса, желательно, лежа. Не нагружайте себя просмотром страниц или видео. Выпейте чашку крепкого сладкого чая или кофе. Через некоторое время измерьте давление снова. Жду вашего ответа!',

            'Привет, [Имя].<br>Ваше давление ниже нормы. Возможно, вы устали или перенервничали? Давайте вместе позаботимся о вашем здоровье! Что вы можете сделать прямо сейчас?<br>- Нужно лечь и полежать хотя бы полчаса. Если вы не можете лечь, то наклоните голову между колен и посидите так несколько минут.<br>- Вам нужна жидкость. Лучше всего – черный сладкий чай. Также подойдет чашечка кофе или какао. <br>- Проветрите помещение или выйдите на воздух, если у вас не кружится голова. <br>Жду вас снова на следующих уроках! Будьте здоровы!',
            
            'Добрый день, [Имя].<br>Вот это да – ваше давление сильно понизилось! Что ж, этот эффект вполне возможен не только после наших упражнений. Иногда стресс, недостаток кислорода, усталость могут приводить к такому. <br>Доктор дает вам совет – обязательно найдите возможность отдохнуть и полежать в расслабленном состоянии. Восполните недостаток минеральных веществ в организме: вам нужна кружка сладкого чаю или кофе. Если их нет, выпейте хотя бы стакан воды. После отдыха попробуйте измерить свое давление снова. <br>Внимание! Если вам резко стало плохо, вы ощущаете боль в грудной клетке, холодный пот и тахикардию на фоне низкого давления, срочно позвоните в скорую!<br>Надеемся, все будет хорошо и завтра мы продолжим занятия.',

            'Рада вас видеть, [Имя].<br>Ваше давление низковато. Вам стоит немного отдохнуть, если есть возможность – полежать. Чашка сладкого чаю, какао или кофе тоже поможет. Если сильно кружится голова, доктор рекомендует опустить ее ниже колен и посидеть так некоторое время. <br>Отдохните и с новыми силами завтра приступим к следующему уроку!',
            
            '[Имя], спасибо, что продолжаете занятия!<br>Ваше давление ниже обычного. Если вы себя нормально чувствуете, то это не повод беспокоиться. Выпейте любую жидкость – воду, сок, а еще лучше – сладкий чай или кофе. Затем полчасика желательно полежать, не тревожа себя телевизором и разговорами. Будьте здоровы!'
        ],
        [
            'Здравствуйте, [Имя].<br>Рада видеть вас в добром здравии. Ваше давление в пределах нормы. Возможно, после упражнений вы хотите отдохнуть – это правильно. Пока войдете в ритм, пройдет некоторое время. Будьте здоровы и жду вас на следующем уроке!',

            '[Имя], добрый день!<br>У вас прекрасное давление, надеюсь, вы чувствуете себя хорошо. Если вы немного запыхались после упражнений или кровь прилила к щекам – это нормально. Скоро ваш организм привыкнет к нагрузке. Продолжайте занятия и контролируйте показания давления! До встречи!',

            '[Имя], все идет отлично!<br>Ваше давление на зависть многим – можете удивлять врачей! Возможно, немного спорта и растяжки – именно то, чего вам не хватает. В любом случае, рада, что вы в порядке и продолжаете заниматься по нашей программе. Хорошего настроения!',

            'Вы просто супер, [Имя].<br>Показания – в рамках нормы и это замечательно! Я искренне радуюсь вместе с вами, пусть так будет каждый день! Отличного вам дня и до следующего урока!',
            
            '[Имя], вы меня радуете!<br>Ваше давление прекрасное, оно не выходит за рамки медицинской нормы. Незначительное отклонение в сторону повышения или понижения может быть спровоцировано внешними факторами. Главное – не останавливаться на достигнутом и выполнять комплекс упражнений! У вас все получится!'
        ],
        [
            'Здравствуйте, [Имя].<br>Ваше давление выше медицинской нормы. Возможно, это ваше рабочее давление, но мы с врачом рекомендуем лечь и отдохнуть. Можно выйти на свежий воздух или выпить воды с лимоном, липового чая или отвара шиповника. Не игнорируйте большие скачки – если для вас это высокое давление, стоит обратиться к врачу. Не беспокойтесь, постепенно все наладится. Не прекращайте занятия, просто будьте бережны и внимательны к себе. Вам нужно время, чтобы организм адаптировался.',

            'Добрый день, [Имя].<br>Вижу, что давление высоковато. Вам стоит поскорей позаботиться о себе:<br>Лечь на подушку, теплый компресс на лоб и прохладный на ноги.<br>Выпить воды или напиток, который понижает давление (чай из шиповника, брусники, калины, толокнянки)<br>Выполнить дыхательную гимнастику: вдох-задержка дыхания на 10 счетов-выдох, повторять 10 раз.<br>Будьте здоровы и, если ваше давление сильно превышает нормальные для вас показания, обязательно позвоните врачу или в скорую. Главное – не волнуйтесь, мы вместе все преодолеем! Дайте своему организму время привыкнуть и постепенно процесс восстановления запустится.',

            'Привет, [Имя].<br>Показания давления сегодня не очень радуют. Но возможно, вы перенапряглись или перенервничали? Давайте посмотрим, как можно справиться:<br>- откройте форточку<br>- примите лежачее или полусидячее положение, чтобы голова оставалась приподнятой<br>- освободите грудную клетку и шею<br>Если ощущаете тошноту, боль в сердце или резкую головную боль, внезапный озноб – лучше вызвать скорую, это опасные симптомы. Обязательно примите свои лекарства, если они у вас есть и позднее измерьте давление снова.<br>Будьте внимательны к своему здоровью и по возможности, не прекращайте упражнения – когда вы адаптируетесь к нагрузке, организм без труда справится с любым стрессом. А мы всегда поддержим и поможем.',

            'Рада видеть, [Имя].<br>Меня беспокоит ваше давление, его показания выше физиологической нормы. Даже, если это в пределах вашего рабочего давления, вам стоит лечь и отдохнуть, а также обеспечить приток свежего воздуха и расстегнуть воротник. <br>Будьте внимательны, если скачок превышает 40 единиц – это уже повод обратиться к врачу. Выпейте свои гипотензивные лекарства и полежите. <br>Когда ваше давление придет в норму – не забывайте об уроках. Регулярные занятия постепенно помогут вам, главное – адаптироваться. Со временем лекарства будут вам не нужны, но сейчас нужно позаботиться о себе и быть осторожным.',
            '[Имя], приветствую!<br>Показания вашего давления немного выходят за границы нормы. Это может быть от непривычной нагрузки, волнения, усталости и даже духоты. В любом случае, сейчас вам нужно быть в состоянии покоя. Доктор советует прилечь так, чтобы голова оставалась приподнята. По возможности, выпейте жидкость – воду с лимоном, отвар шиповника или травяной чай от повышенного давления. Если эти цифры для вас высокие – советуем принять лекарства. Сейчас еще рано от них отказываться, организму нужно время на адаптацию.<br>Если давление не упадет, при ознобе, боли в груди – позвоните в скорую, не занимайтесь самолечением. Когда все будет в порядке – жду вас на следующем уроке. Будьте здоровы и не перетруждайте себя, любая реабилитация требует времени.'
        ]
    ]
});

const moreButton = document.querySelectorAll('.more');
const moreWrapper = document.querySelectorAll('.more-hidden');

$(window).on('load resize', function() {
    if ($(window).width() < 481) {
        const changeLectionCondition = () => {
            moreWrapper.forEach((el) => {
                el.classList.toggle('more-hidden');
                if (el.classList.contains('more-hidden')) {
                    moreButton.innerText = '+';
                } else {
                    moreButton.innerText = '-';
                } 
            });   
        }   
        
        moreButton.forEach((el) => {
            el.style.display = 'block';
            el.addEventListener('click', changeLectionCondition);
        })
    } 
});

$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();  
});

$(window).on('load resize', function() {
    if (window.innerWidth < 481) { 
        $('.gyms__inner').slick({
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            dotsClass: 'gym__dots'
        });    
    }
});

$('#form-weight').on('submit', function(e){
    e.preventDefault();
    let weight = Number($('#weight').val());
    let height = Number($('#height').val());
    let age = Number($('#age').val());
    let calorieDay = $('.calorie-day');
    let calorieSafe = $('.calorie-safe');
    let calorieQuick = $('.calorie-quick');
    let calorieExtra = $('.calorie-extra');

    if (($('#man').is(':checked'))) {
       var formula = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        var formula = (10 * weight) + (6.25 * height) - (5 * age) - 50;
    } 
    
    calorieDay.text(Math.floor(formula));
    formula = formula - (formula * 0.15);
    calorieSafe.text(Math.floor(formula));
    let formulaSafe = calorieSafe.text();
    calorieQuick.text(Math.floor(formulaSafe - (formulaSafe * 0.15)));
    let formulaExtra = calorieQuick.text();
    calorieExtra.text(Math.floor(formulaExtra - (formulaExtra * 0.15)));
})

$('#save-btn').click(function(e){
    e.preventDefault();
});

$(document).ready(function () {    
    $(".show_hide").on("click", function () {
        var txt = $(".dish-content").is(':visible') ? 'Показать подробное меню' : 'Скрыть подробное меню';
        $(".show_hide").text(txt);
        $('.dish-content').slideToggle(200);
    });
});