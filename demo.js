$(document).ready(function() {
    // Select data and show it
    $("#tablebody").on("click", "tr", function() {
      var name = $(this).find("td:eq(0)").text();
      var email = $(this).find("td:eq(1)").text();
      var phone = $(this).find("td:eq(2)").text();
      var landline = $(this).find("td:eq(3)").text();
      var website = $(this).find("td:eq(4)").text();
      var address = $(this).find("td:eq(5)").text();
      $("#show-details h1").text(name);
      $("#show-details li:eq(0)").text(email);
      $("#show-details li:eq(1)").text(phone);
      $("#show-details li:eq(2)").text(landline);
      $("#show-details li:eq(3)").text(website);
      $("#show-details li:eq(4)").text(address);
      $(".right-container-sub-part").show();
    });
  
    // Delete data
    $(".btn-delete").click(function() {
      var name = $("#show-details h1").text();
      // Do something with the name to delete the data
      $(".right-container-sub-part").hide();
    });
  
    // Edit data
    $(".btn-edit").click(function() {
      var name = $("#show-details h1").text();
      // Do something with the name to edit the data
    });
  
    // Add data
    $("#btnadd").click(function() {
      var name = $("#fname").val();
      var email = $("#email").val();
      var phone = $("#number").val();
      var landline = $("#landline").val();
      var website = $("#website").val();
      var address = $("#txtarea").val();
      // Do something with the data to add it to the table
    });
  });
  