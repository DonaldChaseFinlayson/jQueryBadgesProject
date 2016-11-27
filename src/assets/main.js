$(function() {
	$.ajax({
    url: 'https://www.codeschool.com/users/3223798.json',
    dataType: 'jsonp',
    success: function(response) {
      for (var i = response.courses.completed.length - 1; i >= 0; i--) {
      	course = response.courses.completed[i];
      	$('#badges').append(
      		'<div class = "course">'+
      		'<h3>' + course.title + '</h3>' +
      		'<img src="'+ course.badge +'">' +
      		'<a target = "_blank" class="btn btn-primary" href="' + course.url + '"> See course </a>'
      		+'</div>');      	
      }
    }
  });
});
