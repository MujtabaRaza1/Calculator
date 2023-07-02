let string ="";
let buttons = document.querySelectorAll('.button1');
Array.from(buttons).forEach((button1)=>{
    button1.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
          try {
            // Configure math.js to use the Fraction data type
            const config = {
              number: 'Fraction',
              fraction: 'Fraction'
            };
            const mathWithFractions = math.create(config);
      
            // Evaluate the expression using math.js with fractions
            let result = mathWithFractions.evaluate(string);
            console.log(result);
      
            // Convert the result to a string
            result = result.toString();
      
            // Update the input field with the result
            document.querySelector('input').value = result;
          } catch (error) {
            // Handle any errors that may occur during evaluation
            console.log("Error: " + error.message);
          }
        } else if (e.target.innerHTML == 'C') {
          // Clear the string and the input field
          string = "";
          document.querySelector('input').value = string;
        } else {
          // Append the clicked button's value to the string
          string = string + e.target.innerHTML;
          document.querySelector('input').value = string;
        }
      })



    // button1.addEventListener('click', (e)=>{
    //     if (e.target.innerHTML == '=') {
    //         string = eval(string);
    //         document.querySelector('input').value = string;
    //     }
    //     else if (e.target.innerHTML == 'C') {
    //         string = "";
    //         document.querySelector('input').value = string;
    //     }
    //     else{
    //         string = string + e.target.innerHTML;
    //         document.querySelector('input').value = string;
    //     }
        
    // })
})