/**
 * LocalStorage
 * Save and load progress to browser storage
 */

const STORAGE_KEY = 'grc_lab_progress';

// Save progress to localStorage
function saveProgress() {
  try {
    const data = {
      timestamp: new Date().toISOString(),
      currentStep: getCurrentStep(),
      profileData: getProfileData(),
      scenarioType: getScenarioType(),
      scenarioData: getScenarioData(),
      generatedPrompts: getGeneratedPrompts()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    showToast('✅ Progress saved!', 'success');
    console.log('Progress saved to localStorage');
  } catch (error) {
    console.error('Failed to save progress:', error);
    showToast('❌ Failed to save progress', 'error');
  }
}

// Load progress from localStorage
function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return false;

    const data = JSON.parse(saved);

    // Restore state
    appState.currentStep = data.currentStep || 1;
    appState.profileData = data.profileData || {};
    appState.scenarioType = data.scenarioType || null;
    appState.scenarioData = data.scenarioData || {};
    appState.generatedPrompts = data.generatedPrompts || { system: '', user: '' };

    // Populate profile form
    if (data.profileData && Object.keys(data.profileData).length > 0) {
      populateProfileForm(data.profileData);
    }

    // Restore scenario if exists
    if (data.scenarioType && data.scenarioData) {
      // This will be handled by the UI on step change
    }

    // Go to saved step
    showStep(data.currentStep);

    const savedDate = new Date(data.timestamp).toLocaleString();
    showToast(`✅ Progress loaded from ${savedDate}`, 'success');
    console.log('Progress loaded from localStorage');

    return true;
  } catch (error) {
    console.error('Failed to load progress:', error);
    return false;
  }
}

// Populate profile form with saved data
function populateProfileForm(data) {
  for (const [key, value] of Object.entries(data)) {
    const element = document.getElementById(key) || document.querySelector(`[name="${key}"]`);

    if (!element) continue;

    if (element.type === 'radio') {
      const radio = document.querySelector(`input[name="${key}"][value="${value}"]`);
      if (radio) {
        radio.checked = true;
        radio.closest('.form-radio')?.classList.add('checked');
      }
    } else if (element.type === 'checkbox') {
      element.checked = value === 'true' || value === true;
    } else {
      element.value = value;
    }
  }
}

// Clear saved progress
function clearProgress() {
  if (confirm('Are you sure you want to clear your saved progress?')) {
    try {
      localStorage.removeItem(STORAGE_KEY);
      showToast('🗑️ Progress cleared', 'success');
      console.log('Progress cleared from localStorage');
    } catch (error) {
      console.error('Failed to clear progress:', error);
      showToast('❌ Failed to clear progress', 'error');
    }
  }
}

// Auto-save on form changes (debounced)
let autoSaveTimeout;
function setupAutoSave() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('change', () => {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = setTimeout(() => {
        saveProgress();
      }, 2000); // Auto-save 2 seconds after last change
    });
  });
}

// Check if there's saved progress on page load
function checkForSavedProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      const savedDate = new Date(data.timestamp).toLocaleString();

      const loadSaved = confirm(
        `You have saved progress from ${savedDate}. Would you like to continue where you left off?`
      );

      if (loadSaved) {
        loadProgress();
      } else {
        // User chose not to load, optionally clear
        if (confirm('Would you like to clear this saved progress?')) {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch (error) {
      console.error('Error checking saved progress:', error);
    }
  }
}
