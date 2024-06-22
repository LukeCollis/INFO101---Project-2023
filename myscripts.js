
document.addEventListener("DOMContentLoaded", function() { /* Runs the code as soon as it is loaded.*/
    document.getElementById("bikeOptions").addEventListener("change", function() { /* When the option in 'bikeOptions' is changed, this is called.*/ 
      var bikeOptions = document.getElementById("bikeOptions"); /* Declares variables. Sets bike options to the current options, sets locationOptions to the options in locationOptions*/
      var locationOptions = document.getElementById("locationOptions");
      var selectedValue = bikeOptions.value; /* Found out how to do this through this link: https://stackoverflow.com/questions/12265596/html-select-change-selected-option-by-value-using-javascript  */
  
      locationOptions.innerHTML = "";
  
      if (selectedValue === "Electric Bike") { /* Checks what option in bikeOption is selected, then sets the options in locationOptions to the options specified below. */
        addOption(locationOptions, "Wellington CBD");
        addOption(locationOptions, "Lower Hutt");
        addOption(locationOptions, "Upper Hutt");
        addOption(locationOptions, "Porirua");
      } else if (selectedValue === "Mountain Bike") {
        addOption(locationOptions, "Makara Bike Trail");
        addOption(locationOptions, "Mount Victoria");
        addOption(locationOptions, "Skyline Walkway");
      } else if (selectedValue === "Road Bike") {
        addOption(locationOptions, "Wellington CBD");
        addOption(locationOptions, "Lower Hutt");
        addOption(locationOptions, "Upper Hutt");
        addOption(locationOptions, "Porirua");
      } else if (selectedValue === "Electric Scooter") {
        addOption(locationOptions, "Wellington CBD");
        addOption(locationOptions, "Lower Hutt");
        addOption(locationOptions, "Upper Hutt");
        addOption(locationOptions, "Porirua");
      } else if (selectedValue === "Monster Scooter") {
        addOption(locationOptions, "Makara Bike Trail");
        addOption(locationOptions, "Mount Victoria");
        addOption(locationOptions, "Skyline Walkway");
      }
    });
  
    function addOption(selectElement, optionText) {
      var option = document.createElement("option"); /* Creates a new element when addOption is called. Done with help from: https://www.javascripttutorial.net/javascript-dom/javascript-add-remove-options/*/
      option.text = optionText; /* sets the text to what the argument for text was when addOption was called.*/
      selectElement.add(option); /* Adds option to the selectedElement, which was defined in the addOption argument(locationOptions). */
    }
  
    function register() {
      var email = document.forms["reg"]["email"].value; /* Sets the values of the variables email, address, and password to what was currently typed in each respective box when submit was clicked */
      var address = document.forms["reg"]["address"].value;
      var password = document.forms["reg"]["password"].value;
  
      if (email !== "" && address !== "" && password !== "") { /* Checks if email, address, and password are empty. If not a alert is displayed saying successfully registered. If it is empty the registration will fail. */
        alert("Successfully registered!");
      } else {
        alert("Unsuccessful Registration -- Reason: Missing details");
      }
    }
  
    function pay() {
      var bikeprice = ""; /* Defines and sets the values of the variables bikeprice, dist, selectedValue and price. */
      var dist = document.forms["pay"]["distance"].value;
      var selectedValue = document.getElementById("bikeOptions").value;
      var price = "";
  
      if (selectedValue == "Electric Bike") { /* Sets the price depending on what the currently selected value is.*/
        bikeprice = "9.50";
      } else if (selectedValue == "Mountain Bike") {
        bikeprice = "7.00";
      } else if (selectedValue == "Road Bike") {
        bikeprice = "6.00";
      } else if (selectedValue == "Electric Scooter") {
        bikeprice = "5.50";
      } else if (selectedValue == "Monster Scooter") {
        bikeprice = "9.00";
      }
  
      price = bikeprice * dist; /* Sets the value of price to bikeprice * distance. */
  
      if (price !== "" && price > 0) { /* Checks if the price is not a blank value and that it is greater than zero */
        if (confirm("The price is $" + price + ". Would you like to pay?")){ /* If the user says ok, the code is given */
          alert("Your code is 737314");
        } 
      }
    }
  
    document.forms["reg"].addEventListener("submit", register); /* Calls register and pay when the buttons are clicked. Did this in JS instead of HTML due to having issues with the functions not being called. Did this with help from https://www.w3schools.com/jsref/met_document_addeventlistener.asp*/
    document.forms["pay"].addEventListener("submit", pay);
  });
  