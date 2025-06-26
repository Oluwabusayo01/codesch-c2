// ============================================
// GLOBAL VARIABLES (Demonstrating Global Scope)
// ============================================
let globalMessage = "I'm accessible everywhere!";
let clickCount = 0;
let taskIdCounter = 0;
let quoteCount = 0;

// Sample quotes array
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Life is what happens to you while you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers"
];

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to navigation tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');

    navTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all tabs and sections
            navTabs.forEach(t => t.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked tab and corresponding section
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Add Enter key functionality to task input
    document.getElementById('task-input').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

// ============================================
// FUNCTIONS SECTION
// ============================================

function demonstrateBasicFunctions() {
    const output = document.getElementById('basic-functions-output');

    // Example of simple functions
    function sayHello() {
        return "Hello from a basic function!";
    }

    function getCurrentTime() {
        return new Date().toLocaleTimeString();
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const results = [
        sayHello(),
        `Current time: ${getCurrentTime()}`,
        `Random number: ${getRandomNumber()}`,
        `Function type: ${typeof sayHello}`
    ];

    output.innerHTML = results.join('<br>');
}

function greetUser() {
    const name = document.getElementById('user-name').value || 'Anonymous';
    const timeOfDay = document.getElementById('time-of-day').value;
    const output = document.getElementById('greeting-output');

    // Function with parameters
    function createGreeting(userName, time) {
        const greetings = {
            morning: `Good morning, ${userName}! Hope you have a great day! ☀️`,
            afternoon: `Good afternoon, ${userName}! How's your day going? 🌞`,
            evening: `Good evening, ${userName}! Hope you're having a wonderful evening! 🌙`
        };
        return greetings[time];
    }

    output.innerHTML = createGreeting(name, timeOfDay);
}

function performCalculations() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const output = document.getElementById('calculation-output');

    // Functions with return values
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return b !== 0 ? a / b : 'Cannot divide by zero';
    }

    function getMax(a, b) {
        return Math.max(a, b);
    }

    const results = [
        `Addition: ${num1} + ${num2} = ${add(num1, num2)}`,
        `Multiplication: ${num1} × ${num2} = ${multiply(num1, num2)}`,
        `Division: ${num1} ÷ ${num2} = ${divide(num1, num2)}`,
        `Maximum: ${getMax(num1, num2)}`
    ];

    output.innerHTML = results.join('<br>');
}

// ============================================
// SCOPE SECTION
// ============================================

function demonstrateScope() {
    const output = document.getElementById('scope-output');
    let results = [];

    // Global variable (already declared at top)
    results.push(`Global variable: ${globalMessage}`);

    function outerFunction() {
        let outerVariable = "I'm in the outer function";
        results.push(`Outer variable: ${outerVariable}`);

        function innerFunction() {
            let innerVariable = "I'm in the inner function";
            results.push(`Inner variable: ${innerVariable}`);
            results.push(`Inner can access outer: ${outerVariable}`);
            results.push(`Inner can access global: ${globalMessage}`);
        }

        innerFunction();
        results.push(`Outer cannot access inner variable (would cause error)`);
    }

    outerFunction();
    output.innerHTML = results.join('<br>');
}

function demonstrateBlockScope() {
    const output = document.getElementById('block-scope-output');
    let results = [];

    let blockScopeDemo = "I'm outside the block";
    results.push(`Before block: ${blockScopeDemo}`);

    if (true) {
        let blockScopeDemo = "I'm inside the block"; // Different variable!
        const constantDemo = "I'm a constant in the block";
        results.push(`Inside block: ${blockScopeDemo}`);
        results.push(`Constant in block: ${constantDemo}`);
    }

    results.push(`After block: ${blockScopeDemo}`); // Original variable
    results.push(`Block-scoped variables are not accessible outside their block`);

    output.innerHTML = results.join('<br>');
}

function demonstrateScopeChain() {
    const output = document.getElementById('scope-chain-output');

    function level1() {
        let level1Var = "Level 1 variable";

        function level2() {
            let level2Var = "Level 2 variable";

            function level3() {
                let level3Var = "Level 3 variable";

                return [
                    `Level 3 can access: ${level3Var}`,
                    `Level 3 can access: ${level2Var}`,
                    `Level 3 can access: ${level1Var}`,
                    `Level 3 can access: ${globalMessage}`
                ];
            }

            return level3();
        }

        return level2();
    }

    const results = level1();
    output.innerHTML = results.join('<br>');
}

// ============================================
// DOM MANIPULATION SECTION
// ============================================

function changeContent() {
    const paragraph = document.getElementById('demo-paragraph');
    const newContent = [
        "Content has been changed using JavaScript!",
        "This demonstrates textContent manipulation.",
        "DOM manipulation is powerful! 🚀",
        "JavaScript can modify any HTML element.",
        "You can change text, HTML, styles, and more!"
    ];

    const randomContent = newContent[Math.floor(Math.random() * newContent.length)];
    paragraph.textContent = randomContent;
    paragraph.style.color = '#007bff';
    paragraph.style.fontWeight = 'bold';
}

function resetContent() {
    const paragraph = document.getElementById('demo-paragraph');
    paragraph.textContent = "This is a demo paragraph that will be modified.";
    paragraph.style.color = '';
    paragraph.style.fontWeight = '';
}

function changeBoxColor(color, text) {
    const box = document.getElementById('style-demo-box');
    box.style.backgroundColor = color;
    box.textContent = text;

    // Add a little animation effect
    box.style.transform = 'scale(0.95)';
    setTimeout(() => {
        box.style.transform = 'scale(1)';
    }, 150);
}

function toggleHighlight() {
    const text = document.getElementById('class-demo-text');

    // Create highlight class if it doesn't exist
    if (!document.querySelector('style[data-highlight]')) {
        const style = document.createElement('style');
        style.setAttribute('data-highlight', 'true');
        style.textContent = '.highlight { background-color: yellow; padding: 5px; }';
        document.head.appendChild(style);
    }

    text.classList.toggle('highlight');
}

function toggleBigText() {
    const text = document.getElementById('class-demo-text');

    if (!document.querySelector('style[data-big-text]')) {
        const style = document.createElement('style');
        style.setAttribute('data-big-text', 'true');
        style.textContent = '.big-text { font-size: 1.5rem; }';
        document.head.appendChild(style);
    }

    text.classList.toggle('big-text');
}

function toggleBold() {
    const text = document.getElementById('class-demo-text');

    if (!document.querySelector('style[data-bold]')) {
        const style = document.createElement('style');
        style.setAttribute('data-bold', 'true');
        style.textContent = '.bold-text { font-weight: bold; }';
        document.head.appendChild(style);
    }

    text.classList.toggle('bold-text');
}

function createElement() {
    const textInput = document.getElementById('new-element-text');
    const container = document.getElementById('created-elements-container');
    const text = textInput.value.trim();

    if (!text) {
        alert('Please enter some text!');
        return;
    }

    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    newParagraph.style.padding = '10px';
    newParagraph.style.margin = '5px 0';
    newParagraph.style.backgroundColor = '#e9ecef';
    newParagraph.style.borderRadius = '5px';
    newParagraph.style.borderLeft = '4px solid #007bff';

    container.appendChild(newParagraph);
    textInput.value = '';
}

function createButton() {
    const textInput = document.getElementById('new-element-text');
    const container = document.getElementById('created-elements-container');
    const text = textInput.value.trim() || 'Dynamic Button';

    const newButton = document.createElement('button');
    newButton.textContent = text;
    newButton.className = 'btn btn-info';
    newButton.style.margin = '5px';

    newButton.addEventListener('click', function () {
        alert(`You clicked: ${text}`);
    });

    container.appendChild(newButton);
    textInput.value = '';
}

function clearCreated() {
    const container = document.getElementById('created-elements-container');
    container.innerHTML = '';
}

// ============================================
// INTERACTIVE PROJECTS SECTION
// ============================================

function incrementCounter() {
    clickCount++;
    updateCounterDisplay();
    updateProgressBar();

    if (clickCount === 20) {
        setTimeout(() => {
            alert('🎉 Congratulations! You reached the goal!');
        }, 100);
    }
}

function resetCounter() {
    clickCount = 0;
    updateCounterDisplay();
    updateProgressBar();
}

function updateCounterDisplay() {
    document.getElementById('click-counter').textContent = clickCount;
}

function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    const percentage = Math.min((clickCount / 20) * 100, 100);
    progressFill.style.width = percentage + '%';
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert('Please enter a task!');
        return;
    }

    taskIdCounter++;
    const taskId = 'task-' + taskIdCounter;

    const taskElement = document.createElement('div');
    taskElement.className = 'task-item';
    taskElement.setAttribute('data-task-id', taskId);

    taskElement.innerHTML = `
                <span class="task-text" onclick="toggleTaskComplete('${taskId}')" style="cursor: pointer;">${taskText}</span>
                <button class="btn btn-danger btn-sm" onclick="deleteTask('${taskId}')">Delete</button>
            `;

    taskList.appendChild(taskElement);
    taskInput.value = '';
}

function toggleTaskComplete(taskId) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    taskElement.classList.toggle('completed');
}

function deleteTask(taskId) {
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    taskElement.remove();
}

function clearAllTasks() {
    if (confirm('Are you sure you want to delete all tasks?')) {
        document.getElementById('task-list').innerHTML = '';
    }
}

function generateQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    const quoteCounterSpan = document.getElementById('quote-counter');

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    quoteDisplay.innerHTML = `"${selectedQuote}"`;
    quoteCount++;
    quoteCounterSpan.textContent = quoteCount;

    // Add a little animation
    quoteDisplay.style.opacity = '0.3';
    setTimeout(() => {
        quoteDisplay.style.opacity = '1';
    }, 200);
}
