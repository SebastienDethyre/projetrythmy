var wavesurfer;
var audioFile;
var totalAudioDuration;
var arrBuffer;
var audioBuffer;
var processedAudio;
var intro;

var btnSamplesDone;
btnSamplesDone = document.createElement("span");	
btnSamplesDone.className="btnSamplesDone";
var imgBtnSamplesDone = document.createElement("IMG");
imgBtnSamplesDone.setAttribute("src", "img/samplePad.png");
imgBtnSamplesDone.style.width="100%";
imgBtnSamplesDone.style.height="100%";

var isSamplesFlipped=true;
let indice = 2;
let time = indice * 100;
var compteur=0;

function createLoader(loaderContainer){	
	var loader = document.createElement("div");
	loader.id = "loader";
	loader.className="loader";
	loaderContainer.append(loader);
}

function removeLoader(){if(loader)loader.remove();}

function showAndHideMergeOption() {
	var audioTracks = document.getElementById("audio-tracks");
	var mergeOption = document.getElementById('merge-option');
	if(audioTracks.childNodes.length >= 4) {
		mergeOption.setAttribute('class', 'w3-show');
	} else {
		mergeOption.setAttribute('class', 'w3-hide');
	}
}

function createAudioRow(arr) {
	var tableRow = document.createElement("tr");
	tableRow.setAttribute("id", arr[0]);
	tableRow.setAttribute("class", "lignes w3-hover-text-deep-purple");
	// tableRow.setAttribute("onmouseover", "highlightRegion('over','"+arr[0]+"')");
	// tableRow.setAttribute("onmouseleave", "highlightRegion('leave','"+arr[0]+"')");
	for(var i in arr){
		var tableData;
		if(i==0) {
			tableData = document.createElement("input");
			tableData.setAttribute("type", "checkbox");
			tableData.setAttribute("class", "w3-check w3-margin-left");
		} else {
			tableData = document.createElement("td");
			tableData.innerText = arr[i].toFixed(4);
		}
		tableData.setAttribute("id",arr[0]+i); 	
		tableRow.appendChild(tableData);
	}

	var actionsArray = new Array(
		{"action":"play", "iconClass":"fa fa-play-circle-o"}, 
		{"action":"pause", "iconClass":"fa fa-pause-circle-o"}, 
		{"action":"sample", "iconClass":"fa fa-circle"}, 
		{"action":"download", "iconClass":"fa fa-download"}, 
		{"action":"delete", "iconClass":"fa fa-times"});
	for(var i=0; i<actionsArray.length; i++) {
		var tableData = document.createElement("td");
		tableData.setAttribute("id", arr[0]+"-"+actionsArray[i].action);
		tableData.setAttribute("class", "cutList");
		var dataIcon = document.createElement("button");
		dataIcon.setAttribute("title", actionsArray[i].action);
		dataIcon.setAttribute("class", actionsArray[i].iconClass+" w3-button w3-white w3-border w3-border-deep-purple w3-round-large");
		dataIcon.setAttribute("id", arr[0]+"-"+actionsArray[i].iconClass);
		dataIcon.setAttribute("onClick", actionsArray[i].action+"Track('"+arr[0].toString()+"')"); 	
		tableData.appendChild(dataIcon);
		tableRow.appendChild(tableData);
	}
	showIntro();
	return tableRow;
}

function highlightRegion(eventName, regionId) {
	var region = wavesurfer.regions.list[regionId];
	if(eventName == "over") {
		region.color = "rgba(122, 99, 255, .1)";
	} else {
		wavesurfer.regions.list[regionId].color = "rgba(0, 0, 0, 0.1)";
	}
}

function playTrack(regionId) {
	wavesurfer.regions.list[regionId].play();
}

function pauseTrack() {
	wavesurfer.pause();
}

function loopTrack(regionId){
	wavesurfer.regions.list[regionId].playLoop();
}

function sampleTrack(regionId) {
	sampleAudio(wavesurfer.regions.list[regionId]);
	btnSamplesDone.append(imgBtnSamplesDone);
	var pannelMusique = document.querySelector ("#pannelMusique");
	pannelMusique.append(btnSamplesDone);
	document.querySelector("#sampleBox").classList.add("flipTuileXOff");
	setTimeout(() => {document.querySelector("#sampleBox").style.transform= "rotateX(0deg)";}, time );
	setTimeout(() => {document.querySelector("#sampleBox").classList.remove("flipTuileXOff")}, time );
	btnSamplesDone.onclick= () =>{
		if (isSamplesFlipped==true){
			isSamplesFlipped=false;
			document.querySelector("#sampleBox").classList.add("flipTuileXOn");
			setTimeout(() => {document.querySelector("#sampleBox").style.transform="rotateX(90deg)";}, time );
			setTimeout(() => {document.querySelector("#sampleBox").classList.remove("flipTuileXOn")}, time);
		}
		else{
			isSamplesFlipped=true;
			document.querySelector("#sampleBox").classList.add("flipTuileXOff");	
			setTimeout(() => {document.querySelector("#sampleBox").style.transform="rotateX(0deg)";},time );
			setTimeout(() => {document.querySelector("#sampleBox").classList.remove("flipTuileXOff")},time);			
		}	
	}
	var idName = "sampleContainer" + compteur;
	var sampleContainer = document.createElement("div")	;
	sampleContainer.id= idName;
	sampleContainer.className="sampleContainer";
	var sampleBox = document.querySelector("#sampleBox");
	sampleBox.append(sampleContainer);		
	createLoader(sampleContainer);
	var btnSampleCut = document.createElement("div");	
	btnSampleCut.className="btnSampleCut";
	var imgBtnSampleCut = document.createElement("div");
	imgBtnSampleCut.className="imgBtnSampleCut";	
	imgBtnSampleCut.style.backgroundColor= "hsl(" + (259 + compteur * 10) + ",85%,50%)";
	
	var imgBtnSampleCutProgress = document.createElement("div");
	imgBtnSampleCutProgress.className="imgBtnSampleCutProgress";
	imgBtnSampleCutProgress.style.width="0%";
	imgBtnSampleCutProgress.style.height="100%";
	imgBtnSampleCutProgress.style.backgroundColor= "hsl(" + (249 + compteur * 10 +20) + ",85%,50%)";
	
	imgBtnSampleCut.append(imgBtnSampleCutProgress);	
	btnSampleCut.append(imgBtnSampleCut);	
	
	var btnSampleCutSuppr = document.createElement("span");	
	var imgBtnSampleCutSuppr = document.createElement("IMG");
	imgBtnSampleCutSuppr.setAttribute("src", "img/prevResetButtonSelect.png");
	btnSampleCutSuppr.className="btnSampleCutSuppr";
	imgBtnSampleCutSuppr.style.width="100%";
	imgBtnSampleCutSuppr.style.height="100%";
	btnSampleCutSuppr.append(imgBtnSampleCutSuppr);
	sampleContainer.append(btnSampleCutSuppr);	
	
	var btnSampleCutLoop = document.createElement("span");	
	var imgBtnSampleCutLoop = document.createElement("IMG");
	imgBtnSampleCutLoop.setAttribute("src", "img/loop.png");
	btnSampleCutLoop.className="btnSampleCutLoop";
	imgBtnSampleCutLoop.style.width="100%";
	imgBtnSampleCutLoop.style.height="100%";
	btnSampleCutLoop.append(imgBtnSampleCutLoop);
	sampleContainer.append(btnSampleCutLoop);
	
	var btnSampleCutUnloop = document.createElement("span");	
	var imgBtnSampleCutUnloop = document.createElement("IMG");
	imgBtnSampleCutUnloop.setAttribute("src", "img/prevPauseButtonSelect.png ");
	btnSampleCutUnloop.className="btnSampleCutUnloop";
	imgBtnSampleCutUnloop.style.width="100%";
	imgBtnSampleCutUnloop.style.height="100%";
	btnSampleCutUnloop.append(imgBtnSampleCutUnloop);
	sampleContainer.append(btnSampleCutUnloop);
	
	var sampleSpeed= document.createElement("input");
	sampleSpeed.setAttribute("type","range");
	sampleSpeed.classList.add("sampleSpeed");
	sampleContainer.append(sampleSpeed);
	
	var sampleVolume= document.createElement("input");
	sampleVolume.setAttribute("type","range");
	sampleVolume.classList.add("sampleVolume");
	sampleVolume.value=100;
	
	sampleContainer.append(sampleVolume);	
	
	
	var localDuration = (wavesurfer.regions.list[regionId].end - wavesurfer.regions.list[regionId].start) * 1000	
	
	var sampleNumber ="sampleN" + compteur.toString() ;
	setTimeout(() => {
		removeLoader();
		sampleContainer.append(btnSampleCut);
		var sample=document.getElementById(sampleNumber)
		
		imgBtnSampleCut.onclick=() =>{
			if(sample){sample.currentTime=0;sample.loop=false;sample.play();}
			else{return;}
			sample.ontimeupdate=function(){		
				imgBtnSampleCutProgress.style.width =sample.currentTime / sample.duration.toFixed(3) * 100 + "%";
				// 
			}
			setTimeout(() => {
				
				imgBtnSampleCutProgress.style.width="0%";
			}, localDuration+200); 
		}
		
		btnSampleCutLoop.onclick=() => {
			if(sample){sample.loop=true;sample.currentTime=0;sample.play();}
			else{
				return; 
			}
			sample.ontimeupdate=function(){		
				imgBtnSampleCutProgress.style.width =sample.currentTime / sample.duration.toFixed(3) * 100 + "%";
			}
			btnSampleCutUnloop.onclick=() => {imgBtnSampleCutProgress.style.width="0%";sample.loop=false;sample.pause()}
			setTimeout(() => {
				imgBtnSampleCutProgress.style.width="0%";
			}, localDuration+200); 
		}		

		imgBtnSampleCutSuppr.onclick=() =>{document.getElementById(idName).remove();if(sample)sample.remove();}
		sampleSpeed.addEventListener("input", e => {sample.playbackRate= e.currentTarget.value / 50;});	
		sampleVolume.addEventListener("input", e => {sample.volume = e.currentTarget.value / 100;});		

	}, localDuration); 
	compteur+=1;	
}

function mergeTrack() {
	if(intro != undefined) {
		intro.exit();
		intro = undefined;
	}
	var audioList = new Array();
	for( var i in wavesurfer.regions.list ) {
		var region = wavesurfer.regions.list[i];
		if( document.getElementById(region.id+'0').checked ) {
			document.getElementById(region.id+'0').checked = false;
			audioList.push(wavesurfer.regions.list[i]);
		}
	}
	if(audioList.length >= 2){
		mergeAudio(audioList);	
		var mergedTrackDiv = document.getElementById("merged-track-div");
		var mergedTrackDivClass = mergedTrackDiv.className.replace("w3-hide","w3-show");
		mergedTrackDiv.setAttribute("class",mergedTrackDivClass);
		var mergedTrack = document.getElementById("merged-track");
	} else {
		alert("Select more than 1 tracks");
	}	
}

function downloadTrack(regionId) {
	trimAudio(wavesurfer.regions.list[regionId]);
}

function deleteTrack(regionId) {
	var track = document.getElementById(regionId);
	track.parentNode.removeChild(track);
	wavesurfer.regions.list[regionId].remove();
	showAndHideMergeOption();
}

function setPlayButton() {
	var icon = document.getElementById("playPauseCut");
	icon.className = "fa fa-play";
};

function setPauseButton() {
	var icon = document.getElementById("playPauseCut");
	icon.setAttribute
};

function setSampleButton() {
	var icon = document.getElementById("playPauseCut");
	icon.setAttribute
};

function playAndPause() {
	var icon = document.getElementById("playPauseCut");
	if(icon.className === "fa fa-play"){
		icon.className = "fa fa-pause";
		wavesurfer.play();
	} else {
		icon.className = "fa fa-play";
		wavesurfer.pause();
	}
}

function preTrimUIChanges() {
	setPlayButton();
	setPauseButton();
	var audioTracks = document.getElementById("audio-tracks");
	var tbody = document.createElement("tbody");
	audioTracks.tBodies[0].remove();
	audioTracks.insertBefore(tbody, audioTracks.tFoot[0]);
}

function showIntro() {
	var audioTracks = document.getElementById("audio-tracks").tBodies[0];
	if(intro != undefined && audioTracks.rows.length >= 3) {
		intro.goToStep(3).start();
		var tourButton = document.getElementById("tour-button");
		tourButton.setAttribute("class",tourButton.className+" w3-hide");
	} 
}

function showTour() {
	var n = localStorage.getItem('on_load_counter');
	if (n === null) {
	  intro = introJs().start();
	  n = 0;
	  localStorage.setItem("on_load_counter", n);
	} else {
		var tourButton = document.getElementById("tour-button");
		tourButton.setAttribute("class",tourButton.className+" w3-hide");	
	}
}

function startTour() {
	intro.nextStep();
}