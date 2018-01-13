var currentX = '';
var currentY = '';
var movementConstant = .015;
var skillsButtonClicked = false;

var randomBounceOne = function(monsterClass) {
    $(monsterClass).effect( "bounce", { times: 1, distance: 10 }, "fast" );
};

var randomBounceTwo = function(monsterClass) {
    $(monsterClass).effect( "bounce", { times: 1, distance: 20 }, "fast" );
};

var randomBounceThree = function(monsterClass) {
    $(monsterClass).effect( "bounce", { times: 3, distance: 15 }, "slow" );
};




$(document).ready(function () {

    loadBackground();
    activate('li');

    $('.unicorn').delay(700).show('fast', function () {
        $(this).delay(200).animate({bottom: '80px'}, function () {
            monsterJump(descriptionUp());
            $('.bg').animate({bottom: '-5px'}, 110).animate({bottom: '0'}, 110, function () {

            });
        });
    });

    $('.skills-btn').click(function(){

        if (skillsButtonClicked === true) {
            return;
        }

        $(this).fadeOut();

        skillsButtonClicked = true;

            $('.unicorn').animate({bottom: '1000px'});

        monsterBounce(".dumpling-html", 400, 1050, 8, 700);
        monsterBounce(".birdy-css", 600, 900, 8, 250);
        monsterBounce(".beasoff-js", 900, 750, 8, 200);
        monsterBounce(".zombie-jq", 1100, 590, 8, 1200);
        monsterBounce(".frankie-bootstrap", 1400, 420, 6, 300);
        monsterBounce(".miss-sass", 1600, 260, 4, 400);
        monsterBounce(".booba-ps", 1900, 1200, 8, 1000);

        loop(".frankie-bootstrap", randomBounceOne);
        loop(".birdy-css", randomBounceOne);
        loop(".miss-sass", randomBounceOne);
        loop(".dumpling-html", randomBounceTwo);
        loop(".beasoff-js", randomBounceTwo);
        loop(".zombie-jq", randomBounceTwo);
        loop(".booba-ps", randomBounceThree);

    });
});



//BACKGROUND


function initParallax() {

    $(document).mousemove(function (e) {
        if (currentX == '') currentX = e.pageX;
        var xdiff = e.pageX - currentX;
        currentX = e.pageX;
        if (currentY == '') currentY = e.pageY;
        var ydiff = e.pageY - currentY;
        currentY = e.pageY;
        $('.parallax-bg .par').each(function (i, el) {
            var movement = (i + 1) * (xdiff * movementConstant);
            var movementy = (i + 1) * (ydiff * movementConstant);
            var newX = $(el).position().left + movement;
            var newY = $(el).position().top + movementy;
            $(el).css('left', newX + 'px');
            $(el).css('top', newY + 'px');
        });
    });
}

function loadBackground() {
    $(".bg-cloud").animate({bottom: '0'});
    $(".bg-forest").delay(250).animate({bottom: '0'});
    $(".bg-land").delay(500).animate({bottom: '0'}, function () {
        initParallax();
    });
}



//CONTENT


function monsterJump(callback) {
    $('.unicorn').animate({bottom: '110px'}, {duration: 200}).animate({bottom: '80px'}, callback);
}

function descriptionUp() {
    $('.description').animate({bottom: '250px'}, {duration: 500});
}

// function aboutMeRotateIn() {
//     $('.description').addClass('rotate');
// }

function activate(button) {
    $(button).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
}


function monsterBounce(monster, delayTime, left, times, distance) {
    setTimeout(function() {
        $(monster).animate({
            left: "-=" + left + "px"
        }, 1500).find('img').effect("bounce", {times: times, distance: distance}, 1500);
    }, delayTime);
}


function loop(monsterClass, callback) {
    var rand = Math.round(Math.random() * (10000 - 100)) + 100;
    setTimeout(function() {
        callback(monsterClass);
        loop(monsterClass, callback);
    }, rand);
}
