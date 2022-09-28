var nav = document.querySelector('.header');

window.addEventListener('scroll', function(){
	if(window.pageYOffset > 100) {
		nav.classList += ' section-header'
	} else {
		nav.classList = 'header'
	}
})