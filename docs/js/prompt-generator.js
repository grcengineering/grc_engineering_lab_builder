/**
 * Prompt Generator
 * Generates system and user prompts from form data
 */

// Helper functions to format data
function formatTechLevel(level) {
  const map = {
    'non_technical': 'Non-technical (no coding experience)',
    'basic': 'Basic (can write simple scripts/formulas)',
    'intermediate': 'Intermediate (comfortable with Python/SQL)',
    'advanced': 'Advanced (can build full applications)'
  };
  return map[level] || level;
}

function formatCompanySize(size) {
  const map = {
    'startup': '<100 employees (startup)',
    'small': '100-500 employees',
    'mid': '500-5000 employees',
    'large': '5000+ employees (enterprise)'
  };
  return map[size] || size;
}

function formatTeamStructure(structure) {
  const map = {
    'solo': 'Solo GRC team (just me)',
    'small': '2-5 people',
    'medium': '6-15 people',
    'large': '15+ people'
  };
  return map[structure] || structure;
}

function formatTimeAvailability(time) {
  const map = {
    'limited': '2-5 hours/week (limited)',
    'moderate': '5-10 hours/week (moderate)',
    'dedicated': '10+ hours/week (dedicated)',
    'intensive': 'Intensive sprint (full-time for 1-2 weeks)'
  };
  return map[time] || time;
}

// Generate System Prompt
function generateSystemPrompt(profileData) {
  return `You are a GRC (Governance, Risk, and Compliance) learning lab generator. Your goal is to create personalized, practical learning experiences based on the learner's specific context.

## LEARNER PROFILE

### Personal & Technical Background
- **Current Role:** ${profileData.role}
- **Technical Skill Level:** ${formatTechLevel(profileData.tech_level)}
- **Coding Experience:** ${profileData.coding_exp || 'Not specified'}
- **Strongest Technical Areas:** ${profileData.strong_areas || 'Not specified'}

### Professional & Organizational Context
- **Industry:** ${profileData.industry}
- **Company Size:** ${formatCompanySize(profileData.company_size)}
- **GRC Team Structure:** ${formatTeamStructure(profileData.team_structure)}

### GRC Program Details
- **Primary GRC Tools:** ${profileData.grc_tools}
- **Compliance Frameworks:** ${profileData.frameworks}
- **Current Challenges:** ${profileData.challenges}

### Time & Goals
- **Time Availability:** ${formatTimeAvailability(profileData.time_available)}
- **Career Goal (6-12 months):** ${profileData.career_goal || 'Not specified'}

---

## YOUR TASK

When the user provides their learning objective, create a comprehensive, multi-week learning lab that:

1. **Matches their technical level** - Start where they are, not where you think they should be
2. **Uses their actual tools** - Don't prescribe AWS if they use Excel, don't teach Python if they're non-technical
3. **Solves their real problem** - Address their specific challenges, not generic scenarios
4. **Fits their timeline** - Adapt the pace to their time availability
5. **Builds toward their career goals** - Include deliverables that support advancement

## LAB STRUCTURE

Create a progressive, week-by-week plan with:
- **Week 1-2:** Foundation (manual understanding, no coding if they're non-technical)
- **Week 3-6:** Core building (introduce tools at appropriate level)
- **Week 7-10:** Integration & polish
- **Week 11-12:** Production deployment & documentation

For each week, include:
- Learning objectives (clear, measurable)
- Activities (hands-on, practical)
- Deliverables (tangible outputs)
- Time estimate (matching their ${formatTimeAvailability(profileData.time_available)} availability)
- Troubleshooting tips

## CRITICAL RULES

- **Problem-first, not tool-first** - Start with their problem, then choose appropriate tools
- **Practical over theoretical** - Every week should produce working artifacts
- **Career-focused** - Explain how each deliverable builds their career
- **Encourage iteration** - Labs should feel like real work, with mistakes and learning
- **Match their tools** - Use ${profileData.grc_tools}, not generic examples
- **Respect their challenges** - Address: ${profileData.challenges}

Now wait for the user's specific learning objective.`;
}

// Generate User Prompts for different scenarios
function generateEmployedPrompt(scenarioData) {
  return `Create a comprehensive learning lab that builds a skill or tool I can use immediately in my current role.

## PROJECT FOCUS

**Learning Objective:** Build ${scenarioData.deliverable}

**Business Problem I'm Solving:** ${scenarioData.problem}

**Impact I Want to Achieve:** ${scenarioData.impact}

**Strategic Value:** ${scenarioData.strategic_value}

---

## MY CURRENT SITUATION

**Role & Responsibilities:** ${scenarioData.role_details}

**Time Spent on Manual Work:** ${scenarioData.manual_time}

**Current Tools & Processes:** ${scenarioData.current_tools}

---

## PROJECT URGENCY

**Timeline Driver:** ${scenarioData.timeline_driver}

**Other Commitments:** ${scenarioData.other_commitments || 'None specified'}

---

## SUCCESS CRITERIA

This project is a "home run" if:
${scenarioData.success_criteria}

---

Please create a detailed, week-by-week learning lab that helps me build this, using the tools and context from my profile above.`;
}

function generateJobSeekingPrompt(scenarioData) {
  return `Create a comprehensive learning lab that builds a portfolio project demonstrating skills for my target roles.

## TARGET ROLE CONTEXT

**Primary Target Role:** ${scenarioData.target_role}

**Key Skills These Roles Require:** ${scenarioData.required_skills}

**Skills I Have:** ${scenarioData.skills_have}

**Skills I Need to Demonstrate:** ${scenarioData.skills_need}

---

## PORTFOLIO PROJECT GOAL

**What I Want to Build:** ${scenarioData.project_goal}

**Why This Project:** ${scenarioData.why_this}

**Interview Timeline:** ${scenarioData.interview_timeline}

---

## PORTFOLIO DELIVERABLES NEEDED

By the end of this lab, I should have:
- Working project (GitHub repo)
- Blog post explaining the project
- LinkedIn content strategy
- STAR method talking points for interviews
- Resume bullets demonstrating impact

---

Please create a detailed learning lab that helps me build this portfolio project, tailored to demonstrate the specific skills employers want to see.`;
}

function generateTransitionPrompt(scenarioData) {
  return `Create a comprehensive learning lab focused on building credibility fast in my first 90 days of a new GRC role.

## TRANSITION CONTEXT

**Previous Role:** ${scenarioData.previous_role}

**New GRC Role:** ${scenarioData.new_role}

**Time in Role:** ${scenarioData.time_in_role}

---

## CREDIBILITY CHALLENGES

**Skepticism I'm Facing:** ${scenarioData.skepticism}

**First 90-Day Expectations:** ${scenarioData.expectations}

---

## QUICK WIN STRATEGY

**Quick Win Opportunities I See:** ${scenarioData.quick_wins}

**What Would Build Credibility Fast:** ${scenarioData.credibility_builders}

---

## IMMEDIATE PRESSURE POINTS

${scenarioData.pressure_points}

---

Please create a focused learning lab that helps me deliver a quick win demonstrating value, using the tools and context from my profile. Focus on speed and visibility.`;
}

// Main generation function
function generatePrompts() {
  const profileData = getProfileData();
  const scenarioType = getScenarioType();
  const scenarioData = getScenarioData();

  // Generate system prompt
  const systemPrompt = generateSystemPrompt(profileData);

  // Generate user prompt based on scenario
  let userPrompt = '';
  if (scenarioType === 'employed') {
    userPrompt = generateEmployedPrompt(scenarioData);
  } else if (scenarioType === 'job_seeking') {
    userPrompt = generateJobSeekingPrompt(scenarioData);
  } else if (scenarioType === 'transition') {
    userPrompt = generateTransitionPrompt(scenarioData);
  }

  // Save to state
  setGeneratedPrompts(systemPrompt, userPrompt);

  // Display prompts
  document.getElementById('system-prompt').textContent = systemPrompt;
  document.getElementById('user-prompt').textContent = userPrompt;

  // Move to step 3
  setCurrentStep(3);
}
