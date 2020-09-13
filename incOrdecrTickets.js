$("#add_btn").click(function(){
    var amount = $("#ticketAmnt").val(); 
    if(amount < 8) {
        amount++;
        $("#ticketAmnt").val(amount); 
        appendNames();  
    }   
  });

$("#rem_btn").click(function(){
    if(amount > 1 ) {
        amount--;
        $("#ticketAmnt").val(amount);
        removeNames();  
    }
});
  
function appendNames() {
    var icon = "<z class='fa fa-user'></i>";
    var new_field = "<input type='text' name='name' placeholder='Name'/>"; 
    $('#fields').append(icon);
    $('#fields').append(new_field);
  }

function removeNames() {

    var new_field = "<input type='text' name='name' placeholder='Name'/>"; 
    $(new_field).remove();
    }