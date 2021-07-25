// validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
        event.preventDefault()
      }, false)
    })
})()

const regBtn = document.querySelector('#registerBtn');
if(regBtn){
    regBtn.addEventListener("click", (e) => {
        const account = document.querySelector('#userAccount');
        const password = document.querySelector('#userPassword');
        const confirm = document.querySelector('#confirmPassword');
        const arr = account.value.split('@');
        if(!account.value || !password.value || !confirm.value || !arr[1]){
            return;
        }
        window.location.href='./member.html';
    })
}


const logBtn = document.querySelector('#loginBtn');
console.log(logBtn);
if(logBtn){
    logBtn.addEventListener("click", (e) => {
        const account = document.querySelector('#userAccount');
        const password = document.querySelector('#userPassword');
        const arr = account.value.split('@');
        if(!account.value || !password.value || !arr[1]){
            return;
        }
        // console.log('hi');
        window.location.href='./member.html';
    })
}