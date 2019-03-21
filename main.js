$('#printInvoice').click(function(){
           Popup($('.invoice')[0].outerHTML);
           function Popup(data)
           {
               window.print();
               return true;
           }
       });

       $(document).ready(function(){
       $(".input").keyup(function(){
             let val1 = +$('#cena1').val();
             let val2 = +$('#kolicina1').val();
             $("#total1").val(val1*val2);
      });
   });

//    $(document).ready(function(){
//    $(".input").keyup(function(){
//          let val1 = +$('#cena2').val();
//          let val2 = +$('#kolicina2').val();
//          $("#total2").val(val1*val2);
//   });
// });
//
//    $(document).ready(function(){
//    $(".input").keyup(function(){
//          let val1 = +$("#total1").val();
//          let val2 = +$("#total2").val();
//          let val3 = +$("#total3").val();
//          $("#subtotal1").val(val1+val2+val3);
//   });
// });
