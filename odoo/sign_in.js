// Login Validation
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isLogin = form.querySelector('[name="loginId"]') !== null;
    if(isLogin) {
      loginValidation(form);
    } else {
      signupValidation(form);
    }
  });
});

function loginValidation(form) {
  clearErrors(form);
  let loginId = form.loginId.value.trim();
  let password = form.password.value;
  let valid = true;

  if(loginId.length < 6 || loginId.length > 12) {
    showError(form.loginId, "Login ID must be 6-12 characters");
    valid = false;
  }
  if(password.length < 8) {
    showError(form.password, "Password must be at least 8 characters");
    valid = false;
  }
  // Simulate fake login fail if demo
  if(valid) alert('Signed in successfully! [Sample UX]');
}

function signupValidation(form) {
  clearErrors(form);
  let loginId = form.signupLoginId.value.trim();
  let email = form.emailId.value.trim();
  let password = form.signupPassword.value;
  let rePassword = form.rePassword.value;
  let valid = true;

  // Login ID: unique, length 6-12
  if(loginId.length < 6 || loginId.length > 12) {
    showError(form.signupLoginId, "Login ID must be 6-12 characters");
    valid = false;
  } else if(!/^[a-zA-Z0-9_]+$/.test(loginId)) {
    showError(form.signupLoginId, "Login ID can only contain letters, numbers, _");
    valid = false;
  }

  // Email: basic format
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    showError(form.emailId, "Please enter a valid email address");
    valid = false;
  }

  // Password: at least 8, upper, lower, special
  if(password.length < 8) {
    showError(form.signupPassword, "Password must be at least 8 characters");
    valid = false;
  } else if(!/(?=.*[a-z])/.test(password)) {
    showError(form.signupPassword, "Password must contain a lowercase letter");
    valid = false;
  } else if(!/(?=.*[A-Z])/.test(password)) {
    showError(form.signupPassword, "Password must contain an uppercase letter");
    valid = false;
  } else if(!/(?=.*[!@#$%^&*()_+\-=[\]{}|\\;:'\",.<>/?])/g.test(password)) {
    showError(form.signupPassword, "Password must include a special character");
    valid = false;
  }

  // Re-entered password check
  if(rePassword !== password) {
    showError(form.rePassword, "Passwords do not match");
    valid = false;
  }

  if(valid) alert('Signed up successfully! [Sample UX]');
}

// Show error and shake animation
function showError(input, msg) {
  input.classList.add('shake');
  let group = input.closest('.input-group');
  let error = group.querySelector('.error-message');
  if(!error) {
    error = document.createElement('div');
    error.className = 'error-message';
    group.appendChild(error);
  }
  error.textContent = msg;
  setTimeout(() => input.classList.remove('shake'), 400);
}

// Clear all errors
function clearErrors(form) {
  form.querySelectorAll('.error-message').forEach(e => e.remove());
}

// Interactive links (if using single-page modal/fade view)
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    // Demo: In real app, route to page or show modal
    alert('Navigation demo only. Implement routing/modal in production.');
  });
});
