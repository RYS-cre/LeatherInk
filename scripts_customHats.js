document.addEventListener('DOMContentLoaded', function() {
    // Get all the div elements with the class 'customRadioDiv'
    var customRadioDivs = document.querySelectorAll('.selection-block');
  
    customRadioDivs.forEach(function(div) {
      // Add click event listener to each div
      div.addEventListener('click', function() {
        // Get the id of the radio button to select
        var radioButtonId = this.getAttribute('data-radio-id');
        var radioButtonToSelect = document.getElementById(radioButtonId);
        
        // Select the radio button
        if (radioButtonToSelect) {
          radioButtonToSelect.checked = true;
        }
      });
    });
  });