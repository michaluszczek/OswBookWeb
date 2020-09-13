/*$(document).ready(function() {
	$('#add_btn').click(function(e) {
    e.preventDefault();
    var x = 0;
    if(x <= 8)
    {
      appendNames(); // append new element to form 
      x++; // increment counter for form
    }
    
  });

	$('#input_wrapper').on('click', '.deleteBtn', function(e) {
  	e.preventDefault();
    var id = e.currentTarget.id; // set the id based on the event 'e'
    $('div[id='+id+']').remove(); //find div based on id and remove
    x--; // decrement the counter for form.
  });
  
  function appendNames() {
    var new_field = "<input type='text' name='name' placeholder='Name'/>";  
    $('#fields').append(new_field);
  }
  

$.fn.serializeObject = function(asString) {
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {

       if($('#' + this.name).hasClass('date')) {
           this.value = new Date(this.value).setHours(12);
       }

       if (o[this.name] !== undefined) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   if (asString) {
       return JSON.stringify(o);
   }
   return o;
};*/