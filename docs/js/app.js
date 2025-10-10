/**
 * Main Application
 * Initialize and coordinate all modules
 */

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('GRC Lab Builder initialized');

  // Initialize UI components
  initRadioButtons();

  // Check for saved progress
  checkForSavedProgress();

  // Setup auto-save
  setupAutoSave();

  // Ensure we're on step 1
  if (getCurrentStep() === 1) {
    showStep(1);
  }
});

// Handle page unload
window.addEventListener('beforeunload', function(e) {
  const currentStep = getCurrentStep();

  // Only warn if user has progress
  if (currentStep > 1) {
    const message = 'You have unsaved progress. Are you sure you want to leave?';
    e.returnValue = message;
    return message;
  }
});

// Log app version and info
console.log(`
╔════════════════════════════════════════════════════╗
║   GRC Engineering Lab Builder                      ║
║   Version: 1.0.0                                   ║
║   Generate personalized GRC learning labs          ║
╚════════════════════════════════════════════════════╝
`);
