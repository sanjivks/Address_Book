
$(document).ready(function () {

    $('#add-contect-box').hide();
    $('.right-container-sub-part').hide();

    $('#btn-add-details').click(function () {
        
        $('#add-contect-box').show();
        $('.right-container-sub-part').hide();
        alltextbox();
        $("#tablebody").css("width", "100%");
        $(".left-container").css("width", "29%");
    })

   
   
    function alltextbox() {
        var name = $("#fname").val("");
        var email = $("#email").val("");
        var number = $("#number").val("");
        var landline = $("#landline").val("");
        var website = $("#website").val("");
        var textarea = $("#txtarea").val("");
    }

    
    function getandupdate() {

        // e.preventDefault();
        console.log("update list")

        // Get data
        var name= $("#fname").val();
        var email = $("#email").val();
        var number = $("#number").val();
        var landline = $("#landline").val();
        var website = $("#website").val();
        var textarea = $("#txtarea").val();

         const obj={
             name: $("#fname").val(),
             email: $("#email").val(),
             number: $("#number").val(),
             landline: $("#landline").val(),
             website: $("#website").val(),
             textarea: $("#txtarea").val()
         };
        // function contects() {
        //     this.name = name;
        //     this.email = email;
        //     this.number = number;
        //     this.landline = landline;
        //     this.website = website;
        //     this.textarea = textarea;
        // }
        

        if (localStorage.getItem('itemsJson') == null) {
            itemJsonArry = [];
            itemJsonArry.push(obj);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry))
        }
        else {
            itemJsonArryStr = localStorage.getItem('itemsJson')
            itemJsonArry = JSON.parse(itemJsonArryStr);
            itemJsonArry.push([name, email, number, landline, website, textarea]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry))
          //  [name, email, number, landline, website, textarea]
        }
        update();
        alltextbox();
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


        // table
        let str = "";
        itemJsonArry.forEach((element,index) => {

            str += ` <div  style="width:100%" class="select-body">
            
             <input type="hidden" id="num" val=${index}>
                    <h2>${element[0]}</h2>
                    <h3>${element[1]}</h3>
                    <h4>${element[2]}</h4>
                    </div>
                   `
//<h6> <input id="indexnum" type="hidden" value=${index}> </h6> 
        });
        document.getElementById("tablebody").innerHTML=str; 

      
        $('body').on('click', 'h2', function () {
            $(".right-container-sub-part").css("width", "100%");
            $("#tablebody").css("width", "123%");
            $(".left-container").css("width", "52%"); 
            $('#add-contect-box').hide();
            $('.right-container-sub-part').show();
           let selectedElementIndex = $('h2').index($(this));
  
          //let selectedElementIndex =  $(this).closest('#num').val();
           
            let selectedElement = itemJsonArry[selectedElementIndex];     
            $("#btnHid").val(selectedElementIndex);
           
            let str = ` 
                        <ul class="all-details">                     
                        <h1>${selectedElement[0]}</h1>
                            <li>Email:  ${selectedElement[1]}</li><br>
                            <li>Mobile:+91 ${selectedElement[2]}</li>
                            <li>Landline:${selectedElement[3]}</li><br>
                            <li>Website:${selectedElement[4]}</li>
                            <li>Address:${selectedElement[5]}</li>
                        </ul>`;       
            document.getElementById("show-details").innerHTML = str;  
                     
        });
    }
      $("#btnadd").on('click', getandupdate)
    update();


    

    $('body').on('click', '.btn-delete', function () {

      
         let itemindex = $("#btnHid").val();

        console.log("item deleted");
      
        itemJsonArryStr = localStorage.getItem('itemsJson')
        itemJsonArry = JSON.parse(itemJsonArryStr);
        itemJsonArry.splice(itemindex, 1);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry))
        $("#show-details").hide();
        location.reload();
        // update();
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
        $("#fname").val(itemData[0]);
        $("#email").val(itemData[1]);
        $("#number").val(itemData[2]);
        $("#landline").val(itemData[3]);
        $("#website").val(itemData[4]);
        $("#txtarea").val(itemData[5]);
    
        //Update the data in the itemJsonArry array
        $('#add-contact-form').on('#btnadd', function (e) {
            e.preventDefault();
            itemData[0] = $("#fname").val();
            itemData[1] = $("#email").val();
            itemData[2] = $("#number").val();
            itemData[3] = $("#landline").val();
            itemData[4] = $("#website").val();
            itemData[5] = $("#txtarea").val();
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArry));
            location.reload();
         });
    });
    
})
