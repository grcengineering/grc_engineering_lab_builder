/**
 * Form Validation
 * Validation rules and functions
 */

// Validation rules for profile form
const profileValidationRules = {
  role: { required: true, minLength: 2 },
  tech_level: { required: true },
  learning_style: { required: true },
  industry: { required: true, minLength: 2 },
  company_size: { required: true },
  team_structure: { required: true },
  grc_tools: { required: true, minLength: 2 },
  frameworks: { required: true, minLength: 2 },
  challenges: { required: true, minLength: 10 },
  time_available: { required: true }
};

// Validate single field
function validateField(fieldName, value, rules = profileValidationRules) {
  const fieldRules = rules[fieldName];
  if (!fieldRules) return { valid: true };

  if (fieldRules.required && (!value || value.trim() === '')) {
    return { valid: false, error: 'This field is required' };
  }

  if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
    return { valid: false, error: `Minimum ${fieldRules.minLength} characters required` };
  }

  return { valid: true };
}

// Validate entire profile form
function validateProfileForm(formData) {
  const errors = {};
  let isValid = true;

  for (const [field, value] of Object.entries(formData)) {
    const result = validateField(field, value);
    if (!result.valid) {
      errors[field] = result.error;
      isValid = false;
    }
  }

  return { valid: isValid, errors };
}

// Display validation errors
function displayValidationErrors(errors) {
  // Clear previous errors
  document.querySelectorAll('.form-error').forEach(el => el.remove());
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

  // Display new errors
  for (const [field, error] of Object.entries(errors)) {
    const input = document.getElementById(field) || document.querySelector(`[name="${field}"]`);
    if (input) {
      input.classList.add('error');

      const errorEl = document.createElement('span');
      errorEl.className = 'form-error';
      errorEl.textContent = error;

      if (input.parentElement) {
        input.parentElement.appendChild(errorEl);
      }
    }
  }

  // Scroll to first error
  const firstError = document.querySelector('.error');
  if (firstError) {
    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstError.focus();
  }
}

// Clear validation errors
function clearValidationErrors() {
  document.querySelectorAll('.form-error').forEach(el => el.remove());
  document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
}
