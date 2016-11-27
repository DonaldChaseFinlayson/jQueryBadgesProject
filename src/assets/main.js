$(function() {
	$.ajax({
    url: 'https://www.codeschool.com/users/3223798.json',
    dataType: 'jsonp',
    success: function(response) {
      	addCourses(response.courses.completed); 	
      
    }

  });
  function addCourses(courses){
  	var $badges = $('#badges');
  	courses.forEach(function(course){
  		console.log(course);
  		var $course = $('<div />', {
  			'class': 'course'
  		}).appendTo($badges);

  		$('<h3/>', {
  			'text' : course.title
  		}).appendTo($course);

  		$('<img/>', {
  			'src' : course.badge
  		}).appendTo($course);

  		$('<a />', {
  			'href' : course.url,
  			'class' : 'btn btn-primary',
  			text : 'See course',
  			'target' : '_blank'
  		}).appendTo($course);

  	});
  }

});
