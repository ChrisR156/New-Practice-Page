var nav = document.querySelector('.header');

window.addEventListener('scroll', function(){
	if(window.pageYOffset > 100) {
		nav.classList += ' section-header'
	} else {
		nav.classList = 'header'
	}
})

// var nav = document.querySelector('.for-script');

// window.addEventListener('scroll', function(){
// 	if(window.pageYOffset > 1000) {
// 		nav.classList += ' for-script'
// 	} else {
// 		nav.classList = 'for-script'
// 	}
// })