// suggestions.js
// Simulated AI roadmap generator + Framer-like animations for suggestions.html

// Predefined templates (can be replaced by real AI later)
const ROADMAP_TEMPLATES = {
  dsa: [
    {
      phase: "Phase 1: Fundamentals",
      duration: "3 weeks",
      description: "Arrays, Strings, Hashmaps, Recursion - core building blocks.",
      topics: ["Arrays & Strings", "Hash Tables", "Basic Recursion", "Complexity Analysis"]
    },
    {
      phase: "Phase 2: Intermediate DS",
      duration: "4 weeks",
      description: "Trees, Graphs basics and classic algorithms.",
      topics: ["Trees (BST)", "Graphs (BFS/DFS)", "Heaps & Priority Queues"]
    },
    {
      phase: "Phase 3: Advanced Algorithms",
      duration: "4 weeks",
      description: "Dynamic programming and advanced graph algorithms.",
      topics: ["Dynamic Programming", "Greedy Algorithms", "Advanced Graphs"]
    },
    {
      phase: "Phase 4: Practice & Contests",
      duration: "Ongoing",
      description: "Apply knowledge in contests and projects.",
      topics: ["Mock Contests", "Systematic Practice", "Project: Algorithm Visualizer"]
    }
  ],

  fullstack: [
    {
      phase: "Phase 1: Fundamentals",
      duration: "3 weeks",
      description: "HTML, CSS, JavaScript fundamentals and tooling.",
      topics: ["HTML & Accessibility", "Responsive CSS", "Vanilla JS"]
    },
    {
      phase: "Phase 2: Backend Basics",
      duration: "4 weeks",
      description: "Server-side concepts, databases, REST APIs.",
      topics: ["Node.js/Express", "Relational & NoSQL DBs", "Authentication"]
    },
    {
      phase: "Phase 3: Frontend Frameworks",
      duration: "4 weeks",
      description: "Modern frontend frameworks and state management.",
      topics: ["Framework (React/Vue)", "State Management", "Routing"]
    },
    {
      phase: "Phase 4: Projects & Deployment",
      duration: "3 weeks",
      description: "Build, test and deploy full-stack applications.",
      topics: ["CI/CD", "Cloud Deployment", "Final Project: Full-Stack App"]
    }
  ],

  default: [
    {
      phase: "Phase 1: Fundamentals",
      duration: "2-3 weeks",
      description: "Understand essentials before diving deeper.",
      topics: ["Core Concepts", "Basic Tools", "Intro Projects"]
    },
    {
      phase: "Phase 2: Intermediate",
      duration: "3-4 weeks",
      description: "Build a solid intermediate understanding.",
      topics: ["Core Workflows", "Problem Solving", "Project Work"]
    },
    {
      phase: "Phase 3: Advanced / Specialization",
      duration: "4 weeks",
      description: "Choose specializations and advanced topics.",
      topics: ["Specialized Topics", "Advanced Tools", "Portfolio Projects"]
    }
  ]
};

// Utility to choose template
function selectTemplate(query) {
  if (!query) return ROADMAP_TEMPLATES.default;
  const q = query.toLowerCase();
  if (q.includes("dsa") || q.includes("data") || q.includes("alg")) return ROADMAP_TEMPLATES.dsa;
  if (q.includes("full") || q.includes("stack") || q.includes("frontend") || q.includes("backend")) return ROADMAP_TEMPLATES.fullstack;
  // fallback - default template
  return ROADMAP_TEMPLATES.default;
}

// HTML escape helper
function escapeHtml(s = '') {
  return String(s).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m]));
}

// Motion config
const MOTION = {
  duration: 600, // ms
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  stagger: 120  // ms between cards
};

// Render roadmap
function renderRoadmap(template) {
  const container = document.getElementById('roadmapContainer');
  const empty = document.getElementById('emptyState');
  container.innerHTML = ''; // clear
  if (empty) empty.remove();

  template.forEach((phase, idx) => {
    const card = document.createElement('div');
    card.className = 'phase-card';
    card.innerHTML = `
      <div class="phase-header">
        <div class="phase-title">${escapeHtml(phase.phase)}</div>
        <div class="phase-duration">${escapeHtml(phase.duration)}</div>
      </div>
      <div class="phase-desc">${escapeHtml(phase.description)}</div>
      <div class="topics-list">
        ${phase.topics.map(t => `<div class="topic-item">${escapeHtml(t)}</div>`).join('')}
      </div>
      <div class="phase-actions">
        <button class="mark-btn" data-action="mark">Mark as Completed</button>
      </div>
    `;
    container.appendChild(card);

    // set animation via inline styles (initial state already defined in CSS)
    // schedule reveal with staggered delay
    const delay = MOTION.stagger * idx;
    setTimeout(() => {
      card.style.transition = `opacity ${MOTION.duration}ms ${MOTION.easing}, transform ${MOTION.duration}ms ${MOTION.easing}`;
      card.style.opacity = '1';
      card.style.transform = 'translateY(0) scale(1)';
    }, delay);
  });

  // Attach mark-as-completed handlers (delegation)
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.mark-btn');
    if (!btn) return;
    const card = btn.closest('.phase-card');
    if (!card) return;
    card.classList.toggle('completed');
    btn.textContent = card.classList.contains('completed') ? 'Completed' : 'Mark as Completed';
  });
}

// Simulated AI pipeline (structured so it can be replaced with real API)
// Example placeholder showing where OpenAI fetch could be added (commented).
/*
async function fetchRoadmapFromAPI(userQuery) {
  // AI Integration (Optional / Demo)
  // Replace with real fetch to OpenAI/GPT etc.
  // Example:
  // const resp = await fetch('https://api.openai.com/v1/…', {
  //   method: 'POST',
  //   headers: { 'Authorization': `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ prompt: `Create a learning roadmap for: ${userQuery}`, ...})
  // });
  // const data = await resp.json();
  // return parseDataToTemplate(data);
}
*/

// Simulate "thinking" animation / micro-interactions
function showLoadingState(btn) {
  const old = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Generating…';
  btn.style.transform = 'scale(0.98)';
  return () => {
    btn.disabled = false;
    btn.textContent = old;
    btn.style.transform = '';
  };
}

// Init interactions
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('srInput');
  const genBtn = document.getElementById('generateBtn');
  const dateEl = document.getElementById('currentDate');
  if (dateEl) {
    const today = new Date();
    dateEl.textContent = today.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  }

  genBtn.addEventListener('click', async () => {
    const query = (input && input.value && input.value.trim()) ? input.value.trim() : '';
    const resetLoading = showLoadingState(genBtn);

    // small artificial delay to emulate processing
    await new Promise(r => setTimeout(r, 600 + Math.random() * 500));

    // choose a template (simulated AI)
    const template = selectTemplate(query);

    // Render roadmap with motion
    renderRoadmap(template);

    resetLoading();
  });

  // Allow pressing Enter in input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      genBtn.click();
    }
  });
});
