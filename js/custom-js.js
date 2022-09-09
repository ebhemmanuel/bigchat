var $ = window.jQuery;
// Please use event listeners to run functions.
$('head').append('<link rel="preconnect" href="https://fonts.googleapis.com">');
$('head').append('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
$('head').append('<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Press+Start+2P&display=swap" rel="stylesheet">');

document.addEventListener('onLoad', function () {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
    $('.notification-header').hide();
});

document.addEventListener('onEventReceived', function () {
    // obj will contain information about the event
    // Run after each 500ms hidden notification
    $('.message-wrapper').each(function (e) {
        if ($('.marked-message:visible').length >= 1) {
            $('.notification-header').fadeIn(500);
            $('.message-header').text('New Messages');
            $('.message-counter').text($('.marked-message:visible').length);
            $('.notification-header').addClass('shaking-text');
            setTimeout(function () {
                if ($('.notification-header').hasClass('shaking-text')) {
                    $('.notification-header').fadeOut(500);
                    $('.notification-header').removeClass('shaking-text');
                }
            }, 1350 * $('.marked-message:visible').length);
        }
        // Reset Count + Fadeout
        var newMessageTiming = 14000;
        function resetCheck() {
            if ($('.marked-message:visible').length == 0) {
                $('.message-counter').text('1');
                $('.notification-header').fadeOut(500);
            }
        }
        // Runtime Events for the checks
        setTimeout(resetCheck, newMessageTiming);
        // Fade out Pulse notification after message is not new
        $(this).find('.notification-pulse').delay(newMessageTiming).fadeOut(500);
        // High res emotes
        $(this).find('.emote').each(function () {
            // Betterttv Emote High Res
            if ($(this).attr('style').substring(34, 47) == 'betterttv.net') {
                var lengthCheck = $(this).attr('style').length - 4;
                $(this).attr('style', $(this).attr('style').substring(0, lengthCheck) + '3x);');
            }
            // Twitch HD Emotes
            if ($(this).attr('style').substring(41, 50) == 'jtvnw.net') {
                var lengthCheck = $(this).attr('style').length - 5;
                $(this).attr('style', $(this).attr('style').substring(0, lengthCheck) + '3.0);');
            }
        });
        if($(this).find($('.emote')).length == 1 ) {
            $(this).find($('.message')).addClass('single-emotes');
        }
        if($(this).find($('.emote')).length == 4 ) {
            $(this).find($('.message')).addClass('small-emotes');
        }
        if($(this).find($('.emote')).length == 5 ) {
            $(this).find($('.message')).addClass('smaller-emotes');
        }
        if($(this).find($('.emote')).length >= 6 ) {
            $(this).find($('.message')).addClass('smallest-emotes');
        }
        
        // Check for user - custom profiles
        var deltaPfp    = 'https://cdn.discordapp.com/attachments/836046912795705364/1016833145489862737/custom-profile-delta.png';
        var eluciaPfp   = 'https://cdn.discordapp.com/attachments/955963700643266581/1016864787071766588/elucia-profile-custome.png';
        var zionPfp     = 'https://cdn.discordapp.com/attachments/646697203850543144/1017128291439755264/zion-clean-anim-profile-custome.gif';
        var divinePfp   = 'https://cdn.discordapp.com/attachments/646697203850543144/1017111783632281620/divine-profile-custome.png';
        var palicoPfp   = 'https://cdn.discordapp.com/attachments/894202372585299978/1016752623585595532/custom-profile.png';
        var arcPfp      = 'https://cdn.discordapp.com/attachments/889602912966311946/1016758803804463224/arc-profile-custome.png';
        var amiiPfp     = 'https://cdn.discordapp.com/attachments/883271091278209054/1016797834877608047/ammi-dark-profile-custome.png';
        var raavaPfp    = 'https://cdn.discordapp.com/attachments/887882226308640838/1016826134941401198/raava-profile-custome.png';
        // Vis Profile
        var visPfp      = 'https://cdn.discordapp.com/attachments/887882226308640838/1017538344416182302/vis-profile-custome.png';
        var visDeco     = 'https://cdn.discordapp.com/attachments/837650561960247316/1017584775021731840/fishead.png';

        function profilePrototype(replaceName, className, darkTheme, profileUrl, decoUrl) {
            if (replaceName != null) {
                $('.message-wrapper').eq(e).find('.name').text(replaceName);
            }
            if (darkTheme   != null) {
                $('.message-wrapper').eq(e).find('.profile-picture').addClass('dark');
            }
            if (className   != null) {
                $('.message-wrapper').eq(e).find('.profile-picture').addClass(className);
            }
            $('.message-wrapper').eq(e).find('.custom-image').attr('src', profileUrl);
            if(decoUrl  != null) {
                $('.message-wrapper').eq(e).find('.message-decoration').attr('src', decoUrl);
            }
            $('.message-wrapper').eq(e).find('.profile-picture').addClass('show');
        };

        // Vis
        if ($(this).find('.message-data').attr('data-from') == 'Vistronn') {
            profilePrototype('Vistron', 'vistron', null, visPfp, visDeco);
        }
        // Delta
        if ($(this).find('.message-data').attr('data-from') == 'Delta013') {
            profilePrototype(null, 'delta', null, deltaPfp, null);
        }
        // Elucia
        if ($(this).find('.message-data').attr('data-from') == 'eluciasw') {
            profilePrototype('Elucia', 'elucia', null, eluciaPfp, null);
        }
        // Zion
        if ($(this).find('.message-data').attr('data-from') == 'ZionCross') {
            profilePrototype(null, null, true, zionPfp, null);
        }
        // Divine
        if ($(this).find('.message-data').attr('data-from') == 'divinesadness') {
            profilePrototype('Divine', 'divine', null, divinePfp, null);
        }
        // Palicoboi
        if ($(this).find('.message-data').attr('data-from') == 'Palicoboi') {
            profilePrototype('Palico', 'palico', null, palicoPfp, null);
        }
        // Arc
        if ($(this).find('.message-data').attr('data-from') == 'arcnova95') {
            profilePrototype('Arc!', 'arc', null, arcPfp, null);
        }
        // Amii
        if ($(this).find('.message-data').attr('data-from') == 'amiimaVT') {
            profilePrototype('Amiima', 'amii', true, amiiPfp, null);
        }
        // Raava 
        if ($(this).find('.message-data').attr('data-from') == 'R4AVA') {
            profilePrototype('Raava', 'raava', true, raavaPfp, null);
        }
    });
});