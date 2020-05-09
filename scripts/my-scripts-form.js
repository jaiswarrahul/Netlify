$( document ).ready(function() {
  // Handler for .ready() called.
  //alert("My alert");
 
  
  //This code is for the volunteer form
  //$(document).on('change blur', '#t-size', chkSize);
  $(document).on('change', '#t-size', chkSize);
  
  
  function chkSize() {
  
    var t_size = $('#t-size').val();
  
    if(t_size == 'other'){
      //alert(t_size);
      
      
      $('#other').removeAttr('disabled');
    }//end if
    else{
      $('#other').attr('disabled', true);
      $('#other').val(' ');
    }
    //alert(t_size);
  }//end function
  //This code is for END of volunteer form

});

