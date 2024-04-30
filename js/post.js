$(function(){

if ($('.brouillons').length > 0){
$('.brouillons').on('click', function () {
  if (window.filesize > 1024*5) {
    alert('max upload size is 5k');
return false;
  }
var form=document.getElementById("sendemailform");
var fd=new FormData($(form)[0]);
fd.set("sent","0");
  $.ajax({
    // Your server script to process the upload
    url: $(form).attr("action"),
    type: $(form).attr("method"),

    // Form data
    data: fd,

    // Tell jQuery not to process data or worry about content-type
    // You *must* include these options!
    cache: false,
    contentType: false,
    processData: false,

    // Custom XMLHttpRequest
    success: function (data) {
	    console.log("HEY")
	    console.log(JSON.stringify(data))
	    console.log(JSON.stringify(data.redirect))
	    if (data.redirect){
	    window.location=data.redirect;
	    }else{
	    window.location="/";
	    }
},
    xhr: function () {
      var myXhr = $.ajaxSettings.xhr();
      if (myXhr.upload) {
        // For handling the progress of the upload
        myXhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            $('progress').attr({
              value: e.loaded,
              max: e.total,
            });
          }
        }, false);
      }
      return myXhr;
    }
  });
	return false;
  });
}
if ($('form#bookspotsform').length > 0){
$('form#bookspotsform').on('submit', function () {
  if (window.filesize > 1024*5) {
    alert('max upload size is 5k');
return false;
  }
  $.ajax({
    // Your server script to process the upload
    url: $(this).attr("action"),
    type: $(this).attr("method"),

    // Form data
    data: new FormData($(this)[0]),

    // Tell jQuery not to process data or worry about content-type
    // You *must* include these options!
    cache: false,
    contentType: false,
    processData: false,

    // Custom XMLHttpRequest
    success: function (data) {
	    console.log("HEY")
	    console.log(JSON.stringify(data))
	    console.log(JSON.stringify(data.redirect))
	    if (data.bookingid){
		    $("#pills-checkout-tab").click();
		    document.getElementById("pills-checkout-tab").reset();
		    document.getElementById("checkout_booking_id").value=data.bookingid;
		    document.getElementById("checkout_name").value=booking_firstname.value+" "+booking_lastname.value;

	    }
},
    xhr: function () {
      var myXhr = $.ajaxSettings.xhr();
      if (myXhr.upload) {
        // For handling the progress of the upload
        myXhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            $('progress').attr({
              value: e.loaded,
              max: e.total,
            });
          }
        }, false);
      }
      return myXhr;
    }
  });
	return false;
  });
}
if ($('form:not(#bookatour):not(#bookspotsform)').length > 0){
$('form:not(#bookatour):not(#bookspotsform)').on('submit', function () {
  if (window.filesize > 1024*5) {
    alert('max upload size is 5k');
return false;
  }
  $.ajax({
    // Your server script to process the upload
    url: $(this).attr("action"),
    type: $(this).attr("method"),

    // Form data
    data: new FormData($(this)[0]),

    // Tell jQuery not to process data or worry about content-type
    // You *must* include these options!
    cache: false,
    contentType: false,
    processData: false,

    // Custom XMLHttpRequest
    success: function (data) {
	    console.log("HEY")
	    console.log(JSON.stringify(data))
	    console.log(JSON.stringify(data.redirect))
	    if (data.redirect){
	    window.location=data.redirect;
	    }else{
	    window.location="/";
	    }
},
    xhr: function () {
      var myXhr = $.ajaxSettings.xhr();
      if (myXhr.upload) {
        // For handling the progress of the upload
        myXhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            $('progress').attr({
              value: e.loaded,
              max: e.total,
            });
          }
        }, false);
      }
      return myXhr;
    }
  });
	return false;
  });
}
$('.envoyermessage input').on('click', function () {
  if (window.filesize > 1024*5) {
    alert('max upload size is 5k');
return false;
  }
	var hey=$(this)[0].parentElement;
	var hi=$(hey);
	var fd=new FormData(hey);
	fd.append("envoyeremail",$(this).attr("name"));

  $.ajax({
    // Your server script to process the upload
    url: hi.attr("action"),
    type: hi.attr("method"),

    // Form data
    data: fd,

    // Tell jQuery not to process data or worry about content-type
    // You *must* include these options!
    cache: false,
    contentType: false,
    processData: false,

    // Custom XMLHttpRequest
    success: function (data) {
	    console.log("HEY")
	    console.log(JSON.stringify(data))
	    console.log(JSON.stringify(data.redirect))
	    if (data.redirect){
	    window.location=data.redirect;
	    }else{
	    window.location="/";
	    }
},
    xhr: function () {
      var myXhr = $.ajaxSettings.xhr();
      if (myXhr.upload) {
        // For handling the progress of the upload
        myXhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            $('progress').attr({
              value: e.loaded,
              max: e.total,
            });
          }
        }, false);
      }
      return myXhr;
    }
  });
	return false;
  });

  
});
