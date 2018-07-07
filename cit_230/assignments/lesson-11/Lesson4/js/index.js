 
        $(function() {
            // jQuery Code goes here

            //    var elements = document.querySelectorAll(".navigation > li:nth-child(even) > a");
            //      for(var i = 0; i < elements.length; i ++){
            //        elements[i].style.color = "rgb(255, 55, 55)";
            //  }

            //     $('button').css('border', '1px solid red');

            //   $('h2').css('border', '1px solid red');

            // $('input[name="nameVal"]').css('border', '1px solid red');

            //       $('input[name!="phoneNum"]').css('border', '1px solid red');

            //     $('input[name*="Num"]').css('border', '1px solid red');

            //   $('input[name$="Val]').css('border', '1px solid red');




            $('#alcoveLogo').css('opacity', 0.4);

            $('.servicesBtn').css('color', '#FFF');


            //    $('#alcoveLogo').next().css('background-color', 'rgba(255, 0, 0, 0.2)');

            //     $('.box1').nextAll().css('background-color', 'rgba(255, 0, 0, 0.2)');


            //     $('.header').children().css('background-color', 'rgba(255, 0, 0, 0.2)');

            //    $(".navigation > li:eq(2)").parent().css('opacity','0.3');

      //      $('.servicesBtn').closest('div').css('background-color', 'rgba(255, 0, 0, 0.2)');


            var toggleStyle = function() {


                var inputFields = $('input[type="text"]');

                if (inputFields.css('background-color') === 'rgb(255, 0, 0)') {
                    inputFields.css('background-color', 'rgb(255, 255, 255)');
                } else {
                    inputFields.css('background-color', 'rgb(255, 0, 0)');
                }
            }

            $('#ReqAQuoteBtn').click(toggleStyle);

            $('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>");

            $("<li><strong>This is also great !!</strong></li>").prependTo(".coreValues");


            var nameVal = $('input[name="nameVal"]');

            function fillEmpty() {
                if (nameVal.val() == '') {
                    nameVal.val('John Doe');
                }
            }

            $('#ReqAQuoteBtn').click(fillEmpty);







        })
  