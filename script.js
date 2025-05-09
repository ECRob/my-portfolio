function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      //Call showPopup here
      showPopup(true);
      // Create a new 'recommendation' element and set it's value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element); 
      
      // Reset the value of the textarea
      recommendation.value = "";
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }

const palindromeInput = document.getElementById("text-input");
const palindromeSubmitButton = document.getElementById("check-btn");
const palindromeResult = document.getElementById("result");

const palindromeSubmit = input => {
  const userEntry = input;

  if (input === "") {
    alert("Please input a value");
    return;
  }
  
  palindromeResult.replaceChildren();

  const formatted = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let finalResult = `${userEntry} ${formatted === [...formatted].reverse().join("") ? "is" : "is not"} a palindrome!`;

  const h3Result = document.createElement("h3");
  h3Result.innerHTML = finalResult;
  palindromeResult.appendChild(h3Result);
};

palindromeSubmitButton.addEventListener("click", () => {
  palindromeSubmit(palindromeInput.value);
  palindromeInput.value = "";
});

palindromeInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    palindromeSubmit(palindromeInput.value);
    palindromeInput.value = '';
  }
});
