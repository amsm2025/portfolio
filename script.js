const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const projectShowcase = document.querySelector('.project-showcase');

if (projectShowcase && !document.querySelector('[data-project="northbay-family-clinic"]')) {
    const firstProject = projectShowcase.querySelector('.project-case');

    const northbayProject = `
        <article class="project-case featured-case" data-project="northbay-family-clinic">
          <div class="aico-visual" role="img" aria-label="Northbay Family Clinic agentic scheduling architecture overview">
            <div class="aico-visual-head">
              <span class="tag">AGENTIC AI / HEALTHCARE</span>
              <span class="aico-badge">LIVE</span>
            </div>
            <h3>Northbay</h3>
            <p class="aico-subtitle">Family Clinic · Agentic Patient Scheduling</p>
            <div class="aico-architecture">
              <div class="aico-layer aico-ai"><strong>Patient Conversation Layer</strong><span>Guided Scheduling • Claude-ready Agent Experience</span></div>
              <div class="aico-connector"></div>
              <div class="aico-layer"><strong>Node.js + Express API</strong><span>REST Endpoints • Session Flow • Scheduling Logic</span></div>
              <div class="aico-modules">
                <span>Doctors</span><span>Availability</span><span>Booking</span><span>Lookup</span>
                <span>Cancel</span><span>Reschedule</span><span>Tool Use</span><span>Guided Fallback</span>
              </div>
              <div class="aico-layer aico-data"><strong>Scheduling Data & Deployment</strong><span>JSON Demo Store • GitHub • Render Free</span></div>
            </div>
          </div>
          <div class="project-content">
            <div class="project-topline"><span class="tag">NODE.JS / EXPRESS / AI</span><span class="project-number">02</span></div>
            <h3>Northbay Family Clinic</h3>
            <p class="project-summary">A deployed agentic patient-scheduling application built with Node.js 20+, Express 5 and JavaScript, with Anthropic Claude tool-use integration provisioned for conversational scheduling and a guided fallback mode for zero-cost demonstrations.</p>

            <div class="case-study-grid">
              <div class="case-study-item">
                <strong>Problem</strong>
                <span>Clinic staff and patients often spend time on repetitive appointment tasks such as finding doctors, checking availability and managing bookings.</span>
              </div>
              <div class="case-study-item">
                <strong>Solution</strong>
                <span>Built a conversational scheduling workflow that supports doctor discovery, availability checks, booking, lookup, cancellation and rescheduling through a single patient-facing experience.</span>
              </div>
              <div class="case-study-item">
                <strong>Agentic Design</strong>
                <span>Provisioned Anthropic Claude tool use so the AI layer can invoke scheduling functions while keeping the scheduling engine as the source of truth instead of allowing the model to invent appointment data.</span>
              </div>
              <div class="case-study-item">
                <strong>Deployment</strong>
                <span>Published through GitHub to Render as a free public web service, with environment-based configuration and guided fallback when no Anthropic API key is enabled.</span>
              </div>
            </div>

            <div class="project-tech"><span>Node.js 20+</span><span>Express 5</span><span>JavaScript</span><span>REST API</span><span>Anthropic Claude SDK</span><span>Tool Use</span><span>HTML/CSS</span><span>GitHub</span><span>Render</span></div>
            <div class="project-actions">
              <a class="project-link" href="https://northbay-family-clinic.onrender.com/" target="_blank" rel="noopener" aria-label="Open Northbay Family Clinic live demo in a new tab">Live Demo ↗</a>
              <a class="project-link secondary-link" href="https://github.com/amsm2025/northbay-family-clinic" target="_blank" rel="noopener" aria-label="Open Northbay Family Clinic GitHub repository in a new tab">GitHub Repository ↗</a>
            </div>
          </div>
        </article>`;

    if (firstProject) {
        firstProject.insertAdjacentHTML('afterend', northbayProject);
    } else {
        projectShowcase.insertAdjacentHTML('afterbegin', northbayProject);
    }

    projectShowcase.querySelectorAll('.project-number').forEach((numberElement, index) => {
        numberElement.textContent = String(index + 1).padStart(2, '0');
    });
}

// Add MediVoice AI as a featured healthcare AI case study.
if (projectShowcase && !document.querySelector('[data-project="medivoice-ai"]')) {
    const firstProject = projectShowcase.querySelector('.project-case');
    const mediVoiceProject = `
        <article class="project-case featured-case" data-project="medivoice-ai">
          <div class="aico-visual" role="img" aria-label="MediVoice AI voice-enabled patient record retrieval architecture">
            <div class="aico-visual-head">
              <span class="tag">VOICE AI / HEALTHCARE / FHIR</span>
              <span class="aico-badge">LIVE</span>
            </div>
            <h3>MediVoice AI</h3>
            <p class="aico-subtitle">Intelligent Patient Record Retrieval Agent</p>
            <div class="aico-architecture">
              <div class="aico-layer aico-ai"><strong>Voice & Conversation Layer</strong><span>Speech Recognition • Intent Detection • Spoken Response</span></div>
              <div class="aico-connector"></div>
              <div class="aico-layer"><strong>Secure Retrieval Workflow</strong><span>Patient Matching • DOB Verification • RBAC Scaffolding</span></div>
              <div class="aico-modules">
                <span>Patient</span><span>Allergies</span><span>Medications</span><span>Diagnoses</span>
                <span>Labs</span><span>Appointments</span><span>FHIR</span><span>Audit</span>
              </div>
              <div class="aico-layer aico-data"><strong>Clinical Data Boundary</strong><span>Synthetic Records • FHIR-style Resources • Deterministic Source of Truth</span></div>
            </div>
          </div>
          <div class="project-content">
            <div class="project-topline"><span class="tag">FASTAPI / VOICE AI / FHIR</span><span class="project-number">02</span></div>
            <h3>MediVoice AI</h3>
            <p class="project-summary">A voice-enabled healthcare AI prototype that lets authorized users retrieve synthetic patient information through natural-language requests while keeping identity verification, authorization concepts, clinical data retrieval and audit logging separate from the conversational layer.</p>

            <div class="case-study-grid">
              <div class="case-study-item">
                <strong>Problem</strong>
                <span>Clinical staff can spend valuable time navigating fragmented screens and records to locate routine patient information during care workflows.</span>
              </div>
              <div class="case-study-item">
                <strong>Solution</strong>
                <span>Built a conversational patient-record retrieval flow supporting voice and text requests for summaries, allergies, medications, diagnoses, laboratory results and appointments.</span>
              </div>
              <div class="case-study-item">
                <strong>Engineering</strong>
                <span>Implemented FastAPI REST endpoints, browser speech recognition and synthesis, patient matching, DOB verification, FHIR-oriented resources, RBAC scaffolding, audit events, automated tests and Docker deployment.</span>
              </div>
              <div class="case-study-item">
                <strong>Safety & Scope</strong>
                <span>Uses synthetic patient data only and is not for clinical use. The conversational layer interprets requests while deterministic application services remain the source of clinical facts.</span>
              </div>
            </div>

            <div class="project-tech"><span>Python</span><span>FastAPI</span><span>Voice AI</span><span>FHIR</span><span>REST API</span><span>RBAC</span><span>Audit Logging</span><span>Docker</span><span>Render</span></div>
            <div class="project-actions">
              <a class="project-link" href="https://medivoice-ai-9ke2.onrender.com/" target="_blank" rel="noopener" aria-label="Open MediVoice AI live demo in a new tab">Live Demo ↗</a>
              <a class="project-link secondary-link" href="medivoice-ai.html" aria-label="Open MediVoice AI case study">View Case Study ↗</a>
              <a class="project-link secondary-link" href="https://github.com/amsm2025/medivoice-ai" target="_blank" rel="noopener" aria-label="Open MediVoice AI GitHub repository in a new tab">GitHub Repository ↗</a>
            </div>
          </div>
        </article>`;

    if (firstProject) {
        firstProject.insertAdjacentHTML('afterend', mediVoiceProject);
    } else {
        projectShowcase.insertAdjacentHTML('afterbegin', mediVoiceProject);
    }

    projectShowcase.querySelectorAll('.project-number').forEach((numberElement, index) => {
        numberElement.textContent = String(index + 1).padStart(2, '0');
    });
}

// Add the deployed Healthcare AI Voice Agent demo to its case study.
const healthcareProject = Array.from(document.querySelectorAll('.project-case')).find(
    (project) => project.querySelector('h3')?.textContent?.trim() === 'Healthcare AI Voice Agent'
);

if (healthcareProject) {
    const projectActions = healthcareProject.querySelector('.project-actions');
    const existingLiveDemo = projectActions?.querySelector('[data-healthcare-live-demo]');

    if (projectActions && !existingLiveDemo) {
        const liveDemo = document.createElement('a');
        liveDemo.className = 'project-link';
        liveDemo.href = 'https://healthcare-ai-voice-agent-ui.onrender.com/';
        liveDemo.target = '_blank';
        liveDemo.rel = 'noopener';
        liveDemo.setAttribute('aria-label', 'Open Healthcare AI Voice Agent live demo in a new tab');
        liveDemo.setAttribute('data-healthcare-live-demo', 'true');
        liveDemo.textContent = 'Live Demo ↗';
        projectActions.insertBefore(liveDemo, projectActions.firstChild);
    }
}