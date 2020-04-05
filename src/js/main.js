import './vendor';

//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

// mobile menu
var burger = document.querySelector('.burger-menu');
var menu = document.querySelector('.menu-wrapper');
var menuClose = document.querySelector('.menu-close');
var body = document.querySelector('body');

burger.addEventListener('click', function () {
	menu.classList.add('active');
	body.style.overflow = "hidden";
});

menuClose.addEventListener('click', function () {
	menu.classList.remove('active');
});

//slick slider
$(document).ready(function () {
	$('.slick-slider-hot').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		centerMode: false
	});
});

//slick slider brends
$(document).ready(function () {
	$('.slick-slider-brends').slick({
		infinite: true,
		slidesToShow: 5,
		dots: false,
		centerMode: false
	});
});

//slick slider mobile
$(document).ready(function () {
	$('.slick-slider-mobile').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		centerMode: false
	});
});

//slick slider mobile
$(document).ready(function () {
	$('.slick-slider-brends-mobile').slick({
		infinite: true,
		slidesToShow: 1,
		dots: false,
		centerMode: false
	});
});

//calculator
var btnStart = document.querySelector('.btn-start');
var btnPrev = document.querySelector('.btn-prev');
var btnNext = document.querySelector('.btn-next');
var btns = document.querySelector('.calculator__btns');
var step1 = document.querySelector('.calculator-step1');
var step2 = document.querySelector('.calculator-step2');

btnStart.addEventListener('click', function () {
	step2.classList.add('active');
	step1.classList.remove('active');
	btns.style.display = 'flex';
	this.style.display = 'none';
});

// delete btns if step1 .active
if (step1.classList.contains('active')) {
	btns.style.display = 'none';
}

// select next element
btnNext.addEventListener('click', function () {
	let btnNextSpan = document.querySelector('.btn-next span');
	let stepActive = document.querySelector('.calculator-step.active');
	let nextElement = stepActive.nextElementSibling;
	let step8 = document.querySelector('.calculator-step8');

	nextElement.classList.add('active');
	stepActive.classList.remove('active');
	if (step8.classList.contains('active')) {
		btnNextSpan.innerHTML = 'Отправить';
	}
});

// select prev element
btnPrev.addEventListener('click', function () {
	let btnNextSpan = document.querySelector('.btn-next span');
	let step7 = document.querySelector('.calculator-step7');
	let stepActive = document.querySelector('.calculator-step.active');
	let prevElement = stepActive.previousElementSibling;
	prevElement.classList.add('active');
	stepActive.classList.remove('active');
	if (step1.classList.contains('active')) {
		btnStart.style.display = "flex";
		btns.style.display = "none";
	};
	if (step7.classList.contains('active')) {
		btnNextSpan.innerHTML = 'Вперед';
	};
});

let check1 = document.querySelector('#check1');
let check2 = document.querySelector('#check2');
let check3 = document.querySelector('#check3');
let check4 = document.querySelector('#check4');
let bus1 = document.querySelector('.bus1');
let bus2 = document.querySelector('.bus2');
let paz1 = document.querySelector('.paz1');
let paz2 = document.querySelector('.paz2');
let inputBus1 = document.querySelector('#bus1');
let inputPaz1 = document.querySelector('#paz1');
let inputBus2 = document.querySelector('#bus2');
let inputPaz2 = document.querySelector('#paz2');

var inputs = document.querySelectorAll('.input--mode[value="1"]');
// var inputs2 = document.querySelectorAll('.input--mode[value="2"]');

inputs.forEach(input => {
	input.addEventListener('change', function () {
		// var inputsChecked = document.querySelectorAll('.input--mode[value="1"]:checked');
		if (check1.checked) {
			bus1.removeAttribute('disabled', '');
			paz1.removeAttribute('disabled', '');
			bus2.setAttribute('disabled', '');
			paz2.setAttribute('disabled', '');
			inputBus1.removeAttribute('disabled', '');
			inputPaz1.removeAttribute('disabled', '');
		} else if (check3.checked) {
			bus2.removeAttribute('disabled', '');
			paz2.removeAttribute('disabled', '');
			bus1.setAttribute('disabled', '');
			paz1.setAttribute('disabled', '');
			inputBus2.removeAttribute('disabled', '');
			inputPaz2.removeAttribute('disabled', '');
		} else {
			bus1.setAttribute('disabled', '');
			paz1.setAttribute('disabled', '');
			bus2.setAttribute('disabled', '');
			paz2.setAttribute('disabled', '');
			inputBus1.setAttribute('disabled', '');
			inputPaz1.setAttribute('disabled', '');
			inputBus2.setAttribute('disabled', '');
			inputPaz2.setAttribute('disabled', '');
		}
	});
});

// calc A5
$(document).ready(function () {
	$('.label-top .sheet').on('click', function () {
		$(this).toggleClass('active');
		if ($('.label-top .sheet').hasClass('active') == true) {
			$('.label-top').addClass('active');
		} else {
			$('.label-top').removeClass('active');
		}
	})
})

$(document).ready(function () {
	$('.label-bottom .sheet').on('click', function () {
		$(this).toggleClass('active');
		if ($('.label-bottom .sheet').hasClass('active') == true) {
			$('.label-bottom').addClass('active');
		} else {
			$('.label-bottom').removeClass('active');
		}
	})
})

// step 6 должен делать инпут checked если есть хотя бы один .active у .sheet
var sheets = document.querySelectorAll('.sheet-select');
sheets.forEach(sheet => {
	var sheetsActive = document.querySelectorAll('sheet.active');
	sheet.addEventListener('click', function () {
		this.classList.toggle('active');
		if (sheetsActive.length < 1) {
			document.querySelector('#input-step6-1').setAttribute('checked', '');
		} else {
			document.querySelector('#input-step6-1').removeAttribute('checked', '');
		}
	})
})

// checked вторрй этап мобильного кальккулятора
$(document).ready(function () {
	$('#input-mobile-step2-2').on('change', function () {
		$('.calculator-mobile-step2__list-bottom label').attr('disabled', '');
	})
	$('#input-mobile-step2-4').on('change', function () {
		$('.calculator-mobile-step2__list-bottom label').attr('disabled', '');
	})
	$('#input-mobile-step2-1').on('change', function () {
		$('.calculator-mobile-step2__list-bottom label').removeAttr('disabled', '');
	})
	$('#input-mobile-step2-3').on('change', function () {
		$('.calculator-mobile-step2__list-bottom label').removeAttr('disabled', '');
	})
})