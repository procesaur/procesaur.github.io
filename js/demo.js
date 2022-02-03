/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    /*dotColor: '#f93800',
    lineColor: '#f93800aa'*/
	dotColor: '#f33800',
	lineColor: '#f33800',
	particleRadius: 11, // Dot size
    lineWidth: 2,
    curvedLines: true,
    proximity: 90, // How close two dots need to be before they join
    parallax: false,
    parallaxMultiplier: 20, 
	density: 8000,
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