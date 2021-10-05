var btnPopup = qs("#btnPopup");
var overlay = qs("#overlay");
var btnClose = qs("#btnClose");
var imgAj = qs("#imgAj");
let fileMusique="";
var popup = qs("#popup");
var btnControls = qs(".btnControls");
var imgClips = qs("#imgClips");
var formalClips = qs("#formalClips");
var btnClips = qs("#btnClips");

var imgSamples = qs("#imgSamples");
var formalSamples = qs("#formalSamples");
var btnSamples = qs("#btnSamples");

var titreMusique = qs("#titreMusique");
var imgMusiques = qs("#imgMusiques");
var formalMusiques = qs("#formalMusiques");
var btnMusiques = qs("#btnMusiques");

var resumeMusique = qs("#resumeMusique");
var textMusique = qs("#textMusique");

var maVideo = qs("#previewVid");
var imgInputMusique = qs("#imgInputMusique");
var inputMusique = qs("#inputMusique");
var fileImageMusique = qs("#inputImageMusique");

var btnInputMusique = qs("#btnInputMusique");
var btnInputImageMusique = qs("#btnInputImageMusique");
var inputImageMusique = qs("#inputImageMusique");
var btnPlayPreviewAud = qs("#btnPlayPreviewAud");
var btnResetPreviewAud = qs("#btnResetPreviewAud");
var btnWaveforms = qs("#btnWaveforms");

var btnRecord = qs("#btnRecord");
var btnCutOut = qs("#btnCutOut");

var activePreviewAud  = qs(".activePreviewAud");
var imgBtnPrevAud = qs("#PlayPreviewAud");

var formMusique = qs("#formalMusiques");
var btnSubmitAud = qs("#btnSubmitAud");
var wheel2=qs("#wheel2");
var btnDiskSkin = qs("#btnDiskSkin");
// var inpMus = document.forms.formalMusique.inputMusique;
var audio = qs("#audio");
var start = qs(".start");
var end = qs(".end");
var progressBar = qs(".progress-bar");
var progressBar2 = qs(".progress-bar2");
const now = qs(".now");

var 	previewAudio = document.createElement("div"),
	prevAud,
	audio = document.createElement("audio");
	audio.setAttribute("id", "audio");
	audio.playbackRate=1;
	audio.volume=.5;
var 	waveformed, 
	isWaveforms=false,	 
	v2_offset;

var btnWaveStyle= qs("#btnWaveStyle");
var btnBarStyle= qs("#btnBarStyle");

var activeTuileMusique = qs(".activeTuileMusique");
var btnFlipTuile = qs("#btnFlipTuile");
var isFlipped=false;
btnFlipTuile.onclick= () =>{
	let indice = 2;
	let time = indice * 100;

	if (isFlipped==false){
		cAdd("activeTuileMusique","flipTuileOn");
		//
		setTimeout(() => {qs("#tuileMusique").style.transform= "rotateY(90deg)";}, time);
		setTimeout(() => {cRem("activeTuileMusique","flipTuileOn")}, time);
		isFlipped=true;
		setTimeout(() => {cAdd("pannelMusique","flipTuileOff")}, time);
		setTimeout(() => {qs("#pannelMusique").style.transform= "rotateY(0deg)";}, time * 2);
		setTimeout(() => {cRem("pannelMusique","flipTuileOff")}, time * 2);	
	}
	else{
		cAdd("pannelMusique","flipTuileOn");
		setTimeout(() => {qs("#pannelMusique").style.transform= "rotateY(90deg)";}, time);
		setTimeout(() => {cRem("pannelMusique","flipTuileOn")}, time);
		isFlipped=false;
		setTimeout(() => {cAdd("tuileMusique","flipTuileOff")}, time)
		setTimeout(() => {qs("#tuileMusique").style.transform= "rotateY(0deg)";}, time * 2);
		setTimeout(() => {cRem("tuileMusique","flipTuileOff")}, time * 2);	
	}	
}


var isWaveStyle=false;
btnWaveStyle.onclick= () =>{
	let indice = 2;
	let time = indice * 100;
		loadAudioWaves()
		cAdd("btnWaveStyle","flipTuileOn");
		//
		setTimeout(() => {qs("#btnWaveStyle").style.transform= "rotateY(90deg)";}, time);
		setTimeout(() => {cRem("btnWaveStyle","flipTuileOn")}, time);	
		setTimeout(() => {cAdd("btnBarStyle","flipTuileOff")}, time);
		setTimeout(() => {qs("#btnBarStyle").style.transform= "rotateY(0deg)";}, time * 2);
		setTimeout(() => {cRem("btnBarStyle","flipTuileOff")}, time * 2);

}
btnBarStyle.onclick= () =>{
	loadAudio()
		cAdd("btnBarStyle","flipTuileOn");
		setTimeout(() => {qs("#btnBarStyle").style.transform= "rotateY(90deg)";}, time);
		setTimeout(() => {cRem("btnBarStyle","flipTuileOn")}, time);	
		setTimeout(() => {cAdd("btnWaveStyle","flipTuileOff")}, time)
		setTimeout(() => {qs("#btnWaveStyle").style.transform= "rotateY(0deg)";}, time * 2);
		setTimeout(() => {cRem("btnWaveStyle","flipTuileOff")}, time * 2);		
}


btnPopup.onclick = e => {clickAnim(e);openPopup();}
btnClose.onclick = e => {clickAnim(e);closeFormalMusiques();closePopup();}
fileImageMusique.addEventListener ("change", getImgData);
inputMusique.addEventListener  ("change", setFocus);

document.querySelector ("#imageResumeMusique").onclick= (e)=> {clickAnim(e);uploadImageMusique(e);};
btnPlayPreviewAud.onclick = e => {clickAnim(e);playPreviewAudio(e);};
btnResetPreviewAud.onclick = e => {clickAnim(e);resetPreviewAudio(e);};
btnSubmitAud.onclick = e => {clickAnim(e);submitAudio(e);};
btnInputMusique.onclick = e => {clickAnim(e);uploadMusique(e);};
btnInputImageMusique.onclick = e => {clickAnim(e);uploadImageMusique(e);};
btnCut.onclick = e => {clickAnim(e);displayCut();};
btnCutOut.onclick = e => {clickAnim(e);displayCut();};
//btnRecord.onclick = e => {clickAnim(e);record(e);};
var isOverlayCut=false;
var overlayCut=qs("#overlayCut")
function displayCut(){
	if (isOverlayCut==false){overlayCut.style.display= "block";isOverlayCut=true}
	else {overlayCut.style.display= "none";isOverlayCut=false}
}

function displayWindowSize(){
	// Get width and height of the window excluding scrollbars
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	
	// Display result inside a div element
	c("Width: " + w + ", " + "Height: " + h);
}
	
// Attaching the event listener function to window's resize event
window.addEventListener("resize", closeWaveform);
function closeWaveform(){
	if(waveformed)waveformed.style.transform = "translateY(-2000px)"
	isWaveforms=false;	
	//clearCanvas();
		   
}



var divInfo = document.createElement('div');
function displayDivInfo(text){
	if(text){
	    	//Détection du navigateur
	    	is_ie = (navigator.userAgent.toLowerCase().indexOf("msie") != -1) && (navigator.userAgent.toLowerCase().indexOf("opera") == -1); 		
	    	//Création d'une div provisoire
	    	
	    	divInfo.style.position = 'absolute';
	    	divInfo.style.zIndex=9;
	    	divInfo.style.opacity=1;
		    divInfo.id = 'divInfo';
	    	divInfo.classList.add("divInfo")
	    	document.onmousemove = function(e){
			x = (!is_ie ? e.pageX-window.pageXOffset : e.x+document.body.scrollLeft);
			y = (!is_ie ? e.pageY-window.pageYOffset : e.y+document.body.scrollTop);		
	    	}
		divInfo.innerHTML = text;
		document.body.appendChild(divInfo);		
	}
	else{
	    document.onmousemove = '';
	}
}
/* ********************************************************** */
$(document).bind('mousemove', function(e){
	$('#divInfo').css({		
		backgroundColor:"white",
		borderRadius:"2px",
		color:"rgb(50,50,50)",
	    	left: e.pageX - 15,
	    	top: e.pageY - 35,
	    	animation: "heartbeat_text"	    
	});
});


    var progress2, start2 , progressBar2, end2, now2 ;
    var view1 = document.createElement("canvas"),
    view2 = document.createElement("canvas"),
    view3 = document.createElement("canvas");

function createCanvasWaveform(){	
	waveformed = document.createElement("div");
	waveformed.setAttribute("id", "waveforms");
	document.body.append(waveformed);

	view1.setAttribute("id", "view1");
	view1.setAttribute("class", "canvasWave");
	view1.setAttribute("width", "820");
	waveformed.append(view1);	
	
	view2.setAttribute("id", "view2");
	view2.setAttribute("class", "canvasWave");
	view2.setAttribute("width", "820");
	waveformed.append(view2);	
	
	view3.setAttribute("id", "view3");
	view3.setAttribute("class", "canvasWave");
	view3.setAttribute("width", "820");
	waveformed.append(view3);

	progress2 = document.createElement("div");
	progress2.setAttribute("class", "progress2");
	waveformed.append(progress2);
	
	start2 = document.createElement("span");
	start2.setAttribute("class", "start2");
	progress2.append(start2);
	
	progressBar2 = document.createElement("div");
	progressBar2.setAttribute("class", "progress-bar2");
	progress2.append(progressBar2);
	
	now2 = document.createElement("div");
	now2.setAttribute("class", "now2");
	progressBar2.append(now2);
	
	end2 = document.createElement("span");
	end2.setAttribute("class", "end2");
	progress2.append(end2);
	
	waveformed.style.transform = "translateY(4000px)";

}

/* Force the focus on the formal "Musiques" */
function setFocus(){	
	let myMusique = qs(".activeMusiques");
	if(fileMusique && fileMusique == ""){myMusique.style.transform = "translate(0%,0%) scale(1)"}
	else{myMusique.style.transform = "translate(0%,5%) scale(1.15)";}
}

/* Poursuivre l'ajout */

function continueAdd(g){
	var overOverlay = document.createElement("div");
	var question = document.createElement("div");
	question.className = "continueAdd";
	question.innerHTML= "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "Poursuivre l'ajout ?";
	question.style.top = `${g.pageY-55}px`;
	question.style.left = `${g.pageX - 78}px`;
	overOverlay.appendChild(question);
	overOverlay.className = "overOverlay";
	document.body.appendChild(overOverlay);	

	var buttonYes = document.createElement ("span");	
	var imgYes = document.createElement("IMG");	
	buttonYes.setAttribute("id","buttonYes");
	buttonYes.classList.add("buttonYes");	
	question.append(buttonYes);
	imgYes.setAttribute("id","imgYes");
	imgYes.setAttribute("width", "50px");
	imgYes.setAttribute("src","img/submitButton.png");
	buttonYes.append(imgYes);

	var buttonNo = document.createElement ("span");	
	var imgNo = document.createElement("IMG");	
	buttonNo.setAttribute("id","buttonNo");
	buttonNo.classList.add("buttonNo");	
	question.append(buttonNo);
	imgNo.setAttribute("id","imgNo");
	imgNo.setAttribute("width", "50px");
	imgNo.setAttribute("src","img/prevResetButtonSelect.png");
	buttonNo.append(imgNo);

	buttonYes.onmouseover = () => {qs("#imgYes").style.transform = "scale(1.15)";};
	buttonYes.onmouseout = () => {qs("#imgYes").style.transform = "scale(1)";};
	buttonNo.onmouseover = () => {qs("#imgNo").style.transform = "scale(1.15)";};
	buttonNo.onmouseout = () => {qs("#imgNo").style.transform = "scale(1)";};

	function closeQuestionContinue(){overOverlay.remove(); question.remove();buttonYes.remove();buttonNo.remove();}
	buttonYes.addEventListener ("click", () => {
		closeQuestionContinue();
		closeFormalClips();
		closeFormalSamples();	
		imgMusiques.setAttribute("src", "img/musiqueselect.png");
		cAdd("formalMusiques","activeMusiques");
		cAdd("btnMusiques","purpleShadow");
		cRem("btnMusiques","whiteShadow");
		if(document.body.contains(fileDisplay)){fileDisplay.remove()};
		displayFilename(fileMusique);
		getMusicReady();
	});
	buttonNo.addEventListener ("click", () => {
		closeQuestionContinue();
		closeFormalMusiques();
		closePopup();
		fileMusique="";
		if(document.body.contains(fileDisplay)){fileDisplay.remove()};
		isSetIntBarz=false;
		isSetIntCoolBarz=false;
		isSetIntBarz=false;
		isSetIntCoolCircleBars=false;
		if(audioSpeed)audioSpeed.style.transform = "translateY(4000px)";
	});
}


/* ** Tools ** */

/* add global event listener */
function addGlobalEventListener(type, selector, callback){
	document.addEventListener(type, e => {
	if(e.target.matches(selector)) callback(e)
	})
}

/* shortcut for querySelector */
function qs(querySelectorName){return document.querySelector(querySelectorName)}

/* shortcut for getElementById */
function gi(idName){return document.getElementById(idName)}

/* shortcut for getElementsByClassName */
function gc(className){return document.getElementsByClassName(className)}

/* class remover */
function cRem(parent, child){if(gc(parent)[0].classList.contains(child)){return gc(parent)[0].classList.remove(child);}
}

/* class adder */
function cAdd(parent, child){ return gc(parent)[0].classList.add(child);}

/* element by ID remover */
function eRem(element){
if (document.contains(gi(element))){gi(element).remove();}}

/* a shortcut for console.log */
function c(message){console.log(message);}

/* an attribue setter to symplify objet creations */
function setElementAttribut(element, attributes, destination) {	
	for (var key in attributes) {
	  if (key == "class") {
	      element.classList.add.apply(element.classList, attributes[key]); // add all classes at once
	  } else {
	    element[key] = attributes[key];
	  }
	}	
	destination.appendChild(element);
}

function setButtonAttribut(button, attributes, destination, image, imageSource) {
	for (var key in attributes) {
		if (key == "class") {
			button.classList.add.apply(button.classList, attributes[key]); // add all classes at once
		} 
		else {
			button[key] = attributes[key];
		}
	}	
	destination.appendChild(button);
	image.setAttribute("src", imageSource);
	image.setAttribute("width", "50px");
	button.appendChild(image);
}


/* Click Amination */
function clickAnim(e) {
	const rond = document.createElement("div");
	rond.className = "clickAnim";
	rond.style.top = `${e.pageY - 25}px`;
	rond.style.left = `${e.pageX - 25}px`;	
	document.body.appendChild(rond);
	setTimeout(() => {rond.remove();}, 1500)
}

/* Inputs Auto-grow */
document.querySelectorAll('input[type="textarea"]').forEach(function(node) {
	var minWidth = parseInt(getComputedStyle(node).minWidth) || node.clientWidth;
	node.style.overflowX = "auto"; // "hidden"

	node.onchange = node.oninput = () => {
		node.style.width = minWidth + "px";
		node.style.width = node.scrollWidth + "px";
	};
});

/* word-wrapper */
function wordWrap(str, maxWidth) {
	var newLineStr = "\n"; done = false; res = "";
	while (str.length > maxWidth) {                 
	    	found = false;
	    	// Inserts new line at first whitespace of the line
	   	for (i = maxWidth - 1; i >= 0; i--) {
			if (testWhite(str.charAt(i))) {
		    		res = res + [str.slice(0, i), newLineStr].join("");
		    		str = str.slice(i + 1);
		    		found = true;
		    		break;
			}
	    	}
	    	// Inserts new line at maxWidth position, the word is too long to wrap
	   	 if (!found) {
			res += [str.slice(0, maxWidth), newLineStr].join("");
			str = str.slice(maxWidth);
		}  
	}
	return res + str;
}    
function testWhite(x) {
	var white = new RegExp(/^\s$/);
	return white.test(x.charAt(0));
};


/* ** Pop-ups management ** */

/* open/close the central pop-up on click */
function openPopup(){
	if (overlay.classList.contains ("active") == true){closeFormalMusiques();closePopup();}
	else{
		imgAj.setAttribute("src", "img/ajselect.png");
		cAdd("popup","active");
		cAdd("overlay","active");
	}
};

/* close the central pop-up and everything that depends on it */
function closePopup(){	
	imgAj.setAttribute("src", "img/aj.png");
	imgClips.setAttribute("src", "img/clips.png");
	imgSamples.setAttribute("src", "img/samples.png");
	imgMusiques.setAttribute("src", "img/musiques.png");
	cRem("btnClips", "purpleShadow");
	cRem("btnSamples", "purpleShadow");
	cRem("btnMusiques", "purpleShadow");
	if(document.body.contains(fileDisplay)){fileDisplay.remove()};
	//audio.removeEventListener("timeupdate", progressBar, true);
	if(waveformed) waveformed.style.transform = "translateY(4000px)";	
	isWaveforms=false;	
	closeFormalMusiques;
	closeFormalSamples;
	closeFormalClips;
	cRem("formalClips", "activeClips");
	cRem("formalSamples", "activeSamples");
	cRem("formalMusiques", "activeMusiques");
	cRem("previewVid", "activePreviewVid");
		
	removeVisualiserButton();
	cRem("audioControls", "activeAudioControls");
	cRem("tuileMusique", "activeTuileMusique");
	cRem("overlay", "active");
	cRem("popup", "active");
	cRem("audioControls", "activeAudioControls");
	imgBtnPrevAud.setAttribute("src", "img/prevPauseButtonSelect.png");
	maVideo.pause();
	audio.pause();

	running = false;
	qs("#inputClip").value = "";
	imgInputMusique.setAttribute("src", "img/upload.png");	
		
}
/* change btnPopup color on mouse hover */
qs("#btnPopup").onmouseover = () => {mouseOverPopup()};
qs("#btnPopup").onmouseout = () => {mouseOutPopup()};

function mouseOverPopup(){imgAj.setAttribute("src", "img/ajselect.png");}

function mouseOutPopup(){
  if (popup.classList.contains ("active") == true) {imgAj.setAttribute("src", "img/ajselect.png");}
  else {imgAj.setAttribute("src", "img/aj.png");}  
}/* change btnPopup color on mouse hover */

/* close the pop-up by clicking outside of it */
qs("#overlay").onclick = e => {
	if(e.target != qs("#popup")){
		let titMus = document.forms.formalMusique.titreMusique.value;
		let texMus = document.forms["formalMusique"]["textMusique"].value;		
		
		let inpImgMus = document.forms["formalMusique"]["inputImageMusique"].value;
		if (fileMusique !=""|| titMus != "" || texMus != "" || inpImgMus != ""){
			clickAnim(e);			
			continueAdd(e);
		}
		else{
			closePopup();			
		}
	}

}/* close the pop-up by clicking outside of it */

/*change the style */
function twChangeStyle(sTitre) {
  var i, a;
  // Boucle tout les élément « link » du document. 
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    // Si l’élément est à un attribut « rel » et qu’il contient un titre.
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      // Désactive la feuille de style
      a.disabled = true;
      // Active la feuille de style avec le bon titre.
      if(a.getAttribute("title") == sTitre) a.disabled = false;
    }
  }
}/* change the style */

/* formalSamples */
btnSamples.addEventListener("click", openformalSamples);

function openformalSamples(){
	closeFormalMusiques();
	closeFormalClips();
	if (formalSamples.classList.contains ("activeSamples") == true){
		imgSamples.setAttribute("src", "img/samples.png");
		cRem("formalSamples","activeSamples");
		cAdd("btnSamples","whiteShadow");
		cRem("btnSamples","purpleShadow");		
	}
	else{
		imgSamples.setAttribute("src", "img/sampleselect.png");
		cAdd("formalSamples","activeSamples");		
		cAdd("btnSamples","purpleShadow");
		cRem("btnSamples","whiteShadow");	
	}
}

function closeFormalSamples(){
	imgSamples.setAttribute("src", "img/samples.png");	
	cRem("formalSamples","activeSamples");
	cRem("btnSamples","purpleShadow");
}

qs("#btnSamples").onmouseover = () => {mouseOverformalSamples()};
qs("#btnSamples").onmouseout = () => {mouseOutformalSamples()};

function mouseOverformalSamples() {
	if (formalSamples.classList.contains ("activeSamples") == true){		
		cAdd("btnSamples","purpleShadow");
		cRem("btnSamples","whiteShadow");		
	}
	else{		
		cAdd("btnSamples","whiteShadow");
		cRem("btnSamples","purpleShadow");		
	}
}

function mouseOutformalSamples() {
  if (formalSamples.classList.contains ("activeSamples") == true){cAdd("btnSamples","purpleShadow");}
  else{cRem("btnSamples","whiteShadow");}  
}/* formalSamples */

/* formalMusiques */
btnMusiques.addEventListener("click", openformalMusiques);

function openformalMusiques(){
	closeFormalClips();
	closeFormalSamples();
	if (formalMusiques.classList.contains ("activeMusiques") == true){
		cAdd("btnMusiques","whiteShadow");
		closeFormalMusiques();
	}
	else{		
		imgMusiques.setAttribute("src", "img/musiqueselect.png");
		cAdd("formalMusiques","activeMusiques");
		cAdd("btnMusiques","purpleShadow");
		cRem("btnMusiques","whiteShadow");		
		qs("#inputMusique").value = "";		
	}
}

function closeFormalMusiques(){	
	imgMusiques.setAttribute("src", "img/musiques.png");
	cRem("formalMusiques","activeMusiques");
	cRem("btnMusiques","purpleShadow");
	if(previewAud) cRem("previewAud","activePreviewAud");
	cRem("audioControls","activeAudioControls");
	cRem("tuileMusique","activeTuileMusique");
	imgBtnPrevAud.setAttribute("src", "img/prevPauseButtonSelect.png");
	if(audioSpeed)audioSpeed.style.transform = "translateY(4000px)";
	if(wheelContainer)wheelContainer.style.transform="scale(.001)";
	if(wheelContainer2)wheelContainer2.style.transform="scale(.001)";
	document.querySelector("#sampleBox").style.transform= "rotateX(90deg)";
	qs("#pannelMusique").style.transform= "rotateY(90deg)";
	audio.pause();
	
	running = false;	
	isWaveforms=false;	
	qs("#inputMusique").value = "";
	imgInputMusique.setAttribute("src", "img/upload.png");	
	var progressBar2=qs(".progress-bar2")	
	if(progressBar2)progressBar2.style.opacity=0;
	removeVisualiserButton();
	clearAllIntervals();
	clearInterval(timer); 	
	if(waveformed) waveformed.style.transform = "translateY(4000px)";
	cancelEveryAnimationFrame();
	if(document.body.contains(fileDisplay)){fileDisplay.remove()};
	popup.style.transform="scale(1)";
}


qs("#btnMusiques").onmouseover = function() {mouseOverformalMusiques()};
qs("#btnMusiques").onmouseout = function() {mouseOutformalMusiques()};

function mouseOverformalMusiques() {
	if (formalMusiques.classList.contains ("activeMusiques") == true){
		cAdd("btnMusiques","purpleShadow");
		cRem("btnMusiques","whiteShadow");
	}
	else{
		cAdd("btnMusiques","whiteShadow");
		cRem("btnMusiques","purpleShadow");
	}
}

function mouseOutformalMusiques() {
  if (formalMusiques.classList.contains ("activeMusiques") == true){cAdd("btnMusiques","purpleShadow");}
  else{cRem("btnMusiques","whiteShadow");}  
}/* formalMusiques */

/* formalClips */
btnClips.addEventListener("click", openformalClips);

function openformalClips(){
	closeFormalSamples();
	closeFormalMusiques();
	if (formalClips.classList.contains ("activeClips") == true){
		imgClips.setAttribute("src", "img/clips.png");
		cRem("formalClips","activeClips");
		cAdd("btnClips","whiteShadow");
		cRem("btnClips","purpleShadow");
		cRem("previewVid","activePreviewVid");		
		maVideo.pause();
		qs("#inputClip").value = "";
	}
	else{
		imgClips.setAttribute("src", "img/clipselect.png");
		cAdd("formalClips","activeClips");
		cAdd("btnClips","purpleShadow");
		cRem("btnClips","whiteShadow");
		qs("#inputClip").value = "";
	}
}

function closeFormalClips(){
	imgClips.setAttribute("src", "img/clips.png");
	cRem("formalClips","activeClips");
	cRem("btnClips","purpleShadow");
	cRem("previewVid","activePreviewVid");
	maVideo.pause();
	qs("#inputClip").value = "";
}

qs("#btnClips").onmouseover = () => {mouseOverformalClips()};
qs("#btnClips").onmouseout = () => {mouseOutformalClips()};

function mouseOverformalClips() {
	if (formalClips.classList.contains ("activeClips") == true){
		cAdd("btnClips","purpleShadow");
		cRem("btnClips","whiteShadow");
	}
	else{
		cAdd("btnClips","whiteShadow");
		cRem("btnClips","purpleShadow");
	}
}

function mouseOutformalClips() {
  if (formalClips.classList.contains ("activeClips") == true){cAdd("btnClips","purpleShadow");}
  else{cRem("btnClips","whiteShadow");}  
}/* formalClips */


/* Preview Clip display */
qs("#inputClip")
.onchange = event => {
	let file = event.target.files[0];
  	let blobURL = URL.createObjectURL(file);
  	qs("video").src = blobURL;
  	cAdd("previewVid","activePreviewVid");
}

/* ** Preview Musiques ** */


/* trigger upload musique as a button */
function uploadMusique (){
	qs("#imgInputMusique").setAttribute("src", "img/uploadSelect.png");
	qs("#inputMusique").click();
	if(document.body.contains(fileDisplay)){fileDisplay.remove()};
}

/* Time Conversion & Progress Bar */
function conversion (value) {
	let minute = Math.floor(value / 60)
	minute = minute.toString().length === 1 ? ("0" + minute) : minute
	let second = Math.round(value % 60)
	second = second.toString().length === 1 ? ("0" + second) : second
	return `${minute}:${second}`
}
				
function format(time) {   
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;
    
        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";
        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
}    
/* Record Audio */

var shareBtn = document.querySelector("button#shareScreen");
shareBtn.onclick = shareScreen;

var btnScreenCapture=document.querySelector("#btnScreenCapture");
btnScreenCapture.onclick = ()=> shareBtn.click();
var recBtn = document.querySelector("#btnRecord");
recBtn.onclick = onBtnRecordClicked;

var stopBtn = document.querySelector("#btnStop");
stopBtn.onclick = onBtnStopClicked;

var videoElement = document.querySelector("#miniScreen");
videoElement.style.backgroundColor = "black";

var downloadLink = document.querySelector("a#downloadLink");

var mediaRecorder;
var localStream = null;
document.getElementById("error").innerHTML = "";



function shareScreen(){
  console.log("shareScreen");
  document.getElementById("error").innerHTML = "";
  var screenConstraints = { video: true, audio: true };

  navigator.mediaDevices.getDisplayMedia(screenConstraints).then(function(screenStream){
	
    /* use the screen & audio stream */
   
    var micConstraints = {audio:true};
    navigator.mediaDevices.getUserMedia(micConstraints).then(function(micStream) {
      /* use the microphone stream */

      //create a new stream in which to pack everything together
      var composedStream = new MediaStream();

      //add the screen video stream
      screenStream.getVideoTracks().forEach(function(videoTrack) {
        composedStream.addTrack(videoTrack);
      });

      //create new Audio Context
      //var context = new AudioContext();

      //create new MediaStream destination. This is were our final stream will be.
      var audioDestinationNode = context.createMediaStreamDestination();

      //check to see if we have a screen stream and only then add it
      if (screenStream && screenStream.getAudioTracks().length > 0) {
        //get the audio from the screen stream
        const systemSource = context.createMediaStreamSource(screenStream);

        //set it's volume (from 0.1 to 1.0)
        const systemGain = context.createGain();
        systemGain.gain.value = 1.0;

        //add it to the destination
        systemSource.connect(systemGain).connect(audioDestinationNode);

      }

      //check to see if we have a microphone stream and only then add it
      if (micStream && micStream.getAudioTracks().length > 0) {
        //get the audio from the microphone stream
        const micSource = context.createMediaStreamSource(micStream);

        //set it's volume
        const micGain = context.createGain();
        micGain.gain.value = 1.0;

        //add it to the destination
        micSource.connect(micGain).connect(audioDestinationNode);
      }

      //add the combined audio stream
      audioDestinationNode.stream.getAudioTracks().forEach(function(audioTrack) {
        composedStream.addTrack(audioTrack);
      });

      //pass over to function that shows the stream and activates the recording controls
      onCombinedStreamAvailable(composedStream)

    }).catch(function(err) {
      console.log(err);
      document.getElementById("error").innerHTML = "You need a microphone to record your screen";
    });
  }).catch(function(err) {
    console.log(err);
    document.getElementById("error").innerHTML = 'You need to "share" your screen to yourself, in order to record it';
  });
}

function onCombinedStreamAvailable(stream) {
  console.log("onCombinedStreamAvailable");
  localStream = stream;
  
  videoElement.srcObject = localStream;
  videoElement.play();
  videoElement.muted = true;
  recBtn.disabled = false;
  shareBtn.disabled = true;
  stopBtn.disabled = true;
}

function onBtnRecordClicked() {
  console.log("onBtnRecordClicked");
  if (localStream != null) {
    mediaRecorder = new MediaRecorder(localStream);
    mediaRecorder.onstop = function() {
      console.log("mediaRecorder.onstop");
      
      var blob = new Blob(chunks, { type: "video/webm" });
      chunks = [];
      var videoURL = window.URL.createObjectURL(blob);

      downloadLink.href = videoURL;
      videoElement.src = videoURL;
      downloadLink.innerHTML = "Download video file";
    }
    
    let chunks = [];
    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }

    mediaRecorder.start(2);
    console.log(mediaRecorder.state);
    
    recBtn.style.background = "red";
    recBtn.style.color = "black";
    
    recBtn.disabled = true;
    shareBtn.disabled = true;
    stopBtn.disabled = false;
  }else{
    console.log("localStream is missing");
  }
}

function onBtnStopClicked(){
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  recBtn.style.background = "";
  recBtn.style.color = "";
}

/* Play Preview */

function playPreviewAudio(){
	if (audio.paused){
		popup.style.transform="scale(.001)";	
		audio.play();
		running = true;
		imgBtnPrevAud.setAttribute("src", "img/prevPauseButtonSelect.png");
		setAllIntervals();		
	}
	else{
		audio.pause();
		running = false;
		imgBtnPrevAud.setAttribute("src", "img/prevPlayButtonSelect.png");
		clearAllIntervals();	
	}
};

function setAllIntervals(){
	if(isSetIntBarz==true) {clearInterval(setInterBarz);setIntBarz(speedBarz);}
	if(isSetIntCoolBarz==true) {clearInterval(setInterCoolBarz);setIntCoolBarz();}
	if(isSetIntCoolCircleBars==true) {clearInterval(setInterCoolCircleBars);setIntCoolCircleBars();}
}

function clearAllIntervals(){
	if(isSetIntBarz==true) {clearInterval(setInterBarz);}	
	if(isSetIntCoolBarz==true) {clearInterval(setInterCoolBarz);}
	if(isSetIntCoolCircleBars==true) {clearInterval(setInterCoolCircleBars);}
	
}

/* Reset File/Preview */
function resetPreviewAudio(){
	cancelEveryAnimationFrame();
	clearAllIntervals();
	audio.pause();
	if(audioSpeed)audioSpeed.style.transform = "translateY(4000px)";
	if(wheelContainer)wheelContainer.style.transform="scale(.001)";
	if(wheelContainer2)wheelContainer2.style.transform="scale(.001)";	
	qs("#pannelMusique").style.transform= "rotateY(90deg)";
	running = false;
	isWaveforms=false;	
	qs("#inputMusique").value = "";
	clearInterval(timer);    
	removeVisualiserButton(); 
	isSetIntBarz=false;
	isSetIntCoolBarz=false;
	isSetIntBarz=false;
	isSetIntCoolCircleBars=false;
	var progressBar2=qs(".progress-bar2")	
	progressBar2.style.opacity=0;
	cRem("previewAud","activePreviewAud");	   	
	cRem("audioControls","activeAudioControls");
	cRem("tuileMusique","activeTuileMusique");	
	waveformed.style.transform = "translateY(4000px)";	
	imgBtnPrevAud.setAttribute("src", "img/prevPauseButtonSelect.png");
	imgInputMusique.setAttribute("src", "img/upload.png");
	let myMusique = qs(".activeMusiques");
	myMusique.style.transform = "";	
	fileMusique="";
	if(document.body.contains(fileDisplay)){fileDisplay.remove()};
	popup.style.transform="scale(1)";
}
    
/* Submit Audio File */
function submitAudio() {
	let titMus = document.forms["formalMusique"]["titreMusique"].value;
	if(fileMusique==""){
		alert("Veuillez uploader un son");		    
	}
	else if (fileMusique!="" && titMus==""){alert("Veuillez donner un titre");}	    
	else {		
		closeFormalMusiques();
		formMusique.submit();
		imgBtnInputMusique.setAttribute("src", "img/upload.png");
	}	
}
    
/* Slider Volume */ 
let volumes = qs("#volumeControl");
volumes.addEventListener("input", e => {audio.volume = e.currentTarget.value / 100;});


var fileDisplay;
function displayFilename(fileName){
	fileDisplay = document.createElement("div");
	fileDisplay.classList.add("fileDisplay");
	let str ;
	str= fileName.name;
	str =str.substring(0, str.length - 4);
	fileDisplay.innerHTML=str; 	
	document.body.appendChild(fileDisplay);
}


var formatsList = ["mpeg", "x-m4a", "x-ms-wma"]

/* input music by drag-and-drop */
var dragTimer;
var data;
$(document).on('dragover', ()=>{$('#__drop').addClass('show');return false;});
      
$('#__drop').on('drop', e => {
	
	e.stopPropagation();
	e.preventDefault();
	closeFormalSamples();
	closeFormalClips();
	data = e.originalEvent.dataTransfer;
	//audio.removeEventListener("timeupdate", progressBar, true);
	if (data.types && (data.types.indexOf ? data.types.indexOf('Files') != -1 : data.types.contains('Files'))) {		
		if(document.body.contains(fileDisplay))fileDisplay.remove();

		fileMusique = data.files[0];	
		displayFilename(fileMusique);	
		if (fileMusique.type =="audio/mpeg"||fileMusique.type =="audio/x-m4a"||fileMusique.type =="audio/x-ms-wma"){		
			blobURL = URL.createObjectURL(fileMusique);		
			audio.src =blobURL;
			inputMusique = blobURL;
			if (status === 1)forceStop = true;
		   
			ini();
			imgAj.setAttribute("src", "img/ajselect.png");
			imgMusiques.setAttribute("src", "img/musiqueselect.png");		
			imgInputMusique.setAttribute("src", "img/uploadSelect.png");
			cAdd("popup","active");
			cAdd("overlay","active");
			cAdd("formalMusiques","activeMusiques");
			cAdd("btnMusiques","purpleShadow");
			cRem("btnMusiques","whiteShadow");
			
			getMusicReady();
			setFocus();
			$('#__drop').removeClass('show').addClass('hidden');
		}
		else{alert ("Fichier non Audio");$('#__drop').removeClass('show').addClass('hidden');}
  	}
	else{$('#__drop').removeClass('show').addClass('hidden');}	
});
      
$('#__drop').on('dragleave', () => {$('#__drop').removeClass('show').addClass('hidden');});


/* load music from a regular input*/

qs("#inputMusique").onchange = 
	event => {			
	fileMusique = event.target.files[0];	
	displayFilename(fileMusique);	
	audio.src = URL.createObjectURL(fileMusique);
	ini();
	getMusicReady();	  
};


var running, timer;
var previewAud =  document.createElement("div");
previewAudio.setAttribute("id", "previewAud");
document.body.append(previewAudio)
var prevAud =  document.createElement("canvas");
prevAud.setAttribute("id", "canvas")
prevAud.setAttribute("class", "previewAud");
previewAudio.append(prevAud);

var audioSpeed = qs("#audioSpeed");
var audioDistortion = qs("#audioDistortion");
var audioPitch = qs("#audioPitch");

function makeDistortionCurve(amount) {
	var k = typeof amount === 'number' ? amount : 50,
	n_samples = 44100,
	curve = new Float32Array(n_samples),
	deg = Math.PI / 180,
	i = 0,
	x;
	for ( ; i < n_samples; ++i ) {
	  	x = i * 2 / n_samples - 1;
	  	curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
	}
	return curve;
};
var blobURL
var distord;
var wheelContainer=qs("#wheelContainer");
var wheelContainer2=qs("#wheelContainer2");

/* Plays the previously loaded music */
function getMusicReady(){	
	
	
	distord=0
	if(waveformed){waveformed.remove();isWaveforms=false;}	
	audioSpeed.style.transform = "";
	popup.style.transform="scale(.001)";
	previewAudio.append(audio);
	createCanvasWaveform();		
	wheelContainer.style.transform="scale(1)";
	wheelContainer2.style.transform="scale(1)";
	if(isFlipped==true)qs("#pannelMusique").style.transform= "rotateY(0deg)";
	setInterval(() => {timeConverter()}, 1000)
	removeVisualiserButton();
	cancelEveryAnimationFrame();
	imgBtnPrevAud.setAttribute("src", "img/prevPlayButtonSelect.png");
	cAdd("audioControls","activeAudioControls");
	cAdd("tuileMusique","activeTuileMusique");	
	cAdd("previewAud","activePreviewAud");
	
	// audio.play();
	// running = true;
	// status=1;
	
	context = context ?? new AudioContext();
	distortion = distortion ?? context.createWaveShaper();
	
	$('.audioDistortion').next().text('Buzz');
	audioDistortion.value=0;
	$('.audioDistortion').on('input', function(e) {
		var $set = $(this).val()*.05;
		$set= Math.round($set*10)/10;
		$(this).next().text($set);
		distord= e.currentTarget.value * 5;
		distortion.curve = makeDistortionCurve(distord);
		
	});
		
	src = src ?? context.createMediaElementSource(audio);	
	analyser = analyser ?? context.createAnalyser();
	
	biquadFilter = biquadFilter ?? context.createBiquadFilter();
	// let osc = context.createOscillator();

	// let f1 = 440;
	// let f2 = 440 * Math.pow(2, 1/12);
	// let f3 = 440 * Math.pow(2, 2/12);

	// osc.frequency.setValueAtTime(src, context.currentTime + 1);
	// osc.frequency.linearRampToValueAtTime(f2, context.currentTime + 2);
	// osc.frequency.setValueAtTime(f2, context.currentTime + 3);
	// osc.frequency.linearRampToValueAtTime(f3, context.currentTime + 4);

	// osc.connect(context.destination);
	// osc.start();
	// osc.stop(context.currentTime + 5);
	//src.connect(analyser);
// 	var player = new Tone.Player("./output.mp3").sync().start(0);

// 	var pitchShift = new Tone.PitchShift({
	//     pitch: -5
	// 	}).toMaster();
	
	// 	player.connect(pitchShift);
	
	// 	Tone.loaded().then(() => {
		//     		//alert('Ready for play');
		
		
		// 	// window.play = function() {
//     	Tone.Transport.start();
// });

// }
var source;
source = context.createBufferSource();

$('.audioPitch').next().text('Pitch');
audioPitch.value=25;
function loadSample(url) {
	return fetch(url)
	.then(response => response.arrayBuffer())
	.then(buffer => context.decodeAudioData(buffer));
}

function playSample(sample) {
	source.buffer = sample;
	$('.audioPitch').on('input', function(e) {
		var $set = $(this).val()/25;
		$set= Math.round($set*10)/10;
		$(this).next().text($set);
		pitchy= e.currentTarget.value/25;
	
		
		source.connect(context.destination); 
		
		//source.connect();
		source.playbackRate.value = pitchy;
		source.playbackRate=1;		
	})
	
	source.start(0);
	}
	loadSample(blobURL)
	.then(sample => {

		playSample(sample)
		
	});
	
	
	
	
	

	
	





// 	var audioContext = context;
// 	bufferSound(audioContext, audioSrc).then(function (buffer) {
// 		var g = audioContext.createGain();
// 		g.gain.value = 1;
// 		g.connect(audioContext.destination);
		
// 		var bq = audioContext.createBiquadFilter();
// 		// found out about detune here: http://chimera.labs.oreilly.com/books/1234000001552/ch04.html
// 		bq.detune.value = -440;
// 		bq.connect(g);
		
// 		var src = audioContext.createBufferSource();
// 		src.buffer = buffer;
// 		if(src.started)src.pause()
// 		else{
// 		src.connect(bq);
// 		src.start();}
// 	});
	
// });
	
	src.connect(distortion);
	distortion.oversample = '4x';
	biquadFilter.gain.setTargetAtTime(0, context.currentTime, 0);
	distortion.curve = makeDistortionCurve(distord);
	// biquadFilter.type = "lowshelf";
	// biquadFilter.frequency.value = 1000;
	// biquadFilter.gain.value = 30;
	
	distortion.connect(biquadFilter);
	
	biquadFilter.connect(analyser);
	
	analyser.connect(context.destination); 
	splitter = splitter ?? context.createChannelSplitter();
	src.connect(splitter);
	splitter.connect(context.destination);
	canvas = canvas ?? qs("#canvas");
	ctx = ctx ?? canvas.getContext("2d");
	
	analyser.fftSize = 2048;
	bufferLength = analyser.frequencyBinCount;	    
	dataArray2048 = new Uint8Array(bufferLength);
	
	analyser.fftSize = 256;      
	bufferLength = analyser.frequencyBinCount;      
	dataArray256 = new Uint8Array(bufferLength);	
	
	prevAud.onclick = e => {clickAnim(e);prevAud.requestFullscreen();prevAud.style.borderRadius= "0px";}
	







	
	/* ** some actions at the end of a track ** */
	audio.addEventListener("ended", function(){
		audio.currentTime = 0;	
		clearAllIntervals();
		audio.pause();
		running = false;
		isWaveforms=false;	
		isSetIntBarz=false;
		isSetIntCoolBarz=false;
		isSetIntBarz=false;
		isSetIntCoolCircleBars=false;
		imgBtnPrevAud.setAttribute("src", "img/prevPlayButtonSelect.png");
		if (forceStop) {
			forceStop = false;
			status = 1;
			return;
		};
		status = 0;	
		popup.style.transform="scale(1)";
	});
	
	
	/* ** exiting fullscreen ** */
	document.addEventListener('fullscreenchange', exitHandler);
	document.addEventListener('webkitfullscreenchange', exitHandler);
	document.addEventListener('mozfullscreenchange', exitHandler);
	document.addEventListener('MSFullscreenChange', exitHandler);
	function exitHandler() {
		if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {prevAud.style.borderRadius= "50%";}
	} 
	
	//     $(function() {
		// 	    $('.audioSpeed').next().text(''); // Valeur par défaut
		// 	    $('.audioSpeed').on('input', function() {
			// 		var $set = $(this).val();
			// 		$(this).next().text($set);
			// 	});
			
			
	    
			
			$('.audioSpeed').next().text('Speed');
	 audioSpeed.value=25;
	 $('.audioSpeed').on('input', function(e) {
		 var $set = $(this).val()/25;
		 $set= Math.round($set*10)/10;
		 $(this).next().text($set);
		 audio.playbackRate= e.currentTarget.value / 25+.1;
	});
	
	
	
	
	
	
	audio.onloadedmetadata = () => {
		end.innerHTML = format(audio.duration)
		start.innerHTML = format(audio.currentTime)
	}
	
	progressBar.addEventListener("click", function(event)  {
		let coordStart = this.getBoundingClientRect().left;
		let coordEnd = event.pageX;
		let p = (coordEnd - coordStart) / this.offsetWidth;
		now.style.width = p.toFixed(3) * 100 + "%";
		now2.style.width = p.toFixed(3) * 100 + "%";
		audio.currentTime = p * audio.duration;
		
	})
	
	progressBar2.addEventListener("click", function(event)  {
		let coordStart = this.getBoundingClientRect().left;
		let coordEnd = event.pageX;
		let p = (coordEnd - coordStart) / this.offsetWidth;
		now.style.width = p.toFixed(3) * 100 + "%";
		now2.style.width = p.toFixed(3) * 100 + "%";
		audio.currentTime = p * audio.duration;
		
	})
	
	progressBar2.addEventListener('mousemove', function(e){
		let coordStart = this.getBoundingClientRect().left;
		let coordEnd = event.pageX;
		let p = (coordEnd - coordStart) / this.offsetWidth;		
		echange2 = p * audio.duration;
	})
	  
	timer = setInterval(() => {timeConverter()}, 1000)
	
	function timeConverter(){
		start.innerHTML = format(audio.currentTime)
		now.style.width = audio.currentTime / audio.duration.toFixed(3) * 100 + "%"
		now2.style.width = audio.currentTime / audio.duration.toFixed(3) * 100 + "%"
	}
	
	Visualizer2();
	//previewCirclePeaks();
	//previewWaves();
	//progressWaves();
	//previewCircleBars();
	//previewBarz();
	//previewBars();
	displayVisualizerChoice();
}	

var dozi;	var echange2;
/* Function Wave Music */
var lineWid;
let lineHeig=1;
let colorWaves=249;
var isSetIntCoolWaves=false,	
setInterCoolWaves;

/* sets color intervals */
function setIntCoolWaves(){setInterCoolWaves = setInterval(() => {switchColorsWaves();},80);isSetIntCoolWaves = true;}

/* switch visualiser color */
function switchColorsWaves(){colorWaves+= 8;}
var buttonColorWaves;
var imgButtonColorWaves;

function previewWaves(){
	changeSizeCanvas(canvas, canvas.width, canvas.height)	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;	
	
	src.connect(analyser);
	analyser.connect(context.destination); 	

	sliderWidthWaves = document.createElement ("input");  
	setElementAttribut(sliderWidthWaves,{"id":"sliderWidthWaves","class":["sliderVertical", "sliderVerticalLeft"],"type":"range"}, document.body); 
	sliderWidthWaves.value=0; 
	sliderWidthWaves.addEventListener("input",e=>{lineWid = e.currentTarget.value / 2.5;});
	
	sliderHeightWaves = document.createElement ("input");  
	setElementAttribut(sliderHeightWaves,{"id":"sliderHeightWaves","class":["sliderVertical","sliderVerticalCentre"],"type":"range"}, document.body); 
	sliderHeightWaves.value=100;
	sliderHeightWaves.addEventListener("input",e=>{lineHeig = e.currentTarget.value / 100 ;});

	sliderColorWaves = document.createElement ("input");  
	setElementAttribut(sliderColorWaves,{"id":"sliderColorWaves","class":["sliderHorizontal"],"type":"range"}, document.body); 
	sliderColorWaves.value=69.16;
	sliderColorWaves.addEventListener("input",e=>{colorWaves = e.currentTarget.value * 3.6 ;});
	
	buttonColorWaves = document.createElement ("span");
	imgButtonColorWaves = document.createElement("IMG");
	setButtonAttribut(buttonColorWaves,{"id":"buttonColorColorWaves","class":["buttonColorz"]},document.body,imgButtonColorWaves, "img/colorCycle.png");
	buttonColorWaves.onclick = e => {
		if(running){	
			clickAnim(e);			
			if (isSetIntCoolWaves==false){clearInterval(setInterCoolWaves);setIntCoolWaves();isSetIntCoolWaves = true;}
			else{clearInterval(setInterCoolWaves);isSetIntCoolWaves = false;}
		}
		else{clickAnim(e);}		
	}	
	
	function renderFrame() {	
		var WIDTH = canvas.width;
		var HEIGHT = canvas.height;
		
		wavesAnim = requestAnimationFrame(renderFrame);	
		analyser.getByteTimeDomainData(dataArray2048);
	  
		ctx.fillStyle = "rgb(0, 0, 0)";
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
		ctx.lineWidth = 2;
		ctx.lineWidth = lineWid;
		ctx.strokeStyle = "rgb(122, 99, 255)";
		ctx.strokeStyle = `hsl(${colorWaves}, 90%, 70%)`;
		ctx.beginPath();

		var largeurSegment = WIDTH * 1.0 / bufferLength;
		var x = 0;
		for(var i = 0; i < bufferLength; i++) {
			var v = dataArray2048[i] / 128.0;
	      		var y = v * HEIGHT/2;
      
	     		if(i === 0) {
				ctx.moveTo(x, y);
	     		} 
	      		else {
				ctx.lineTo(x, y);
	     		}      
	      		x += largeurSegment * lineHeig;
	    	}
	    	ctx.lineTo(canvas.width, canvas.height/2);
	    	ctx.stroke();	    
	}           
	renderFrame();	
}

var pitchy=1;

/* Function Bars Music */
var compteurBars = 0;
function previewBars(){	
	canvas = qs("#canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;	
	
	var WIDTH = canvas.width;
	var HEIGHT = canvas.height;      
	let barWidth = (WIDTH / bufferLength) * 5;
	let barHeight;
	let x = 0;	
        function renderFrame() {	 
		barsAnim =requestAnimationFrame(renderFrame);
	   	x = 0;		
	   	analyser.getByteFrequencyData(dataArray256);
		changeSizeCanvas(canvas, WIDTH, HEIGHT);
	   	ctx.fillStyle = "#000";
	   	ctx.fillRect(0, 0, WIDTH, HEIGHT);		

	   	for (var i = 0; i < bufferLength; i++) {
	     		barHeight = 1.1 * dataArray256[i];
	      
	      		var r = barHeight + (122 * (i/bufferLength));
	      		var g = 25 * (i/bufferLength);
	      		var b = 255;
	      		ctx.fillStyle = `rgb(${r}, ${g},${b})`;
	    		ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
      
	   		x += barWidth + 1;
	  	}
	}
	//audio.play();	
	renderFrame();	
}	

/* ******************************************************* */
function previewCircleBars(){
	previewCircleBarsButtons();
	animCircleBars();
}

var center_x, center_y, radius, bars, 
	x_end, y_end, bar_height, bar_width;
var circleBars;
function previewCircleBarsButtons(){
	var buttonColorCircleBars = document.createElement ("span");
	var imgButtonCircleBars = document.createElement("IMG");
	setButtonAttribut(buttonColorCircleBars,{"id":"buttonColorCircleBars","class":["buttonColorz"]},document.body,imgButtonCircleBars, "img/colorCycle.png");	
	buttonColorCircleBars.onclick = e => {
		if(running){	
			clickAnim(e);
			clearInterval(setInterCircleBars);
			if (isSetIntCoolCircleBars==false){clearInterval(setInterCoolCircleBars);setIntCoolCircleBars();isSetIntCoolCircleBars = true;}
			else{clearInterval(setInterCoolCircleBars);isSetIntCoolCircleBars = false;}
		}
		else{clickAnim(e);}		
	}
}

function animCircleBars(){	
	bars = 200;
	bar_width = 2;	
	
	src.connect(analyser);
	analyser.connect(context.destination); 
	analyser.fftSize = 2048;
    	// set to the size of device
   
    	changeSizeCanvas(canvas, 700, 700);
 
    	// find the center of the window    	
    	center_x = canvas.width / 2;
    	center_y = canvas.height / 2;
    	radius = 150;
    	ctx.fillStyle = "#000";
    	ctx.fillRect(0, 0, canvas.width, canvas.height);

    	// style the background
    	var gradient = ctx.createLinearGradient(0,0,0,canvas.height);
    	gradient.addColorStop(0,"hsla(0, 0%, 0%, 1)");
    	gradient.addColorStop(1,"hsla(249, 100%, 69%,.1)");
    	ctx.fillStyle = gradient;
    	ctx.fillRect(0,0,canvas.width,canvas.height);
    
    	//draw a circle
    	ctx.beginPath();
    	ctx.arc(center_x,center_y,radius,0,2*Math.PI);
    	ctx.stroke();
    
    	analyser.getByteFrequencyData(dataArray2048);
    	for(var i = 0; i < bars; i++){
        
        //divide a circle into equal parts
        var rads = Math.PI * 2 / bars;
        
        bar_height = dataArray2048[i]*0.7;
        
        // set coordinates
        var x = center_x + Math.cos(rads * i) * (radius),
	    y = center_y + Math.sin(rads * i) * (radius),
        x_end = center_x + Math.cos(rads * i)*(radius + bar_height),
        y_end = center_y + Math.sin(rads * i)*(radius + bar_height);
        
        //draw a bar
        drawBar(x, y, x_end, y_end, bar_width,dataArray2048[i]);    
    	}
    	circleBars = requestAnimationFrame(animCircleBars);
	    // for drawing a bar
	function drawBar(x1, y1, x2, y2, width,frequency){
    
	// var lineColor = "rgb(" + (frequency+color) + ", " + (color+frequency) + ", " + 205 + ")";//205
	 var lineColor = `hsla(${colorCircleBars}, ${frequency/2}%, 60%,.7)`;
	 ctx.strokeStyle = lineColor;
	 ctx.lineWidth = width;
	 ctx.beginPath();
	 ctx.moveTo(x1,y1);
	 ctx.lineTo(x2,y2);
	 ctx.stroke();
     }	
}
var colorCircleBars=249, 	
setInterCircleBars,
setInterCoolCircleBars,
isSetIntCoolCircleBars=false;

/* sets color intervals */
function setIntCoolCircleBars(){setInterCoolCircleBars = setInterval(() => {switchColorsCircleBars();},80);isSetIntCoolCircleBars = true;}

/* sets color intervals */
function setInt(speed){setInterCircleBars = setInterval(() => {switchColorsCircleBars();},speed);isSetInt = true;}	

/* switch visualiser color */
function switchColorsCircleBars(){colorCircleBars += 8;}

function changeSizeCanvas(canvas, w, h) {
	$(canvas).prop("width", w);
	$(canvas).prop("height", h);
}

var splitter;
var animPeaks;
function previewCirclePeaks(){	
	changeSizeCanvas(canvas, 700, 700);
	
	let centerX = canvas.width / 2;
	let centerY = canvas.height / 2;
	let radius = document.body.clientWidth <= 425 ? 120 : 160;
	let steps = document.body.clientWidth <= 425 ? 60 : 120;
	let interval = 360 / steps;
	let pointsUp = [];
	let pointsDown = [];
	
	let pCircle = 2 * Math.PI * radius;
	let angleExtra = 90;
	
	// Create points
	for(let angle = 0; angle < 360; angle += interval) {
	  	let distUp = 1.1;
	  	let distDown = 0.9;
	
	  	pointsUp.push({
	    		angle: angle + angleExtra,
	    		x: centerX + radius * Math.cos((-angle + angleExtra) * Math.PI / 180) * distUp,
	    		y: centerY + radius * Math.sin((-angle + angleExtra) * Math.PI / 180) * distUp,
	    		dist: distUp
	  	});
		pointsDown.push({
	    		angle: angle + angleExtra + 5,
	    		x: centerX + radius * Math.cos((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
	    		y: centerY + radius * Math.sin((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
	    		dist: distDown
	  	});
	}
	
	// Audio stuff
		
	// Make a buffer to receive the audio data
	
	let analyserL =context.createAnalyser();
	analyserL.fftSize = 8192;	
	let analyserR =context.createAnalyser();
	analyserR.fftSize = 8192;	
	splitter.connect(analyserL, 0, 0);
	splitter.connect(analyserR, 1, 0);

	const bufferLengthL = analyserL.frequencyBinCount;
	const audioDataArrayL = new Uint8Array(bufferLengthL);	
	const bufferLengthR = analyserR.frequencyBinCount;
	const audioDataArrayR = new Uint8Array(bufferLengthR);	

	// -------------
	// Canvas stuff
	// -------------
	
	function drawLine(points) {
	  	let origin = points[0];
	
		 // style the background
		var gradient = ctx.createLinearGradient(0,0,0,canvas.height);
		gradient.addColorStop(0,"hsla(0, 0%, 0%, 1)");
		gradient.addColorStop(1,"hsla(249, 100%, 69%,.1)");
		ctx.fillStyle = gradient;
		ctx.fillRect(0,0,canvas.width,canvas.height);

	  	ctx.beginPath();
	  	ctx.strokeStyle = 'rgba(255,255,255,0.5)';
	  	ctx.lineJoin = 'round';
	  	ctx.moveTo(origin.x, origin.y);
	
	  	for (let i = 0; i < points.length; i++) {
	    		ctx.lineTo(points[i].x, points[i].y);
	  	}	
	  	ctx.lineTo(origin.x, origin.y);
	  	ctx.stroke();
	}
	
	function connectPoints(pointsA, pointsB) {
	  	for (let i = 0; i < pointsA.length; i++) {
	    		ctx.beginPath();
	    		ctx.strokeStyle = 'rgba(255,255,255,0.5)';
	    		ctx.moveTo(pointsA[i].x, pointsA[i].y);
	    		ctx.lineTo(pointsB[i].x, pointsB[i].y);
	    		ctx.stroke();
	  	}
	}
	
	function update(dt) {
	  	let audioIndex, audioValue;
	
	  	// get the current audio data
	  	analyserL.getByteFrequencyData(audioDataArrayL);
	  	analyserR.getByteFrequencyData(audioDataArrayR);
	
	  	for (let i = 0; i < pointsUp.length; i++) {
	    		audioIndex = Math.ceil(pointsUp[i].angle * (bufferLengthL / (pCircle * 2))) | 0;
	    		// get the audio data and make it go from 0 to 1
	    		audioValue = audioDataArrayL[audioIndex] / 255;
	
	    		pointsUp[i].dist = 1.1 + audioValue * 0.8;
	    		pointsUp[i].x = centerX + radius * Math.cos(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;
	    		pointsUp[i].y = centerY + radius * Math.sin(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;
	
	    		audioIndex = Math.ceil(pointsDown[i].angle * (bufferLengthR / (pCircle * 2))) | 0;
	    		// get the audio data and make it go from 0 to 1
	    		audioValue = audioDataArrayR[audioIndex] / 255;
	
	    		pointsDown[i].dist = 0.9 + audioValue * 0.2;
	    		pointsDown[i].x = centerX + radius * Math.cos(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
	    		pointsDown[i].y = centerY + radius * Math.sin(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
	  	}
	}	
	function draw(dt) {
	  	animPeaks = requestAnimationFrame(draw);	
	  	if (running) {
	    		update(dt);
	  	}	
	  	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	  	drawLine(pointsUp);
	  	drawLine(pointsDown);
	  	connectPoints(pointsUp, pointsDown);
	}	
	draw();
}

/* display 5 buttons to choose an animation */
function displayVisualizerChoice(){
	var buttonWaves = document.createElement ("span");
	var imgWaves = document.createElement("IMG");
	setButtonAttribut(buttonWaves, {"id":"buttonWaves","class":["buttonWaves","buttonPreview"]}, document.body, imgWaves, "img/waves.png");

	var buttonBars = document.createElement ("span");
	var imgBars = document.createElement("IMG");
	
	setButtonAttribut(buttonBars,{"id":"buttonBars","class":["buttonBars","buttonPreview"]}, document.body,imgBars,"img/bars.png");

	var buttonBarz = document.createElement ("span");
	var imgBarz = document.createElement("IMG");
	setButtonAttribut(buttonBarz,{"id":"buttonBarz","class":["buttonBarz","buttonPreview"]}, document.body,imgBarz, "img/barz.png");

	var buttonCircleBars = document.createElement ("span");
	var imgCircleBars = document.createElement("IMG");
	setButtonAttribut(buttonCircleBars,{"id":"buttonCircleBars","class":["buttonCircleBars","buttonPreview"]},  document.body,imgCircleBars,"img/circleBars.png");	
	
	var buttonCirclePeaks = document.createElement ("span");
	var imgCirclePeaks = document.createElement("IMG");
	setButtonAttribut(buttonCirclePeaks,{"id":"buttonCirclePeaks","class":["buttonCirclePeaks","buttonPreview"]},  document.body,imgCirclePeaks, "img/circlePeaks.png");

	buttonWaves.addEventListener ("click", () => {
		cancelEveryAnimationFrame();		
		removeSliderSelector();
		previewWaves();
		});

	buttonBars.addEventListener ("click", () => {
		cancelEveryAnimationFrame();
		removeSliderSelector();
		previewBars();
		});

	buttonBarz.addEventListener ("click", () => {			
		cancelEveryAnimationFrame();
		removeSliderSelector();		
		changeSizeCanvas(canvas, 300, 300);				
		Visualizer2();		
	});

	buttonCircleBars.addEventListener ("click", () => {
		cancelEveryAnimationFrame();
		removeSliderSelector();		
		previewCircleBars();
		});
		
	buttonCirclePeaks.addEventListener ("click", () => {
		cancelEveryAnimationFrame();
		removeSliderSelector();
		previewCirclePeaks();
		});	
}	


/* Removes visualizer buttons, sliders and seletors */
function removeVisualiserButton(){
	eRem("buttonWaves");
	eRem("buttonBars");
	eRem("buttonBarz");
	eRem("buttonCircleBars");
	eRem("buttonCirclePeaks");
	removeSliderSelector();
}

/* Removes only sliders and selectors */
function removeSliderSelector(){
	eRem("sliderWidthWaves");
	eRem("sliderHeightWaves");
	eRem("sliderColorWaves");
	eRem("sliderColorBarz");
	eRem("sliderSpeedBarz");
	eRem("selectorColorBarz");
	eRem("buttonColorz");	
	eRem("buttonColorCircleBars");
	eRem("buttonColorColorWaves");
}

/* cancel every animations frames */
function cancelEveryAnimationFrame(){
	cancelAnimationFrame(barsAnim);
	cancelAnimationFrame(wavesAnim);
	cancelAnimationFrame(circleBars);
	cancelAnimationFrame(animPeaks);
	cancelAnimationFrame(animationId);
	cancelAnimationFrame(animationIdr);
}

/* animations variables */
 	var context;
	var src;
	var analyser;
      	var canvas;
	var ctx;
	var bufferLength;
  	var dataArray;
	var distortion, biquadFilter;
	var barsAnim;//barsAnim =requestAnimationFrame(renderFrame);
	var wavesAnim;//wavesAnim = requestAnimationFrame(renderFrame);	


/* Slider and changing values */
	var colorBarz;
	var colorValBarz="249, 100%, 69%,";
	var colorSelectorVal;
	var colorSliderVal;
	let color=1;
	var isSetIntCoolBarz = false;
	var isSetIntBarz = false;
	var colorChangingSpeed=1;

/* Hexadecimal color converter to hsl format */
function hexToHsl(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
	var r = parseInt(result[1], 16);
	var g = parseInt(result[2], 16);
	var b = parseInt(result[3], 16);
    
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;
	   
	if(max == min){
	    h = s = 0; // achromatic
	}
	else {
	    var d = max - min;
	    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	    switch(max) {
		case r: h = (g - b) / d + (g < b ? 6 : 0); break;
		case g: h = (b - r) / d + 2; break;
		case b: h = (r - g) / d + 4; break;
		}
	h /= 6;
	}
    
	s = s*100;
	s = Math.round(s);
	l = l*100;
	l = Math.round(l);
	h = Math.round(360*h);
    
	//var colorInHSL = h + ", " + s + "%, " + l + "%, ";
	var colorInHSL = `${h}, ${s}%, ${l}%, `;

	return colorInHSL;
}


/* ** Text and images Adding management ** */

/* Filling The Image Resume Musique */
function imageResumeMusique(files) {
	var imageType = /^image\//;
	for (var i = 0; i < files.length; i++) {
	var file = files[i];
		if (!imageType.test(file.type)) {alert("veuillez sélectionner une image");}
		else{
			if(i == 0) {preview.innerHTML = "";}
	  		var img = document.createElement("img");
	  		img.classList.add("obj");
	 	 	img.file = file;
	  		preview.appendChild(img); 
	  		var reader = new FileReader();

	  		reader.onload = (aImg => { 
	  		return e => {aImg.src = e.target.result;}; 
      			})(img);
     
      			reader.readAsDataURL(file);
      		}      
      	}
}

/* Filling The Resume Musique */
textMusique.addEventListener("mouseover",apercu);
textMusique.addEventListener("click", () => {cAdd("tuileMusique","activeTuileMusique");});

formalMusiques.addEventListener("mouseover",apercu);
overlay.addEventListener("mouseover",apercu);

/* preview of the written text */
function apercu(){
	removeResumeMusique();
 	resumeMusique.innerHTML += wordWrap(textMusique.value, 30);	 
	if (resumeMusique.innerHTML.length > 350){alert("Texte trop long !");}
}

/* remove resumeMusique */
function removeResumeMusique(){	
	var node = qs("#resumeMusique");
	while (node.hasChildNodes()) {node.removeChild(node.firstChild);}
}

/* Upload Image Musique */
var imgPreview = qs("#imageResumeMusique");
var imgReview = qs("#imageMusique");
var imgInputImageMusique = qs("#imgInputImageMusique");

function uploadImageMusique (){	
	imgInputImageMusique.setAttribute("src", "img/imageResumeSelect.png");
	inputImageMusique.click();
}	

function getImgData() {
	cAdd("tuileMusique","activeTuileMusique");
	var file = fileImageMusique.files;
	if (file.length>0) {
	  	var fileReader = new FileReader();	  
	  	fileReader.onload = event => {imgPreview.setAttribute("src", event.target.result);imgPreview.setAttribute("src", event.target.result);};
	  	fileReader.readAsDataURL(file[0]);
	}   
}

var canvas, echange;
function progressWaves(){
	var WAVEFORM;
	var waveforms = [];	
	var canvas = qs("#canvas");
	
	(function (c, cx) {  		
    		$.when(initAudio(data)).done(function (b) {clearCanvas();setupBars(b);});
				
    		window.WAVEFORM =WAVEFORM= function (cx, x, y, w, h, speed) {
        		this.x = x;
        		this.y = y;
        		this.w = w;
        		this.h = h;
			this.ctx = cx;		
			this.trigger = false;
			this.alpha = 0;
			this.speed = speed;
			this.done = false;
    		};
		    
    		WAVEFORM.prototype = {
      			redraw: function(){
        		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        		this.ctx.restore();
      		},
      		isPointBar: function(x, y){
        		return (x >= (this.x * 3) && x <= (this.x * 3) + this.w);
      		},
      		highlight: function(){
        		var c3 = gi('view3');
        		var _ctx = c3.getContext('2d');
        		_ctx.setTransform(1, 0, 0, 1, 0, 0);
        		_ctx.clearRect(0,0, c.width, c.height);
        		this.fillBars();
      		},
      		fillBars: function(){
        		var barX = (this.x * 3) + this.w;
        		var c3 = gi('view3');
        		var _ctx = c3.getContext('2d');
        
        		for(var i = 0; i < barX/3; i++) {
          			_ctx.translate(0, c.height / 2);
         			_ctx.scale(1, -1);
          			_ctx.fillStyle = "#7a63ff99";//"#FF5600";
          			_ctx.fillRect(waveforms[i].x * 3, waveforms[i].y, waveforms[i].w, waveforms[i].h);
          			_ctx.setTransform(1, 0, 0, 1, 0, 0);
          			_ctx.fillStyle = "#E0C9FF";//"#F0C7AE";
          			_ctx.fillRect(waveforms[i].x * 3, c.height / 2 + 11, waveforms[i].w, waveforms[i].h / 2);				  
        		}
      		},
		displayBar: function(x) {
			var _this = this;
			var speed = this.speed;
			_this.ctx.save();
			var fadeIn = function(){
				_this.ctx.translate(0, c.height / 2);
				_this.ctx.scale(1, -1);
				_this.ctx.fillStyle = "rgba(122, 99, 255, "+ speed +")";//"#FF5600";
				_this.ctx.fillRect(_this.x * 3, _this.y, _this.w, _this.h);
				_this.ctx.setTransform(1, 0, 0, 1, 0, 0);
				_this.ctx.fillStyle = "rgba(224, 201, 255, "+ speed +")";//"#F0C7AE";122, 99, 255, 0.2
				_this.ctx.fillRect(_this.x * 3, c.height / 2 + 11, _this.w, _this.h / 2);
				speed += speed;				
				var fade = requestAnimationFrame(fadeIn);		
				if(speed > 1) {cancelAnimationFrame(fade);}
			};			
			fadeIn();			
		},		
		trigger: function(){this.trigger.true;}
		};
    		var j = 0;
		    function progressBar(){        		
			var elapsedTime = Math.round(audio.currentTime);
			var fWidth = Math.floor((elapsedTime / audio.duration) * (c.width));
			var p = Math.ceil(fWidth/3);
			
			if (!audio.paused && p > 0) {
				for(j = 0; j < p; j++) {
					if (typeof waveforms[j] != 'undefined') {
						waveforms[j].displayBar();					
					}					
				}
				j = Math.max(j + 1, p + 1);
			}
		}       		

    		setupBars = function (b) {
        		var data = b.getChannelData(0);
        		var step = Math.ceil(data.length / c.width);
        		var amp = (c.height / 2);        		
        		var c2 = gi('view2');
        		var ctx = c2.getContext('2d');
      
        		for (var i = 0; i < c.width; i++) {
            		//	var min = 1.0;
            			var max = -1.0;

            			for (var j = 0; j < step; j++) {
                			var datum = data[(i * step * 3) + j];
                			if (datum > max)
                    				max = datum;
            			}

            			cx.translate(0, c.height / 2);
            			cx.scale(1, -1);
            			cx.fillStyle = "#E5E5E5";
            			cx.fillRect(i * 3, -10, 2, max * amp);
            			cx.setTransform(1, 0, 0, 1, 0, 0);
            			cx.fillStyle = "#9DA09B";
            			cx.fillRect(i * 3, c.height / 2 + 12, 2, max * amp / 2);
            
            			window.waveforms[i] = waveforms[i] = new WAVEFORM(ctx, i, -10, 2, max * amp, 0.02);
        		}
    		};
	}(gi('view1'), gi('view1').getContext('2d')));
	
	function initAudio(data) {
		var audioRequest = new XMLHttpRequest();
    		var dfd = jQuery.Deferred();
    
    		audioRequest.open("GET", URL.createObjectURL(fileMusique), true);    
    		audioRequest.responseType = "arraybuffer";
    		audioRequest.onload = function () {
        		context.decodeAudioData(audioRequest.response,
                	function (buffer) {dfd.resolve(buffer);});
    		};
    		audioRequest.send();
		   
    		return dfd.promise();
	}
	var view3 = $('#view3');
	var view2 = $('#view2');
	var v2_offset = view2.offset();
	view3.on('mouseout', function(){
  		$('#view2').removeClass('fadeOut').addClass('fadeIn');
  		var c3 = gi('view3');
  		var _ctx = c3.getContext('2d');
  		_ctx.setTransform(1, 0, 0, 1, 0, 0);
  		_ctx.clearRect(0,0, c3.width, c3.height);
		if (divInfo)divInfo.remove();  		
	});	
	
	view3.on('mousemove', function(e){	
    		mouseX = parseInt(e.clientX - v2_offset.left);
    		mouseY = parseInt(e.clientY - v2_offset.top);
    
    		$('#view2').removeClass('fadeIn').addClass('fadeOut');
    	
    		// Put your mousemove stuff here
    		ctx.clearRect(0, 0, canvas.width, canvas.height);
    		for (var i = 0; i < waveforms.length; i++) {
      			if (waveforms[i].isPointBar(mouseX, mouseY)) {
        			waveforms[i].highlight();
				mouseX = parseInt(e.clientX - v2_offset.left);
				var percent = audio.duration * mouseX;
				echange = percent/waveforms[i].ctx.canvas.width;			
			} 
      			else {
        			waveforms[i].redraw();
      			}
    		}
	});

	view3.on('click', function(e){	
    		mouseX = parseInt(e.clientX - v2_offset.left);
    		mouseY = parseInt(e.clientY - v2_offset.top);
		var now2 = qs(".now2");
		let coordStart = this.getBoundingClientRect().left;
		let coordEnd = e.pageX;
		let p = (coordEnd - coordStart) / this.offsetWidth;
		now2.style.width = p.toFixed(3) * 100 + "%";	

    		// Put your mousemove stuff here
    		ctx.clearRect(0, 0, canvas.width, canvas.height);
    		for (var i = 0; i < waveforms.length; i++) {
      			if (waveforms[i].isPointBar(mouseX, mouseY)) {
        			waveforms[i].highlight();
        			var percent = audio.duration * mouseX;
        			audio.currentTime = percent/waveforms[i].ctx.canvas.width;			
			} 		
    		}		  
		running=true;
		popup.style.transform="scale(.001)";		
	});	
}
	
btnWaveforms. onclick = e =>{clickAnim(e);
	if (isWaveforms==false){
		isWaveforms=true;		
		waveformed.style.transform = "translateY(0px)";
		view1.style.transform = "translateY(0px)"
		view2.style.transform = "translateY(0px)"
		view3.style.transform = "translateY(0px)"

		progressWaves();
		
		var progressBar2=qs(".progress-bar2")	
		progressBar2.onmousemove=()=> displayDivInfo(format(echange2));	
		view3.onmousemove=()=> displayDivInfo(format(echange));		
	}
	else {
		waveformed.style.transform = "translateY(-2000px)"
		
		isWaveforms=false;		
	}
} 

function clearCanvas(){
	var canvas1 = gi('view1');
	var ctx1 = canvas1.getContext('2d');
	var canvas2 = gi('view2');
	var ctx2 = canvas2.getContext('2d');

	ctx1.setTransform(1,0,0,1,0,0);
	ctx2.setTransform(1,0,0,1,0,0);
	ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
}

var setupBars
/* Purge - Don't be afraid */
function purge(d) {
	var a = d.attributes, i, l, n;
	if (a) {
	    for (i = a.length - 1; i >= 0; i -= 1) {
		n = a[i].name;
		if (typeof d[n] === 'function') {
		    d[n] = null;
		}
	    }
	}
	a = d.childNodes;
	if (a) {
	    l = a.length;
	    for (i = 0; i < l; i += 1) {
		purge(d.childNodes[i]);
	    }
	}
}	
   
var file = null; //the current file
var fileName = null; //the current file name
var audioContext = null;
var source = null; //the audio source
 //this used to upgrade the UI information
var infoUpdateId = null; //to sotore the setTimeout ID and clear the interval
var animationId = null;
var animationIdr = null;
var status = 0; //flag for sound is playing 1 or stopped 0
var forceStop = false;
var allCapsReachBottom = false;


function ini() {    
	function _prepareAPI() {
		//fix browser vendor for AudioContext and requestAnimationFrame
		window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
		window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
		window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
		try {var audioContext = audioContext;}
		catch (e) {console.log(e);}
    	}
	function _addEventListner() {
		var audioInput = inputMusique,
	    	dropContainer = qs("#__drop");
		//listen the file upload
		audioInput.onchange = function() {
		if (audioContext===null){return;};if(audioInput.files.length !== 0) {if(status === 1){forceStop = true;};};};
	    		//the if statement fixes the file selction cancle, because the onchange will trigger even the file selection been canceled
				//only process the first file			
		    			//the sound is still playing but we upload another file, set the forceStop flag to true
       		// listen the drag & drop	
		dropContainer.addEventListener("drop", function(e) {
	    		e.stopPropagation();
	    		e.preventDefault();
	    		if (audioContext===null) {return;};	    
	    		if (status === 1) {forceStop = true;};	 
		}, false);
    	}
    	_prepareAPI();
    	_addEventListner();
}


var 	setInterCoolBarz,
	setInterBarz,
	speedBarz;
	
/* sets color intervals */
function setIntCoolBarz(){setInterCoolBarz = setInterval(() => {switchColorsBarz();},80);isSetIntCoolBarz = true;}

/* sets color intervals */
function setIntBarz(speed){setInterBarz = setInterval(() => {switchColorsBarz();},speed);isSetIntBarz = true;}	

/* switch visualiser color */
function switchColorsBarz(){color += 15;colorValBarz = `${color}, 100%, 69%, `;}

function Visualizer2 () {	 
	function _start() {
		var sliderColorBarz = document.createElement ("input");  
		setElementAttribut(sliderColorBarz,{"id":"sliderColorBarz","class":["sliderHorizontal"],"type":"range"}, document.body);    
		sliderColorBarz.addEventListener("input",f=>{clearInterval(setInterBarz);isSetIntBarz = false;clearInterval(setInterCoolBarz);isSetIntCoolBarz = false;colorSliderVal=f.currentTarget.value*3.6;
		colorValBarz= `${colorSliderVal}, 100%, 69%, `;});
			
		var selectorColorBarz = document.createElement("input");		
		setElementAttribut(selectorColorBarz,{"id":"selectorColorBarz","class":["selectorColorBarz"],"type":"color"}, document.body);selectorColorBarz.addEventListener("input",f=>{clearInterval(setInterBarz);isSetIntBarz = false;clearInterval(setInterCoolBarz);isSetIntCoolBarz = false;colorSelectorVal=f.currentTarget.value;colorValBarz =  hexToHsl(colorSelectorVal);});	
	
		var buttonColorz = document.createElement ("span");
		var imgButtonColorz = document.createElement("IMG");
		setButtonAttribut(buttonColorz,{"id":"buttonColorz","class":["buttonColorz"]}, document.body, imgButtonColorz, "img/colorCycle.png");	
		buttonColorz.onclick = e => {
			if(running){	
				clickAnim(e);
				clearInterval(setInterBarz);
				if (isSetIntCoolBarz==false){clearInterval(setInterCoolBarz);setIntCoolBarz();isSetIntCoolBarz = true;}
				else{clearInterval(setInterCoolBarz);isSetIntCoolBarz = false;}	
			}
			else{clickAnim(e);}
		}
		
		var sliderSpeedBarz = document.createElement("input");		
		setElementAttribut(sliderSpeedBarz, {"id" : "sliderSpeedBarz", "class" : ["sliderVertical", "sliderVerticalLeft"], "type" : "range"}, document.body);			
		sliderSpeedBarz.addEventListener("input",e=>{
			if(running){
				clearInterval(setInterCoolBarz);isSetIntCoolBarz=false;			
				clearInterval(setInterBarz);
				speedBarz=1000-(10 * e.currentTarget.value);
				setIntBarz(speedBarz);isSetIntBarz = true;					
			}
			else{clickAnim(e);}		
		}); 	
		changeSizeCanvas(canvas, 300, 150)
	    	//read and decode the file into audio array buffer 		
		fr = new FileReader();
	    	fr.onload = function() {				
			var audioContext = context;		
			if (audioContext === null) {return;};	
			_visualize();		
		}
	    	fr.onerror = function(e) {console.log(e);};
	    		//assign the file to the reader
	    		fr.readAsArrayBuffer(fileMusique);
	}
	_start();
	function _visualize() {	
	    	//connect the source to the analyser
	    	src.connect(analyser);
	   	analyser.connect(context.destination);
	    	if (!src.start) {
			src.start = src.noteOn //in old browsers use noteOn method
			src.stop = src.noteOff //in old browsers use noteOff method
	    	};
	    	//stop the previous sound if any
	    	if (animationId !== null) {cancelAnimationFrame(animationId);}
	    	if (source !== null) {stop(0);}
	    	status = 1;
	    	source = src;
	    	src.onended = function() {_audioEnd();};
	    	_drawSpectrum(analyser);
	}
	function _drawSpectrum(analyser) {	    
		var that = this,
		canvas = gi('canvas'),
		cwidth = canvas.width,
		cheight = canvas.height - 2,
		meterWidth = 10, //width of the meters in the spectrum
		gap = 2, //gap between meters
		capHeight = 2,
		capStyle = '#fff',
		meterNum = 255;//800 / (10 + 2), //count of the meters
		capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
	   	
	    	var drawMeter = function() {
			analyser.getByteFrequencyData(dataArray2048);
			if (that.status === 0) {
		    		//fix when some sounds end the value still not back to zero
		   		for (var i = dataArray2048.length - 1; i >= 0; i--) {dataArray2048[i] = 0;};
		    		allCapsReachBottom = true;
		    		for (var i = capYPositionArray.length - 1; i >= 0; i--) {
					allCapsReachBottom = allCapsReachBottom && (capYPositionArray[i] === 0);};
		    		if (allCapsReachBottom) {
					cancelAnimationFrame(animationId); //since the sound is stoped and animation finished, stop the requestAnimation to prevent potential memory leak,THIS IS VERY IMPORTANT!
					return;
		    		};
			};
			var step = Math.round(dataArray2048.length / meterNum); //sample limited data from the total array
			ctx.fillStyle = "#000";
	    		ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.clearRect(0, 0, cwidth, cheight);
			for (var i = 0; i < meterNum; i++) {
		    		var value = dataArray2048[i * step];
		    		if (capYPositionArray.length < Math.round(meterNum)) {capYPositionArray.push(value);};
		    		ctx.fillStyle = capStyle;
		    		//draw the cap, with transition effect
		    		if (value < capYPositionArray[i]) {ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);}
				else {
					ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);		capYPositionArray[i] = value;
		    		};
				ctx = canvas.getContext("2d"),			
				gradient = ctx.createLinearGradient(0, 0, 0, 300);
	    			// gradient.addColorStop(1, '#0f0');
	    			// gradient.addColorStop(0.5, '#ff0');
	    			// gradient.addColorStop(0, '#f00');
		    		gradient.addColorStop(.1, `hsla(${colorValBarz}1)`);
		    		gradient.addColorStop(.5, `hsla(${colorValBarz}.08)`);
		    		gradient.addColorStop(.9, `hsla(${colorValBarz}.05)`);
		    		gradient.addColorStop(.5, `hsla(${colorValBarz}.02)`);
		    		gradient.addColorStop(.9, `hsla(${colorValBarz}.01)`);
		    		ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
		    		ctx.fillRect(i * 12 /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
				    
			}
			animationId = requestAnimationFrame(drawMeter);
	    	}
	    	animationIdr = requestAnimationFrame(drawMeter);
	}
	function _audioEnd() {
	    	if (forceStop) {forceStop = false;status = 1;return;};
	    	status = 0;
	    	gi('inputMusique').value = '';
	}
}

/* round dragable */
var volumeTickWidth = 0.03;
var maxRotation = 360;
var minRotation = 0;
var wheelDrag = {};
$(function() {
  wheelDrag = Draggable.create($("#wheel"), {
    type: "rotation",
    bounds: { minRotation: minRotation, maxRotation: maxRotation }
  })[0];
  wheelDrag.addEventListener("drag", onWheelDrag);
});

function onWheelDrag() {	
  setVolumeWidth();
  if(wheelDrag.rotation == maxRotation){
     //alert("You kids and your rock music. Turn it down!");
     return
     }
}

function setVolumeWidth() {
 // var width = Math.round(wheelDrag.rotation * volumeTickWidth);
  angle=wheelDrag.rotation
  if(angle>360){angle = angle%360;}
		if (angle<0) {angle = 360+angle;};
		var calcul = angle/360;			
		if(calcul!=null)audio.volume=calcul;
}

/* round dragable */
var volumeTickWidth2 = 0.03;
var maxRotation2 = 36000;
var minRotation2 = -36000;
var wheelDrag2 = {};
$(function() {
  wheelDrag2 = Draggable.create($("#wheel2"), {
    type: "rotation",
    bounds: { minRotation: minRotation2, maxRotation: maxRotation2 }
  })[0];  
  wheelDrag2.addEventListener("drag", onWheelDrag2); 
});

function onWheelDrag2() {		
	setTimeout(() => {setVolumeWidth2();}, 25);	
  	if(wheelDrag2.rotation == maxRotation2||wheelDrag2.rotation == minRotation2){return}
  	if(wheelDrag2.rotation == maxRotation2||wheelDrag2.rotation == minRotation2){return}
}

function setVolumeWidth2() { 	
	audio.currentTime=wheelDrag2.getDirection()=='counter-clockwise' ? audio.currentTime-.2 : audio.currentTime+.2
}

function scratch(){
	for (i=10;I>0;--i){
	audio.playbackRate= 0.3;
	}
}

audio.addEventListener("timeupdate", turnWheel, false)

var diskSpeed=400;
var wheelInside2= qs("#wheelInside2");

function turnWheel(){
	if(!running){$('#wheel2').removeClass('wheel2Movement');return;}	
	wheel2.animate({transform: 'rotate(45deg)' }, diskSpeed * audio.playbackRate)
	wheelContainer2.animate({transform: 'rotate(45deg)' }, diskSpeed * audio.playbackRate)	
	wheel2.animate({transform: 'rotate(90deg)' }, diskSpeed * audio.playbackRate)
	wheelContainer2.animate({transform: 'rotate(90deg)' }, diskSpeed * audio.playbackRate)
	wheel2.animate({transform: 'rotate(135deg)' }, diskSpeed * audio.playbackRate)
	wheelContainer2.animate({transform: 'rotate(135deg)' }, diskSpeed * audio.playbackRate)
	wheel2.animate({transform: 'rotate(180deg)' }, diskSpeed * audio.playbackRate)
	wheelContainer2.animate({transform: 'rotate(180deg)' }, diskSpeed * audio.playbackRate)	
	wheel2.animate({transform: 'rotate(225deg)' }, diskSpeed * audio.playbackRate)
	wheelContainer2.animate({transform: 'rotate(225deg)' }, diskSpeed * audio.playbackRate)
	wheel2.animate({transform: 'rotate(270deg)' }, diskSpeed * audio.playbackRate)
	wheelContainer2.animate({transform: 'rotate(270deg)' }, diskSpeed * audio.playbackRate)	
	wheel2.animate({transform: 'rotate(315deg)' }, diskSpeed * audio.playbackRate)
	wheelContainer2.animate({transform: 'rotate(315deg)' }, diskSpeed * audio.playbackRate)
	wheel2.animate({transform: 'rotate(0deg)' }, diskSpeed * audio.playbackRate)
	wheelContainer2.animate({transform: 'rotate(0deg)' }, diskSpeed * audio.playbackRate)	
}

btnDiskSkin.addEventListener("click", changeDiskSkin)
var isDiskSkin=false;
function changeDiskSkin(){
	if(isDiskSkin) {$('#wheel2').removeClass('diskSkin').addClass('wheel2');isDiskSkin=false;}
	else {$('#wheel2').removeClass('wheel2').addClass('diskSkin');isDiskSkin=true}
}

var mousePosition;
var offset = [0,0];
var isDown = false;
var wheelInside2= qs("#wheelInside2");
wheelInside2.addEventListener('mousedown', function(e) {	
	isDown = true;
    	offset = [	
        	wheelContainer2.offsetLeft - e.clientX,
		wheelContainer2.offsetTop - e.clientY
    	];
}, true);

wheelContainer2.addEventListener('mouseup', function(event) {
    	isDown = false;
   	event.stopPropagation()
}, true);

wheelContainer2.addEventListener('mousemove', function(event) {
    	event.preventDefault();    
    	if (isDown) {
        	mousePosition = {
            	x : event.clientX,
            	y : event.clientY
        	};
        	wheelContainer2.style.left = (mousePosition.x + offset[0]) + 'px';
        	wheelContainer2.style.top  = (mousePosition.y + offset[1]) + 'px';	
    	}
}, true);

var z;
var mousePosition;
var offset = [0,0];
var isDown = false;
var header = qs(".header");
document.onscroll = function () {  
	var rect = header.getBoundingClientRect();		
	wheelContainer2.style.top= (802 - rect.bottom) +"px";
	wheelContainer.style.top= (690 - rect.bottom)+"px";
}

/* Fonction Cut */
async function readAndDecodeAudio() {
	arrBuffer = null;
	audioBuffer = null;
	//Read the original Audio
	await readAudio(audioFile)
			.then((results) => {
				arrBuffer = results.result;
			})
			.catch((error) => {
				window.alert("Some Error occured");
				return;
			}); 
	//Decode the original Audio into audioBuffer
	await new AudioContext().decodeAudioData(arrBuffer)
				.then((res) => {
					audioBuffer = res;
					console.log(audioBuffer);
				})
				.catch((err) => {
					window.alert("Can't decode Audio");
					return;
				});
}

async function trimAudio(region) {
	//Create empty buffer and then put the slice of audioBuffer i.e wanted part
	var regionDuration = region.end - region.start;
	var startPoint = Math.floor((region.start*audioBuffer.length)/totalAudioDuration);
	var endPoint = Math.ceil((region.end*audioBuffer.length)/totalAudioDuration);
	var audioLength = endPoint - startPoint;

	var trimmedAudio = new AudioContext().createBuffer(
		audioBuffer.numberOfChannels,
		audioLength,
		audioBuffer.sampleRate
	);

	for(var i=0;i<audioBuffer.numberOfChannels;i++){
		trimmedAudio.copyToChannel(audioBuffer.getChannelData(i).slice(startPoint,endPoint),i);
	}

	var audioData = {
		channels: Array.apply(null,{length: trimmedAudio.numberOfChannels})
					.map(function(currentElement, index) {
						return trimmedAudio.getChannelData(index);
					}),
		sampleRate: trimmedAudio.sampleRate,
    	length: trimmedAudio.length,
	}
	
	var temp = null;
	await encodeAudioBufferLame(audioData)
		.then((res) => {
			console.log(res);
			downloadAudio();
		})
		.catch((c) => {
			console.log(c);
		});
	console.log(audioData);
}

async function sampleAudio(region) {
//Create empty buffer and then put the slice of audioBuffer i.e wanted part
var regionDuration = region.end - region.start;
var startPoint = Math.floor((region.start*audioBuffer.length)/totalAudioDuration);
var endPoint = Math.ceil((region.end*audioBuffer.length)/totalAudioDuration);
var audioLength = endPoint - startPoint;

var trimmedAudio = new AudioContext().createBuffer(
	audioBuffer.numberOfChannels,
	audioLength,
	audioBuffer.sampleRate
);

for(var i=0;i<audioBuffer.numberOfChannels;i++){
	trimmedAudio.copyToChannel(audioBuffer.getChannelData(i).slice(startPoint,endPoint),i);
}

var audioData = {
	channels: Array.apply(null,{length: trimmedAudio.numberOfChannels})
				.map(function(currentElement, index) {
					return trimmedAudio.getChannelData(index);
				}),
	sampleRate: trimmedAudio.sampleRate,
    length: trimmedAudio.length,
}

var temp = null;
await encodeAudioBufferLame(audioData)
	.then((res) => {
		console.log(res);
		loadAudioSample();
	})
	.catch((c) => {
		console.log(c);
	});
//console.log(audioData);
}

async function mergeAudio(audioList) {
	console.log(audioList);
	var trackDetails = new Array();
	var channelLength = 0;
	for( var i in audioList) {
		var regionDuration = audioList[i].end - audioList[i].start;
		var startPoint = Math.floor((audioList[i].start*audioBuffer.length)/totalAudioDuration);
		var endPoint = Math.ceil((audioList[i].end*audioBuffer.length)/totalAudioDuration);
		var audioLength = endPoint - startPoint;
		channelLength = channelLength + audioLength;

		var trackDetail = {
			'regionDuration': regionDuration,
			'startPoint': startPoint,
			'endPoint': endPoint,
			'audioLength': audioLength
		}
		trackDetails.push(trackDetail);
	}

	var mergedAudio = new AudioContext().createBuffer(
		audioBuffer.numberOfChannels,
		channelLength,
		audioBuffer.sampleRate
	);

	var channelData = (audioBuffer.numberOfChannels === 1 ? 
			new Array(new Float32Array(channelLength)) : 
			new Array(new Float32Array(channelLength), new Float32Array(channelLength)));

	for(var i=0;i<audioBuffer.numberOfChannels;i++) {
		var startLength = 0;
		for(var j in trackDetails) {
			channelData[i].set(audioBuffer.getChannelData(i).slice(
				trackDetails[j]["startPoint"], trackDetails[j]["endPoint"]), startLength);
			startLength = trackDetails[j]["audioLength"];
		}
	}

	for(var i=0; i<audioBuffer.numberOfChannels; i++) {
		mergedAudio.copyToChannel(channelData[i], i)
	}

	var audioData = {
		channels: Array.apply(null,{length: mergedAudio.numberOfChannels})
					.map(function(currentElement, index) {
						return mergedAudio.getChannelData(index);
					}),
		sampleRate: mergedAudio.sampleRate,
    	length: mergedAudio.length,
	}
	
	var temp = null;
	await encodeAudioBufferLame(audioData)
		.then((res) => {
			console.log(res)
			document.getElementById("merged-track").src = processedAudio.src;
		})
		.catch((c) => {
			console.log(c)
		});
	console.log(audioData);
}


function encodeAudioBufferLame(audioData) {
	return new Promise( (resolve, reject) => {
		var worker = new Worker('JavaScript/worker.js');
		
		worker.onmessage = (event) => {
			console.log(event.data);
			if(event.data != null){
				resolve(event.data);
			}
			else{
				reject("Error");
			}
			var blob = new Blob(event.data.res, {type: 'audio/mp3'});
      		processedAudio = new window.Audio();
      		processedAudio.src = URL.createObjectURL(blob);
      		console.log(blob);
		};

		worker.postMessage({'audioData': audioData});
	});		
}

function readAudio(file) {	
	return new Promise((resolve, reject) => {
					var reader = new FileReader();
					reader.readAsArrayBuffer(file);

					//Resolve if audio gets loaded
					reader.onload = function() {
						console.log("Audio Loaded");
						resolve(reader);
					}

					reader.onerror = function(error){
						console.log("Error while reading audio");
						reject(error);
					}

					reader.onabort = function(abort){
						console.log("Aborted");
						console.log(abort);
						reject(abort);
					}

				})
}

function loadAudio() {
	btnBarStyle.style.transform= "rotateY(90deg)";  
	btnWaveStyle.style.transform= "scale(1)";
	var element = document.getElementById("sampleFile");
	if(element.files[0].type !== "audio/mpeg"){
    		alert("Invalid Format");
    		return;
	}

    	audioFile = element.files[0];
    	if(wavesurfer !== undefined)
    		wavesurfer.destroy();
	wavesurfer = WaveSurfer.create({
        	container: "#waveformCut",
        	waveColor: '#b6c3b1',
        	progressColor: 'rgba(122, 99, 255, .2)',
        	responsive: true,
        	barWidth: 3,
		barRadius: 3,
		cursorWidth: 1,
		height: 100,
		barGap: 3,
		backend: 'MediaElement'
    	});
	
	if( document.contains(qs(".sliderZoom"))){qs(".sliderZoom").remove();}
	var sliderZoom = document.createElement("input");
	sliderZoom.setAttribute("type","range");
	sliderZoom.id="sliderZoom";
	sliderZoom.value=0;
	sliderZoom.classList.add("sliderZoom");
	overlayCut.append(sliderZoom);
	
	sliderZoom.addEventListener("input", e => {wavesurfer.zoom(Number(e.currentTarget.value))})

    	wavesurfer.on('ready', function() {
		
    		readAndDecodeAudio();
    		preTrimUIChanges();
    		totalAudioDuration = wavesurfer.getDuration();
    		document.getElementById('timeTotal').innerText = format(totalAudioDuration.toFixed(1));
    		wavesurfer.enableDragSelection({});
    		console.log(intro);
    		if(intro != undefined) {intro.nextStep();}
    	});
	wavesurfer.on('finish', setPlayButton); 
	wavesurfer.load(URL.createObjectURL(element.files[0]));
	wavesurfer.on('audioprocess', function() {
	    	if(wavesurfer.isPlaying()) {
	        	var currentTime = wavesurfer.getCurrentTime();
	        	document.getElementById('timeCurrent').innerText = format(currentTime.toFixed(1));
	    	}
		    
	});
	wavesurfer.on('region-created', function(newRegion) {
		var audioTracks = document.getElementById("audio-tracks").tBodies[0];
		console.log(audioTracks.childNodes);
		var tableRow = createAudioRow(new Array(newRegion.id, newRegion.start, newRegion.end));
		audioTracks.appendChild(tableRow);
	 	showAndHideMergeOption();
	});
	wavesurfer.on('region-update-end', function(newRegion) {
		document.getElementById(newRegion.id+1).innerText = 
			format(( 0 >= newRegion.start.toFixed(4) ? 0 : newRegion.start.toFixed(4)));
		document.getElementById(newRegion.id+2).innerText = 
			format(( wavesurfer.getDuration() <= newRegion.end ? wavesurfer.getDuration().toFixed(4) : newRegion.end.toFixed(4)));
		if(intro != undefined) {
			intro.exit();
		}	
	});
	var audioButtons = document.getElementById("sampleButtons");
	var audioButtonsClass = audioButtons.getAttribute("class").replace("w3-hide","w3-show");
	audioButtons.setAttribute("class",audioButtonsClass);
}

function loadAudioWaves() {
	var element = document.getElementById("sampleFile");
	if(element.files[0].type !== "audio/mpeg"){
    		alert("Invalid Format");
    		return;
	}

    	audioFile = element.files[0];
    	if(wavesurfer !== undefined)
    		wavesurfer.destroy();
	wavesurfer = WaveSurfer.create({
        	container: "#waveformCut",
        	waveColor: '#b6c3b1',
        	progressColor: 'rgba(122, 99, 255, .2)',
        	responsive: true, 
		cursorWidth: 1,
		height: 100,
		backend: 'MediaElement'
    	});
	if( document.contains(qs(".sliderZoom"))){qs(".sliderZoom").remove();}
	var sliderZoom = document.createElement("input");
	sliderZoom.setAttribute("type","range");
	sliderZoom.id="sliderZoom";
	sliderZoom.value=0;
	sliderZoom.classList.add("sliderZoom");
	overlayCut.append(sliderZoom);
	
	sliderZoom.addEventListener("input", e => {wavesurfer.zoom(Number(e.currentTarget.value))})

    	wavesurfer.on('ready', function() {
		
    		readAndDecodeAudio();
    		preTrimUIChanges();
    		totalAudioDuration = wavesurfer.getDuration();
    		document.getElementById('timeTotal').innerText = format(totalAudioDuration.toFixed(1));
    		wavesurfer.enableDragSelection({});
    		console.log(intro);
    		if(intro != undefined) {intro.nextStep();}
    	});
	wavesurfer.on('finish', setPlayButton); 
	wavesurfer.load(URL.createObjectURL(element.files[0]));
	wavesurfer.on('audioprocess', function() {
	    	if(wavesurfer.isPlaying()) {
	        	var currentTime = wavesurfer.getCurrentTime();
	        	document.getElementById('timeCurrent').innerText = format(currentTime.toFixed(1));
	    	}
		    
	});
	wavesurfer.on('region-created', function(newRegion) {
		var audioTracks = document.getElementById("audio-tracks").tBodies[0];
		console.log(audioTracks.childNodes);
		var tableRow = createAudioRow(new Array(newRegion.id, newRegion.start, newRegion.end));
		audioTracks.appendChild(tableRow);
	 	showAndHideMergeOption();
	});
	wavesurfer.on('region-update-end', function(newRegion) {
		document.getElementById(newRegion.id+1).innerText = 
			format(( 0 >= newRegion.start.toFixed(4) ? 0 : newRegion.start.toFixed(4)));
		document.getElementById(newRegion.id+2).innerText = 
			format(( wavesurfer.getDuration() <= newRegion.end ? wavesurfer.getDuration().toFixed(4) : newRegion.end.toFixed(4)));
		if(intro != undefined) {
			intro.exit();
		}	
	});
	var audioButtons = document.getElementById("sampleButtons");
	var audioButtonsClass = audioButtons.getAttribute("class").replace("w3-hide","w3-show");
	audioButtons.setAttribute("class",audioButtonsClass);
}
		    
function downloadAudio() {
	var anchorAudio = document.createElement("a");
    	anchorAudio.href = processedAudio.src;
	anchorAudio.download = "output.mp3";
	anchorAudio.click();
	console.log(anchorAudio);
}

var compteurSample=0;
function loadAudioSample() {
	var anchorAudio = document.createElement("audio");
	var temp = "sampleN"+compteurSample.toString()
	anchorAudio.setAttribute("id", temp);
	anchorAudio.src = processedAudio.src;	
	document.body.append(anchorAudio);
	compteurSample+=1;
}
// var btnPitch = document.getElementById("btnPitch");
// btnPitch.addEventListener("click", pitch);
// function pitch(){
// 	let blobURL = URL.createObjectURL(fileMusique);	
	
	
// 		// var blob = URL.createObjectURL(fileMusique);
// 	console.log('pressed');
// 	var player = new Tone.Player();
// 	var pitchShift = new Tone.PitchShift({pitch: pitchy});
// 	player.load(blobURL);
// 	pitchShift.toMaster();
// 	player.connect(pitchShift);
// 	player.autostart = true;
// 	$('.audioPitch').next().text('Pitch');
// 	audioPitch.value=25;
// 	$('.audioPitch').on('input', function(e) {
// 		var $set = $(this).val()/25;
// 		$set= Math.round($set*10)/10;
// 		$(this).next().text($set);
// 		pitchy= e.currentTarget.value;
// 		});
	
// }
















// var pitchShifter = (function () {

// 	var audioContext ,
// 	    audioSources = [],
// 	    pitchShifterProcessor,
// 	    spectrumAudioAnalyser,
// 	    sonogramAudioAnalyser,
// 	    canvas,
// 	    canvasContext,
// 	    barGradient,
// 	    waveGradient;
    
// 	var audioSourcesNames = ['MP3 file', 'Microphone'],
// 	    audioSourceIndex = 0,
// 	    audioVisualisationNames = ['Spectrum', 'Wave', 'Sonogram'],
// 	    audioVisualisationIndex = 0,
// 	    validGranSizes = [256, 512, 1024, 2048, 4096, 8192],
// 	    grainSize = validGranSizes[1],
// 	    pitchRatio = 1.0,
// 	    overlapRatio = 0.50,
// 	    spectrumFFTSize = 128,
// 	    spectrumSmoothing = 0.8,
// 	    sonogramFFTSize = 2048,
// 	    sonogramSmoothing = 0;
    
// 	hannWindow = function (length) {
    
// 	    var window = new Float32Array(length);
// 	    for (var i = 0; i < length; i++) {
// 		window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / (length - 1)));
// 	    }
// 	    return window;
// 	};
    
// 	linearInterpolation = function (a, b, t) {
// 	    return a + (b - a) * t;
// 	};
    
// 	initAudio = function () {
    
// 	    if (!navigator.getUserMedia) {
    
// 		alert('Your browser does not support the Media Stream API');
    
// 	    } else {
    
// 		navigator.getUserMedia(
    
// 		    {audio: true, video: false},
    
// 		    function (stream) {
// 			audioSources[1] = audioContext.createMediaStreamSource(stream);
// 		    },
    
// 		    function (error) {
// 			alert('Unable to get the user media');
// 		    }
// 		);
// 	    }
    
// 	    spectrumAudioAnalyser = audioContext.createAnalyser();
// 	    spectrumAudioAnalyser.fftSize = spectrumFFTSize;
// 	    spectrumAudioAnalyser.smoothingTimeConstant = spectrumSmoothing;
    
// 	    sonogramAudioAnalyser = audioContext.createAnalyser();
// 	    sonogramAudioAnalyser.fftSize = sonogramFFTSize;
// 	    sonogramAudioAnalyser.smoothingTimeConstant = sonogramSmoothing;
    
// 	    var bufferLoader = new BufferLoader(
// 		audioContext, ["barbatuques-baiana.mp3"], function (bufferList) {
    
// 		    audioSources[0] = audioContext.createBufferSource();
// 		    audioSources[0].buffer = bufferList[0];
// 		    audioSources[0].loop = true;
// 		    audioSources[0].connect(pitchShifterProcessor);
// 		    audioSources[0].start(0);
// 		}
// 	    );
    
// 	    bufferLoader.load();
// 	};
    
// 	initProcessor = function () {
    
// 	    if (pitchShifterProcessor) {
// 		pitchShifterProcessor.disconnect();
// 	    }
    
// 	    if (audioContext.createScriptProcessor) {
// 		pitchShifterProcessor = audioContext.createScriptProcessor(grainSize, 1, 1);
// 	    } else if (audioContext.createJavaScriptNode) {
// 		pitchShifterProcessor = audioContext.createJavaScriptNode(grainSize, 1, 1);
// 	    }
    
// 	    pitchShifterProcessor.buffer = new Float32Array(grainSize * 2);
// 	    pitchShifterProcessor.grainWindow = hannWindow(grainSize);
// 	    pitchShifterProcessor.onaudioprocess = function (event) {
    
// 		var inputData = event.inputBuffer.getChannelData(0);
// 		var outputData = event.outputBuffer.getChannelData(0);
    
// 		for (i = 0; i < inputData.length; i++) {
    
// 		    // Apply the window to the input buffer
// 		    inputData[i] *= this.grainWindow[i];
    
// 		    // Shift half of the buffer
// 		    this.buffer[i] = this.buffer[i + grainSize];
    
// 		    // Empty the buffer tail
// 		    this.buffer[i + grainSize] = 0.0;
// 		}
    
// 		// Calculate the pitch shifted grain re-sampling and looping the input
// 		var grainData = new Float32Array(grainSize * 2);
// 		for (var i = 0, j = 0.0;
// 		     i < grainSize;
// 		     i++, j += pitchRatio) {
    
// 		    var index = Math.floor(j) % grainSize;
// 		    var a = inputData[index];
// 		    var b = inputData[(index + 1) % grainSize];
// 		    grainData[i] += linearInterpolation(a, b, j % 1.0) * this.grainWindow[i];
// 		}
    
// 		// Copy the grain multiple times overlapping it
// 		for (i = 0; i < grainSize; i += Math.round(grainSize * (1 - overlapRatio))) {
// 		    for (j = 0; j <= grainSize; j++) {
// 			this.buffer[i + j] += grainData[j];
// 		    }
// 		}
    
// 		// Output the first half of the buffer
// 		for (i = 0; i < grainSize; i++) {
// 		    outputData[i] = this.buffer[i];
// 		}
// 	    };
    
// 	    pitchShifterProcessor.connect(spectrumAudioAnalyser);
// 	    pitchShifterProcessor.connect(sonogramAudioAnalyser);
// 	    pitchShifterProcessor.connect(audioContext.destination);
// 	};
    
// 	initSliders = function () {
    
// 	    $("#pitchRatioSlider").slider({
// 		orientation: "horizontal",
// 		min: 0.5,
// 		max: 2,
// 		step: 0.01,
// 		range: 'min',
// 		value: pitchRatio,
// 		slide: function (event, ui) {
    
// 		    pitchRatio = ui.value;
// 		    $("#pitchRatioDisplay").text(pitchRatio);
// 		}
// 	    });
    
// 	    $("#overlapRatioSlider").slider({
// 		orientation: "horizontal",
// 		min: 0,
// 		max: 0.75,
// 		step: 0.01,
// 		range: 'min',
// 		value: overlapRatio,
// 		slide: function (event, ui) {
    
// 		    overlapRatio = ui.value;
// 		    $("#overlapRatioDisplay").text(overlapRatio);
// 		}
// 	    });
    
// 	    $("#grainSizeSlider").slider({
// 		orientation: "horizontal",
// 		min: 0,
// 		max: validGranSizes.length - 1,
// 		step: 1,
// 		range: 'min',
// 		value: validGranSizes.indexOf(grainSize),
// 		slide: function (event, ui) {
    
// 		    grainSize = validGranSizes[ui.value];
// 		    $("#grainSizeDisplay").text(grainSize);
    
// 		    initProcessor();
    
// 		    if (audioSources[audioSourceIndex]) {
// 			audioSources[audioSourceIndex].connect(pitchShifterProcessor);
// 		    }
// 		}
// 	    });
    
// 	    $("#audioVisualisationSlider").slider({
// 		orientation: "horizontal",
// 		min: 0,
// 		max: audioVisualisationNames.length - 1,
// 		step: 1,
// 		value: audioVisualisationIndex,
// 		slide: function (event, ui) {
    
// 		    audioVisualisationIndex = ui.value;
// 		    $("#audioVisualisationDisplay").text(audioVisualisationNames[audioVisualisationIndex]);
// 		}
// 	    });
    
// 	    $("#audioSourceSlider").slider({
// 		orientation: "horizontal",
// 		min: 0,
// 		max: audioSourcesNames.length - 1,
// 		step: 1,
// 		value: audioSourceIndex,
// 		slide: function (event, ui) {
    
// 		    if (audioSources[audioSourceIndex]) {
// 			audioSources[audioSourceIndex].disconnect();
// 		    }
    
// 		    audioSourceIndex = ui.value;
// 		    $("#audioSourceDisplay").text(audioSourcesNames[audioSourceIndex]);
    
// 		    if (audioSources[audioSourceIndex]) {
// 			audioSources[audioSourceIndex].connect(pitchShifterProcessor);
// 		    }
// 		}
// 	    });
    
// 	    $("#pitchRatioDisplay").text(pitchRatio);
// 	    $("#overlapRatioDisplay").text(overlapRatio);
// 	    $("#grainSizeDisplay").text(grainSize);
// 	    $("#audioVisualisationDisplay").text(audioVisualisationNames[audioVisualisationIndex]);
// 	    $("#audioSourceDisplay").text(audioSourcesNames[audioSourceIndex]);
// 	};
    
// 	initCanvas = function () {
    
// 	    canvas = document.querySelector('canvas');
// 	    canvasContext = canvas.getContext('2d');
    
// 	    barGradient = canvasContext.createLinearGradient(0, 0, 1, canvas.height - 1);
// 	    barGradient.addColorStop(0, '#550000');
// 	    barGradient.addColorStop(0.995, '#AA5555');
// 	    barGradient.addColorStop(1, '#555555');
    
// 	    waveGradient = canvasContext.createLinearGradient(canvas.width - 2, 0, canvas.width - 1, canvas.height - 1);
// 	    waveGradient.addColorStop(0, '#FFFFFF');
// 	    waveGradient.addColorStop(0.75, '#550000');
// 	    waveGradient.addColorStop(0.75, '#555555');
// 	    waveGradient.addColorStop(0.76, '#AA5555');
// 	    waveGradient.addColorStop(1, '#FFFFFF');
// 	};
    
	
    
// 	return {
    
// 	    init: function () {
    
// 		if ('AudioContext' in window) {
// 		    audioContext = new AudioContext();
// 		} else {
// 		    alert('Your browser does not support the Web Audio API');
// 		    return;
// 		}
    
// 		initAudio();
// 		initProcessor();
// 		initSliders();
// 		//initCanvas();
    
// 		//window.requestAnimFrame(renderCanvas);
// 	    }
// 	}
z
//     }());
    
//     window.requestAnimFrame = (function () {
    
// 	return (window.requestAnimationFrame ||
// 		window.webkitRequestAnimationFrame ||
// 		window.mozRequestAnimationFrame ||
// 		function (callback) {
// 		    window.setTimeout(callback, 1000 / 60);
// 		});
//     })();
    
//     window.addEventListener("DOMContentLoaded", pitchShifter.init, true);