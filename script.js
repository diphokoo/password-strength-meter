function passwordCheck(password) {
      if (password.length >= 8)
        strength += 1;
      if (password.match(/(?=.*[0-9])/))
        strength += 1;
      if (password.match(/(?=.*[!,%,&,@,#,$,^,*,?,_,~,<,>,])/))
        strength += 1;
      if (password.match(/(?=.*[a-z])/))
        strength += 1;

      displayBar(strength);
    }

    function displayBar(strength) {
      $(".password-strength-group").attr('data-strength', strength);
    }

    $("#signupInputPassword").keyup(function () {
      strength = 0;
      var password = $(this).val();
      passwordCheck(password);
    });