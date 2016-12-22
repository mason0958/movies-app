var apiBaseUrl = 'http://api.themoviedb.org/3';
var imageBaseUrl = 'http://image.tmdb.org/t/p/';
const nowPlayingUrl = apiBaseUrl + '/movie/now_playing?api_key=' + apiKey;
var nowPlayingHTML = '';
var nowPlayingHTMLA = '';
var nowPlayingHTMLB = '';
var nowPlayingHTMLC = '';
var nowPlayingHTMLD = '';




$(document).ready(function(){

	$('.DIV').on('hover',function(){

		$(this).children().toggleClass('hoverCLASS')

	});

	loadSliders();
	loadModals();
	$('.navbar-form').submit(function() {
		$.getJSON(nowPlayingUrl, function(returnData) {



		});
		
		

		var movieName = $('.form-control').val();
		$.getJSON(nowPlayingUrl, function(returnData){

		});
	});



});


function loadModals(){
	var modalContent = '';
	$.getJSON(nowPlayingUrl, function(returnData){
		console.log(returnData);
		var trailerUrl = apiBaseUrl + /movie/ + movieID + '/videos?api_key=' + apiKey;
		for(let i=0; i < 18; i++){
			var movieID = returnData.results[i].id;
			var ex = i;
			ex++;
			var poster = imageBaseUrl + 'w500' + returnData.results[i].poster_path;
			modalContent += '<a href="#ex' + ex + '" rel="modal:open">';
			modalContent += '<div class="modalContent col-md-2">';
					modalContent += '<img src="' + poster + '" style="width: 100%">';
				modalContent += '<div class="overlay" >';
					modalContent += '<div class="things">';
						modalContent += returnData.results[i].original_title;
						modalContent += '<p style="margin-top: 10px;">' + returnData.results[i].overview; + '</p>';
						modalContent += '<p>Rating: ' + returnData.results[i].vote_average + '</p>';
					modalContent += '</div>'
				modalContent += '</div>';
				modalContent += '<div id="ex' + ex + '" style="display:none; z-index: 6;">';
				modalContent += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + trailerUrl + '" frameborder="0" allowfullscreen></iframe>'
				modalContent += '</div>';
			modalContent += '</div>';
			modalContent += '</a>'
			$('.row-bottom').html(modalContent);
		}
	});

}


function loadSliders() {


	$.getJSON(nowPlayingUrl, function(returnData){
		var active = 0;
		var activeA = 0;
		var activeB = 0;
		var activeC = 0;
		var activeD = 0;

		console.log(returnData);

		for(let i=0; i < returnData.results.length; i++){

			var poster = imageBaseUrl + 'w500' + returnData.results[i].poster_path;
			console.log(poster);
			
			if (active < 1) {
				nowPlayingHTML += '<div class="item active">';
				active++;
			}
			else {
				nowPlayingHTML += '<div class="item">'
			}
			
			nowPlayingHTML += '<img src="' + poster + '" style="max-height: 330px; max-width:220px; width: 220px; height: 330px; min-width: 220px; min-height: 330px;">';
			nowPlayingHTML += '</div>';
			$('.carousel-inner-main').html(nowPlayingHTML);


			var b = i;
			b++;
			b++;
			poster = imageBaseUrl + 'w500' + returnData.results[b].poster_path;
			if (activeA < 1) {
				nowPlayingHTMLA += '<div class="item active">';
				activeA++;
			}
			else {
				nowPlayingHTMLA += '<div class="item">'
			}
			
			nowPlayingHTMLA += '<img src="' + poster + '" style="max-height: 330px;max-width:220px; width: 220px; height: 330px; min-width: 220px; min-height: 330px;">';
			nowPlayingHTMLA += '</div>';
			$('.carousel-inner-a').html(nowPlayingHTMLA);



			b++;
			b++;
			poster = imageBaseUrl + 'w500' + returnData.results[b].poster_path;
			if (activeB < 1) {
				nowPlayingHTMLB += '<div class="item active">';
				activeB++;
			}
			else {
				nowPlayingHTMLB += '<div class="item">'
			}
			
			nowPlayingHTMLB += '<img src="' + poster + '" style="max-height: 330px;max-width:220px; width: 220px; height: 330px; min-width: 220px; min-height: 330px;">';
			nowPlayingHTMLB += '</div>';
			$('.carousel-inner-b').html(nowPlayingHTMLB);



			b++;
			b++;
			poster = imageBaseUrl + 'w500' + returnData.results[b].poster_path;
			if (activeC < 1) {
				nowPlayingHTMLC += '<div class="item active">';
				activeC++;
			}
			else {
				nowPlayingHTMLC += '<div class="item">'
			}
			
			nowPlayingHTMLC += '<img src="' + poster + '" style="max-height: 330px;max-width:220px;  width: 220px; height: 330px; min-width: 220px; min-height: 330px;">';
			nowPlayingHTMLC += '</div>';
			$('.carousel-inner-c').html(nowPlayingHTMLC);

			b++;
			poster = imageBaseUrl + 'w500' + returnData.results[b].poster_path;
			if (activeD < 1) {
				nowPlayingHTMLD += '<div class="item active">';
				activeD++;
			}
			else {
				nowPlayingHTMLD += '<div class="item">'
			}
			
			nowPlayingHTMLD += '<img src="' + poster + '" style="max-height: 330px;max-width:220px; width: 220px; height: 330px; min-width: 220px; min-height: 330px;">';
			nowPlayingHTMLD += '</div>';
			$('.carousel-inner-d').html(nowPlayingHTMLD);
			

		}
	});

}



//returns 20 images, so I can do 3 sets of 6 images


//if you are going to pass stuff to a url
//make sure to pass it over the encode(uri) method
// http://www.w3schools.com/jsref/jsref_encodeuri.asp
