$("#add_btn").on('click', function(){
    var amount = $("#ticketAmnt").val();
    if(amount < 8) {
        amount++;
        $("#ticketAmnt").val(amount); 
        $('#fields').prepend("<form class = 'double_field' id = 'f1'><input type= 'text' class = 'field' name='first_name' placeholder='First name' id =fn_" + amount + "><input type= 'text' class = 'field' name='last_name' placeholder='Last name' id =ln_" + amount + "></form>");
                
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
