// =====================================
// CAMPUS EVENT BOARD - ORGANIZER
// Shared JavaScript for all 6 HTML pages
// =====================================

// Common email validation
function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

// Show an error message
function showError(id, message) {
  document.getElementById(id).innerHTML = message;
}

// Clear all messages inside a form
function clearFormMessages(form) {
  var messages = form.querySelectorAll(
    ".error, .event-error, .manage-error, .registration-error, .cancel-error",
  );

  for (var i = 0; i < messages.length; i++) {
    messages[i].innerHTML = "";
  }

  var result = form.querySelector(
    "#ResultText, #LoginResult, #eventResult, #manageResult, #registrationResult, #cancelResult",
  );

  if (result !== null) {
    result.innerHTML = "";
    result.className = "";
  }
}

// =====================================
// 1. ORGANIZER LOGIN
// =====================================

var loginForm = document.getElementById("LoginForm");

if (loginForm !== null) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearFormMessages(loginForm);

    var organizerID = document.getElementById("OrganizerID").value.trim();
    var email = document.getElementById("Email").value.trim();
    var password = document.getElementById("Password").value;

    var valid = true;

    // Organizer ID validation
    if (organizerID == "") {
      showError("OrganizerIDError", "Organizer ID is required.");

      valid = false;
    } else if (organizerID.length < 3) {
      showError(
        "OrganizerIDError",
        "Organizer ID must contain at least 3 characters.",
      );

      valid = false;
    }

    // Email validation
    if (email == "") {
      showError("EmailError", "Email is required.");

      valid = false;
    } else if (!isValidEmail(email)) {
      showError("EmailError", "Enter a valid email address.");

      valid = false;
    }

    // Password validation
    if (password == "") {
      showError("PasswordError", "Password is required.");

      valid = false;
    }

    // Final result
    if (valid == true) {
      document.getElementById("ResultText").innerHTML =
        "All information is valid! Login form completed. (Demo only)";
    }
  });

  loginForm.addEventListener("reset", function () {
    setTimeout(function () {
      clearFormMessages(loginForm);
    }, 0);
  });
}

// =====================================
// 2. ORGANIZER REGISTRATION
// =====================================

var registerForm = document.getElementById("RegisterForm");

if (registerForm !== null) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearFormMessages(registerForm);

    var clubName = document.getElementById("ClubName").value.trim();
    var organizerID = document.getElementById("OrganizerID").value.trim();
    var department = document.getElementById("Department").value;
    var contactName = document.getElementById("ContactName").value.trim();
    var email = document.getElementById("Email").value.trim();
    var phone = document.getElementById("Phone").value.trim();
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;

    var valid = true;

    // Club name validation
    if (clubName == "") {
      showError("ClubNameError", "Organization name is required.");

      valid = false;
    } else if (clubName.length < 3) {
      showError("ClubNameError", "Name must contain at least 3 characters.");

      valid = false;
    }

    // Organizer ID validation
    if (organizerID == "") {
      showError("OrganizerIDError", "Organizer ID is required.");

      valid = false;
    } else if (organizerID.length < 3) {
      showError(
        "OrganizerIDError",
        "Organizer ID must contain at least 3 characters.",
      );

      valid = false;
    }

    // Department validation
    if (department == "") {
      showError("DepartmentError", "Please select a department.");

      valid = false;
    }

    // Contact name validation
    if (contactName == "") {
      showError("ContactNameError", "Contact person name is required.");

      valid = false;
    } else if (contactName.length < 3) {
      showError("ContactNameError", "Name must contain at least 3 characters.");

      valid = false;
    }

    // Email validation
    if (email == "") {
      showError("EmailError", "Email is required.");

      valid = false;
    } else if (!isValidEmail(email)) {
      showError("EmailError", "Enter a valid email address.");

      valid = false;
    }

    // Phone validation
    if (phone == "") {
      showError("PhoneError", "Phone number is required.");

      valid = false;
    } else if (!/^01[3-9][0-9]{8}$/.test(phone)) {
      showError(
        "PhoneError",
        "Enter a valid 11-digit Bangladesh mobile number.",
      );

      valid = false;
    }

    // Password validation
    if (password == "") {
      showError("PasswordError", "Password is required.");

      valid = false;
    } else if (password.length < 8) {
      showError(
        "PasswordError",
        "Password must contain at least 8 characters.",
      );

      valid = false;
    }

    // Confirm password validation
    if (confirmPassword == "") {
      showError("ConfirmPasswordError", "Please confirm your password.");

      valid = false;
    } else if (password != confirmPassword) {
      showError("ConfirmPasswordError", "Passwords do not match.");

      valid = false;
    }

    // Final result
    if (valid == true) {
      document.getElementById("ResultText").innerHTML =
        "All information is valid! Registration form completed. (Demo only)";
    }
  });

  registerForm.addEventListener("reset", function () {
    setTimeout(function () {
      clearFormMessages(registerForm);
    }, 0);
  });
}

// =====================================
// 3. CREATE EVENT
// =====================================

var eventForm = document.getElementById("EventForm");

if (eventForm !== null) {
  eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearFormMessages(eventForm);

    var title = document.getElementById("eventTitle").value.trim();
    var date = document.getElementById("eventDate").value;
    var time = document.getElementById("eventTime").value;
    var venue = document.getElementById("venue").value.trim();
    var category = document.getElementById("category").value;
    var seats = document.getElementById("seats").value;
    var description = document.getElementById("description").value.trim();

    var valid = true;

    // Event title validation
    if (title == "") {
      showError("titleError", "Event title is required.");

      valid = false;
    } else if (title.length < 3) {
      showError(
        "titleError",
        "Event title must contain at least 3 characters.",
      );

      valid = false;
    }

    // Event date validation
    var today = new Date();

    var currentDate =
      today.getFullYear() +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0");

    if (date == "") {
      showError("dateError", "Please select an event date.");

      valid = false;
    } else if (date < currentDate) {
      showError("dateError", "Event date cannot be in the past.");

      valid = false;
    }

    // Event time validation
    if (time == "") {
      showError("timeError", "Please select an event time.");

      valid = false;
    }

    // Venue validation
    if (venue == "") {
      showError("venueError", "Venue is required.");

      valid = false;
    }

    // Category validation
    if (category == "") {
      showError("categoryError", "Please select an event category.");

      valid = false;
    }

    // Available seats validation
    if (seats == "") {
      showError("seatsError", "Available seats are required.");

      valid = false;
    } else if (
      Number(seats) < 1 ||
      Number(seats) > 1000 ||
      !Number.isInteger(Number(seats))
    ) {
      showError(
        "seatsError",
        "Seats must be a whole number between 1 and 1000.",
      );

      valid = false;
    }

    // Description validation
    if (description == "") {
      showError("descriptionError", "Event description is required.");

      valid = false;
    } else if (description.length < 10) {
      showError(
        "descriptionError",
        "Description must contain at least 10 characters.",
      );

      valid = false;
    }

    // Final result
    if (valid == true) {
      document.getElementById("eventResult").innerHTML =
        "All information is valid! Event form completed. (Demo only)";
    }
  });

  eventForm.addEventListener("reset", function () {
    setTimeout(function () {
      clearFormMessages(eventForm);
    }, 0);
  });
}

// =====================================
// 4. MANAGE MY EVENTS
// =====================================

var manageForm = document.getElementById("ManageEventForm");

if (manageForm !== null) {
  manageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearFormMessages(manageForm);

    var id = document.getElementById("eventID").value.trim();
    var title = document.getElementById("eventTitle").value.trim();
    var date = document.getElementById("eventDate").value;
    var time = document.getElementById("eventTime").value;
    var venue = document.getElementById("venue").value.trim();
    var category = document.getElementById("category").value;
    var seats = document.getElementById("seats").value;
    var description = document.getElementById("description").value.trim();
    var action = document.getElementById("action").value;

    var valid = true;

    // Event ID validation
    if (id == "") {
      showError("idError", "Event ID is required.");

      valid = false;
    }

    // Event title validation
    if (title == "") {
      showError("titleError", "Event title is required.");

      valid = false;
    }

    // Event date validation
    if (date == "") {
      showError("dateError", "Please select an event date.");

      valid = false;
    }

    // Event time validation
    if (time == "") {
      showError("timeError", "Please select an event time.");

      valid = false;
    }

    // Venue validation
    if (venue == "") {
      showError("venueError", "Venue is required.");

      valid = false;
    }

    // Category validation
    if (category == "") {
      showError("categoryError", "Please select a category.");

      valid = false;
    }

    // Available seats validation
    if (seats == "") {
      showError("seatsError", "Available seats are required.");

      valid = false;
    } else if (
      Number(seats) < 1 ||
      Number(seats) > 1000 ||
      !Number.isInteger(Number(seats))
    ) {
      showError(
        "seatsError",
        "Seats must be a whole number between 1 and 1000.",
      );

      valid = false;
    }

    // Description validation
    if (description == "") {
      showError("descriptionError", "Event description is required.");

      valid = false;
    }

    // Action validation
    if (action == "") {
      showError("actionError", "Please select an action.");

      valid = false;
    }

    // Final result
    if (valid == true) {
      document.getElementById("manageResult").innerHTML =
        "All information is valid! Form completed. (Demo only)";
    }
  });

  manageForm.addEventListener("reset", function () {
    setTimeout(function () {
      clearFormMessages(manageForm);
    }, 0);
  });
}

// =====================================
// 5. VIEW REGISTRATIONS
// =====================================

var viewRegistrationForm = document.getElementById("ViewRegistrationForm");

if (viewRegistrationForm !== null) {
  viewRegistrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearFormMessages(viewRegistrationForm);

    var id = document.getElementById("eventID").value.trim();
    var title = document.getElementById("eventTitle").value.trim();
    var date = document.getElementById("registrationDate").value;

    var valid = true;

    // Event ID validation
    if (id == "") {
      showError("idError", "Event ID is required.");

      valid = false;
    }

    // Event title validation
    if (title == "") {
      showError("titleError", "Event title is required.");

      valid = false;
    }

    // Registration date validation
    if (date == "") {
      showError("dateError", "Please select the registration date.");

      valid = false;
    }

    // Final result
    if (valid == true) {
      document.getElementById("registrationResult").innerHTML =
        "All information is valid! Form completed. (Demo only)";
    }
  });

  viewRegistrationForm.addEventListener("reset", function () {
    setTimeout(function () {
      clearFormMessages(viewRegistrationForm);
    }, 0);
  });
}

// =====================================
// 6. CANCEL EVENT
// =====================================

var cancelForm = document.getElementById("CancelEventForm");

if (cancelForm !== null) {
  cancelForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearFormMessages(cancelForm);

    var id = document.getElementById("eventID").value.trim();
    var title = document.getElementById("eventTitle").value.trim();
    var date = document.getElementById("eventDate").value;
    var reason = document.getElementById("reason").value.trim();
    var confirmation = document.getElementById("confirmation").checked;

    var valid = true;

    // Event ID validation
    if (id == "") {
      showError("idError", "Event ID is required.");

      valid = false;
    }

    // Event title validation
    if (title == "") {
      showError("titleError", "Event title is required.");

      valid = false;
    }

    // Event date validation
    if (date == "") {
      showError("dateError", "Please select the event date.");

      valid = false;
    }

    // Cancellation reason validation
    if (reason == "") {
      showError("reasonError", "Please provide a cancellation reason.");

      valid = false;
    } else if (reason.length < 10) {
      showError("reasonError", "Reason must contain at least 10 characters.");

      valid = false;
    }

    // Confirmation validation
    if (confirmation == false) {
      showError("confirmError", "Please confirm the cancellation.");

      valid = false;
    }

    // Final result
    if (valid == true) {
      document.getElementById("cancelResult").innerHTML =
        "All information is valid! Cancellation form completed. (Demo only)";
    }
  });

  cancelForm.addEventListener("reset", function () {
    setTimeout(function () {
      clearFormMessages(cancelForm);
    }, 0);
  });
}
