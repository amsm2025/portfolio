(() => {
  const showcase = document.querySelector('.project-showcase');
  if (!showcase) return;

  // Add Agentic IncidentOps to Selected Work when it is not already present
  // in the static homepage markup. Keeping this here avoids duplicating the
  // card if the project is later moved directly into index.html.
  const hasIncidentOps = Array.from(showcase.querySelectorAll('.project-case')).some((card) =>
    card.querySelector('h3')?.textContent?.trim().startsWith('Agentic IncidentOps')
  );

  if (!hasIncidentOps) {
    const card = document.createElement('article');
    card.className = 'project-case incidentops-case';
    card.dataset.project = 'agentic-incidentops';
    card.innerHTML = `
      <div class="aico-visual" role="img" aria-label="Agentic IncidentOps governed incident response architecture">
        <div class="aico-visual-head"><span class="tag">AI / SRE / AGENTIC ENGINEERING</span><span class="aico-badge">NEW</span></div>
        <h3>IncidentOps</h3>
        <p class="aico-subtitle">Governed AI-assisted incident investigation & remediation</p>
        <div class="aico-architecture">
          <div class="aico-layer aico-ai"><strong>Agentic Investigation</strong><span>Metrics • Logs • Deployments • Database Evidence</span></div>
          <div class="aico-connector"></div>
          <div class="aico-layer"><strong>Reasoning & Governance</strong><span>LangGraph • OpenAI RCA • Deterministic Policy Engine</span></div>
          <div class="aico-modules"><span>Evidence</span><span>RCA</span><span>Policy</span><span>Approval</span><span>Authorization</span><span>Remediation</span><span>Verification</span><span>Audit</span></div>
          <div class="aico-layer aico-data"><strong>Operational Control</strong><span>PostgreSQL • Redis • Docker • Recovery Verification</span></div>
        </div>
      </div>
      <div class="project-content">
        <div class="project-topline"><span class="tag">AI / SRE / AGENTIC ENGINEERING</span><span class="project-number">00</span></div>
        <h3>Agentic IncidentOps — Governed AI-Assisted SRE Platform</h3>
        <p class="project-summary">An AI-assisted Site Reliability Engineering incident-management platform demonstrating evidence-driven investigation, agent orchestration, deterministic policy enforcement, human-governed remediation, replay protection, recovery verification and auditable operations.</p>
        <div class="case-study-grid">
          <div class="case-study-item"><strong>Problem</strong><span>AI can accelerate incident diagnosis, but production remediation requires deterministic controls, explicit authorization and evidence-backed decisions rather than unconstrained model output.</span></div>
          <div class="case-study-item"><strong>Solution</strong><span>Built specialized evidence agents and a LangGraph investigation workflow with OpenAI-assisted root-cause analysis separated from execution authority by a deterministic policy engine.</span></div>
          <div class="case-study-item"><strong>Governance</strong><span>Implemented human-in-the-loop approval, short-lived one-time action/service-bound authorization, replay protection and PostgreSQL-backed lifecycle auditing.</span></div>
          <div class="case-study-item"><strong>Verification</strong><span>Remediation is followed by recovery checks across service health, latency, HTTP error rate, database utilization and deployment state before recovery is accepted.</span></div>
        </div>
        <div class="project-tech"><span>Python 3.12</span><span>FastAPI</span><span>LangGraph</span><span>OpenAI API</span><span>PostgreSQL</span><span>Redis</span><span>Docker</span><span>Pytest</span></div>
        <div class="project-actions">
          <a class="project-link" href="agentic-incidentops.html">View Case Study →</a>
          <a class="project-link secondary-link" href="https://github.com/amsm2025/agentic-incidentops" target="_blank" rel="noopener">GitHub Repository ↗</a>
        </div>
      </div>`;

    // Feature the newest agentic engineering case study first.
    showcase.insertBefore(card, showcase.firstElementChild);
  }

  const proLink = Array.from(showcase.querySelectorAll('.project-case')).find((card) =>
    card.querySelector('h3')?.textContent?.trim().startsWith('ProLink AI')
  );
  const northbay = showcase.querySelector('[data-project="northbay-family-clinic"]');

  if (proLink && northbay && proLink.nextElementSibling !== northbay) {
    showcase.insertBefore(proLink, northbay);
  }

  showcase.querySelectorAll('.project-number').forEach((el, index) => {
    el.textContent = String(index + 1).padStart(2, '0');
  });
})();
