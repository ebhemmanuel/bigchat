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
        
        // Check for user - custom profiles
        var deltaPfp    = 'https://cdn.discordapp.com/attachments/836046912795705364/1016833145489862737/custom-profile-delta.png';
        var eluciaPfp   = 'https://cdn.discordapp.com/attachments/955963700643266581/1016864787071766588/elucia-profile-custome.png';
        var zionPfp     = 'https://cdn.discordapp.com/attachments/646697203850543144/1017128291439755264/zion-clean-anim-profile-custome.gif';
        var divinePfp   = 'https://cdn.discordapp.com/attachments/646697203850543144/1017111783632281620/divine-profile-custome.png';
        var palicoPfp   = 'https://cdn.discordapp.com/attachments/894202372585299978/1016752623585595532/custom-profile.png';
        var arcPfp      = 'https://cdn.discordapp.com/attachments/889602912966311946/1016758803804463224/arc-profile-custome.png';
        var amiiPfp     = 'https://cdn.discordapp.com/attachments/883271091278209054/1016797834877608047/ammi-dark-profile-custome.png';
        var raavaPfp    = 'https://cdn.discordapp.com/attachments/887882226308640838/1016826134941401198/raava-profile-custome.png';
        var moogiPfp    = 'https://cdn.discordapp.com/attachments/887882226308640838/1017421934180450365/bmoogi.png';
        var timbooPfp    = 'https://cdn.discordapp.com/attachments/955204936805802064/1027504822481592392/timboopfp.png';
        var OhSoLonelyPfp    = 'https://cdn.discordapp.com/attachments/933833824058638418/1017433531720421396/ohsolonely.png';
        var StreamElementsPfp    = 'https://cdn.discordapp.com/attachments/887882226308640838/1017450924979015721/streamelements_1.png';
        var visPfp    = 'https://cdn.discordapp.com/attachments/887882226308640838/1017538344416182302/vis-profile-custome.png';
        var shredPfp    = 'https://cdn.discordapp.com/attachments/955204936805802064/1027533590793302016/shredpfp.png';
        var smashPfp    = 'https://cdn.discordapp.com/attachments/945742950212710470/1027567942763823225/smashpfp.png';

        function profilePrototype(replaceName, className, darkTheme, url) {
            if (replaceName != null) {
                $('.message-wrapper').eq(e).find('.name').text(replaceName);
            }
            if (darkTheme != null) {
                $('.message-wrapper').eq(e).find('.profile-picture').addClass('dark');
            }
            if (className != null) {
                $('.message-wrapper').eq(e).find('.profile-picture').addClass(className);
            }
            $('.message-wrapper').eq(e).find('.profile-picture').addClass('show');
            $('.message-wrapper').eq(e).find('.custom-image').attr('src', url);
        };

        // Delta
        if ($(this).find('.message-data').attr('data-from') == 'Delta013') {
            profilePrototype(null, 'delta', null, deltaPfp);
        }
        // Elucia
        if ($(this).find('.message-data').attr('data-from') == 'eluciasw') {
            profilePrototype('Elucia', 'elucia', null, eluciaPfp);
          }
        // Vis
        if ($(this).find('.message-data').attr('data-from') == 'vistronn') {
            profilePrototype('Vis', 'vis', null, visPfp);
        }
        // Moogins
        if ($(this).find('.message-data').attr('data-from') == 'moogimoogins') {
            profilePrototype('Moogi', 'moogi', null, moogiPfp);
          }
        // Smash
        if ($(this).find('.message-data').attr('data-from') == 'dragonsmashy') {
            profilePrototype('Smash', 'smash', null, smashPfp);
           }
        // Shred
        if ($(this).find('.message-data').attr('data-from') == 'xxshredxx') {
            profilePrototype('Shred', 'shred', null, shredPfp);
         }
        // Oh So Lonely
        if ($(this).find('.message-data').attr('data-from') == 'oh_so_lonely') {
            profilePrototype(null, null, null, OhSoLonelyPfp);
         }
        // Stream Elements
        if ($(this).find('.message-data').attr('data-from') == 'streamelements') {
            profilePrototype(null, null, null, StreamElementsPfp);
        }
        // Timboo
        if ($(this).find('.message-data').attr('data-from') == 'timb0o_') {
            profilePrototype('Shyboo', 'shyboo', null, timbooPfp);
        }
        // Zion
        if ($(this).find('.message-data').attr('data-from') == 'ZionCross') {
            profilePrototype(null, null, true, zionPfp);
        }
        // Divine
        if ($(this).find('.message-data').attr('data-from') == 'divinesadness') {
            profilePrototype('Divine', 'divine', null, divinePfp);
        }
        // Palicoboi
        if ($(this).find('.message-data').attr('data-from') == 'Palicoboi') {
            profilePrototype('Palico', 'palico', null, palicoPfp);
        }
        // Arc
        if ($(this).find('.message-data').attr('data-from') == 'arcnova95') {
            profilePrototype('Arc!', 'arc', null, arcPfp);
        }
        // Amii
        if ($(this).find('.message-data').attr('data-from') == 'amiimaVT') {
            profilePrototype('Amiima', 'amii', true, amiiPfp);
        }
        // Raava 
        if ($(this).find('.message-data').attr('data-from') == 'R4AVA') {
            profilePrototype('Raava', 'raava', true, raavaPfp);
        }
    });
});
