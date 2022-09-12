$(document).ready(function() {
            $('a').click(function () {
                //alert("i am click");
				var selected=$(this);
				$('a').removeClass('active');
				$(selected).addClass('active')
			});

            var $a = $('.a'),
                $b = $('.b'),
                $c = $('.c'),
                $d = $('.d'),
                $home = $('.home'),
                $aboutus = $('.aboutus');
                $gallery = $('.gallery'),
				$contactus = $('.contactus');

            
            $a.click(function(){
                $home.fadeIn();
				$aboutus.fadeOut();
                $gallery.fadeOut();
                $contactus.fadeOut();

            });
            $b.click(function() {
                $aboutus.fadeIn();
                $home.fadeOut();
                $gallery.fadeOut();
                $contactus.fadeOut();
            });
                        $c.click(function() {
                            $gallery.fadeIn();
                            $home.fadeOut();
                            $aboutus.fadeOut();
                            $contactus.fadeOut();


                        });
                        $d.click(function(){
                            $contactus.fadeIn();
                            $home.fadeOut();
                            $gallery.fadeOut();
                            $aboutus.fadeOut();


            });

        });

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});

function sendEmail(){
    Email.Submit({
        Host : "smtp.yourisp.com",
        Username : "oussama.zem99@gmail.com",
        Password : "password",
        To : 'oussama.zem99@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the Subject ",
        Body : "and this is the body"
    }).then(
    message => alert(message)
    );
}