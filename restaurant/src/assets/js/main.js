$(document).ready( function() {

   $(".otherpage").click(function(){
    var url = window.location.href;
    if (url != "http://localhost:4200/")
    {
      $("#bodyimage").removeClass('bodyimage');
      $(".navbar").attr('style','background-color: #f0b908');
   
    }
    else{
      $("#bodyimage").addClass('bodyimage');
      $(".navbar").attr('style','background-color: transparent');
    }
   });

  // to reload the menu after seach box is empty
  document.getElementById("searchstring").addEventListener("search", function(event) { window.location.reload();});

 

  var x = sessionStorage.getItem("usertoken");
  if (x == null || x == undefined){
    $("#btnupdate").hide();
    $("#btndelete").hide();
    $("#btnaddnewfood").hide();
  }
  else{
    $("#login").hide();
    $("#logout").show();
    
  }

  $("#logout").click(function() {
    sessionStorage.removeItem("usertoken");
    window.location.href = "/";
  });

  $(".addtocart").click(function() {
   
    var x = $(this).children("input").val();
 });

  $(".navli").click(function() {
  var x = sessionStorage.getItem("usertoken");
  if (x == null || x == undefined){
    $("#btnupdate").hide();
    $("#btndelete").hide();
    $("#btnaddnewfood").hide();
  }
  });
  });