function update() {
    $("#btnadd").val("ADD");
   
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArry = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry))
    }
    else {
        itemJsonArryStr = localStorage.getItem('itemsJson')
        itemJsonArry = JSON.parse(itemJsonArryStr);

    }
    let tableBody = $('#contectbody');
    let str = "";
    itemJsonArry.forEach((element, index) => {

        str += ` <div  style="width:100%" class="select-body">
                     <input type="hidden" id="num" val=${index}>
                     <div class="element_name">${element.name}</div>
                     <div class="element_email">${element.email}</div>
                     <div class="element_number">${element.number}</div>
                </div>
               `
    });
    tableBody.html(str);
}
$(document).ready(function () {

    $('#right_container_id').hide();
    $('#right-container-sub-part').hide();

    $('#btn-add-details').click(function () {
        $('#right_container_id').show();
        $('#right-container-sub-part').hide();
        $(".validationMessage_hideContent").hide();
        $('.select-body').removeClass('active');
        clearform();
    })

    $('#home').click(function () {
       $(".left-container-contects").show();
       $('#right_container_id').hide();
       $('#right-container-sub-part').hide();
       $('.select-body').removeClass('active');
    })

    function clearform() {
        var name = $("#fname").val("");
        var email = $("#email").val("");
        var number = $("#number").val("");
        var landline = $("#landline").val("");
        var website = $("#website").val("");
        var textarea = $("#txtarea").val("");
    }

    // function requiredfieldvalidation() {
    //     var name = $("#fname").val();
    //     var email = $("#email").val();
    //     var number = $("#number").val();
    //     var landline = $("#landline").val();
    //     var website = $("#website").val();
    //     var textarea = $("#txtarea").val();

    //     if (!name || !email || !number || !landline || !website || !textarea) {
    //         $(".validationMessage_hideContent").text("required");
    //         return false;
    //     }
    //     return true;
    // }


    $("#btnadd").click(function (e) {
        e.preventDefault();
       
      
        if (methods.validateName() && methods.validateEmail() && methods.validateMobileNumber() && methods.validateLandlineNumber() && methods.validateWebsite() && methods.validateAddress()) {

           const obj = {
                name: $("#fname").val(),
                email: $("#email").val(),
                number: $("#number").val(),
                landline: $("#landline").val(),
                website: $("#website").val(),
                textarea: $("#txtarea").val()
            };
          
          
            Services.Save_Contect(obj);
            console.log("updated list")
            $('#right_container_id').hide();

        }
        else {
            methods.validateName();
            methods.validateEmail();
            methods.validateMobileNumber();
            methods.validateLandlineNumber();
            methods.validateWebsite();
            methods.validateAddress();

        }

    });
    update();


    $('body').on('click', '.select-body', function () {

        $('#right_container_id').hide();
        $('#right-container-sub-part').show();
        $(this).addClass('active').siblings().removeClass('active');

        // let selectedElementIndex = $('.select-body').index($(this));

            let selectedElementIndex = Services.get_Contect($(this));
            let selectedElement = itemJsonArry[selectedElementIndex];

        $("#btnHid").val(selectedElementIndex);

        let str = ` 
           <ul class="all-details">                     
                        <h1>${selectedElement.name}</h1>
                        <li>Email:  ${selectedElement.email}</li><br>
                        <li>Mobile:+91 ${selectedElement.number}</li>
                        <li>Landline:${selectedElement.landline}</li><br>
                        <li>Website:${selectedElement.website}</li>
                        <li>Address:${selectedElement.textarea}</li>
                        </ul>`;
        document.getElementById("show-details").innerHTML = str;

    });


    $('body').on('click', '.btn-delete', function () {
        $("#right-container-sub-part").hide();

        let itemindex = $("#btnHid").val();

        Services.delete_Data(itemindex);


    });

    $('body').on('click', '.btn-edit', function () {

        $('#right_container_id').show();
        $('#right-container-sub-part').hide();
        $("#btnadd").val("UPDATE");
        $(".validationMessage_hideContent").hide();

        let itemindex = $("#btnHid").val();
         //let itemData = itemJsonArry[itemindex];
         let itemData = Services.edit_Data(itemindex);

        $("#fname").val(itemData.name);
        $("#email").val(itemData.email);
        $("#number").val(itemData.number);
        $("#landline").val(itemData.landline);
        $("#website").val(itemData.website);
        $("#txtarea").val(itemData.textarea);

        $('#add-contact-form').submit(function (e) {
            e.preventDefault();
            itemJsonArry[itemindex].name = $("#fname").val();
            itemJsonArry[itemindex].email = $("#email").val();
            itemJsonArry[itemindex].number = $("#number").val();
            itemJsonArry[itemindex].landline = $("#landline").val();
            itemJsonArry[itemindex].website = $("#website").val();
            itemJsonArry[itemindex].textarea = $("#txtarea").val();

            clearform();

        });
    });

    $(".cancle").click(function(){
        $('.select-body').removeClass('active');
        $('#right_container_id').hide();
      });
})
