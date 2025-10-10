/**
 * UI Interactions
 * Handles UI updates, navigation, and user feedback
 */

// Show/hide steps
function showStep(stepNumber) {
  // Hide all steps
  document.querySelectorAll('.form-step').forEach(el => {
    el.classList.remove('active');
  });

  // Show target step
  const targetStep = document.getElementById(`step-${stepNumber}`);
  if (targetStep) {
    targetStep.classList.add('active');
  }

  // Update progress bar
  updateProgressBar(stepNumber);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update progress bar
function updateProgressBar(currentStep) {
  document.querySelectorAll('.progress-step').forEach((el, index) => {
    const stepNum = index + 1;
    el.classList.remove('active', 'completed');

    if (stepNum < currentStep) {
      el.classList.add('completed');
    } else if (stepNum === currentStep) {
      el.classList.add('active');
    }
  });
}

// Navigate to next step
function nextStep(step) {
  if (step === 2) {
    // Validate profile form
    const form = document.getElementById('profile-form');
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    const validation = validateProfileForm(data);

    if (!validation.valid) {
      displayValidationErrors(validation.errors);
      showToast('⚠️ Please fill in all required fields', 'error');
      return;
    }

    clearValidationErrors();
    saveProfileData(data);
    showToast('✅ Profile saved!', 'success');
  }

  setCurrentStep(step);
}

// Navigate to previous step
function prevStep(step) {
  setCurrentStep(step);
}

// Copy prompt to clipboard
function copyPrompt(type) {
  const promptId = type === 'system' ? 'system-prompt' : 'user-prompt';
  const promptEl = document.getElementById(promptId);

  if (!promptEl) {
    console.error('Prompt element not found:', promptId);
    return;
  }

  const text = promptEl.textContent;

  navigator.clipboard.writeText(text).then(() => {
    showToast('✅ Copied to clipboard!', 'success');
  }).catch(err => {
    console.error('Failed to copy:', err);
    showToast('❌ Failed to copy. Please select and copy manually.', 'error');
  });
}

// Download prompts as text file
function downloadPrompts() {
  const prompts = getGeneratedPrompts();

  const combined = `# GRC LAB BUILDER - YOUR PROMPTS

Generated on: ${new Date().toLocaleString()}

================================================================================
SYSTEM PROMPT (Paste into Claude Project settings or save for ChatGPT)
================================================================================

${prompts.system}

================================================================================
USER PROMPT (Paste into Claude chat or ChatGPT)
================================================================================

${prompts.user}

================================================================================

HOW TO USE:
1. Copy the System Prompt and paste it into Claude Projects (or save for ChatGPT)
2. Copy the User Prompt and paste it into your AI chat
3. The AI will generate your personalized learning lab!

================================================================================
`;

  const blob = new Blob([combined], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `grc-lab-prompts-${Date.now()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('✅ Prompts downloaded!', 'success');
}

// Reset form and start over
function resetForm() {
  if (confirm('Are you sure you want to start over? Your current prompts will be cleared.')) {
    // Clear all forms
    document.querySelectorAll('form').forEach(form => form.reset());

    // Clear state
    appState.currentStep = 1;
    appState.profileData = {};
    appState.scenarioType = null;
    appState.scenarioData = {};
    appState.generatedPrompts = { system: '', user: '' };

    // Clear scenario form container
    const container = document.getElementById('scenario-form-container');
    if (container) {
      container.style.display = 'none';
      container.innerHTML = '';
    }

    // Go to step 1
    setCurrentStep(1);

    showToast('🔄 Form reset!', 'success');
  }
}

// Show toast notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      container.removeChild(toast);
    }, 300);
  }, 3000);
}

// Radio button styling
function initRadioButtons() {
  document.querySelectorAll('.form-radio input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
      // Remove checked class from all radios in this group
      const name = this.name;
      document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
        r.closest('.form-radio').classList.remove('checked');
      });

      // Add checked class to selected radio
      if (this.checked) {
        this.closest('.form-radio').classList.add('checked');
      }
    });
  });
}
