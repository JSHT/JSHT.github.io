// initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


// tab load html
$(document).ready(function () {
  $("#intro").load("_intro.html");
  $("#faq").load("_faq.html");
  $("#progress").load("_progress.html");
  $("#command").load("_command.html");
});

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
      }, false)
    })
})()


// go tab
function goTab(){
  var element = document.querySelector("#tabs");
  element.scrollIntoView({ behavior: 'smooth'});
}

// go form
function goForm(){
  var element = document.querySelector("#form");
  element.scrollIntoView({ behavior: 'smooth'});
}






