/**
 * Scenario Forms
 * Handles dynamic scenario-specific forms
 */

// Select a scenario and show its form
function selectScenario(scenarioType) {
  setScenarioType(scenarioType);

  const container = document.getElementById('scenario-form-container');
  container.innerHTML = ''; // Clear previous forms

  // Create the appropriate form
  let formHTML = '';
  if (scenarioType === 'employed') {
    formHTML = createEmployedForm();
  } else if (scenarioType === 'job_seeking') {
    formHTML = createJobSeekingForm();
  } else if (scenarioType === 'transition') {
    formHTML = createTransitionForm();
  }

  container.innerHTML = formHTML;
  container.style.display = 'block';

  // Scroll to form
  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Create Employed Scenario Form
function createEmployedForm() {
  return `
    <div class="scenario-form active" id="employed-form">
      <div class="scenario-form-header">
        <a class="back-to-scenarios" onclick="backToScenarios()">← Back to Scenarios</a>
        <h3>Solve Work Problem</h3>
      </div>

      <form id="scenario-form-employed">
        <fieldset>
          <legend>🎯 Project Focus</legend>

          <div class="form-group">
            <label for="deliverable" class="form-label required">What do you want to build?</label>
            <input
              type="text"
              id="deliverable"
              name="deliverable"
              class="form-input"
              placeholder="e.g., Automated SOC 2 review process, Executive risk dashboard"
              required
            >
          </div>

          <div class="form-group">
            <label for="problem" class="form-label required">What business problem are you solving?</label>
            <textarea
              id="problem"
              name="problem"
              class="form-textarea"
              placeholder="e.g., Spending 15 hours/week on manual vendor reviews"
              rows="3"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="impact" class="form-label required">What impact do you want to achieve?</label>
            <textarea
              id="impact"
              name="impact"
              class="form-textarea"
              placeholder="e.g., Reduce review time from 3 hours to 30 minutes each"
              rows="3"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="strategic_value" class="form-label required">Why does this matter strategically?</label>
            <textarea
              id="strategic_value"
              name="strategic_value"
              class="form-textarea"
              placeholder="e.g., Demonstrates value for upcoming promotion conversation"
              rows="2"
              required
            ></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>📋 Current Situation</legend>

          <div class="form-group">
            <label for="role_details" class="form-label">Role & Responsibilities</label>
            <textarea
              id="role_details"
              name="role_details"
              class="form-textarea"
              placeholder="e.g., TPRM Analyst managing 500+ vendors"
              rows="2"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="manual_time" class="form-label">Time spent on manual work</label>
            <textarea
              id="manual_time"
              name="manual_time"
              class="form-textarea"
              placeholder="e.g., 20 hours/week on vendor reviews, 10 hours on reporting"
              rows="2"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="current_tools" class="form-label">Current tools & processes</label>
            <textarea
              id="current_tools"
              name="current_tools"
              class="form-textarea"
              placeholder="e.g., Google Sheets for tracking, manual PDF reviews"
              rows="2"
            ></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>⏰ Project Urgency</legend>

          <div class="form-group">
            <label for="timeline_driver" class="form-label">Timeline driver (why now?)</label>
            <input
              type="text"
              id="timeline_driver"
              name="timeline_driver"
              class="form-input"
              placeholder="e.g., Board meeting in 6 weeks and need dashboard"
            >
          </div>

          <div class="form-group">
            <label for="other_commitments" class="form-label">Other commitments</label>
            <input
              type="text"
              id="other_commitments"
              name="other_commitments"
              class="form-input"
              placeholder="e.g., Audit prep happening in parallel"
            >
          </div>
        </fieldset>

        <fieldset>
          <legend>✅ Success Criteria</legend>

          <div class="form-group">
            <label for="success_criteria" class="form-label required">This project is a "home run" if:</label>
            <textarea
              id="success_criteria"
              name="success_criteria"
              class="form-textarea"
              placeholder="e.g., Leadership asks me to roll this out company-wide, Time saved is measurable"
              rows="3"
              required
            ></textarea>
          </div>
        </fieldset>

        <div class="form-actions">
          <button type="button" class="btn btn-secondary" onclick="backToScenarios()">
            ← Back to Scenarios
          </button>
          <button type="button" class="btn btn-primary btn-large" onclick="submitScenarioForm()">
            Generate My Prompts! →
          </button>
        </div>
      </form>
    </div>
  `;
}

// Create Job Seeking Scenario Form
function createJobSeekingForm() {
  return `
    <div class="scenario-form active" id="job-seeking-form">
      <div class="scenario-form-header">
        <a class="back-to-scenarios" onclick="backToScenarios()">← Back to Scenarios</a>
        <h3>Build Portfolio Project</h3>
      </div>

      <form id="scenario-form-job-seeking">
        <fieldset>
          <legend>🎯 Target Role</legend>

          <div class="form-group">
            <label for="target_role" class="form-label required">What role are you targeting?</label>
            <input
              type="text"
              id="target_role"
              name="target_role"
              class="form-input"
              placeholder="e.g., TPRM Analyst, GRC Manager, Risk Consultant"
              required
            >
          </div>

          <div class="form-group">
            <label for="required_skills" class="form-label required">Key skills these roles require</label>
            <textarea
              id="required_skills"
              name="required_skills"
              class="form-textarea"
              placeholder="e.g., Vendor risk assessment, SOC 2 analysis, Risk scoring"
              rows="2"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="skills_have" class="form-label">Skills you already have</label>
            <textarea
              id="skills_have"
              name="skills_have"
              class="form-textarea"
              placeholder="e.g., Excel analysis, Project management, Stakeholder communication"
              rows="2"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="skills_need" class="form-label required">Skills you need to demonstrate</label>
            <textarea
              id="skills_need"
              name="skills_need"
              class="form-textarea"
              placeholder="e.g., Technical automation, GRC platform experience, Risk frameworks"
              rows="2"
              required
            ></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>📊 Portfolio Project</legend>

          <div class="form-group">
            <label for="project_goal" class="form-label required">What do you want to build?</label>
            <textarea
              id="project_goal"
              name="project_goal"
              class="form-textarea"
              placeholder="e.g., Vendor risk scoring framework with sample data and documentation"
              rows="3"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="why_this" class="form-label required">Why this project?</label>
            <textarea
              id="why_this"
              name="why_this"
              class="form-textarea"
              placeholder="e.g., Demonstrates both technical and GRC knowledge, fills my biggest gap"
              rows="2"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="interview_timeline" class="form-label">Interview timeline</label>
            <input
              type="text"
              id="interview_timeline"
              name="interview_timeline"
              class="form-input"
              placeholder="e.g., Actively interviewing, need this in 2-3 weeks"
            >
          </div>
        </fieldset>

        <div class="form-actions">
          <button type="button" class="btn btn-secondary" onclick="backToScenarios()">
            ← Back to Scenarios
          </button>
          <button type="button" class="btn btn-primary btn-large" onclick="submitScenarioForm()">
            Generate My Prompts! →
          </button>
        </div>
      </form>
    </div>
  `;
}

// Create Transition Scenario Form
function createTransitionForm() {
  return `
    <div class="scenario-form active" id="transition-form">
      <div class="scenario-form-header">
        <a class="back-to-scenarios" onclick="backToScenarios()">← Back to Scenarios</a>
        <h3>Quick Wins in New Role</h3>
      </div>

      <form id="scenario-form-transition">
        <fieldset>
          <legend>🔄 Transition Context</legend>

          <div class="form-group">
            <label for="previous_role" class="form-label required">Previous role/background</label>
            <input
              type="text"
              id="previous_role"
              name="previous_role"
              class="form-input"
              placeholder="e.g., IT Security Analyst, Internal Auditor, Project Manager"
              required
            >
          </div>

          <div class="form-group">
            <label for="new_role" class="form-label required">New GRC role</label>
            <input
              type="text"
              id="new_role"
              name="new_role"
              class="form-input"
              placeholder="e.g., GRC Program Manager, TPRM Lead"
              required
            >
          </div>

          <div class="form-group">
            <label for="time_in_role" class="form-label required">Time in new role</label>
            <select id="time_in_role" name="time_in_role" class="form-select" required>
              <option value="">Choose...</option>
              <option value="starting">Starting in 1-2 weeks</option>
              <option value="30_days">30 days in</option>
              <option value="60_days">60 days in</option>
              <option value="90_days">90 days in</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <legend>🎯 Credibility Strategy</legend>

          <div class="form-group">
            <label for="skepticism" class="form-label">Skepticism you're facing</label>
            <textarea
              id="skepticism"
              name="skepticism"
              class="form-textarea"
              placeholder="e.g., Team questions my lack of traditional GRC background"
              rows="2"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="expectations" class="form-label required">First 90-day expectations</label>
            <textarea
              id="expectations"
              name="expectations"
              class="form-textarea"
              placeholder="e.g., Complete vendor risk assessments, Build risk register"
              rows="2"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="quick_wins" class="form-label required">Quick win opportunities you see</label>
            <textarea
              id="quick_wins"
              name="quick_wins"
              class="form-textarea"
              placeholder="e.g., Automate manual process team dreads, Build dashboard they've wanted"
              rows="3"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="credibility_builders" class="form-label required">What would build credibility fast?</label>
            <textarea
              id="credibility_builders"
              name="credibility_builders"
              class="form-textarea"
              placeholder="e.g., Deliver something ahead of schedule, Solve problem previous person couldn't"
              rows="2"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="pressure_points" class="form-label">Immediate pressure points</label>
            <textarea
              id="pressure_points"
              name="pressure_points"
              class="form-textarea"
              placeholder="e.g., Audit starting in 6 weeks, Board meeting next month"
              rows="2"
            ></textarea>
          </div>
        </fieldset>

        <div class="form-actions">
          <button type="button" class="btn btn-secondary" onclick="backToScenarios()">
            ← Back to Scenarios
          </button>
          <button type="button" class="btn btn-primary btn-large" onclick="submitScenarioForm()">
            Generate My Prompts! →
          </button>
        </div>
      </form>
    </div>
  `;
}

// Back to scenario selection
function backToScenarios() {
  const container = document.getElementById('scenario-form-container');
  container.style.display = 'none';
  container.innerHTML = '';
  setScenarioType(null);
}

// Submit scenario form
function submitScenarioForm() {
  const scenarioType = getScenarioType();
  const formId = `scenario-form-${scenarioType.replace('_', '-')}`;
  const form = document.getElementById(formId);

  if (!form) {
    console.error('Form not found:', formId);
    return;
  }

  // Collect form data
  const formData = new FormData(form);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Basic validation - check required fields
  const requiredFields = form.querySelectorAll('[required]');
  let hasErrors = false;

  requiredFields.forEach(field => {
    if (!field.value || field.value.trim() === '') {
      field.classList.add('error');
      hasErrors = true;
    } else {
      field.classList.remove('error');
    }
  });

  if (hasErrors) {
    showToast('⚠️ Please fill in all required fields', 'error');
    return;
  }

  // Save scenario data
  saveScenarioData(data);

  // Generate prompts
  generatePrompts();
}
