(function($) {
var cats = [ 
    {"id":"1","url":"1-kitten.jpg", "name": "Fluffy", "about": "This is some text about this kitten"},
	{"id":"2","url":"2-kitten.jpg", "name": "Liqour", "about": "This is some text about this kitten"},
	{"id":"3","url":"3-kitten.jpg", "name": "Sneaky", "about": "This is some text about this kitten"},
	{"id":"4","url":"4-kitten.jpg", "name": "Roar", "about": "This is some text about this kitten"},
	{"id":"5","url":"5-kitten.jpg", "name": "Sleepy", "about": "This is some text about this kitten"},
	{"id":"6","url":"6-kitten.jpg", "name": "Scratchy", "about": "This is some text about this kitten"}
];

$.each(cats, function(index,entry) {
    $('#list').append('<hr class="featurette-divider">' + 
    	'<div class="row featurette">'+
    		'<div class="col-md-7 col-md-push-5">' +
    			'<h2 class="featurette-heading">' + entry.name + '</h2>' +
    			'<p class="lead">' + entry.about + '</p>' +
    		'</div>' +
			'<div class="col-md-5 col-md-pull-7">' +
				'<img class="featurette-image img-responsive center-block img-circle" src="./img/'+ entry.url +'" width="304" height="236">' +
			'</div>'+
		'</div>')
  });
		//ajax upload

  // var thumb = $('img#thumb');        

  // new AjaxUpload('imageUpload', {
  //   action: $('form#theForm').attr('action'),
  //   name: 'image',
  //   onSubmit: function(file, extension) {
  //     $('div.preview').addClass('loading');
  //   },
  //   onComplete: function(file, response) {
  //     thumb.load(function(){
  //       $('div.preview').removeClass('loading');
  //       thumb.unbind();
  //     });
  //     thumb.attr('src', response);
  //   }
  // });


})(jQuery);

$(document).ready( function(){
        var d = getAnimals();
        displayAnimals(d);
        $("#addButton").click(addAnimal);
      });

      function addAnimal(e){
        var entry = {};
        entry.name = $("#name").val();
        entry.description = $("#description").val();
        var allAnimals = getAnimals(); //temp var for dict
        allAnimals.push(entry);
        saveAnimals(allAnimals);
        displayAnimals(getAnimals()); // it uses the updated list
        e.pventDefault(); // needed for the event handler
      }

      function saveAnimals(d){
        localStorage.setItem('theAnimals', JSON.stringify(d)); // to save stuff in local storage

      }

      function getAnimals(){
        if (localStorage.getItem('theAnimals') === null){
          return(initAnimals());
        } else {
          return(JSON.parse(localStorage.getItem('theAnimals'))); // stored in text, need obj
        }
        
      }

      function displayAnimals(d){
        //var d = initAnimals();
        $animalList = $('#animalList');
        $animalList.html(" ");
        $.each(d, function(index, entry){
          $animalList.append("<dt>" + entry.name + "</dt><dd>" + entry.description + "</dd>");
        });
      }

      function initAnimals(){ // array of objects
        var defaultAnimals = [
            {name: "cica", description: "See 'bar'"},
            {name: "macsi", description: "See 'foo'"}
          ];
          return(defaultAnimals);
      }
    



$(document).ready(function(){

  var thumb = $('img#thumb');        

  new AjaxUpload('imageUpload', {
    action: $('form#theForm').attr('action'),
    name: 'image',
    onSubmit: function(file, extension) {
      $('div.preview').addClass('loading');
    },
    onComplete: function(file, response) {
      thumb.load(function(){
        $('div.preview').removeClass('loading');
        thumb.unbind();
      });
      thumb.attr('src', response);
    }
  });
  
});