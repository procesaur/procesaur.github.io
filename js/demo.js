/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    /*dotColor: '#f93800',
    lineColor: '#f93800aa'*/
	dotColor: '#005b9629',
	lineColor:  '#005b9629',
	particleRadius: 6, // Dot size
    lineWidth: 3,
    curvedLines: true,
    proximity: 90, // How close two dots need to be before they join
    parallax: false,
    parallaxMultiplier: 20, 
	density: 10000,
	minSpeedX: 0.0,
    maxSpeedX: 0.2,
    minSpeedY: 0.0,
    maxSpeedY: 0.2
  });
  
    particleground(document.getElementById('particlesx'), {
    /*dotColor: '#f93800',
    lineColor: '#f93800aa'*/
	dotColor: '#fe4a4922',
	lineColor: '#fe4a4922',
	particleRadius: 6, // Dot size
    lineWidth: 3,
    curvedLines: true,
    proximity: 90, // How close two dots need to be before they join
    parallax: false,
    parallaxMultiplier: 20, 
	density: 10000,
	minSpeedX: 0.0,
    maxSpeedX: 0.2,
    minSpeedY: 0.0,
    maxSpeedY: 0.2
  });
  

  
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);



/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#f33800',
    lineColor: '#f33800'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/