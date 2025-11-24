const prompts = {
    "JavaScript Basics/Q1. Type Checker.js": 
        `Write a function checkTypes(values) that takes an array of mixed values
        and returns an array of their types using typeof.

        Input:
        [1, "a", true, null, undefined]

        Output:
        ["number", "string", "boolean", "object", "undefined"]`,

    "JavaScript Basics/Q2. Template Literal Formatter.js":
        `Write a function formatUser(name, age) that returns: 
        ""User <name> is <age> years old""
        Use template literals.`,

    "JavaScript Basics/Q3. Truthy-Falsy Filter.js":
        `Write a function filterTruthy(arr) that returns only truthy values. 
        Do not use Boolean() use an if condition.`,

    "JavaScript Basics/Q4. Safe Division.js":
        `Write a function divide(a, b) that returns "Invalid" if division is not possible 
        (e.g., dividing by 0 or passing non-numbers). Use explicit type conversion for input validation.`,

    "JavaScript Basics/Q5. Variable Scope Demo.js":
        `Inside a function, declare variables using var, let and const. Log their 
        accessibility inside and outside blocks. Expected: Demonstrate block scope vs. function scope.`,

    "Control Flow & Functions/Q1. Grade Calculator.js":
        `Write getGrade(score) using if/else:
        90-100 → "A"
        80-89 → "B"
        70-79 → "C"
        60-69 → "D"
        0-59 → "F"
        Return "Invalid" for out-of-range values.`,

    "Control Flow & Functions/Q2. Day Name (Switch).js":
        `Write getDayName(num) using switch-case.
        Input: 3 → Output: "Wednesday"
        Include one intentional fall-through case.`,

    "Control Flow & Functions/Q3. Reverse Array (Using for...of).js":
        `Write reverseArray(arr) that builds a reversed array without using the built-in 
        reverse() method. Use for...of.`,

    "Control Flow & Functions/Q4. Sum All (Rest Parameters).js":
        `Write sumAll(...nums) that returns the sum of unlimited input values.`,

    "Control Flow & Functions/Q5. Counter (Closure).js":
        `Write a function createCounter() that returns:
        increment() → increments count
        get() → returns current count
        Must use closure, not global variables.`,

    "Arrays, Objects & JSON/Q1. Array Editor.js":
        `Given an array, perform these operations in order:
        push(10)
        unshift(5)
        pop()
        Splice at index 1, remove 1 item
        Return the final array.`,

    "Arrays, Objects & JSON/Q2. Deep Access.js":
        `Write getCity(user) that returns user.address.current.city. If any part is missing, return "Unknown".`,

    "Arrays, Objects & JSON/Q3. Dynamic Keys.js":
        `Write createUser(id, name, age) that returns:
        {
          user_id: id,
          user_name: name,
          user_age: age
        }
        Use computed property names.`,

    "Arrays, Objects & JSON/Q4. JSON Converter.js":
        `Write safeParse(jsonStr) that returns parsed JSON or "Invalid JSON" using try/catch.`,

    "Arrays, Objects & JSON/Q5. Shallow vs. Deep Copy.js":
        `Write code that:
        Makes a shallow copy of an object using spread
        Deep copies using JSON methods
        Modifies both copies
        Log which one affects the original.`,

    "Asynchronous JavaScript/Q1. Delayed Greeting.js":
        `Write delayedHello() that logs "Hello" after 2 seconds using setTimeout.`,

    "Asynchronous JavaScript/Q2. Interval Counter.js":
        `Write code that logs numbers 1-5 every second using setInterval. Stop automatically after reaching 5.`,

    "Asynchronous JavaScript/Q3. Promise Calculator.js":
        `Write addAsync(a, b) that returns a Promise resolving with the sum in 1 second.`,

    "Asynchronous JavaScript/Q4. Parallel Fetch.js":
        `Fetch these two URLs in parallel using Promise.all() and return a combined array:
        https://jsonplaceholder.typicode.com/users
        https://jsonplaceholder.typicode.com/posts`,

    "Asynchronous JavaScript/Q5. Async/Await Fetch.js":
        `Write getUser(id) using async/await to fetch user data.
        Wrap in try/catch. If fetch fails, return "Error".`,

    "Functional Programming/Q1. Square All.js":
        `Write squareAll(arr) using map() only.
        Input: [1, 2, 3] → Output: [1, 4, 9]`,

    "Functional Programming/Q2. Filter Adults.js":
        `Write filterAdults(users) using filter(), where age >= 18.
        Input:  \[\{name:"A", age:17\}, \{name:"B", age:20\}\
        Output: \[\{name:"B", age:20\}\]`,

    "Functional Programming/Q3. Count Words.js":
        `Given array: \["apple", "banana", "apple"\]
        Write countWords(arr) using reduce() to return:
        \{ apple: 2, banana: 1 \}`,

    "Functional Programming/Q4. Find By ID.js":
        `Write findById(arr, id) using find() only.`,

    "Functional Programming/Q5. Chained Transformation.js":
        `Given: \[1, 2, 3, 4\]
        Use map → filter → reduce to compute the sum of squares of even numbers.
        Should result in: (2² + 4²) = 20`,

    "ES6 Modules & npm/Q1. Named Export Calculator.js":
        `Create a file math.js exporting add() and sub() (named exports). Import them in main.js and use them.`,

    "ES6 Modules & npm/Q2. Default Export.js":
        `Create greet.js exporting a default function that returns "Hello &lt;name&gt;". Import it as g in main.js.`,

    "ES6 Modules & npm/Q3. Namespace Import.js":
        `Create utils.js with functions and import them using:
        import \* as utils from './utils.js'`,

    "ES6 Modules & npm/Q4. npm Script Runner.js":
        `Inside package.json, create a script:
        "start": "node index.js"
        Write index.js that prints: "App started".`,

    "ES6 Modules & npm/Q5. Using the Installed Package.js":
        `Install any npm package (like lodash). Write code using one method (e.g., _.chunk()).`,

    "Destructuring, Spread, Rest/Q1. Array Destructure.js":
        `Write a function that takes an array of 3 numbers and returns:
        First element
        Third element
        Default value = 0 if missing`,

    "Destructuring, Spread, Rest/Q2. Object Destructure & Rename.js":
        `Input: { firstName: "John", address: { city: "Kathmandu" } }
        Extract firstName as name and nested city.`,

    "Destructuring, Spread, Rest/Q3. Rest Parameters Sum.js":
        `Write sum(...nums) that returns the sum of unlimited numbers.`,

    "Destructuring, Spread, Rest/Q4. Merge Config.js":
        `Given:
        defaultConfig = { dark: false, lang: "en" }
        userConfig = { dark: true }
        Merge using spread, where user overrides default.`,

    "Destructuring, Spread, Rest/Q5. Safe Access.js":
        `Given a nested object, safely access user.profile.avatar.url using optional chaining, 
        and fall back to "No Avatar" using nullish coalescing.`,

    "Errors, Debugging & Storage/Q1. Throw Custom Error.js":
        `Write validateAge(age) that throws InvalidAgeError if age < 0.`,

    "Errors, Debugging & Storage/Q2. Async Error Handler.js":
        `Write an async function that fetches from an invalid URL, catches the error, and returns "Failed".`,

    "Errors, Debugging & Storage/Q3. Debugger Demo.js":
        `Write a function where inserting debugger helps inspect loop execution.`,

    "Errors, Debugging & Storage/Q4. Storage Setter.js":
        `Store the object {theme:"dark", logged:true} in:
        localStorage
        sessionStorage
        Convert to/from JSON properly.`,

    "Errors, Debugging & Storage/Q5. Cookie Creator.js":
        `Write code to set a cookie "token=abc123" that expires in 24 hours.`,

    "REST API/Q1. Fetch Users.js":
        `Write getUsers() that fetches users from JSONPlaceholder and returns an array of names.`,

    "REST API/Q2. Create Post.js":
        `Write createPost(title, body) using POST with fetch(). Return the created post.`,

    "REST API/Q3. Auth Fetch.js":
        `Write a fetch request that adds:
        Authorization: "Bearer 12345"
        Print the response JSON.`,

    "REST API/Q4. Parallel Fetch Merge.js":
        `Fetch /posts and /comments in parallel using Promise.all() and return:
        { posts: [...], comments: [...] }`,

    "REST API/Q5. Paginated Loader.js":
        `Fetch:
        /posts?_page=1 then /posts?_page=2
        Combine results into one array.`
};