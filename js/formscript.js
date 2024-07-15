// Select the input elements and tooltips
var inputs = document.querySelectorAll('input[type="text"], input[type="date"], input[type="file"], input[type="textarea"], input[type="password"], input[type="email"], input[type="number"]');
var infoTooltip = document.querySelectorAll('.info-tooltip');
var body = document.querySelector('body');

// Input underline animation
if (inputs) {
    inputs.forEach(function(input) {
        // Add floating label class to the previous sibling label
        var previousSibling = input.previousElementSibling;
        if (previousSibling && previousSibling.tagName.toLowerCase() === 'label') {
            previousSibling.classList.add('floating-label');
        }

        // Add label-active class if input has a value on load
        if (input.value !== '') {
            if (previousSibling) {
                previousSibling.classList.add('label-active');
            }
            input.classList.add('input-active');
        }

        // Add event listener for focusin
        input.addEventListener('focusin', function() {
            if (previousSibling) {
                previousSibling.classList.add('label-active');
            }
        });

        // Add event listener for focusout
        input.addEventListener('focusout', function() {
            if (input.value !== '') {
                input.classList.add('input-active');
            } else {
                input.classList.remove('input-active');
                if (previousSibling) {
                    previousSibling.classList.remove('label-active');
                }
            }
        });
    });
}


//Required inputs
if (inputs) {
    for (var m = 0; m < inputs.length; m++) {
        if (inputs[m].hasAttribute('required')) {
            inputs[m].previousElementSibling.classList.add('label-required');
        }
    }
}