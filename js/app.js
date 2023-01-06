// PRELOADER

document.body.onload = function () {
	if (submenu.classList.contains('active')) {
		submenu.classList.remove('active');
	}
setTimeout(function(){
	let preloader = document.getElementById('page-preloader');
	if(!preloader.classList.contains('done')){
		preloader.classList.add('done');
	}
}, 1000);
}

// ANIMATION-ON-SCROLL

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);

	function animOnScroll () {
		for(let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if(animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if(!animItem.classList.contains('_anim-no-hide')) {
				animItem.classList.remove('_active');
			}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
}

// ABOUT-BUTTON

const aboutButton = document.querySelector ('.about__text-description-button');
const list = document.querySelectorAll('.about__list-item')
const menuHeader = document.querySelector('.about__text-list_header');
const menuFooter = document.querySelector('.about__text-list_footer');

aboutButton.addEventListener('click', changeAnimateClass);

function changeAnimateClass () {
	aboutButton.classList.remove('_active');
	aboutButton.classList.add('_hinge');
	for(let i = 0; i < list.length; i++) {
		list[i].classList.add('_active')
	};
	menuHeader.classList.add('_active');
	menuFooter.classList.add('_active');
}

// MOSCOW-SLIDER

const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	centeredSlides: true,
	mousewheel: false,
	parallax: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 60
		}
	},
	navigation: {
    nextEl: '.slider-next-item',
    prevEl: '.slider-prev-item',
  },
});

const sliderBg = new Swiper('.slider_bg', {
	freeMode: true,
	centeredSlides: true,
	parallax: true,
});

sliderMain.controller.control = sliderBg;

// MOSCOW-GALLERY

const imageItem = document.querySelectorAll('.slider__item');
const mainImg = document.querySelector('.modal__img');
const modalMoscow = document.querySelector('.modal');
const overlayMoscow = document.querySelector('.overlay');


const photoes = [
	'/Images/Moscow_gallery_photoes/moscow_photo1.jpg',
	'/Images/Moscow_gallery_photoes/moscow_photo2.png',
	'/Images/Moscow_gallery_photoes/moscow_photo3.jpg',
	'/Images/Moscow_gallery_photoes/moscow_photo4.jpg',
	'/Images/Moscow_gallery_photoes/moscow_photo5.jpg'
]

for (let i = 0; i < imageItem.length; i++) {
	imageItem[i].addEventListener('click', () => {
		overlayMoscow.classList.add('pushed');
		modalMoscow.classList.add('pushed');
		mainImg.src = photoes[i];
	})
}

overlayMoscow.addEventListener('click', () => {
	overlayMoscow.classList.remove('pushed');
	modalMoscow.classList.remove('pushed');
})

// MOSCOW-NAVIGATION

const moscowBlock = document.querySelector('.moscow');
const screenHeight = window.screen.height;

document.querySelectorAll('.cursor').forEach(node => {
	moscowBlock.addEventListener('mousemove', e => {
		const rect = moscowBlock.getBoundingClientRect();
		const y = e.clientY - rect.top;
		node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${y}px;`
	})
})

const moscowNavButtons = document.querySelectorAll('.moscow__navigation-item');
const moscowBanners = document.querySelectorAll('.moscow__block');

for(let i = 0; i < moscowNavButtons.length; i++) {
	moscowNavButtons[i].addEventListener('click', () => {
		moscowBanners.forEach (el => {
			el.classList.remove('chosen');
		});
		moscowBanners[i].classList.add('chosen');
	})
}


const supportPlayButton = document.querySelector('.support-video-button-btn');
const supportLoader = document.querySelector('.support-video-loader ');
const supportPedestrial = document.querySelector('.suppurt-video-pedestal');
const supportTv = document.querySelector('.support-video-bg');
const supportTitle = document.querySelector('.support__text-title');
const supportTitleSpan = supportTitle.querySelector('span');
const supportSubtitle = document.querySelector('.support__text-subtitle');
const supportContentTitle = document.querySelector('.support__text-content-title');
const supportContentSubtitle = document.querySelector('.support__text-content-subtitle');
const supportContent = document.querySelector('.support__text-content-social');

supportTitleSpan.addEventListener('click', () => {
	supportSubtitle.classList.add('clicked');
	supportContentTitle.classList.add('clicked');
	supportContentSubtitle.classList.add('clicked');
	supportContent.classList.add('clicked');
})


supportPlayButton.addEventListener('click', () => {
	setTimeout(startVideo, 4800);
	supportPlayButton.classList.add('notplay');
	supportLoader.classList.add('play');
	setTimeout(() => {
		supportPedestrial.classList.add('openPed');
		supportLoader.classList.add('background');
		supportTv.classList.add('openbg');
	}, 2800);
});

const startVideo = async () => {
  const supportVideo = document.querySelector('.support-video-video');

  try {
    await supportVideo.play();
    supportVideo.setAttribute('autoplay', true);
		supportVideo.classList.add('openVi');
  } catch (err) {
    console.log(err, 'video play error');
  }
}

const changerSubtitle = document.querySelector(".changer-text__subtitile");
const changerSubtitleSpan = changerSubtitle.querySelector('span');
const changerClick = document.querySelector('.changer-text__click');
const changerName = document.querySelector('.changer-text__name');
const changerApp = document.querySelector('.changer-app');

changerSubtitleSpan.addEventListener('click', () => {
	changerClick.classList.add('blocked');
	changerName.classList.add('active');
	changerApp.classList.add('active');
})

const cities = document.getElementById('Cities');
const submenu = document.querySelector('.mainPage__header-leftMenu-submenu');

cities.addEventListener('click' , () => {
	submenu.classList.toggle('active');
})

submenu.addEventListener('click' , () => {
	submenu.classList.remove('active');
})

const jokeItems = document.querySelector('.mainPage__joke').children;
const jokeItemsArr = Array.from(jokeItems);
const jokeButton = document.querySelector('.mainPage__header-rightMenu-logo');
const jokeSpan = document.querySelector('.mainPage__info-des-span');

jokeButton.addEventListener('click', () => {
	jokeItemsArr.forEach((e) => {
		e.classList.add('active');
	});
	jokeSpan.classList.add('active');
});

document.getElementById('About_us').addEventListener('click', scrollToAbout);
document.getElementById('infoButton').addEventListener('click', scrollToAbout);
document.getElementById('aboutFooter').addEventListener('click', scrollToAbout);

function scrollToAbout(e) {
	element = document.getElementById('aboutPage');
	element.scrollIntoView({behavior: "smooth"});
};

document.getElementById('Citi_page').addEventListener('click', scrollToCity);
document.getElementById('cityFooter').addEventListener('click', scrollToCity);

function scrollToCity (e) {
	element = document.getElementById('cityPage');
	element.scrollIntoView({behavior: "smooth"});
};


document.getElementById('Gallery').addEventListener('click', scrollToPlay);
document.getElementById('playFooter').addEventListener('click', scrollToPlay);

function scrollToPlay (e) {
	element = document.getElementById('playPage');
	element.scrollIntoView({behavior: "smooth"});
};

document.getElementById('Support').addEventListener('click', scrollToSupport);
document.getElementById('supportFooter').addEventListener('click', scrollToSupport);

function scrollToSupport(e) {
	element = document.getElementById('supportPage');
	element.scrollIntoView({behavior: "smooth"});
};

document.getElementById('mainFooter').addEventListener('click', scrollToMain);

function scrollToMain(e) {
	element = document.getElementById('mainPage');
	element.scrollIntoView({behavior: "smooth"});
};


