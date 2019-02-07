$(document).ready(function() {
  $('#reg-form').on('submit',function(e) {
    e.preventDefault();

    let fullName = $('#fullname').val();
    let userName = $('#username').val();
    let password = $('#pwd').val();
    let company = $('#company').val();

    // fullName validation
    if(fullName === '' ) {
        $('.error').text('Full Name is required');
        return
    }
    // userName validation
    if(userName < 2 ) {
        $('.error').text('username can not be less than two characters');
        return
    }
    // password validation
    if(password.length < 8 ) {
        $('.error').text('Password cannot be less than 8 characters long');
        return
    }
    $.post({
        url:'http://localhost:3000/?register',
        data:{
            fullname: fullName,
            username: userName,
            company: company,
            password: password
        }
    })
    .done(e => {
        $('.error').text(e);
        console.log(e);
    }).fail(e => {
        console.log(e);
    });

  });
});