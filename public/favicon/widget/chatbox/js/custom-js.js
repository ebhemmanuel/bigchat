var $ = window.jQuery;
// Please use event listeners to run functions.
$('head').append('<link rel="preconnect" href="https://fonts.googleapis.com">');
$('head').append(
	'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
);
$('head').append(
	'<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Press+Start+2P&display=swap" rel="stylesheet">'
);

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
		$(this)
			.find('.emote')
			.each(function () {
				// Betterttv Emote High Res
				if ($(this).attr('style').substring(34, 47) == 'betterttv.net') {
					var lengthCheck = $(this).attr('style').length - 4;
					$(this).attr(
						'style',
						$(this).attr('style').substring(0, lengthCheck) + '3x);'
					);
				}
				// Twitch HD Emotes
				if ($(this).attr('style').substring(41, 50) == 'jtvnw.net') {
					var lengthCheck = $(this).attr('style').length - 5;
					$(this).attr(
						'style',
						$(this).attr('style').substring(0, lengthCheck) + '3.0);'
					);
				}
			});
		if ($(this).find($('.emote')).length == 1) {
			$(this).find($('.message')).addClass('single-emotes');
		}
		if ($(this).find($('.emote')).length == 4) {
			$(this).find($('.message')).addClass('small-emotes');
		}
		if ($(this).find($('.emote')).length == 5) {
			$(this).find($('.message')).addClass('smaller-emotes');
		}
		if ($(this).find($('.emote')).length >= 6) {
			$(this).find($('.message')).addClass('smallest-emotes');
		}

		// Check for user - custom profiles
		function profilePrototype(
			replaceName,
			className,
			darkTheme,
			profileUrl,
			decoUrl
		) {
			if (replaceName != null) {
				$('.message-wrapper').eq(e).find('.name').text(replaceName);
			}
			if (darkTheme != null) {
				$('.message-wrapper').eq(e).find('.profile-picture').addClass('dark');
			}
			if (className != null) {
				$('.message-wrapper')
					.eq(e)
					.find('.profile-picture')
					.addClass(className);
			}
			$('.message-wrapper').eq(e).find('.custom-image').attr('src', profileUrl);
			if (decoUrl != null) {
				$('.message-wrapper')
					.eq(e)
					.find('.message-decoration')
					.attr('src', decoUrl);
			}
			$('.message-wrapper').eq(e).find('.profile-picture').addClass('show');
		}

		// Custom Profiles - Add profiles below
	});
});
