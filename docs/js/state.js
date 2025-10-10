/**
 * State Management
 * Global application state
 */

// Global state object
const appState = {
  currentStep: 1,
  profileData: {},
  scenarioType: null,
  scenarioData: {},
  generatedPrompts: {
    system: '',
    user: ''
  }
};

// State setters
function setCurrentStep(step) {
  appState.currentStep = step;
  updateProgressBar(step);
  showStep(step);
}

function saveProfileData(data) {
  appState.profileData = data;
  console.log('Profile data saved:', data);
}

function setScenarioType(type) {
  appState.scenarioType = type;
  console.log('Scenario type set:', type);
}

function saveScenarioData(data) {
  appState.scenarioData = data;
  console.log('Scenario data saved:', data);
}

function setGeneratedPrompts(system, user) {
  appState.generatedPrompts = { system, user };
  console.log('Prompts generated');
}

// State getters
function getProfileData() {
  return appState.profileData;
}

function getScenarioType() {
  return appState.scenarioType;
}

function getScenarioData() {
  return appState.scenarioData;
}

function getCurrentStep() {
  return appState.currentStep;
}

function getGeneratedPrompts() {
  return appState.generatedPrompts;
}
