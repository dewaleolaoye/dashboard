
alert('bass');

// document.querySelector('#btn').addEventListener('click', () => {
//     alert('aadd')
// })
return
$(document).ready(function() {
    var baseurl = 'http://10.0.0.106';
    $('#btn').on('click',function(e) {
        alert('wale');
      e.preventDefault();
  
      let userName = $('#username').val();
      let password = $('#pwd').val();
      // userName validation
    // if(userName < 2 ) {
    //     $('.error').text('username can not be less than two characters');
    //     return
    // }
    // // password validation
    // if(password.length < 8 ) {
    //     $('.error').text('Password cannot be less than 8 characters long');
    //     return
    // }
      $.post({
          url:`${baseurl}:6000/?resetPassword`,
          data:{
              username: 'name',
              password: 'password'
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