(function($){
  $(function(){

    $('.button-collapse').sideNav();

     $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal 
    // ID that wants to be triggered
    $('#LoginModal').leanModal();
  });
       

  }); // end of document ready
})(jQuery); // end of jQuery name space