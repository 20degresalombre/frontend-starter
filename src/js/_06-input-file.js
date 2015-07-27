$(function(){

  // http://www.abeautifulsite.net/whipping-file-inputs-into-shape-with-bootstrap-3/
  $(document).on('change', '.btn-file :file', function() {

    var input     = $(this),
        numFiles  = input.get(0).files ? input.get(0).files.length : 1,
        label     = input.val().replace(/\\/g, '/').replace(/.*\//, '');

    var inputText = input.parents('.input-group').find(':text'),
    log = numFiles > 1 ? numFiles + ' files selected' : label;

    if( inputText.length ) {
        inputText.val(log);
    }
    // else {
    //     if( log ) alert(log);
    // }

  });

});