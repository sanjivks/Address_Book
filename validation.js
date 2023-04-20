



var methods = {

    validateName() {

        var regex = /^[a-zA-Z ]*$/;

        var name = $('#fname').val();

        if ($('#fname').val().length == 0) {

            $('#fname').focus();

            $(' #nameValidationMessage').text("Name field cannot be empty");

            $(' #nameValidationMessage').show();

            return false;

        }

        if (!regex.test(name)) {

            $('#fname').focus();

            $(' #nameValidationMessage').text("Please enter a valid name");

            $(' #nameValidationMessage').show();

            return false;

        }

        $(' #nameValidationMessage').hide();

        return true;

    },

    validateEmail() {

        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;

        var email = $(' #email').val();

        if ($('#email').val().length == 0) {

            $('#email').focus();

            $(' #emailValidationMessage').text("Email cannot be empty");

            $(' #emailValidationMessage').show();

            return false;

        }

        if (regex.test(email)) {

            $(' #emailValidationMessage').hide();

            return true;

        }

        else {

            $(' #email').focus();

            $(' #emailValidationMessage').text("Please enter a valid email");

            $(' #emailValidationMessage').show();

            return false;

        }

    },



    validateMobileNumber() {

        // var mobileNumberLength = $('#number').val().length;

        var mobileNumber = $('#number').val();

        var regex = /^(?:(?:\+)91(\s*[\ -]\s*)?)?(\d[ -]?){9}\d$/;
      
        mobileNumber = $.trim(mobileNumber);

        if (regex.test(mobileNumber)) {

            $(' #mobileValidationMessage').hide();
            return true;
        }
        else{

            $('#number').focus();

            $(' #mobileValidationMessage').text("Please enter a valid mobile number");

            $(' #mobileValidationMessage').show();

            return false;

        }

       

    },

    // validateLandlineNumber(){
    //     var landlineNumber = $('#landline').val();

    //     var regex =/^[0-9-+()]*$/;
      
    //     landlineNumber = $.trim(landlineNumber);

    //     if (!regex.test(landlineNumber)) {

    //         $('#landline').focus();

    //         $(' #landlineValidationMessage').text("Please enter valid landline number");

    //         $(' #').show();

    //         return false;

    //     }

    // }
    validateWebsite(){
        var regex = /^[a-zA-Z ]*$/;

        var name = $('#website').val();

        if ($('#website').val().length == 0) {

            $('#website').focus();

            $(' #websiteValidationMessage').text("website field cannot be empty");

            $(' #websiteValidationMessage').show();

            return false;

        }

        if (!regex.test(name)) {

            $('#website').focus();

            $(' #websiteValidationMessage').text("Please enter a valid website");

            $(' #websiteValidationMessage').show();

            return false;

        }

        $(' #websiteValidationMessage').hide();

        return true;


    },

    validateAddress() {

        var regex = /^[a-zA-Z ]*$/;

        var name = $('#txtarea').val();

        if ($('#txtarea').val().length == 0) {

            $('#txtarea').focus();

            $(' #addressValidationMessage').text("Name field cannot be empty");

            $(' #addressValidationMessage').show();

            return false;

        }

        if (!regex.test(name)) {

            $('#fname').focus();

            $(' #addressValidationMessage').text("Please enter a valid name");

            $(' #addressValidationMessage').show();

            return false;

        }

        $(' #addressValidationMessage').hide();

        return true;

    }
}
