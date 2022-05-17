// JavaScript Document
let imageChange;

	let main1 = document.getElementById('main-1');
	let main2 = document.getElementById('main-2');
	let main3 = document.getElementById('main-3');
	let main4 = document.getElementById('main-4');
	let thumb1 = document.getElementById('image1');
	let thumb2 = document.getElementById('image2');
	let thumb3 = document.getElementById('image3');
	let thumb4 = document.getElementById('image4');
	thumb1.onclick = function () {
		if (main1.style.display('none')) {
			main1.style.display('block');
			main2.stlye.display('none');
			main3.style.display('none');
			main4.style.diaply('none');
		} else {
			return;
		}
	}
	thumb2.onclick = function () {
		if (main2.style.display('none')) {
			main2.style.display('block');
			main1.stlye.display('none');
			main3.style.display('none');
			main4.style.diaply('none');
		} else {
			return;
		}
	}