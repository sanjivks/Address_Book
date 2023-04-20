$(document).ready(function () {
    $('#add-contect-box').hide();
    $('.right-container-sub-part').hide();

    $('#btn-add-details').click(function () {
        $('#add-contect-box').show();
        $('.right-container-sub-part').hide();
        textfieldblank();
        $("#tablebody").css("width", "100%");
        $(".left-container").css("width", "29%");
    })

    function textfieldblank() {
        var name = $("#fname").val("");
        var email = $("#email").val("");
        var number = $("#number").val("");
        var landline = $("#landline").val("");
        var website = $("#website").val("");
        var textarea = $("#txtarea").val("");
    }

    function requiredfieldvalidation() {
        var name = $("#fname").val();
        var email = $("#email").val();
        var number = $("#number").val();
        var landline = $("#landline").val();
        var website = $("#website").val();
        var textarea = $("#txtarea").val();

        if (!name || !email || !number || !landline || !website || !textarea) {
            $(".validationMessage_hideContent").text("required");
            return false;
        }
        return true;
    }


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
        let tableBody = $('#tablebody');
        let str = "";
        itemJsonArry.forEach((element, index) => {

            str += ` <div  style="width:100%" class="select-body">
            
             <input type="hidden" id="num" val=${index}>
                    <h2>${element.name}</h2>
                <h3>${element.email}</h3>
                <h4>${element.number}</h4>
                    </div>
                   `
        });
        tableBody.html(str);
    }

    
    $("#btnadd").click(function (e) {
        console.log("updated list")
        if (requiredfieldvalidation()) {
       
            const obj = {
                name: $("#fname").val(),
                email: $("#email").val(),
                number: $("#number").val(),
                landline: $("#landline").val(),
                website: $("#website").val(),
                textarea: $("#txtarea").val()
            };

            if (localStorage.getItem('itemsJson') == null) {
                itemJsonArry = [];
                itemJsonArry.push(obj);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry))
            }
            else {
                itemJsonArryStr = localStorage.getItem('itemsJson')
                itemJsonArry = JSON.parse(itemJsonArryStr);
                itemJsonArry.push(obj);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry))
            }
            update();
            textfieldblank();
            console.log("updated list")
        }

    });
    update();


        $('body').on('click', '.select-body', function () {
            $(".right-container-sub-part").css("width", "100%");
            $("#tablebody").css("width", "123%");
            $(".left-container").css("width", "52%");
            $('#add-contect-box').hide();
            $('.right-container-sub-part').show();

            let selectedElementIndex = $('.select-body').index($(this));
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


        let itemindex = $("#btnHid").val();

        console.log("item deleted");

        itemJsonArryStr = localStorage.getItem('itemsJson')
        itemJsonArry = JSON.parse(itemJsonArryStr);
        itemJsonArry.splice(itemindex, 1);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry))
        $("#show-details").hide();
        location.reload();
       
    });

    $('body').on('click', '.btn-edit', function () {
        $("#tablebody").css("width", "61%");
        $('#add-contect-box').show();
        $('.right-container-sub-part').hide();
        $("#btnadd").val("UPDATE");

        let itemindex = $("#btnHid").val();

        let itemJsonArryStr = localStorage.getItem('itemsJson');
        let itemJsonArry = JSON.parse(itemJsonArryStr);

        let itemData = itemJsonArry[itemindex];
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

            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry));
            location.reload();
        });
    });


})
