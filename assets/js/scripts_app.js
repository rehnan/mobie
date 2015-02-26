jQuery(document).ready(function($) {
  // Code using $ as usual goes here.

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 //$.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
}



io.connect('http://localhost:1337');

io.socket.on('connect', function socketConnected() {

	console.log('Conectouuu!');
	io.socket.emit('messageName', {thisIs: 'theMessage'});

});



/*
	$( "#menu_options li" ).click(function() {
		//alert(this.id); // id of clicked li by directly accessing DOMElement property
		$( "#menu_options" ).children().removeClass('active');
		$(this).addClass("active");
	    //alert($(this).attr('id')); // jQuery's .attr() method, same but more verbose
	    //alert($(this).html()); // gets innerHTML of clicked li
	    //alert($(this).text()); // gets text contents of clicked li
	});

*/



	$(".delete_session").on("click", function() {

		var link = $(this).attr('link');
		var session_name = $(this).attr('name');
		BootstrapDialog.confirm('Deseja excluir está sessão? ('+session_name+')', function(result){
            if(result) {
                window.location = link;
            }else {
               // alert('Nope.'+ link);
            }
        });
		/*
		var id_user = $("#id_current_user").text();

		var $form = "<form action='/speaker/session/create' method='POST'>"+
	        	 "<div class='form-group'>"+
				    "<label for='key'>Session Key:</label>"+
				    "<input type='text' class='form-control' name='key' placeholder='Session Key'>"+
				  "</div>"+
				  "<div class='form-group'>"+
				    "<label for='name'>Name Session:</label>"+
				    "<input type='text' class='form-control' name='name' placeholder='Session Name'>"+
				"</div>"+
				"<label for='description'>Description:</label><br>"+
				"<textarea class='field span12' name='description' rows='6' style='width: 100%;' placeholder='Description Session...'></textarea>"+
				"<input type='hidden' name='id_speaker' value='"+id_user+"'>"+
				"<div class=modal-footer>"+
	        		"<button type='button' class=btn btn-default data-dismiss=modal>Cancel</button>"+
	       			"<button type='submit' class=btn btn-primary>Save</button>"+
	     	    "</div>"+
	        	"</form>";
	        BootstrapDialog.show({
	            title: 'Create new Session',
	            message: $form, 
	        }, function(){
	        	BootstrapDialog.close();
	        });*/
	});

/*
	$(".openModalEditSession").on("click", function() {
    
		var id_user = $("#id_current_user").text();

		var $form = "<form action='/speaker/session/create' method='POST'>"+
	        	 "<div class='form-group'>"+
				    "<label for='key'>Session Key:</label>"+
				    "<input type='text' class='form-control' name='key' placeholder='Session Key'>"+
				  "</div>"+
				  "<div class='form-group'>"+
				    "<label for='name'>Name Session:</label>"+
				    "<input type='text' class='form-control' name='name' placeholder='Session Name'>"+
				"</div>"+
				"<label for='description'>Description:</label><br>"+
				"<textarea class='field span12' name='description' rows='6' style='width: 100%;' placeholder='Description Session...'></textarea>"+
				"<input type='hidden' name='id_speaker' value='"+id_user+"'>"+
				"<div class=modal-footer>"+
	        		"<button type='button' class=btn btn-default data-dismiss=modal>Cancel</button>"+
	       			"<button type='submit' class=btn btn-primary>Save</button>"+
	     	    "</div>"+
	        	"</form>";
	        BootstrapDialog.show({
	            title: 'Create new Session',
	            message: $form, 
	        }, function(){
	        	BootstrapDialog.close();
	        });*/
});
