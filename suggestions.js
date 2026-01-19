// ========================================
// SUGGESTIONS.JS - AI-Powered Roadmap Generator
// ========================================

// Update current date
function updateCurrentDate() {
    const currentDate = new Date();
    document.getElementById('currentDate').innerText = currentDate.toUTCString();
}

// Roadmap Templates
const roadmapTemplates = {
    dsa: {
        title: "Data Structures & Algorithms Mastery",
        description: "Complete roadmap to master DSA for interviews and problem-solving",
        steps: [
            { title: "Arrays & Strings Fundamentals", duration: "2 weeks", topics: ["Two-pointer technique", "Sliding window", "String manipulation"] },
            { title: "Linked Lists & Stacks", duration: "1.5 weeks", topics: ["Reverse linked list", "Detect cycles", "Stack operations"] },
            { title: "Trees & Binary Search Trees", duration: "2 weeks", topics: ["Tree traversals", "BST operations", "Balanced trees"] },
            { title: "Graphs & Advanced Algorithms", duration: "2.5 weeks", topics: ["BFS/DFS", "Shortest path", "Topological sort"] },
            { title: "Dynamic Programming", duration: "3 weeks", topics: ["Memoization", "Tabulation", "Classic DP problems"] },
            { title: "Interview Practice & Mock Tests", duration: "2 weeks", topics: ["LeetCode problems", "System design basics", "Time complexity analysis"] }
        ]
    },
    fullstack: {
        title: "Full Stack Web Development",
        description: "Complete path from frontend to backend and deployment",
        steps: [
            { title: "HTML, CSS & Responsive Design", duration: "2 weeks", topics: ["Semantic HTML", "Flexbox & Grid", "Mobile-first design"] },
            { title: "JavaScript Fundamentals", duration: "3 weeks", topics: ["ES6+ features", "Async/await", "DOM manipulation"] },
            { title: "React.js Essentials", duration: "3 weeks", topics: ["Components & Props", "Hooks", "State management"] },
            { title: "Node.js & Express Backend", duration: "2.5 weeks", topics: ["REST APIs", "Middleware", "Authentication"] },
            { title: "Database Integration", duration: "2 weeks", topics: ["MongoDB/PostgreSQL", "ORMs", "Data modeling"] },
            { title: "Deployment & DevOps Basics", duration: "1.5 weeks", topics: ["Git workflows", "Docker", "Cloud deployment"] }
        ]
    },
    default: {
        title: "General Programming Skills",
        description: "Build strong programming foundations across multiple domains",
        steps: [
            { title: "Programming Fundamentals", duration: "2 weeks", topics: ["Variables & data types", "Control flow", "Functions"] },
            { title: "Object-Oriented Programming", duration: "2.5 weeks", topics: ["Classes & objects", "Inheritance", "Polymorphism"] },
            { title: "Problem-Solving Techniques", duration: "2 weeks", topics: ["Algorithm design", "Debugging", "Code optimization"] },
            { title: "Version Control with Git", duration: "1 week", topics: ["Git basics", "Branching", "Collaboration"] },
            { title: "Best Practices & Clean Code", duration: "1.5 weeks", topics: ["Code style", "Documentation", "Testing"] },
            { title: "Build a Personal Project", duration: "3 weeks", topics: ["Project planning", "Implementation", "Portfolio presentation"] }
        ]
    }
};

// Animation configuration - Framer-like
const animationConfig = {
    duration: 600,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    staggerDelay: 120
};

// Enable/disable generate button based on selection
const goalSelect = document.getElementById('goalSelect');
const generateBtn = document.getElementById('generateBtn');

goalSelect.addEventListener('change', () => {
    generateBtn.disabled = !goalSelect.value;
    if (goalSelect.value) {
        generateBtn.style.opacity = '1';
        generateBtn.style.cursor = 'pointer';
    } else {
        generateBtn.style.opacity = '0.5';
        generateBtn.style.cursor = 'not-allowed';
    }
});

// Generate roadmap on button click
generateBtn.addEventListener('click', () => {
    const selectedGoal = goalSelect.value;
    if (selectedGoal) {
        generateRoadmap(selectedGoal);
    }
});

// Main function to generate roadmap
function generateRoadmap(goal) {
    const roadmapContainer = document.getElementById('roadmapContainer');
    
    // Simulate AI processing
    roadmapContainer.innerHTML = `
        <section class="card" style="text-align: center; padding: 3rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🤖</div>
            <h3 style="color: var(--lavender-neon); margin-bottom: 0.5rem;">AI is generating your personalized roadmap...</h3>
            <p style="color: rgba(230,246,255,0.85);">Analyzing your goals and creating the perfect learning path</p>
        </section>
    `;
    
    // Simulate AI delay (1.5 seconds)
    setTimeout(() => {
        displayRoadmap(goal);
    }, 1500);
}

// Display roadmap with animations
function displayRoadmap(goal) {
    const roadmap = roadmapTemplates[goal];
    const roadmapContainer = document.getElementById('roadmapContainer');
    
    // Create roadmap HTML
    let roadmapHTML = `
        <section class="card roadmap-header" style="opacity: 0; transform: translateY(30px);">
            <div class="card-header">
                <div>
                    <h3 class="card-title">${roadmap.title}</h3>
                    <p style="color: rgba(230,246,255,0.85); margin-top: 0.5rem;">${roadmap.description}</p>
                </div>
                <span class="card-badge">AI Generated</span>
            </div>
        </section>
    `;
    
    roadmap.steps.forEach((step, index) => {
        roadmapHTML += `
            <section class="card roadmap-step" data-step="${index}" style="opacity: 0; transform: translateY(30px); margin-top: 1.5rem;">
                <div class="card-header">
                    <h3 class="card-title">
                        <span style="color: var(--lavender-neon); margin-right: 0.5rem;">${index + 1}.</span>
                        ${step.title}
                    </h3>
                    <span class="card-badge">${step.duration}</span>
                </div>
                <div class="card-content">
                    <p style="margin-bottom: 1rem; color: rgba(230,246,255,0.9); font-weight: 500;">Key Topics:</p>
                    <ul style="list-style: none; padding: 0; margin-bottom: 1.5rem;">
                        ${step.topics.map(topic => `
                            <li style="padding: 0.5rem; margin-bottom: 0.5rem; background: rgba(58,34,93,0.36); border-left: 3px solid var(--lavender-neon); border-radius: 6px; color: rgba(230,246,255,0.9);">
                                ${topic}
                            </li>
                        `).join('')}
                    </ul>
                    <div style="display: flex; gap: 1rem;">
                        <button class="btn-start complete-btn" data-step="${index}" style="flex: 1; transform: scale(0.95);">
                            Mark as Complete ✓
                        </button>
                        <button class="btn-start" style="flex: 1; background: rgba(181,122,255,0.2); color: var(--lavender-neon); border: 1px solid var(--lavender-neon); transform: scale(0.95);">
                            Learn More →
                        </button>
                    </div>
                </div>
            </section>
        `;
    });
    
    roadmapContainer.innerHTML = roadmapHTML;
    
    // Apply Framer-like animations with stagger
    animateRoadmapElements();
    
    // Add event listeners for mark-as-complete buttons
    addCompleteButtonListeners();
}

// Animate roadmap elements with stagger
function animateRoadmapElements() {
    const elements = document.querySelectorAll('.roadmap-header, .roadmap-step');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.transition = `opacity ${animationConfig.duration}ms ${animationConfig.easing}, transform ${animationConfig.duration}ms ${animationConfig.easing}`;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
        }, index * animationConfig.staggerDelay);
    });
    
    // Animate buttons after cards
    setTimeout(() => {
        const buttons = document.querySelectorAll('.roadmap-step button');
        buttons.forEach((btn, index) => {
            setTimeout(() => {
                btn.style.transition = `transform ${animationConfig.duration}ms ${animationConfig.easing}`;
                btn.style.transform = 'scale(1)';
                
                // Add hover effects
                btn.addEventListener('mouseenter', () => {
                    btn.style.transform = 'scale(1.08)';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = 'scale(1)';
                });
                btn.addEventListener('mousedown', () => {
                    btn.style.transform = 'scale(0.95)';
                });
                btn.addEventListener('mouseup', () => {
                    btn.style.transform = 'scale(1.08)';
                });
            }, index * 30);
        });
    }, elements.length * animationConfig.staggerDelay + 200);
}

// Add event listeners for complete buttons
function addCompleteButtonListeners() {
    const completeButtons = document.querySelectorAll('.complete-btn');
    
    completeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const stepIndex = this.getAttribute('data-step');
            const stepCard = document.querySelector(`.roadmap-step[data-step="${stepIndex}"]`);
            
            // Toggle completion state
            if (this.classList.contains('completed')) {
                // Mark as incomplete
                this.classList.remove('completed');
                this.innerHTML = 'Mark as Complete ✓';
                this.style.background = 'var(--lavender-neon)';
                this.style.color = 'var(--lavender-dark)';
                stepCard.style.opacity = '1';
                stepCard.style.filter = 'none';
            } else {
                // Mark as complete
                this.classList.add('completed');
                this.innerHTML = 'Completed ✓';
                this.style.background = 'linear-gradient(90deg, #10b981, #059669)';
                this.style.color = 'white';
                
                // Visual feedback - scale animation
                stepCard.style.transition = `all ${animationConfig.duration}ms ${animationConfig.easing}`;
                stepCard.style.opacity = '0.6';
                stepCard.style.filter = 'grayscale(0.5)';
                
                // Celebration animation
                createConfetti(this);
            }
        });
    });
}

// Simple confetti effect
function createConfetti(button) {
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = centerX + 'px';
        confetti.style.top = centerY + 'px';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.background = ['#b57aff', '#d1aaff', '#10b981', '#fbbf24'][Math.floor(Math.random() * 4)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '10000';
        
        document.body.appendChild(confetti);
        
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = 100 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        confetti.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }).onfinish = () => confetti.remove();
    }
}

// ========================================
// OPTIONAL: OpenAI API Integration
// ========================================
// Uncomment and configure to use real AI-powered roadmap generation
/*
async function generateRoadmapWithAI(goal) {
    const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your API key
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    
    const prompt = `Generate a detailed learning roadmap for: ${goal}. 
    Include 5-7 steps with titles, durations (in weeks), and 3 key topics for each step.
    Return the response in JSON format matching this structure:
    {
        "title": "Roadmap Title",
        "description": "Brief description",
        "steps": [
            {
                "title": "Step Title",
                "duration": "X weeks",
                "topics": ["Topic 1", "Topic 2", "Topic 3"]
            }
        ]
    }`;
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are an expert learning path designer. Generate structured, actionable learning roadmaps.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 1000
            })
        });
        
        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        const data = await response.json();
        const roadmapData = JSON.parse(data.choices[0].message.content);
        
        // Display the AI-generated roadmap
        displayCustomRoadmap(roadmapData);
        
    } catch (error) {
        console.error('Error generating AI roadmap:', error);
        // Fallback to template-based roadmap
        displayRoadmap('default');
    }
}

function displayCustomRoadmap(roadmapData) {
    // Similar to displayRoadmap but uses custom AI-generated data
    // Implementation would be similar to displayRoadmap function
}
*/

// Initialize on page load
updateCurrentDate();
