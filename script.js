function validateForm() {
    const income = parseFloat(document.getElementById("income").value);
    const age = document.getElementById("age").value;
    const deductions = parseFloat(document.getElementById("deductions").value);
    let isValid = true;
  
    // Validate income
    if (isNaN(income) || income <= 0) {
      document.getElementById("income-error").style.display = "inline-block";
      document.getElementById("income-error").setAttribute("data-error", "Please enter a valid income.");
      isValid = false;
    } else {
      document.getElementById("income-error").style.display = "none";
    }
  
    // Validate age
    if (age === "") {
      document.getElementById("age-error").style.display = "inline-block";
      document.getElementById("age-error").setAttribute("data-error", "Please select your age group.");
      isValid = false;
    } else {
      document.getElementById("age-error").style.display = "none";
    }
  
    // Validate deductions
    if (isNaN(deductions) || deductions < 0) {
      document.getElementById("deductions-error").style.display = "inline-block";
      document.getElementById("deductions-error").setAttribute("data-error", "Please enter a valid deductions amount.");
      isValid = false;
    } else {
      document.getElementById("deductions-error").style.display = "none";
    }
  
    if (isValid) {
      calculateTax(income, age, deductions);
      showModal();
    }
    else{
      document.getElementById("results").innerHTML = "<span class'error'>please fill out all required fields.</span>";
    }
  }
  
  function calculateTax(income, age, deductions) {
    // Calculate tax based on the provided formula
    const taxableIncome = income + deductions - 800000;
    let tax = 0;
  
    if (taxableIncome > 0) {
      if (age === "<40") {
        tax = taxableIncome * 0.3; // 30% tax rate
      } else if (age === ">=40 <60") {
        tax = taxableIncome * 0.4; // 40% tax rate
      } else if (age === ">=60") {
        tax = taxableIncome * 0.1; // 10% tax rate for age >= 60
      }
    }
  
    document.getElementById("modal-result").innerHTML =`${tax.toFixed(2)}`;
    
  }
  
  function showModal() {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
  
    modal.style.display = "block";
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  