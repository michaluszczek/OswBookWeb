$("#add_btn").on('click', function(){
    var amount = $("#ticketAmnt").val();
    if(amount < 8) {
        amount++;
        $("#ticketAmnt").val(amount); 
        $('#fields').prepend("<input type= 'text' name='name' placeholder='Name' id =fn_" + amount + ">");
                
    }   
  });

$("#rem_btn").on('click', function(){
    var amount = $("#ticketAmnt").val();
    if(amount != 0 ) {        
        amount--;
        $('#fields').children().last().remove();
        $("#ticketAmnt").val(amount);
    }
});
  
function appendNames() {
    var icon = "<z class='fa fa-user'></i>";
    //$('#fields').append(icon);
    $('#fields').prepend($new_field);
  }

function removeNames() {

    var new_field = "<input type='text' name='name' placeholder='FirstName' />"; 
    $(new_field).remove();
    }