// Your file list (same as before)
const files = [
    "JavaScript Basics/Q1. Type Checker.js",
    "JavaScript Basics/Q2. Template Literal Formatter.js",
    "JavaScript Basics/Q3. Truthy-Falsy Filter.js",
    "JavaScript Basics/Q4. Safe Division.js",
    "JavaScript Basics/Q5. Variable Scope Demo.js",

    "Control Flow & Functions/Q1. Grade Calculator.js",
    "Control Flow & Functions/Q2. Day Name (Switch).js",
    "Control Flow & Functions/Q3. Reverse Array (Using for...of).js",
    "Control Flow & Functions/Q4. Sum All (Rest Parameters).js",
    "Control Flow & Functions/Q5. Counter (Closure).js",

    "Arrays, Objects & JSON/Q1. Array Editor.js",
    "Arrays, Objects & JSON/Q2. Deep Access.js",
    "Arrays, Objects & JSON/Q3. Dynamic Keys.js",
    "Arrays, Objects & JSON/Q4. JSON Converter.js",
    "Arrays, Objects & JSON/Q5. Shallow vs Deep Copy.js",

    "Asynchronous JavaScript/Q1. Delayed Greeting.js",
    "Asynchronous JavaScript/Q2. Interval Counter.js",
    "Asynchronous JavaScript/Q3. Promise Calculator.js",
    "Asynchronous JavaScript/Q4. Parallel Fetch.js",
    "Asynchronous JavaScript/Q5. Async Await Fetch.js",

    "Functional Programming/Q1. Square All.js",
    "Functional Programming/Q2. Filter Adults.js",
    "Functional Programming/Q3. Count Words.js",
    "Functional Programming/Q4. Find By ID.js",
    "Functional Programming/Q5. Chained Transformation.js",

    "ES6 Modules & npm/Q1. Named Export Calculator.js",
    "ES6 Modules & npm/Q2. Default Export.js",
    "ES6 Modules & npm/Q3. Namespace Import.js",
    "ES6 Modules & npm/Q4. npm Script Runner.js",
    "ES6 Modules & npm/Q5. Using the Installed Package.js",

    "Destructuring, Spread, Rest/Q1. Array Destructure.js",
    "Destructuring, Spread, Rest/Q2. Object Destructure & Rename.js",
    "Destructuring, Spread, Rest/Q3. Rest Parameters Sum.js",
    "Destructuring, Spread, Rest/Q4. Merge Config.js",
    "Destructuring, Spread, Rest/Q5. Safe Access.js",

    "Errors, Debugging & Storage/Q1. Throw Custom Error.js",
    "Errors, Debugging & Storage/Q2. Async Error Handler.js",
    "Errors, Debugging & Storage/Q3. Debugger Demo.js",
    "Errors, Debugging & Storage/Q4. Storage Setter.js",
    "Errors, Debugging & Storage/Q5. Cookie Creator.js",

    "REST API/Q1. Fetch Users.js",
    "REST API/Q2. Create Post.js",
    "REST API/Q3. Auth Fetch.js",
    "REST API/Q4. Parallel Fetch Merge.js",
    "REST API/Q5. Paginated Loader.js"
];

// Fill dropdown
const selector = document.getElementById("scriptSelector");
files.forEach(f => {
    const op = document.createElement("option");
    op.value = f;
    op.textContent = f;
    selector.appendChild(op);
});

// MAIN RUNNER
function runSelected() {
    const file = selector.value;
    document.getElementById("prompt").textContent =
        prompts[file] || "(No prompt available)";

    // Load code as text
    fetch(file)
        .then(res => res.text())
        .then(code => {
            document.getElementById("code").textContent = code;
            
            if (!code.trim()) {
                document.getElementById("output").textContent = "";
                return;
            }
            // Remove old dynamic script
            document.querySelectorAll("script[data-load]").forEach(s => s.remove());

            // Load fresh script to execute run()
            const s = document.createElement("script");
            s.src = file + "?v=" + Date.now();
            s.dataset.load = "true";
            s.onload = () => {
                if (typeof run === "function") {
                    const result = run();
                    document.getElementById("output").textContent =
                        result !== undefined ? result : "(no output)";
                } else {
                    document.getElementById("output").textContent =
                        "⚠ No run() function found in this file.";
                }
            };
            document.body.appendChild(s);
        });
}
