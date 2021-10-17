$(document).ready( function() {
 $("#contactForm").on('submit', function (e) {

    let payload = { "name" : $('#name').val() , "number" : $('#phonenumber').val() , "email": $('#email').val() ,"message" : $('#message').val() , "projectName" :"Ekam Plots"  }
    $.ajax({
        type: 'POST',
        url: "https://n3jhbh6bg8.execute-api.ap-south-1.amazonaws.com/default/EmailShooter",
     
        data: JSON.stringify(payload),
        success:function(data){
          console.log(JSON.stringify(data,null,2),"====>success");
          $('#success').html("<div class='alert alert-success'>");
                    	   $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    		.append( "</button>");
                    	  $('#success > .alert-success')
                    		.append("<strong>Your message has been sent. </strong>");
             	  $('#success > .alert-success')
             		.append('</div>');
                                     
             	  //clear all fields
             	  $('#contactForm').trigger("reset");

         
        },
        error:function(data){
            console.log("Error Occured ===>", JSON.stringify(data,null,2));

            alert("Error Occured ===>",JSON.stringify(data,null,2));
            $('#success').html("<div class='alert alert-danger'>");
            	$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            	 .append( "</button>");
            	$('#success > .alert-danger').append("<strong>Sorry "+  $("input#name").val()  +" it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com'>me@example.com</a> ? Sorry for the inconvenience!");
 	        $('#success > .alert-danger').append('</div>');
 		//clear all fields
 		    $('#contactForm').trigger("reset");
        }
    });
    e.preventDefault();

 })
})