/**
 * ============================================================================
 * QUIZMASTER — PORTFOLIO-GRADE QUIZ PLATFORM
 * Pure Vanilla JavaScript (ES6+), Zero Frameworks, 100% Offline LocalStorage
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. QUESTION BANK (112+ Curated Technical & Knowledge Questions)
     Preserves all original questions while expanding with comprehensive sets.
     ========================================================================== */
  const QUESTION_BANK = [
    // --- JAVASCRIPT (15 Questions) ---
    {
      id: 1,
      category: "JavaScript",
      difficulty: "Easy",
      question: "What will `typeof NaN` return in JavaScript?",
      options: ["'number'", "'NaN'", "'undefined'", "'object'"],
      correctAnswer: "'number'",
      explanation: "In JavaScript, NaN stands for 'Not-a-Number', but according to IEEE 754 floating-point specification and ECMAScript standards, it is technically categorized as a numeric data type."
    },
    {
      id: 2,
      category: "JavaScript",
      difficulty: "Medium",
      question: "What is a closure in JavaScript?",
      options: [
        "A function bundled with references to its surrounding lexical environment",
        "A method that terminates an asynchronous Promise",
        "A syntax error caused by unclosed parentheses",
        "A function that executes immediately upon definition"
      ],
      correctAnswer: "A function bundled with references to its surrounding lexical environment",
      explanation: "A closure gives an inner function access to an outer function's scope even after the outer function has closed or finished executing."
    },
    {
      id: 3,
      category: "JavaScript",
      difficulty: "Easy",
      question: "Which Array method creates a new array with all elements that pass a test condition?",
      options: ["filter()", "map()", "forEach()", "reduce()"],
      correctAnswer: "filter()",
      explanation: "`Array.prototype.filter()` evaluates each element through a callback predicate and returns a shallow copy containing only elements that return truthy."
    },
    {
      id: 4,
      category: "JavaScript",
      difficulty: "Medium",
      question: "What is the output of `console.log(0.1 + 0.2 === 0.3)` in JavaScript?",
      options: ["false", "true", "undefined", "TypeError"],
      correctAnswer: "false",
      explanation: "Because JavaScript uses IEEE 754 double-precision floating-point numbers, 0.1 + 0.2 evaluates to approximately 0.30000000000000004, causing strict equality with 0.3 to evaluate to false."
    },
    {
      id: 5,
      category: "JavaScript",
      difficulty: "Medium",
      question: "What does the `bind()` method on a function do?",
      options: [
        "Creates a new function bound to a specified `this` context",
        "Immediately invokes the function with given parameters",
        "Merges two separate function declarations into one",
        "Converts a synchronous function into a Promise"
      ],
      correctAnswer: "Creates a new function bound to a specified `this` context",
      explanation: "`bind()` creates a new bound function with the given `this` value and optional prepend arguments, without invoking it immediately like `call()` or `apply()`."
    },
    {
      id: 6,
      category: "JavaScript",
      difficulty: "Hard",
      question: "Which queue in the JavaScript Event Loop has the highest priority over the Callback Queue?",
      options: ["Microtask Queue (Promises, queueMicrotask)", "Macrotask Queue (setTimeout)", "Animation Frame Queue", "I/O Polling Queue"],
      correctAnswer: "Microtask Queue (Promises, queueMicrotask)",
      explanation: "The Event Loop empties the entire Microtask Queue (which processes Promise reactions and queueMicrotask) before moving on to the next macrotask in the Macrotask Queue."
    },
    {
      id: 7,
      category: "JavaScript",
      difficulty: "Easy",
      question: "What will `console.log(typeof null)` evaluate to in JavaScript?",
      options: ["'object'", "'null'", "'undefined'", "'boolean'"],
      correctAnswer: "'object'",
      explanation: "This is a historic legacy bug from JavaScript's first implementation where values had a type tag; null had a tag of 0 (same as object reference), which remains for backward compatibility."
    },
    {
      id: 8,
      category: "JavaScript",
      difficulty: "Medium",
      question: "How does variable hoisting treat `let` and `const` variables?",
      options: [
        "They are hoisted but reside in the Temporal Dead Zone until initialized",
        "They are not hoisted at all and only exist after execution",
        "They are hoisted and immediately initialized to undefined",
        "They are automatically attached to the global window object"
      ],
      correctAnswer: "They are hoisted but reside in the Temporal Dead Zone until initialized",
      explanation: "`let` and `const` are hoisted to the top of their enclosing block, but accessing them before their declaration line throws a ReferenceError due to the Temporal Dead Zone (TDZ)."
    },
    {
      id: 9,
      category: "JavaScript",
      difficulty: "Hard",
      question: "What does `Promise.allSettled()` return?",
      options: [
        "A promise that resolves when all input promises either resolve or reject",
        "A promise that rejects immediately upon the first rejected promise",
        "A promise that only resolves when all input promises successfully resolve",
        "An array of synchronous boolean flags"
      ],
      correctAnswer: "A promise that resolves when all input promises either resolve or reject",
      explanation: "`Promise.allSettled()` waits for all input promises to settle (either fulfill or reject) and returns an array of outcome objects with `{status, value}` or `{status, reason}`."
    },
    {
      id: 10,
      category: "JavaScript",
      difficulty: "Easy",
      question: "Which operator is known as the Nullish Coalescing operator in JavaScript?",
      options: ["??", "||", "&&", "?:"],
      correctAnswer: "??",
      explanation: "The nullish coalescing operator (`??`) returns its right-hand operand only when its left-hand operand is null or undefined, unlike `||` which checks for any falsy value (e.g. 0 or empty string)."
    },
    {
      id: 11,
      category: "JavaScript",
      difficulty: "Medium",
      question: "How does event delegation work in the browser DOM?",
      options: [
        "Attaching a single listener on a parent element exploiting event bubbling",
        "Attaching individual listeners to every child element concurrently",
        "Preventing child elements from propagating events upwards",
        "Using Web Workers to execute click handlers off the main thread"
      ],
      correctAnswer: "Attaching a single listener on a parent element exploiting event bubbling",
      explanation: "Event delegation takes advantage of event bubbling: events trigger on target elements and bubble up to ancestor nodes, allowing a single parent listener to handle interactions for many dynamic children."
    },
    {
      id: 12,
      category: "JavaScript",
      difficulty: "Easy",
      question: "What is the difference between `==` and `===` in JavaScript?",
      options: [
        "`==` performs type coercion before comparison; `===` checks both value and type",
        "`===` converts both operands to strings; `==` compares references",
        "`==` is deprecated in modern ES6; `===` is only for primitive objects",
        "There is no difference in modern browsers"
      ],
      correctAnswer: "`==` performs type coercion before comparison; `===` checks both value and type",
      explanation: "Double equals performs implicit type conversion according to the Abstract Equality Comparison Algorithm, while triple equals strictly compares operands without coercion."
    },
    {
      id: 13,
      category: "JavaScript",
      difficulty: "Medium",
      question: "What is the purpose of `'use strict'` at the top of a JavaScript file?",
      options: [
        "Enforces strict parsing and catches silent errors like accidental global variables",
        "Compiles JavaScript code directly to WebAssembly bytecode",
        "Disables all asynchronous Promise executions",
        "Increases browser memory allocation by 50%"
      ],
      correctAnswer: "Enforces strict parsing and catches silent errors like accidental global variables",
      explanation: "Strict mode prevents accidental globals, eliminates `with` statements, disallows duplicate parameter names, and turns silent failure errors into thrown exceptions."
    },
    {
      id: 14,
      category: "JavaScript",
      difficulty: "Hard",
      question: "What will `[1, 2, 3] + [4, 5, 6]` evaluate to in JavaScript?",
      options: ["'1,2,34,5,6'", "[1, 2, 3, 4, 5, 6]", "NaN", "TypeError"],
      correctAnswer: "'1,2,34,5,6'",
      explanation: "The addition operator triggers `toString()` on both array objects (`'1,2,3'` and `'4,5,6'`) and concatenates the resulting strings into `'1,2,34,5,6'`."
    },
    {
      id: 15,
      category: "JavaScript",
      difficulty: "Hard",
      question: "Which of the following creates a true deep copy of an object containing nested objects without methods?",
      options: ["structuredClone(obj)", "Object.assign({}, obj)", "{ ...obj }", "obj.clone()"],
      correctAnswer: "structuredClone(obj)",
      explanation: "`structuredClone()` is the modern built-in Web API that creates deep copies of structured data, handling cyclic references and nested objects, unlike the shallow copies created by spread or Object.assign."
    },

    // --- PYTHON (12 Questions) ---
    {
      id: 16,
      category: "Python",
      difficulty: "Hard",
      question: "What is the Global Interpreter Lock (GIL) in CPython?",
      options: [
        "A mutex that prevents multiple native threads from executing Python bytecodes simultaneously",
        "A security sandbox preventing Python scripts from reading disk files",
        "A compiler optimization that compiles functions into C binaries",
        "A mechanism for locking global variables across modules"
      ],
      correctAnswer: "A mutex that prevents multiple native threads from executing Python bytecodes simultaneously",
      explanation: "The GIL protects CPython's memory management and reference counts against race conditions by allowing only one native OS thread to hold the Python interpreter lock at any moment."
    },
    {
      id: 17,
      category: "Python",
      difficulty: "Easy",
      question: "What is the fundamental difference between a Python list and a tuple?",
      options: [
        "Lists are mutable; tuples are immutable",
        "Tuples can hold duplicates; lists cannot",
        "Lists are indexed by strings; tuples by integers",
        "Tuples are always ordered; lists are unordered"
      ],
      correctAnswer: "Lists are mutable; tuples are immutable",
      explanation: "Lists (`[]`) can be modified after creation (appended, modified in-place), whereas tuples (`()`) cannot have their structure or references changed once instantiated."
    },
    {
      id: 18,
      category: "Python",
      difficulty: "Medium",
      question: "What does the `@property` decorator do in Python classes?",
      options: [
        "Allows a method to be accessed like an attribute with getters and setters",
        "Converts a class method into a static utility function",
        "Makes an instance variable globally accessible across threads",
        "Serializes class attributes into JSON format"
      ],
      correctAnswer: "Allows a method to be accessed like an attribute with getters and setters",
      explanation: "`@property` enables pythonic getter, setter, and deleter encapsulation, allowing clients to access computed methods using normal attribute dot-notation syntax."
    },
    {
      id: 19,
      category: "Python",
      difficulty: "Medium",
      question: "What defines a Python generator function?",
      options: [
        "A function that produces values iteratively on demand using the `yield` keyword",
        "A function that generates random numbers based on system entropy",
        "A metaclass that creates new class definitions dynamically",
        "A function that compiles regular expressions"
      ],
      correctAnswer: "A function that produces values iteratively on demand using the `yield` keyword",
      explanation: "Generators return an iterator that produces values lazily one-by-one using `yield`, preserving function state between invocations with minimal memory footprint."
    },
    {
      id: 20,
      category: "Python",
      difficulty: "Easy",
      question: "What will `[x**2 for x in range(5) if x % 2 == 0]` evaluate to?",
      options: ["[0, 4, 16]", "[0, 1, 4, 9, 16]", "[4, 16]", "[0, 2, 4]"],
      correctAnswer: "[0, 4, 16]",
      explanation: "`range(5)` yields 0, 1, 2, 3, 4. Even numbers are 0, 2, and 4. Squaring them produces [0, 4, 16]."
    },
    {
      id: 21,
      category: "Python",
      difficulty: "Easy",
      question: "Which built-in function returns both the index and value when iterating over a sequence?",
      options: ["enumerate()", "zip()", "range()", "iter()"],
      correctAnswer: "enumerate()",
      explanation: "`enumerate(iterable)` yields tuples containing a running count/index (default starting at 0) and the corresponding value from the sequence."
    },
    {
      id: 22,
      category: "Python",
      difficulty: "Hard",
      question: "What happens when you define `def add_item(item, lst=[]):` with a mutable default argument?",
      options: [
        "The default list is created once at definition time and shared across all subsequent calls",
        "A brand new empty list is created each time the function executes",
        "Python raises a SyntaxError at function compilation",
        "The list is garbage-collected immediately after each function return"
      ],
      correctAnswer: "The default list is created once at definition time and shared across all subsequent calls",
      explanation: "Default parameter values are evaluated once when the function definition is executed, so mutable objects like lists or dicts retain modifications across subsequent invocations."
    },
    {
      id: 23,
      category: "Python",
      difficulty: "Medium",
      question: "How does Python's `is` operator differ from the `==` operator?",
      options: [
        "`is` checks object identity (same memory address); `==` checks value equality",
        "`==` compares types; `is` compares hash values",
        "`is` converts operands to floats; `==` compares strings",
        "There is no difference in Python 3"
      ],
      correctAnswer: "`is` checks object identity (same memory address); `==` checks value equality",
      explanation: "`is` checks if two variables reference the exact same object in memory (`id(a) == id(b)`), while `==` calls the `__eq__` method to verify equality of content."
    },
    {
      id: 24,
      category: "Python",
      difficulty: "Medium",
      question: "What is the average time complexity of searching for a key in a Python dictionary?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: "O(1)",
      explanation: "Python dictionaries are implemented using highly optimized hash tables, providing O(1) average-time complexity for key lookups, insertions, and deletions."
    },
    {
      id: 25,
      category: "Python",
      difficulty: "Easy",
      question: "What does the `pass` statement do in Python?",
      options: [
        "Serves as a null operation placeholder where code syntax is required",
        "Skips the rest of the current loop iteration immediately",
        "Passes the return value of a function to the parent caller",
        "Exits the entire program with status code 0"
      ],
      correctAnswer: "Serves as a null operation placeholder where code syntax is required",
      explanation: "`pass` is a statement that does nothing; it is used when a statement is required syntactically (e.g. in empty classes or function stubs) but no code should execute."
    },
    {
      id: 26,
      category: "Python",
      difficulty: "Medium",
      question: "Which special method is invoked when entering a `with` statement context manager?",
      options: ["__enter__()", "__init__()", "__open__()", "__context__()"],
      correctAnswer: "__enter__()",
      explanation: "The `with` statement calls the context manager's `__enter__()` method upon entry and guarantees calling `__exit__()` upon leaving, even if exceptions occur."
    },
    {
      id: 27,
      category: "Python",
      difficulty: "Hard",
      question: "What does the `*args` and `**kwargs` syntax in a function definition permit?",
      options: [
        "Passing variable positional arguments as a tuple and keyword arguments as a dictionary",
        "Multiplying numeric arguments automatically before execution",
        "Executing the function in multi-threaded asynchronous mode",
        "Type-hinting pointers and double pointers like in C"
      ],
      correctAnswer: "Passing variable positional arguments as a tuple and keyword arguments as a dictionary",
      explanation: "`*args` collects arbitrary additional positional arguments into a tuple, while `**kwargs` collects arbitrary keyword arguments into a dictionary."
    },

    // --- JAVA (12 Questions) ---
    {
      id: 28,
      category: "Java",
      difficulty: "Easy",
      question: "What is the primary role of the Java Virtual Machine (JVM)?",
      options: [
        "Executes compiled Java bytecode and provides cross-platform portability",
        "Compiles Java source code (.java) into machine binary code directly",
        "Designs graphical user interfaces for desktop Java apps",
        "Manages database connections for JDBC"
      ],
      correctAnswer: "Executes compiled Java bytecode and provides cross-platform portability",
      explanation: "The JVM interprets or JIT-compiles Java bytecode (.class files) into platform-specific machine code, delivering Java's 'Write Once, Run Anywhere' capability."
    },
    {
      id: 29,
      category: "Java",
      difficulty: "Medium",
      question: "Why is the String class immutable in Java?",
      options: [
        "For security, String Constant Pool caching, thread-safety, and hashcode stability",
        "Because primitive char arrays cannot be modified in Java",
        "To prevent strings from using heap memory",
        "It is a restriction imposed by the operating system"
      ],
      correctAnswer: "For security, String Constant Pool caching, thread-safety, and hashcode stability",
      explanation: "Immutability allows safe String pooling (saving heap memory), guarantees thread safety without synchronization, and prevents tampering with security credentials or network URLs."
    },
    {
      id: 30,
      category: "Java",
      difficulty: "Easy",
      question: "What is the default value of an uninitialized `boolean` instance field in Java?",
      options: ["false", "true", "null", "0"],
      correctAnswer: "false",
      explanation: "In Java, instance variables of type boolean default to `false`. Primitive numeric types default to 0, and object references default to `null`."
    },
    {
      id: 31,
      category: "Java",
      difficulty: "Medium",
      question: "How does `HashMap` resolve hash collisions in Java 8 and later?",
      options: [
        "Uses linked lists, converting to balanced Red-Black trees when bucket size exceeds 8",
        "Rehashes the entire table into a secondary array immediately",
        "Discards the older value and keeps only the new entry",
        "Throws a ConcurrentModificationException"
      ],
      correctAnswer: "Uses linked lists, converting to balanced Red-Black trees when bucket size exceeds 8",
      explanation: "When collisions in a bucket exceed TREEIFY_THRESHOLD (8 entries) and table capacity is >= 64, Java 8 converts the linked list to a Red-Black tree, improving worst-case lookup from O(n) to O(log n)."
    },
    {
      id: 32,
      category: "Java",
      difficulty: "Easy",
      question: "What is the difference between `final`, `finally`, and `finalize` in Java?",
      options: [
        "`final` is an access modifier; `finally` is a try/catch block; `finalize` is a cleanup method in Object",
        "They are interchangeable keywords used for memory cleanup",
        "`final` handles exceptions; `finally` sets constants; `finalize` creates threads",
        "`finalize` is mandatory in all classes extending Thread"
      ],
      correctAnswer: "`final` is an access modifier; `finally` is a try/catch block; `finalize` is a cleanup method in Object",
      explanation: "`final` prevents variable reassignment, method overriding, or class inheritance. `finally` executes after try/catch blocks. `finalize()` is a deprecated method formerly called by the garbage collector."
    },
    {
      id: 33,
      category: "Java",
      difficulty: "Hard",
      question: "What is the purpose of the `volatile` keyword in Java?",
      options: [
        "Ensures reads/writes happen directly in main memory, establishing visibility across threads",
        "Prevents the garbage collector from reclaiming the variable",
        "Locks the variable so only synchronized methods can modify it",
        "Allows a primitive variable to be serialized as an XML node"
      ],
      correctAnswer: "Ensures reads/writes happen directly in main memory, establishing visibility across threads",
      explanation: "`volatile` establishes a happens-before memory relationship, ensuring changes made by one thread are immediately visible to all other threads without CPU cache staleness."
    },
    {
      id: 34,
      category: "Java",
      difficulty: "Medium",
      question: "Which of the following collection classes in Java is thread-safe by default?",
      options: ["ConcurrentHashMap", "ArrayList", "HashMap", "LinkedList"],
      correctAnswer: "ConcurrentHashMap",
      explanation: "`ConcurrentHashMap` uses fine-grained bucket-level lock striping to achieve high concurrency without locking the entire map, unlike non-thread-safe HashMap."
    },
    {
      id: 35,
      category: "Java",
      difficulty: "Easy",
      question: "Can an abstract class in Java have constructors?",
      options: [
        "Yes, called by subclass constructors via `super()`",
        "No, abstract classes cannot contain constructors because they cannot be instantiated",
        "Only if all methods in the class are static",
        "Only if marked with the `final` keyword"
      ],
      correctAnswer: "Yes, called by subclass constructors via `super()`",
      explanation: "Abstract classes have constructors to initialize fields defined within the abstract class; they are invoked when a concrete subclass constructor executes `super()`."
    },
    {
      id: 36,
      category: "Java",
      difficulty: "Medium",
      question: "What is the size of the primitive data type `int` in Java?",
      options: ["32 bits (4 bytes)", "16 bits (2 bytes)", "64 bits (8 bytes)", "Platform dependent"],
      correctAnswer: "32 bits (4 bytes)",
      explanation: "In Java, primitive type sizes are strictly defined by the specification regardless of the underlying OS architecture: `int` is always 32 bits (4 bytes), signed two's complement."
    },
    {
      id: 37,
      category: "Java",
      difficulty: "Hard",
      question: "What happens if a class implements two interfaces that provide the same default method signature in Java 8?",
      options: [
        "A compiler error occurs unless the implementing class explicitly overrides the method",
        "The JVM randomly picks the method from the first listed interface",
        "The interface that was compiled more recently takes precedence",
        "Both default implementations execute sequentially"
      ],
      correctAnswer: "A compiler error occurs unless the implementing class explicitly overrides the method",
      explanation: "To resolve the multiple inheritance diamond problem, Java 8 forces the implementing class to explicitly override the conflicting default method or delegate using `InterfaceName.super.method()`."
    },
    {
      id: 38,
      category: "Java",
      difficulty: "Medium",
      question: "What is method overriding in Java?",
      options: [
        "A subclass providing a specific implementation of a method declared in its superclass",
        "Defining multiple methods with the same name but different parameter signatures in one class",
        "Changing the access modifier of a private variable",
        "Deleting a method at runtime using reflection"
      ],
      correctAnswer: "A subclass providing a specific implementation of a method declared in its superclass",
      explanation: "Method overriding is dynamic polymorphism where a subclass provides its own implementation for a non-static, non-final method already defined in its parent class."
    },
    {
      id: 39,
      category: "Java",
      difficulty: "Hard",
      question: "What is the default Garbage Collector used in modern OpenJDK (Java 17 LTS)?",
      options: ["G1 Garbage Collector (Garbage-First)", "Serial GC", "CMS (Concurrent Mark Sweep)", "Epsilon GC"],
      correctAnswer: "G1 Garbage Collector (Garbage-First)",
      explanation: "G1 GC has been the default collector since Java 9. It divides the heap into equal regions and prioritizes collecting regions with the most garbage to meet user-specified pause time targets."
    },

    // --- C & C++ (10 Questions) ---
    {
      id: 40,
      category: "C / C++",
      difficulty: "Medium",
      question: "In C, what is the key difference between `malloc()` and `calloc()`?",
      options: [
        "`calloc()` initializes allocated memory to zero; `malloc()` leaves memory uninitialized",
        "`malloc()` is used for structures; `calloc()` is only for primitive characters",
        "`calloc()` allocates memory on the stack; `malloc()` on the heap",
        "`malloc()` requires automatic garbage collection; `calloc()` does not"
      ],
      correctAnswer: "`calloc()` initializes allocated memory to zero; `malloc()` leaves memory uninitialized",
      explanation: "`malloc(size)` allocates raw bytes with indeterminate contents, whereas `calloc(num, size)` allocates contiguous memory and clears every byte to zero."
    },
    {
      id: 41,
      category: "C / C++",
      difficulty: "Easy",
      question: "What causes a Segmentation Fault (SIGSEGV) in C or C++?",
      options: [
        "Attempting to access an unauthorized or unmapped memory location (e.g. dereferencing a null/dangling pointer)",
        "Dividing an integer by a floating-point number",
        "Running out of hard drive space during compilation",
        "Using too many nested while loops"
      ],
      correctAnswer: "Attempting to access an unauthorized or unmapped memory location (e.g. dereferencing a null/dangling pointer)",
      explanation: "A segmentation fault occurs when hardware memory protection flags an illegal memory access, such as dereferencing NULL, accessing unallocated memory, or writing to read-only segments."
    },
    {
      id: 42,
      category: "C / C++",
      difficulty: "Medium",
      question: "Why should a C++ base class declare a `virtual` destructor?",
      options: [
        "To ensure the derived class destructor is called when deleting via a base pointer",
        "To make the class abstract and prevent instantiation",
        "To prevent derived classes from overriding member functions",
        "To allocate the object in read-only memory"
      ],
      correctAnswer: "To ensure the derived class destructor is called when deleting via a base pointer",
      explanation: "Deleting a polymorphic object through a pointer to base without a virtual destructor results in undefined behavior because the derived class's destructor won't be invoked, leaking resources."
    },
    {
      id: 43,
      category: "C / C++",
      difficulty: "Medium",
      question: "What does the RAII idiom stand for and promote in C++?",
      options: [
        "Resource Acquisition Is Initialization: tying resource lifecycle to object lifetime",
        "Rapid Application Interface Integration: using GUI widgets",
        "Runtime Allocation In Iteration: dynamic arrays in for-loops",
        "Recursive Algorithm Index Inheritance: OOP hierarchy design"
      ],
      correctAnswer: "Resource Acquisition Is Initialization: tying resource lifecycle to object lifetime",
      explanation: "RAII guarantees that resources (memory, file handles, mutex locks) are acquired during construction and automatically freed upon destruction when the object leaves scope."
    },
    {
      id: 44,
      category: "C / C++",
      difficulty: "Hard",
      question: "What is the difference between a pointer and a reference in C++?",
      options: [
        "A reference cannot be null, must be bound upon creation, and cannot be reseated",
        "A pointer cannot be re-assigned once initialized",
        "A reference takes up 16 bytes while a pointer takes 4 bytes",
        "Pointers can only refer to primitive numbers"
      ],
      correctAnswer: "A reference cannot be null, must be bound upon creation, and cannot be reseated",
      explanation: "References act as constant aliases for existing objects: they cannot be null (under valid code), cannot be uninitialized, and cannot be rebound to another object."
    },
    {
      id: 45,
      category: "C / C++",
      difficulty: "Easy",
      question: "What is the size of a raw pointer on a standard 64-bit operating system?",
      options: ["8 bytes (64 bits)", "4 bytes (32 bits)", "16 bytes (128 bits)", "2 bytes (16 bits)"],
      correctAnswer: "8 bytes (64 bits)",
      explanation: "On a 64-bit architecture, memory addresses are 64 bits wide, which corresponds to 8 bytes."
    },
    {
      id: 46,
      category: "C / C++",
      difficulty: "Medium",
      question: "In C, what does the `static` keyword mean when applied to a global function or variable?",
      options: [
        "Restricts internal linkage so it is only visible within that translation unit (.c file)",
        "Makes the variable thread-safe across all cores",
        "Stores the variable in hardware CPU registers",
        "Prevents the variable from ever being modified"
      ],
      correctAnswer: "Restricts internal linkage so it is only visible within that translation unit (.c file)",
      explanation: "When placed before a global variable or function, `static` limits visibility to the current translation unit, preventing external linkers from seeing or colliding with that symbol."
    },
    {
      id: 47,
      category: "C / C++",
      difficulty: "Hard",
      question: "What happens in C++ if you use `delete` instead of `delete[]` on an array allocated with `new[]`?",
      options: [
        "Undefined behavior: individual destructors may not be called and heap corruption occurs",
        "The compiler automatically corrects it to delete[]",
        "Only the first element is freed and the rest remain harmlessly in RAM",
        "A standard std::bad_alloc exception is thrown"
      ],
      correctAnswer: "Undefined behavior: individual destructors may not be called and heap corruption occurs",
      explanation: "Mismatched deallocation is undefined behavior in C++. `delete[]` reads the array overhead header to know how many element destructors to call; scalar `delete` does not."
    },
    {
      id: 48,
      category: "C / C++",
      difficulty: "Medium",
      question: "What is the amortized time complexity of `push_back()` in `std::vector`?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: "O(1)",
      explanation: "`std::vector` doubles its internal capacity when full. While the reallocation copy takes O(n), it occurs rarely enough that the average amortized cost per append is O(1)."
    },
    {
      id: 49,
      category: "C / C++",
      difficulty: "Hard",
      question: "What does the `std::move` function do in modern C++?",
      options: [
        "Casts an lvalue to an rvalue reference to enable move semantics without copying bytes",
        "Physically moves bytes across memory buffers using memcpy",
        "Spawns a background thread to process data in the background",
        "Clears an object and sets its pointer to nullptr"
      ],
      correctAnswer: "Casts an lvalue to an rvalue reference to enable move semantics without copying bytes",
      explanation: "`std::move` is an unconditional static_cast to an rvalue reference (`T&&`). It does not move any data by itself, but signals to move constructors and assignment operators that resources can be transferred."
    },

    // --- SQL & DATABASES (12 Questions) ---
    {
      id: 50,
      category: "SQL",
      difficulty: "Easy",
      question: "What is the difference between the `WHERE` and `HAVING` clauses in SQL?",
      options: [
        "`WHERE` filters individual rows before aggregation; `HAVING` filters groups after aggregation",
        "`HAVING` filters rows before joining; `WHERE` filters after sorting",
        "`HAVING` can only be used with primary keys",
        "There is no difference; they are aliases"
      ],
      correctAnswer: "`WHERE` filters individual rows before aggregation; `HAVING` filters groups after aggregation",
      explanation: "`WHERE` applies row-by-row filtering before `GROUP BY` aggregates data. `HAVING` filters aggregate metric calculations (such as `COUNT() > 5`) after grouping has occurred."
    },
    {
      id: 51,
      category: "SQL",
      difficulty: "Medium",
      question: "What are the four ACID properties in relational database transactions?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Availability, Concurrency, Integrity, Durability",
        "Accuracy, Consistency, Indexing, Distribution",
        "Atomicity, Clustering, Isolation, Decentralization"
      ],
      correctAnswer: "Atomicity, Consistency, Isolation, Durability",
      explanation: "ACID ensures reliable database transactions: all-or-nothing completion (Atomicity), preserving schema rules (Consistency), independent execution (Isolation), and committed persistence (Durability)."
    },
    {
      id: 52,
      category: "SQL",
      difficulty: "Easy",
      question: "What is the difference between a `PRIMARY KEY` and a `UNIQUE` constraint?",
      options: [
        "A table can have only one PRIMARY KEY (no NULLs allowed); it can have multiple UNIQUE constraints (allowing NULLs)",
        "UNIQUE constraints require auto-incrementing numbers; PRIMARY KEY does not",
        "PRIMARY KEY is stored on disk; UNIQUE is stored only in RAM",
        "UNIQUE keys cannot be referenced by FOREIGN KEYs"
      ],
      correctAnswer: "A table can have only one PRIMARY KEY (no NULLs allowed); it can have multiple UNIQUE constraints (allowing NULLs)",
      explanation: "A table enforces at most one PRIMARY KEY which uniquely identifies rows and forbids NULL values. UNIQUE constraints allow enforcing distinctness on other columns and allow NULL values."
    },
    {
      id: 53,
      category: "SQL",
      difficulty: "Easy",
      question: "What does an `INNER JOIN` return?",
      options: [
        "Only rows that have matching values in both joined tables",
        "All rows from the left table and matching rows from the right",
        "All rows from both tables, filling mismatches with NULL",
        "The Cartesian product of both tables"
      ],
      correctAnswer: "Only rows that have matching values in both joined tables",
      explanation: "An `INNER JOIN` evaluates the join condition and keeps only rows where a match exists in both the left and right datasets."
    },
    {
      id: 54,
      category: "SQL",
      difficulty: "Medium",
      question: "What is the primary difference between `DELETE` and `TRUNCATE` in SQL?",
      options: [
        "`DELETE` is a DML command that logs row-by-row and supports WHERE; `TRUNCATE` is DDL that deallocates data pages rapidly",
        "`TRUNCATE` deletes the table schema entirely; `DELETE` does not",
        "`DELETE` resets the IDENTITY seed; `TRUNCATE` retains the counter",
        "`DELETE` cannot be rolled back inside a transaction"
      ],
      correctAnswer: "`DELETE` is a DML command that logs row-by-row and supports WHERE; `TRUNCATE` is DDL that deallocates data pages rapidly",
      explanation: "`DELETE` removes specific rows matching a WHERE clause with individual transaction logs. `TRUNCATE` drops and re-allocates data pages, resetting identity counters and executing much faster."
    },
    {
      id: 55,
      category: "SQL",
      difficulty: "Medium",
      question: "What is the purpose of database normalization?",
      options: [
        "Minimize data redundancy and prevent insertion, update, and deletion anomalies",
        "Merge all tables into a single large denormalized view for fast querying",
        "Encrypt database tables against unauthorized access",
        "Compress SQL backups to save cloud storage costs"
      ],
      correctAnswer: "Minimize data redundancy and prevent insertion, update, and deletion anomalies",
      explanation: "Normalization organizes table structures according to formal rules (1NF, 2NF, 3NF, BCNF) to eliminate redundant data duplication and prevent inconsistency anomalies."
    },
    {
      id: 56,
      category: "SQL",
      difficulty: "Hard",
      question: "What is a major trade-off of adding multiple B-Tree indexes to a database table?",
      options: [
        "Speeds up SELECT queries but slows down INSERT, UPDATE, and DELETE operations",
        "Slows down SELECT queries while accelerating batch writes",
        "Forces the database to restart during schema changes",
        "Disables foreign key integrity checks"
      ],
      correctAnswer: "Speeds up SELECT queries but slows down INSERT, UPDATE, and DELETE operations",
      explanation: "Indexes create supplementary search trees that allow O(log n) lookups. However, every write (INSERT/UPDATE/DELETE) must also maintain and rebalance each index tree on disk."
    },
    {
      id: 57,
      category: "SQL",
      difficulty: "Medium",
      question: "Which SQL function returns the first non-null value from a provided list of arguments?",
      options: ["COALESCE()", "NULLIF()", "ISNULL()", "NVL2()"],
      correctAnswer: "COALESCE()",
      explanation: "`COALESCE(val1, val2, ...)` is an ANSI SQL standard function that evaluates expressions from left to right and returns the first non-NULL expression encountered."
    },
    {
      id: 58,
      category: "SQL",
      difficulty: "Hard",
      question: "What does the Second Normal Form (2NF) require beyond First Normal Form (1NF)?",
      options: [
        "No partial dependency: all non-key attributes must be fully functionally dependent on the entire primary key",
        "No transitive dependencies between non-prime attributes",
        "Every cell must contain an array or JSON object",
        "All tables must have at least three foreign keys"
      ],
      correctAnswer: "No partial dependency: all non-key attributes must be fully functionally dependent on the entire primary key",
      explanation: "2NF requires that a relation is in 1NF and contains no partial functional dependencies: no non-prime attribute may depend on only a part of a composite candidate key."
    },
    {
      id: 59,
      category: "SQL",
      difficulty: "Easy",
      question: "Which clause is used to sort the result-set returned by a SQL query?",
      options: ["ORDER BY", "GROUP BY", "SORT BY", "ARRANGE BY"],
      correctAnswer: "ORDER BY",
      explanation: "The `ORDER BY` clause sorts records in ascending (`ASC`, default) or descending (`DESC`) order based on one or more specified columns."
    },
    {
      id: 60,
      category: "SQL",
      difficulty: "Hard",
      question: "Which transaction isolation level prevents dirty reads, non-repeatable reads, and phantom reads?",
      options: ["Serializable", "Repeatable Read", "Read Committed", "Read Uncommitted"],
      correctAnswer: "Serializable",
      explanation: "Serializable is the highest isolation level. It emulates serial execution of concurrent transactions, completely preventing dirty reads, non-repeatable reads, and phantom reads."
    },
    {
      id: 61,
      category: "SQL",
      difficulty: "Medium",
      question: "How can SQL injection attacks be best prevented in application code?",
      options: [
        "Using parameterized queries / prepared statements",
        "Filtering out single quotes using client-side regex",
        "Encrypting the database passwords with base64",
        "Disabling all SQL queries containing the word WHERE"
      ],
      correctAnswer: "Using parameterized queries / prepared statements",
      explanation: "Prepared statements treat user input strictly as data parameters rather than executable SQL code, preventing attackers from injecting arbitrary query fragments."
    },

    // --- HTML5 & CSS3 (12 Questions) ---
    {
      id: 62,
      category: "HTML & CSS",
      difficulty: "Easy",
      question: "What is semantic HTML?",
      options: [
        "Using HTML elements that convey the meaning of the content (e.g. <header>, <article>, <nav>)",
        "Writing CSS styles directly inside HTML tags using style attributes",
        "Minifying HTML tags into single character tokens to load faster",
        "Using JavaScript frameworks to render web pages"
      ],
      correctAnswer: "Using HTML elements that convey the meaning of the content (e.g. <header>, <article>, <nav>)",
      explanation: "Semantic HTML provides contextual meaning to both browser user agents and accessibility screen readers, improving SEO and web accessibility over generic `<div>` soup."
    },
    {
      id: 63,
      category: "HTML & CSS",
      difficulty: "Easy",
      question: "From innermost to outermost, what are the layers of the CSS Box Model?",
      options: [
        "Content, Padding, Border, Margin",
        "Content, Border, Padding, Margin",
        "Margin, Border, Padding, Content",
        "Padding, Content, Border, Outline"
      ],
      correctAnswer: "Content, Padding, Border, Margin",
      explanation: "The CSS box model surrounds every element: Content area in the center, surrounded by Padding, enclosed by the Border, and separated from neighbors by Margin."
    },
    {
      id: 64,
      category: "HTML & CSS",
      difficulty: "Medium",
      question: "What effect does `box-sizing: border-box;` have on element dimensions?",
      options: [
        "Padding and border are included within the element's specified width and height",
        "Width and height apply solely to the content, pushing padding outward",
        "Borders automatically turn rounded with a 5px radius",
        "Margins collapse across adjacent block elements"
      ],
      correctAnswer: "Padding and border are included within the element's specified width and height",
      explanation: "Under `border-box`, setting `width: 300px` ensures the total visible width remains exactly 300px even when padding and borders are added."
    },
    {
      id: 65,
      category: "HTML & CSS",
      difficulty: "Medium",
      question: "What is the primary dimensional difference between CSS Flexbox and CSS Grid?",
      options: [
        "Flexbox is primarily one-dimensional (row or column); Grid is two-dimensional (rows and columns simultaneously)",
        "Flexbox is only for mobile screens; Grid is for desktop monitors",
        "Grid does not support gap properties; Flexbox does",
        "Flexbox compiles to canvas; Grid compiles to SVG"
      ],
      correctAnswer: "Flexbox is primarily one-dimensional (row or column); Grid is two-dimensional (rows and columns simultaneously)",
      explanation: "Flexbox is optimized for laying out items in a single dimension along an axis, while CSS Grid allows layout across both horizontal rows and vertical columns simultaneously."
    },
    {
      id: 66,
      category: "HTML & CSS",
      difficulty: "Medium",
      question: "Which selector has the highest CSS specificity?",
      options: ["#header-nav (ID selector)", ".nav-item (Class selector)", "nav a (Type/Element selector)", "* (Universal selector)"],
      correctAnswer: "#header-nav (ID selector)",
      explanation: "CSS specificity hierarchy: Inline styles (1000) > ID selectors (100) > Class/Attribute/Pseudo-class (10) > Elements/Pseudo-elements (1) > Universal selector (0)."
    },
    {
      id: 67,
      category: "HTML & CSS",
      difficulty: "Easy",
      question: "What is the difference between `localStorage` and `sessionStorage` in the browser?",
      options: [
        "`localStorage` persists until explicitly deleted; `sessionStorage` clears when the browser tab/session closes",
        "`sessionStorage` stores data on the remote web server; `localStorage` stores on disk",
        "`localStorage` has a 50MB limit; `sessionStorage` has a 4KB limit",
        "There is no difference in modern browsers"
      ],
      correctAnswer: "`localStorage` persists until explicitly deleted; `sessionStorage` clears when the browser tab/session closes",
      explanation: "Both provide key-value client storage with ~5MB capacity per origin, but `sessionStorage` is scoped to the current browser tab and destroyed on close, whereas `localStorage` persists across reboots."
    },
    {
      id: 68,
      category: "HTML & CSS",
      difficulty: "Medium",
      question: "What does `position: sticky;` do in CSS?",
      options: [
        "Treats the element as relative until a scroll threshold is met, then behaves like fixed positioning",
        "Pins the element permanently to the absolute center of the viewport",
        "Attaches the element to the nearest mouse cursor coordinate",
        "Prevents the element from being dragged or selected"
      ],
      correctAnswer: "Treats the element as relative until a scroll threshold is met, then behaves like fixed positioning",
      explanation: "`position: sticky` behaves as relative positioning within its parent container until its scroll offset reaches a specified threshold (e.g. `top: 0`), where it sticks like fixed positioning."
    },
    {
      id: 69,
      category: "HTML & CSS",
      difficulty: "Easy",
      question: "Which HTML attribute provides alternative text for screen readers and search engines on an `<img>` tag?",
      options: ["alt", "title", "caption", "aria-src"],
      correctAnswer: "alt",
      explanation: "The `alt` attribute provides essential textual description for assistive technologies when images fail to render or when accessed by vision-impaired users."
    },
    {
      id: 70,
      category: "HTML & CSS",
      difficulty: "Medium",
      question: "What is the difference between `display: none;` and `visibility: hidden;`?",
      options: [
        "`display: none` removes the element from document layout flow; `visibility: hidden` hides it while preserving its physical space",
        "`visibility: hidden` deletes the DOM node permanently",
        "`display: none` makes the element translucent at 50% opacity",
        "There is no visual or layout difference"
      ],
      correctAnswer: "`display: none` removes the element from document layout flow; `visibility: hidden` hides it while preserving its physical space",
      explanation: "`display: none` causes the element not to be rendered at all, taking up zero space. `visibility: hidden` makes it invisible, but its box dimensions and document layout footprint remain intact."
    },
    {
      id: 71,
      category: "HTML & CSS",
      difficulty: "Hard",
      question: "What is the purpose of the `@media (prefers-reduced-motion)` CSS query?",
      options: [
        "Respects the operating system accessibility preference to minimize animations and motion",
        "Slows down video playback speed on low battery",
        "Reduces JavaScript frame rates to 30fps to save mobile power",
        "Disables hover pseudo-classes on touchscreen devices"
      ],
      correctAnswer: "Respects the operating system accessibility preference to minimize animations and motion",
      explanation: "This media feature allows developers to suppress animations or smooth scrolling for users who experience vestibular disorders or motion sickness."
    },
    {
      id: 72,
      category: "HTML & CSS",
      difficulty: "Hard",
      question: "In CSS, what is a Stacking Context?",
      options: [
        "A 3D conceptualization of HTML elements along the z-axis that determines rendering order",
        "A queue of flexbox items stacked vertically",
        "A method of loading CSS stylesheets asynchronously",
        "A grid container with auto-flow dense enabled"
      ],
      correctAnswer: "A 3D conceptualization of HTML elements along the z-axis that determines rendering order",
      explanation: "Stacking contexts are formed by root elements, positioned elements with z-index, opacity < 1, transform, filter, etc., isolating internal z-index ordering from outside elements."
    },
    {
      id: 73,
      category: "HTML & CSS",
      difficulty: "Easy",
      question: "What does the meta viewport tag `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` ensure?",
      options: [
        "Ensures web pages render properly and adaptively across mobile device screens without desktop scaling",
        "Forces the browser to reload every 60 seconds",
        "Disables right-click inspect element on production builds",
        "Enables WebGL 3D graphics in mobile safari"
      ],
      correctAnswer: "Ensures web pages render properly and adaptively across mobile device screens without desktop scaling",
      explanation: "It sets the viewport width to match the physical device width and sets the initial zoom scale to 1.0, enabling responsive CSS media queries."
    },

    // --- DATA STRUCTURES & ALGORITHMS (15 Questions) ---
    {
      id: 74,
      category: "Data Structures & Algorithms",
      difficulty: "Medium",
      question: "What is the worst-case time complexity of QuickSort?",
      options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
      correctAnswer: "O(n²)",
      explanation: "QuickSort degrades to O(n²) when the chosen pivot is repeatedly the smallest or largest element (such as an unrandomized pivot on already sorted data)."
    },
    {
      id: 75,
      category: "Data Structures & Algorithms",
      difficulty: "Easy",
      question: "What is the average-case time complexity of searching in a balanced Binary Search Tree (AVL or Red-Black)?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      correctAnswer: "O(log n)",
      explanation: "In a balanced BST of n nodes, the tree height is bounded by O(log n), allowing each comparison to eliminate half of the remaining search space."
    },
    {
      id: 76,
      category: "Data Structures & Algorithms",
      difficulty: "Easy",
      question: "Which data structure operates on a First-In, First-Out (FIFO) principle?",
      options: ["Queue", "Stack", "Priority Queue", "Binary Heap"],
      correctAnswer: "Queue",
      explanation: "A Queue operates on FIFO: elements inserted first at the rear are the first to be removed from the front, like people waiting in a line."
    },
    {
      id: 77,
      category: "Data Structures & Algorithms",
      difficulty: "Medium",
      question: "Which data structure is typically utilized to implement Breadth-First Search (BFS) in a graph?",
      options: ["Queue", "Stack", "Binary Search Tree", "Disjoint Set (Union-Find)"],
      correctAnswer: "Queue",
      explanation: "BFS visits nodes level-by-level, utilizing a FIFO queue to process newly discovered frontier vertices in the order they were encountered."
    },
    {
      id: 78,
      category: "Data Structures & Algorithms",
      difficulty: "Medium",
      question: "What is the guaranteed worst-case time complexity of Merge Sort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      correctAnswer: "O(n log n)",
      explanation: "Merge Sort always divides arrays into halves (log n levels) and performs O(n) work merging them at each level, guaranteeing O(n log n) in all cases."
    },
    {
      id: 79,
      category: "Data Structures & Algorithms",
      difficulty: "Hard",
      question: "What algorithmic paradigm does Dijkstra's algorithm employ to calculate single-source shortest paths on non-negative weighted graphs?",
      options: ["Greedy approach using a Priority Queue / Min-Heap", "Dynamic Programming with memoization matrix", "Divide and conquer recursion", "Backtracking search"],
      correctAnswer: "Greedy approach using a Priority Queue / Min-Heap",
      explanation: "Dijkstra's algorithm greedily extracts the unvisited vertex with the minimum tentative distance using a min-heap, relaxing adjacent edges until all reachable nodes are settled."
    },
    {
      id: 80,
      category: "Data Structures & Algorithms",
      difficulty: "Easy",
      question: "What is the time complexity to access an element by index in a contiguous dynamic array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: "O(1)",
      explanation: "Contiguous arrays calculate element memory addresses directly using the formula `base_address + (index * element_size)`, allowing instantaneous O(1) random access."
    },
    {
      id: 81,
      category: "Data Structures & Algorithms",
      difficulty: "Medium",
      question: "What is a hash collision in a Hash Table?",
      options: [
        "When two distinct keys produce the exact same bucket index from the hash function",
        "When the hash table runs out of RAM memory",
        "When duplicate keys are intentionally inserted into a Set",
        "When an encryption algorithm fails to decrypt data"
      ],
      correctAnswer: "When two distinct keys produce the exact same bucket index from the hash function",
      explanation: "A collision occurs when `hash(key1) % size == hash(key2) % size` for two unequal keys, handled via techniques like separate chaining or open addressing."
    },
    {
      id: 82,
      category: "Data Structures & Algorithms",
      difficulty: "Hard",
      question: "What is the auxiliary space complexity of Merge Sort on an array of size n?",
      options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
      correctAnswer: "O(n)",
      explanation: "Standard Merge Sort requires O(n) auxiliary memory to allocate temporary subarrays during the merge phase before copying sorted elements back."
    },
    {
      id: 83,
      category: "Data Structures & Algorithms",
      difficulty: "Easy",
      question: "What is the time complexity to find the maximum element in a Max-Heap containing n elements?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctAnswer: "O(1)",
      explanation: "In a Max-Heap, the heap property guarantees that the largest element is stored at the root (index 0), permitting constant O(1) inspection."
    },
    {
      id: 84,
      category: "Data Structures & Algorithms",
      difficulty: "Medium",
      question: "Which sorting algorithm is stable and achieves O(n) best-case time complexity when the input is already sorted?",
      options: ["Insertion Sort", "QuickSort", "Selection Sort", "Heap Sort"],
      correctAnswer: "Insertion Sort",
      explanation: "Insertion Sort iterates through the array and checks if the element is already in place; on sorted data, each element requires only 1 comparison, achieving O(n) best-case."
    },
    {
      id: 85,
      category: "Data Structures & Algorithms",
      difficulty: "Hard",
      question: "What algorithmic paradigm is standard for solving the 0/1 Knapsack problem optimally?",
      options: ["Dynamic Programming", "Greedy Algorithm", "Two-pointer technique", "Sliding Window"],
      correctAnswer: "Dynamic Programming",
      explanation: "The 0/1 Knapsack problem exhibits optimal substructure and overlapping subproblems; dynamic programming constructs a memoization table `dp[i][w]` in pseudo-polynomial O(n*W) time."
    },
    {
      id: 86,
      category: "Data Structures & Algorithms",
      difficulty: "Medium",
      question: "What is the minimum number of Queues required to implement a Stack (LIFO)?",
      options: ["2", "1", "3", "4"],
      correctAnswer: "2",
      explanation: "By utilizing two queues, elements can be pushed into one and transferred to the other during pop/push operations to reverse FIFO order into LIFO."
    },
    {
      id: 87,
      category: "Data Structures & Algorithms",
      difficulty: "Hard",
      question: "What is the time complexity of the Floyd-Warshall algorithm for all-pairs shortest paths on a graph with V vertices?",
      options: ["O(V³)", "O(V² log V)", "O(V * E)", "O(E log V)"],
      correctAnswer: "O(V³)",
      explanation: "Floyd-Warshall tests whether any vertex k can serve as an intermediate step between vertices i and j, using three nested loops from 1 to V, running in O(V³) time."
    },
    {
      id: 88,
      category: "Data Structures & Algorithms",
      difficulty: "Easy",
      question: "In a Singly Linked List, what is the time complexity to insert a new node at the head (beginning)?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: "O(1)",
      explanation: "Inserting at the head merely requires pointing the new node's next pointer to the current head and updating the head reference, requiring no element shifting."
    },

    // --- COMPUTER SCIENCE & OOP (12 Questions) ---
    {
      id: 89,
      category: "Computer Science",
      difficulty: "Easy",
      question: "What does the Single Responsibility Principle (SRP) in SOLID state?",
      options: [
        "A class should have one, and only one, reason to change",
        "A function should take only one parameter",
        "A software project must only be authored by a single developer",
        "A database must only store one entity table"
      ],
      correctAnswer: "A class should have one, and only one, reason to change",
      explanation: "Robert C. Martin's SRP states that a class should encapsulate a single responsibility or business actor concern, ensuring high cohesion and low coupling."
    },
    {
      id: 90,
      category: "Computer Science",
      difficulty: "Medium",
      question: "What is the fundamental difference between an Operating System Process and a Thread?",
      options: [
        "A process has its own isolated address space; threads within a process share the same memory space",
        "Threads cannot run concurrently on multiple CPU cores",
        "Processes share global variables; threads do not",
        "Threads require separate operating system user licenses"
      ],
      correctAnswer: "A process has its own isolated address space; threads within a process share the same memory space",
      explanation: "Processes represent independent running programs with private memory, file descriptors, and security contexts. Threads represent lightweight execution streams within a process sharing heap memory."
    },
    {
      id: 91,
      category: "Computer Science",
      difficulty: "Medium",
      question: "What constitutes a Deadlock in concurrent computing?",
      options: [
        "Two or more processes are permanently blocked because each is holding a resource the other needs",
        "A computer system crashes when CPU temperature exceeds limits",
        "A network router drops packets due to buffer overflow",
        "A recursive function exhausts stack memory"
      ],
      correctAnswer: "Two or more processes are permanently blocked because each is holding a resource the other needs",
      explanation: "Deadlock occurs when four Coffman conditions hold: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait, causing threads to wait indefinitely."
    },
    {
      id: 92,
      category: "Computer Science",
      difficulty: "Easy",
      question: "What are the four foundational pillars of Object-Oriented Programming (OOP)?",
      options: [
        "Encapsulation, Abstraction, Inheritance, Polymorphism",
        "Compilation, Interpretation, Linking, Loading",
        "Selection, Iteration, Recursion, Modulation",
        "Algorithms, Structures, Complexity, Optimization"
      ],
      correctAnswer: "Encapsulation, Abstraction, Inheritance, Polymorphism",
      explanation: "OOP is built on: Encapsulation (data hiding), Abstraction (hiding implementation complexity), Inheritance (reusing hierarchies), and Polymorphism (dynamic method dispatch)."
    },
    {
      id: 93,
      category: "Computer Science",
      difficulty: "Easy",
      question: "What is the primary function of the Domain Name System (DNS)?",
      options: [
        "Translates human-readable domain names (e.g. google.com) into machine IP addresses (e.g. 142.250.190.46)",
        "Encrypts web passwords using SSL certificates",
        "Hosts HTML websites on high-speed cloud servers",
        "Compresses internet video streams"
      ],
      correctAnswer: "Translates human-readable domain names (e.g. google.com) into machine IP addresses (e.g. 142.250.190.46)",
      explanation: "DNS acts as the phonebook of the Internet, resolving domain names into numerical IP addresses required by network routers."
    },
    {
      id: 94,
      category: "Computer Science",
      difficulty: "Medium",
      question: "What is the primary difference between TCP and UDP transport protocols?",
      options: [
        "TCP is connection-oriented with guaranteed, ordered packet delivery; UDP is connectionless with low latency",
        "UDP is for secure encrypted web traffic; TCP is unencrypted",
        "TCP can only transmit text files; UDP transmits multimedia only",
        "UDP operates on the hardware layer; TCP operates in the browser"
      ],
      correctAnswer: "TCP is connection-oriented with guaranteed, ordered packet delivery; UDP is connectionless with low latency",
      explanation: "TCP uses 3-way handshakes, sequence numbers, and retransmissions for reliability. UDP transmits packets without handshakes or acknowledgments, ideal for gaming and streaming."
    },
    {
      id: 95,
      category: "Computer Science",
      difficulty: "Medium",
      question: "In SOLID design principles, what does the 'O' (Open/Closed Principle) prescribe?",
      options: [
        "Software entities should be open for extension, but closed for modification",
        "All code repositories must be published as open-source",
        "Classes must only have public methods",
        "Operating systems must allow open root access"
      ],
      correctAnswer: "Software entities should be open for extension, but closed for modification",
      explanation: "The Open/Closed Principle encourages designs where new functionality is added by subclassing or implementing interfaces, without modifying tested existing source code."
    },
    {
      id: 96,
      category: "Computer Science",
      difficulty: "Hard",
      question: "What is Virtual Memory in computer operating systems?",
      options: [
        "A memory management technique that maps virtual addresses to physical RAM and secondary disk storage",
        "RAM memory installed on an external USB flash drive",
        "Cloud storage rented from AWS or Azure",
        "A GPU memory buffer used strictly for 3D video games"
      ],
      correctAnswer: "A memory management technique that maps virtual addresses to physical RAM and secondary disk storage",
      explanation: "Virtual memory gives each process the illusion of a large contiguous address space by using page tables, translating addresses through the MMU and swapping pages to disk (paging)."
    },
    {
      id: 97,
      category: "Computer Science",
      difficulty: "Medium",
      question: "What distinguishes symmetric encryption from asymmetric encryption?",
      options: [
        "Symmetric encryption uses a single shared secret key; asymmetric uses a public/private key pair",
        "Asymmetric encryption only encrypts numbers; symmetric encrypts words",
        "Symmetric encryption is 1000x slower than asymmetric encryption",
        "Asymmetric encryption does not require mathematical algorithms"
      ],
      correctAnswer: "Symmetric encryption uses a single shared secret key; asymmetric uses a public/private key pair",
      explanation: "Symmetric ciphers (AES) use one secret key for both encryption and decryption. Asymmetric ciphers (RSA, ECC) use public keys to encrypt and distinct private keys to decrypt."
    },
    {
      id: 98,
      category: "Computer Science",
      difficulty: "Easy",
      question: "In RESTful APIs, which HTTP method is idempotent and designed to retrieve data without side effects?",
      options: ["GET", "POST", "PATCH", "CONNECT"],
      correctAnswer: "GET",
      explanation: "`GET` is safe and idempotent according to HTTP specs: multiple identical requests should produce the same result without altering resource state on the server."
    },
    {
      id: 99,
      category: "Computer Science",
      difficulty: "Medium",
      question: "What is Encapsulation in Object-Oriented Programming?",
      options: [
        "Restricting direct access to internal state and bundling data with the methods that operate on it",
        "Converting a high-level language into machine bytecode",
        "Inheriting behavior from multiple parent interfaces",
        "Wrapping an application in a Docker container"
      ],
      correctAnswer: "Restricting direct access to internal state and bundling data with the methods that operate on it",
      explanation: "Encapsulation protects an object's internal representation from external tampering by keeping fields private and exposing validated public methods/getters/setters."
    },
    {
      id: 100,
      category: "Computer Science",
      difficulty: "Hard",
      question: "What role does a Reverse Proxy (such as Nginx) serve in modern web architecture?",
      options: [
        "Sits in front of web servers, routing client requests, load balancing, terminating SSL, and caching",
        "Protects client browsers from downloading malicious JavaScript",
        "Compiles React components directly into assembly code",
        "Stores relational database tables across optical discs"
      ],
      correctAnswer: "Sits in front of web servers, routing client requests, load balancing, terminating SSL, and caching",
      explanation: "A reverse proxy intercepts inbound requests destined for backend servers, offloading TLS termination, providing DDoS filtering, caching static assets, and distributing traffic across server pools."
    },

    // --- GENERAL KNOWLEDGE & SCIENCE (12 Questions, including PRESERVED original 4) ---
    {
      id: 101, // PRESERVED ORIGINAL QUESTION 1
      category: "General Knowledge",
      difficulty: "Easy",
      question: "Which is the largest animal in the world?",
      options: ["Shark", "Blue Whale", "Elephant", "Giraffe"],
      correctAnswer: "Blue Whale",
      explanation: "The Antarctic blue whale (Balaenoptera musculus) is the largest animal on the planet, reaching weights of up to 200 tons (approximately 33 elephants) and lengths of over 100 feet."
    },
    {
      id: 102, // PRESERVED ORIGINAL QUESTION 2
      category: "General Knowledge",
      difficulty: "Easy",
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
      explanation: "Mars appears reddish in the night sky due to the abundance of iron oxide (rust) covering its rocky surface and atmospheric dust particles."
    },
    {
      id: 103, // PRESERVED ORIGINAL QUESTION 3
      category: "General Knowledge",
      difficulty: "Easy",
      question: "Who invented the incandescent light bulb?",
      options: ["Thomas Edison", "Newton", "Einstein", "Wright Brothers"],
      correctAnswer: "Thomas Edison",
      explanation: "While several inventors developed early electric lights, Thomas Edison patented the first commercially viable, long-lasting incandescent light bulb with a carbonized filament in 1879."
    },
    {
      id: 104, // PRESERVED ORIGINAL QUESTION 4
      category: "General Knowledge",
      difficulty: "Easy",
      question: "Which is the national bird of India?",
      options: ["Parrot", "Peacock", "Crow", "Sparrow"],
      correctAnswer: "Peacock",
      explanation: "The Indian Peacock (Pavo cristatus) was designated the national bird of India in 1963 because of its rich religious traditions, vibrant plumage, and widespread presence across the country."
    },
    {
      id: 105,
      category: "General Knowledge",
      difficulty: "Easy",
      question: "What is the chemical formula for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correctAnswer: "H2O",
      explanation: "Water consists of two hydrogen atoms covalently bonded to a single oxygen atom, represented by the chemical formula H2O."
    },
    {
      id: 106,
      category: "General Knowledge",
      difficulty: "Medium",
      question: "What is the speed of light in a vacuum approximately?",
      options: ["300,000 km/s", "150,000 km/s", "3,000,000 km/s", "30,000 km/s"],
      correctAnswer: "300,000 km/s",
      explanation: "The speed of light in vacuum (c) is an exact physical constant: 299,792,458 meters per second, which rounds to approximately 300,000 kilometers per second."
    },
    {
      id: 107,
      category: "General Knowledge",
      difficulty: "Medium",
      question: "Who proposed the Theory of General Relativity?",
      options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galileo Galilei"],
      correctAnswer: "Albert Einstein",
      explanation: "Albert Einstein published the general theory of relativity in 1915, describing gravity not as an invisible force but as the curvature of four-dimensional spacetime caused by mass and energy."
    },
    {
      id: 108,
      category: "General Knowledge",
      difficulty: "Easy",
      question: "Which organelle is widely referred to as the powerhouse of the eukaryotic cell?",
      options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
      correctAnswer: "Mitochondria",
      explanation: "Mitochondria generate most of the cell's chemical energy supply via cellular respiration, producing adenosine triphosphate (ATP)."
    },
    {
      id: 109,
      category: "General Knowledge",
      difficulty: "Medium",
      question: "What is the hardest naturally occurring substance known on Earth?",
      options: ["Diamond", "Titanium", "Granite", "Quartz"],
      correctAnswer: "Diamond",
      explanation: "Diamond rates 10 (the maximum) on Mohs hardness scale due to its rigid tetrahedral crystalline lattice structure formed by carbon atoms under intense heat and pressure."
    },
    {
      id: 110,
      category: "General Knowledge",
      difficulty: "Medium",
      question: "Which gas makes up the largest percentage of Earth's atmosphere?",
      options: ["Nitrogen (~78%)", "Oxygen (~21%)", "Argon (~0.9%)", "Carbon Dioxide (~0.04%)"],
      correctAnswer: "Nitrogen (~78%)",
      explanation: "Earth's dry atmosphere is approximately 78.08% nitrogen (N2), 20.95% oxygen (O2), 0.93% argon, and trace amounts of other gases including carbon dioxide."
    },
    {
      id: 111,
      category: "General Knowledge",
      difficulty: "Easy",
      question: "What is the boiling point of pure water at standard sea level atmospheric pressure?",
      options: ["100°C (212°F)", "90°C (194°F)", "110°C (230°F)", "80°C (176°F)"],
      correctAnswer: "100°C (212°F)",
      explanation: "At standard atmospheric pressure (1 atm or 101.325 kPa), pure liquid water vaporizes into steam at 100 degrees Celsius (212 degrees Fahrenheit)."
    },
    {
      id: 112,
      category: "General Knowledge",
      difficulty: "Hard",
      question: "Who is widely celebrated as the world's first computer programmer for writing an algorithm for Charles Babbage's Analytical Engine?",
      options: ["Ada Lovelace", "Alan Turing", "Grace Hopper", "Katherine Johnson"],
      correctAnswer: "Ada Lovelace",
      explanation: "In 1843, mathematician Ada Lovelace published notes on Charles Babbage's Analytical Engine including Note G: an algorithm designed to compute Bernoulli numbers, making her the world's first computer programmer."
    }
  ];

  /* ==========================================================================
     2. CATEGORY METADATA REGISTRY
     ========================================================================== */
  const CATEGORIES = [
    {
      id: "JavaScript",
      name: "JavaScript",
      domain: "programming",
      icon: "⚡",
      description: "ES6+, Event Loop, closures, asynchronous promises, prototypes, and core web runtime internals."
    },
    {
      id: "Python",
      name: "Python",
      domain: "programming",
      icon: "🐍",
      description: "GIL mechanics, list comprehensions, generators, decorators, memory model, and OOP in Python 3."
    },
    {
      id: "Java",
      name: "Java",
      domain: "programming",
      icon: "☕",
      description: "JVM bytecode, garbage collection, memory model, concurrency, HashMap internals, and OOP patterns."
    },
    {
      id: "C / C++",
      name: "C / C++",
      domain: "programming",
      icon: "⚙️",
      description: "Memory allocation, pointers, virtual destructors, RAII idioms, compilation units, and STL structures."
    },
    {
      id: "SQL",
      name: "SQL & Databases",
      domain: "cs",
      icon: "🗄️",
      description: "ACID transactions, B-Tree indexing, table joins, 2NF/3NF normalization, and query optimization."
    },
    {
      id: "HTML & CSS",
      name: "HTML5 & CSS3",
      domain: "programming",
      icon: "🎨",
      description: "Box model, Flexbox, CSS Grid, specificity hierarchies, semantic HTML, and responsive UI accessibility."
    },
    {
      id: "Data Structures & Algorithms",
      name: "Data Structures & Algo",
      domain: "cs",
      icon: "🌲",
      description: "Big-O complexities, binary search trees, graph algorithms, hash tables, stacks, and dynamic programming."
    },
    {
      id: "Computer Science",
      name: "Computer Science & OOP",
      domain: "cs",
      icon: "💻",
      description: "Operating systems, processes vs threads, deadlock, SOLID design principles, TCP/IP, and networking."
    },
    {
      id: "General Knowledge",
      name: "General Knowledge & Science",
      domain: "general",
      icon: "🌍",
      description: "Physics, astronomy, biology, history of computing, and world general knowledge."
    }
  ];

  /* ==========================================================================
     3. SOUND EFFECTS SERVICE (Pure Web Audio API Synthesizer)
     No external sound files or network requests required.
     ========================================================================== */
  const SoundService = (function () {
    let audioCtx = null;

    function getContext() {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function isSoundEnabled() {
      const settings = StorageService.getSettings();
      return settings.soundEnabled;
    }

    return {
      playSelect: function () {
        if (!isSoundEnabled()) return;
        try {
          const ctx = getContext();
          if (!ctx) return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(587.33, ctx.currentTime + 0.06);
          gain.gain.setValueAtTime(0.08, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.06);
        } catch (e) {
          // Audio synthesis fallback
        }
      },

      playCorrect: function () {
        if (!isSoundEnabled()) return;
        try {
          const ctx = getContext();
          if (!ctx) return;
          const now = ctx.currentTime;
          [523.25, 659.25, 783.99].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + i * 0.08);
            gain.gain.setValueAtTime(0.12, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.22);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.22);
          });
        } catch (e) {}
      },

      playIncorrect: function () {
        if (!isSoundEnabled()) return;
        try {
          const ctx = getContext();
          if (!ctx) return;
          const now = ctx.currentTime;
          [260, 220].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, now + i * 0.1);
            gain.gain.setValueAtTime(0.09, now + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.18);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 0.18);
          });
        } catch (e) {}
      },

      playFanfare: function () {
        if (!isSoundEnabled()) return;
        try {
          const ctx = getContext();
          if (!ctx) return;
          const now = ctx.currentTime;
          const chord = [523.25, 659.25, 783.99, 1046.50];
          chord.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.09);
            gain.gain.setValueAtTime(0.14, now + i * 0.09);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.09);
            osc.stop(now + i * 0.09 + 0.35);
          });
        } catch (e) {}
      },

      playWarning: function () {
        const settings = StorageService.getSettings();
        if (!settings.soundEnabled || !settings.timerWarning) return;
        try {
          const ctx = getContext();
          if (!ctx) return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(880, ctx.currentTime);
          gain.gain.setValueAtTime(0.08, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.1);
        } catch (e) {}
      }
    };
  })();

  /* ==========================================================================
     4. LOCALSTORAGE SERVICE (Robust persistence architecture)
     ========================================================================== */
  const StorageService = (function () {
    const KEYS = {
      STATS: "quizmaster_user_stats",
      HISTORY: "quizmaster_quiz_history",
      BOOKMARKS: "quizmaster_saved_bookmarks",
      SETTINGS: "quizmaster_user_settings",
      ACTIVE_QUIZ: "quizmaster_active_session",
      DAILY: "quizmaster_daily_status"
    };

    function safeGet(key, defaultVal) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultVal;
      } catch (e) {
        console.warn(`LocalStorage read error for ${key}:`, e);
        return defaultVal;
      }
    }

    function safeSet(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.warn(`LocalStorage write error for ${key}:`, e);
      }
    }

    return {
      getStats: function () {
        return safeGet(KEYS.STATS, {
          totalQuizzes: 0,
          totalQuestionsAnswered: 0,
          correctAnswers: 0,
          bestScorePercentage: 0,
          bestScoreRaw: "0 / 0",
          streak: 0,
          bestStreak: 0,
          lastActiveDate: null,
          categoryStats: {} // { [category]: { correct: 0, total: 0 } }
        });
      },

      saveStats: function (stats) {
        safeSet(KEYS.STATS, stats);
      },

      getHistory: function () {
        return safeGet(KEYS.HISTORY, []);
      },

      saveHistoryItem: function (item) {
        const history = this.getHistory();
        history.unshift(item); // Newest first
        safeSet(KEYS.HISTORY, history);
      },

      clearHistory: function () {
        safeSet(KEYS.HISTORY, []);
      },

      getBookmarks: function () {
        return safeGet(KEYS.BOOKMARKS, []); // array of question IDs
      },

      isBookmarked: function (qId) {
        const bms = this.getBookmarks();
        return bms.includes(qId);
      },

      toggleBookmark: function (qId) {
        let bms = this.getBookmarks();
        let wasAdded = false;
        if (bms.includes(qId)) {
          bms = bms.filter(id => id !== qId);
          wasAdded = false;
        } else {
          bms.push(qId);
          wasAdded = true;
        }
        safeSet(KEYS.BOOKMARKS, bms);
        return wasAdded;
      },

      clearBookmarks: function () {
        safeSet(KEYS.BOOKMARKS, []);
      },

      getSettings: function () {
        return safeGet(KEYS.SETTINGS, {
          theme: "dark",
          soundEnabled: true,
          timerWarning: true,
          defaultQuestionCount: 10
        });
      },

      saveSettings: function (settings) {
        safeSet(KEYS.SETTINGS, settings);
      },

      getActiveQuiz: function () {
        return safeGet(KEYS.ACTIVE_QUIZ, null);
      },

      saveActiveQuiz: function (quizState) {
        safeSet(KEYS.ACTIVE_QUIZ, quizState);
      },

      clearActiveQuiz: function () {
        try {
          localStorage.removeItem(KEYS.ACTIVE_QUIZ);
        } catch (e) {}
      },

      getDailyStatus: function () {
        const today = new Date().toISOString().split('T')[0];
        const status = safeGet(KEYS.DAILY, { date: today, completed: false });
        if (status.date !== today) {
          return { date: today, completed: false };
        }
        return status;
      },

      saveDailyCompleted: function () {
        const today = new Date().toISOString().split('T')[0];
        safeSet(KEYS.DAILY, { date: today, completed: true });
      },

      resetAllData: function () {
        try {
          Object.values(KEYS).forEach(k => localStorage.removeItem(k));
        } catch (e) {}
      }
    };
  })();

  /* ==========================================================================
     5. STREAK SYSTEM (Authentic consecutive date calculation)
     ========================================================================== */
  const StreakService = {
    updateStreakOnQuizCompleted: function () {
      const stats = StorageService.getStats();
      const today = new Date().toISOString().split('T')[0];
      const last = stats.lastActiveDate;

      if (!last) {
        stats.streak = 1;
        stats.bestStreak = Math.max(stats.bestStreak || 0, 1);
        stats.lastActiveDate = today;
      } else if (last === today) {
        // Already played today; keep current streak
      } else {
        const lastDate = new Date(last);
        const currDate = new Date(today);
        const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          // Exactly yesterday: increment streak!
          stats.streak = (stats.streak || 0) + 1;
        } else {
          // Missed a day: reset streak to 1
          stats.streak = 1;
        }
        stats.bestStreak = Math.max(stats.bestStreak || 0, stats.streak);
        stats.lastActiveDate = today;
      }

      StorageService.saveStats(stats);
      return stats.streak;
    }
  };

  /* ==========================================================================
     6. QUIZ ENGINE
     Manages active session, randomization, timer, and score calculation.
     ========================================================================== */
  const QuizEngine = (function () {
    let activeQuiz = {
      config: {
        category: "all",
        difficulty: "all",
        questionCount: 10,
        timeLimit: 300,
        isDaily: false
      },
      questions: [],
      userAnswers: {}, // { [questionIndex]: selectedAnswerString }
      currentIndex: 0,
      timeRemaining: 300,
      timerId: null,
      startTime: null,
      isFinished: false
    };

    // Shuffles an array with Fisher-Yates algorithm
    function shuffle(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    // Deterministic pseudo-random number generator for daily challenge
    function getSeededRandom(seed) {
      let x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    function shuffleWithSeed(arr, seedBase) {
      const copy = [...arr];
      let seed = seedBase;
      for (let i = copy.length - 1; i > 0; i--) {
        const rand = getSeededRandom(seed++);
        const j = Math.floor(rand * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    return {
      getState: function () {
        return activeQuiz;
      },

      initQuiz: function (config) {
        this.clearTimer();

        let pool = [...QUESTION_BANK];

        // Filter Category
        if (config.category && config.category !== "all") {
          pool = pool.filter(q => q.category.toLowerCase() === config.category.toLowerCase());
        }

        // Filter Difficulty
        if (config.difficulty && config.difficulty !== "all") {
          const matchingDiff = pool.filter(q => q.difficulty.toLowerCase() === config.difficulty.toLowerCase());
          // Graceful fallback if fewer questions than requested
          if (matchingDiff.length >= 3) {
            pool = matchingDiff;
          }
        }

        let selectedQuestions = [];

        if (config.isDaily) {
          // Deterministic seed based on date string (YYYYMMDD)
          const dateStr = new Date().toISOString().split('T')[0].replace(/-/g, '');
          const seedInt = parseInt(dateStr, 10) || 20261006;
          const shuffledPool = shuffleWithSeed(pool, seedInt);
          selectedQuestions = shuffledPool.slice(0, Math.min(10, shuffledPool.length));
        } else {
          const shuffledPool = shuffle(pool);
          selectedQuestions = shuffledPool.slice(0, Math.min(config.questionCount, shuffledPool.length));
        }

        // Shuffle options for each question while preserving correct answer
        selectedQuestions = selectedQuestions.map(q => {
          return {
            ...q,
            options: shuffle(q.options)
          };
        });

        activeQuiz = {
          config: { ...config },
          questions: selectedQuestions,
          userAnswers: {},
          currentIndex: 0,
          timeRemaining: config.timeLimit,
          timerId: null,
          startTime: Date.now(),
          isFinished: false
        };

        this.persistState();
        return activeQuiz;
      },

      resumeQuiz: function (savedState) {
        this.clearTimer();
        activeQuiz = savedState;
        return activeQuiz;
      },

      persistState: function () {
        if (!activeQuiz.isFinished && activeQuiz.questions.length > 0) {
          StorageService.saveActiveQuiz(activeQuiz);
        }
      },

      selectAnswer: function (questionIndex, answerText) {
        activeQuiz.userAnswers[questionIndex] = answerText;
        this.persistState();
      },

      nextQuestion: function () {
        if (activeQuiz.currentIndex < activeQuiz.questions.length - 1) {
          activeQuiz.currentIndex++;
          this.persistState();
          return true;
        }
        return false;
      },

      prevQuestion: function () {
        if (activeQuiz.currentIndex > 0) {
          activeQuiz.currentIndex--;
          this.persistState();
          return true;
        }
        return false;
      },

      goToQuestion: function (index) {
        if (index >= 0 && index < activeQuiz.questions.length) {
          activeQuiz.currentIndex = index;
          this.persistState();
          return true;
        }
        return false;
      },

      startTimer: function (onTick, onComplete) {
        this.clearTimer();
        if (activeQuiz.config.timeLimit <= 0) return; // No timer mode

        activeQuiz.timerId = setInterval(() => {
          activeQuiz.timeRemaining--;

          if (activeQuiz.timeRemaining <= 60 && activeQuiz.timeRemaining > 0) {
            // Optional warning audio pulse at 30s and 10s
            if (activeQuiz.timeRemaining === 30 || activeQuiz.timeRemaining === 10) {
              SoundService.playWarning();
            }
          }

          if (typeof onTick === 'function') {
            onTick(activeQuiz.timeRemaining);
          }

          if (activeQuiz.timeRemaining <= 0) {
            this.clearTimer();
            if (typeof onComplete === 'function') {
              onComplete();
            }
          }
        }, 1000);
      },

      clearTimer: function () {
        if (activeQuiz.timerId) {
          clearInterval(activeQuiz.timerId);
          activeQuiz.timerId = null;
        }
      },

      submitQuiz: function () {
        this.clearTimer();
        activeQuiz.isFinished = true;

        const total = activeQuiz.questions.length;
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        const detailedReview = activeQuiz.questions.map((q, idx) => {
          const userAns = activeQuiz.userAnswers[idx] || null;
          const isCorrect = userAns === q.correctAnswer;
          const isUnanswered = userAns === null;

          if (isUnanswered) {
            unanswered++;
          } else if (isCorrect) {
            correct++;
          } else {
            incorrect++;
          }

          return {
            id: q.id,
            category: q.category,
            difficulty: q.difficulty,
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            userAnswer: userAns,
            isCorrect: isCorrect,
            isUnanswered: isUnanswered,
            explanation: q.explanation
          };
        });

        const accuracyPct = total > 0 ? Math.round((correct / total) * 100) : 0;
        const totalDuration = activeQuiz.config.timeLimit > 0
          ? Math.max(1, activeQuiz.config.timeLimit - activeQuiz.timeRemaining)
          : Math.round((Date.now() - activeQuiz.startTime) / 1000);

        const resultData = {
          id: "attempt_" + Date.now(),
          date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
          category: activeQuiz.config.category === "all" ? "Mixed Domains" : activeQuiz.config.category,
          difficulty: activeQuiz.config.difficulty === "all" ? "Mixed" : activeQuiz.config.difficulty,
          totalQuestions: total,
          correctCount: correct,
          incorrectCount: incorrect,
          unansweredCount: unanswered,
          accuracy: accuracyPct,
          timeTakenSeconds: totalDuration,
          isDaily: activeQuiz.config.isDaily,
          review: detailedReview
        };

        // Update persistent stats
        const stats = StorageService.getStats();
        stats.totalQuizzes++;
        stats.totalQuestionsAnswered += (correct + incorrect);
        stats.correctAnswers += correct;

        if (accuracyPct > stats.bestScorePercentage) {
          stats.bestScorePercentage = accuracyPct;
          stats.bestScoreRaw = `${correct} / ${total}`;
        }

        // Category Breakdown
        detailedReview.forEach(item => {
          const cat = item.category;
          if (!stats.categoryStats[cat]) {
            stats.categoryStats[cat] = { correct: 0, total: 0 };
          }
          stats.categoryStats[cat].total++;
          if (item.isCorrect) {
            stats.categoryStats[cat].correct++;
          }
        });

        StorageService.saveStats(stats);
        StorageService.saveHistoryItem(resultData);

        // Update daily streak
        StreakService.updateStreakOnQuizCompleted();

        if (activeQuiz.config.isDaily) {
          StorageService.saveDailyCompleted();
        }

        // Clear active quiz from LocalStorage so refresh doesn't reopen finished session
        StorageService.clearActiveQuiz();

        return resultData;
      }
    };
  })();

  /* ==========================================================================
     7. UI CONTROLLER (SPA Router, View Rendering & Event Handling)
     ========================================================================== */
  const UIController = (function () {
    let currentResult = null; // Holds latest quiz result for review/retries
    let currentSetupConfig = {
      category: "all",
      difficulty: "all",
      questionCount: 10,
      timeLimit: 300,
      isDaily: false
    };

    // Helper: format seconds to MM:SS
    function formatTime(seconds) {
      if (seconds < 0) seconds = 0;
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Helper: Toast Notification
    function showToast(msg, type = "info") {
      const container = document.getElementById("toast-container");
      if (!container) return;

      const toast = document.createElement("div");
      toast.className = `toast toast-${type}`;

      let icon = "ℹ️";
      if (type === "success") icon = "✅";
      if (type === "error") icon = "❌";
      if (type === "warning") icon = "⚠️";

      toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-msg">${msg}</span>
      `;

      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        setTimeout(() => toast.remove(), 250);
      }, 3200);
    }

    // Helper: Modal Dialog
    function showConfirmModal(title, msg, onConfirm, icon = "⚠️") {
      const modal = document.getElementById("app-modal");
      if (!modal) return;

      document.getElementById("modal-icon").textContent = icon;
      document.getElementById("modal-title").textContent = title;
      document.getElementById("modal-message").textContent = msg;

      modal.classList.add("active");

      const confirmBtn = document.getElementById("modal-confirm-btn");
      const cancelBtn = document.getElementById("modal-cancel-btn");

      const cleanup = () => {
        modal.classList.remove("active");
        confirmBtn.removeEventListener("click", handleConfirm);
        cancelBtn.removeEventListener("click", handleCancel);
      };

      const handleConfirm = () => {
        cleanup();
        if (typeof onConfirm === 'function') onConfirm();
      };

      const handleCancel = () => {
        cleanup();
      };

      confirmBtn.addEventListener("click", handleConfirm);
      cancelBtn.addEventListener("click", handleCancel);
    }

    return {
      init: function () {
        this.initTheme();
        this.renderNavbarStreak();
        this.setupNavigation();
        this.setupEventListeners();
        this.renderLandingPage();
        this.renderCategoriesView();
        this.populateSetupDropdown();
        this.renderDashboard();
        this.renderLeaderboard();
        this.renderBookmarks();
        this.renderHistory();

        // Check for resumable quiz session on load
        const savedSession = StorageService.getActiveQuiz();
        if (savedSession && !savedSession.isFinished && savedSession.questions && savedSession.questions.length > 0) {
          const resumeModal = document.getElementById("resume-modal");
          if (resumeModal) {
            resumeModal.classList.add("active");

            document.getElementById("resume-confirm-btn").onclick = () => {
              resumeModal.classList.remove("active");
              QuizEngine.resumeQuiz(savedSession);
              UIController.navigateTo("quiz");
              UIController.startQuizSession(true);
              showToast("Resumed previous quiz session!", "info");
            };

            document.getElementById("resume-discard-btn").onclick = () => {
              resumeModal.classList.remove("active");
              StorageService.clearActiveQuiz();
              showToast("Previous quiz discarded.", "info");
            };
          }
        }
      },

      initTheme: function () {
        const settings = StorageService.getSettings();
        document.documentElement.setAttribute("data-theme", settings.theme || "dark");
        this.updateThemeSettingsToggle(settings.theme || "dark");
      },

      toggleTheme: function () {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        const newTheme = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);

        const settings = StorageService.getSettings();
        settings.theme = newTheme;
        StorageService.saveSettings(settings);
        this.updateThemeSettingsToggle(newTheme);
        showToast(`Switched to ${newTheme} mode`, "info");
      },

      updateThemeSettingsToggle: function (theme) {
        const control = document.getElementById("settings-theme-control");
        if (control) {
          control.querySelectorAll(".segment-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.themeVal === theme);
          });
        }
      },

      navigateTo: function (viewName) {
        document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
        const targetView = document.getElementById(`view-${viewName}`);
        if (targetView) {
          targetView.classList.add("active");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        // Update nav active state
        document.querySelectorAll(".nav-item").forEach(item => {
          item.classList.toggle("active", item.dataset.view === viewName);
        });
        document.querySelectorAll(".mobile-nav-item").forEach(item => {
          item.classList.toggle("active", item.dataset.view === viewName);
        });

        // Close mobile drawer
        const drawer = document.getElementById("mobile-drawer");
        const hamburger = document.getElementById("mobile-menu-btn");
        if (drawer && hamburger) {
          drawer.classList.remove("open");
          hamburger.classList.remove("open");
        }

        // Specific view refresh hooks
        if (viewName === "dashboard") this.renderDashboard();
        if (viewName === "bookmarks") this.renderBookmarks();
        if (viewName === "history") this.renderHistory();
        if (viewName === "leaderboard") this.renderLeaderboard();
        if (viewName === "home") this.renderLandingPage();
      },

      renderNavbarStreak: function () {
        const stats = StorageService.getStats();
        const streakEl = document.getElementById("header-streak-count");
        if (streakEl) {
          streakEl.textContent = stats.streak || 0;
        }
      },

      setupNavigation: function () {
        // Desktop nav
        document.querySelectorAll(".nav-item").forEach(btn => {
          btn.addEventListener("click", () => {
            SoundService.playSelect();
            this.navigateTo(btn.dataset.view);
          });
        });

        // Mobile nav
        document.querySelectorAll(".mobile-nav-item").forEach(btn => {
          btn.addEventListener("click", () => {
            SoundService.playSelect();
            this.navigateTo(btn.dataset.view);
          });
        });

        // Hamburger toggle
        const hamburger = document.getElementById("mobile-menu-btn");
        const drawer = document.getElementById("mobile-drawer");
        if (hamburger && drawer) {
          hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("open");
            drawer.classList.toggle("open");
          });
        }

        // Brand logo
        const brand = document.getElementById("brand-logo");
        if (brand) {
          brand.addEventListener("click", () => this.navigateTo("home"));
        }

        // Theme toggle
        const themeBtn = document.getElementById("theme-toggle-btn");
        if (themeBtn) {
          themeBtn.addEventListener("click", () => this.toggleTheme());
        }

        // Footer links
        document.querySelectorAll("[data-footer-view]").forEach(a => {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            this.navigateTo(a.dataset.footerView);
          });
        });
      },

      /* ========================================================================
         VIEW: LANDING PAGE
         ======================================================================== */
      renderLandingPage: function () {
        const stats = StorageService.getStats();
        const daily = StorageService.getDailyStatus();

        // Update Stats Overview
        const totalQEl = document.getElementById("home-stat-total-q");
        const compEl = document.getElementById("home-stat-completed");
        const bestEl = document.getElementById("home-stat-best");

        if (totalQEl) totalQEl.textContent = QUESTION_BANK.length + "+";
        if (compEl) compEl.textContent = stats.totalQuizzes;
        if (bestEl) bestEl.textContent = stats.bestScorePercentage + "%";

        // Daily Challenge Card
        const dailyStatusChip = document.getElementById("daily-status-chip");
        const dailyBtn = document.getElementById("daily-start-btn");
        const dailyDate = document.getElementById("daily-date-label");

        if (dailyDate) {
          dailyDate.textContent = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        }

        if (dailyStatusChip && dailyBtn) {
          if (daily.completed) {
            dailyStatusChip.textContent = "✅ Completed Today";
            dailyStatusChip.style.color = "var(--success)";
            dailyBtn.textContent = "Play Again (Streak Kept)";
          } else {
            dailyStatusChip.textContent = "🔥 Available Now";
            dailyStatusChip.style.color = "var(--warning)";
            dailyBtn.textContent = "Play Daily Challenge";
          }
        }

        // Featured Categories Grid (first 4)
        const grid = document.getElementById("featured-categories-grid");
        if (grid) {
          grid.innerHTML = "";
          CATEGORIES.slice(0, 4).forEach(cat => {
            const count = QUESTION_BANK.filter(q => q.category.toLowerCase() === cat.id.toLowerCase()).length;
            const card = document.createElement("div");
            card.className = "category-card";
            card.innerHTML = `
              <div class="category-card-top">
                <div class="category-icon">${cat.icon}</div>
                <span class="category-badge-count">${count} Questions</span>
              </div>
              <div class="category-card-body">
                <h3>${cat.name}</h3>
                <p>${cat.description}</p>
              </div>
              <div class="category-card-footer">
                <span class="category-diff-pill">All Difficulties</span>
                <button class="btn btn-primary btn-sm">Configure Quiz &rarr;</button>
              </div>
            `;
            card.addEventListener("click", () => {
              SoundService.playSelect();
              UIController.openSetupWithCategory(cat.id);
            });
            grid.appendChild(card);
          });
        }
      },

      /* ========================================================================
         VIEW: CATEGORIES VIEW
         ======================================================================== */
      renderCategoriesView: function (filterDomain = "all", searchQuery = "") {
        const grid = document.getElementById("all-categories-grid");
        if (!grid) return;

        let filtered = [...CATEGORIES];

        if (filterDomain !== "all") {
          filtered = filtered.filter(c => c.domain === filterDomain);
        }

        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase();
          filtered = filtered.filter(c => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
        }

        grid.innerHTML = "";

        if (filtered.length === 0) {
          grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
              <div class="empty-state-icon">🔍</div>
              <h3>No Categories Found</h3>
              <p>No quiz subject matches your current search query. Try clearing the filter.</p>
            </div>
          `;
          return;
        }

        filtered.forEach(cat => {
          const count = QUESTION_BANK.filter(q => q.category.toLowerCase() === cat.id.toLowerCase()).length;
          const card = document.createElement("div");
          card.className = "category-card";
          card.innerHTML = `
            <div class="category-card-top">
              <div class="category-icon">${cat.icon}</div>
              <span class="category-badge-count">${count} Questions</span>
            </div>
            <div class="category-card-body">
              <h3>${cat.name}</h3>
              <p>${cat.description}</p>
            </div>
            <div class="category-card-footer">
              <span class="category-diff-pill">Easy • Medium • Hard</span>
              <button class="btn btn-secondary btn-sm">Configure &rarr;</button>
            </div>
          `;
          card.addEventListener("click", () => {
            SoundService.playSelect();
            UIController.openSetupWithCategory(cat.id);
          });
          grid.appendChild(card);
        });
      },

      /* ========================================================================
         VIEW: QUIZ SETUP
         ======================================================================== */
      populateSetupDropdown: function () {
        const select = document.getElementById("setup-category-select");
        if (!select) return;

        select.innerHTML = '<option value="all">🌟 All Categories (Mixed Challenge)</option>';
        CATEGORIES.forEach(cat => {
          const opt = document.createElement("option");
          opt.value = cat.id;
          opt.textContent = `${cat.icon} ${cat.name}`;
          select.appendChild(opt);
        });
      },

      openSetupWithCategory: function (catId) {
        currentSetupConfig.category = catId;
        const select = document.getElementById("setup-category-select");
        if (select) select.value = catId;
        this.updateSetupSummary();
        this.navigateTo("setup");
      },

      updateSetupSummary: function () {
        const catSelect = document.getElementById("setup-category-select");
        const categoryVal = catSelect ? catSelect.value : currentSetupConfig.category;

        const catObj = CATEGORIES.find(c => c.id.toLowerCase() === categoryVal.toLowerCase());
        const catName = catObj ? `${catObj.icon} ${catObj.name}` : "🌟 All Categories (Mixed)";

        document.getElementById("summary-category-val").textContent = catName;
        document.getElementById("summary-diff-val").textContent = currentSetupConfig.difficulty === "all" ? "Mixed" : currentSetupConfig.difficulty;
        document.getElementById("summary-count-val").textContent = currentSetupConfig.questionCount;

        const timeLabels = { 0: "No Timer", 120: "2 Minutes", 300: "5 Minutes", 600: "10 Minutes" };
        document.getElementById("summary-timer-val").textContent = timeLabels[currentSetupConfig.timeLimit] || "5 Minutes";

        // Count available questions in pool
        let pool = QUESTION_BANK;
        if (categoryVal !== "all") {
          pool = pool.filter(q => q.category.toLowerCase() === categoryVal.toLowerCase());
        }
        if (currentSetupConfig.difficulty !== "all") {
          pool = pool.filter(q => q.difficulty.toLowerCase() === currentSetupConfig.difficulty.toLowerCase());
        }
        document.getElementById("available-questions-hint").textContent = `Available: ${pool.length} questions in this pool`;
      },

      /* ========================================================================
         VIEW: ACTIVE QUIZ
         ======================================================================== */
      startQuizSession: function (isResumed = false) {
        if (!isResumed) {
          QuizEngine.initQuiz(currentSetupConfig);
        }

        const state = QuizEngine.getState();
        if (state.questions.length === 0) {
          showToast("No questions available for this combination. Please adjust parameters.", "error");
          return;
        }

        this.renderCurrentQuestion();
        this.renderQuestionNavigator();

        // Start timer
        QuizEngine.startTimer(
          (secondsLeft) => {
            const timerBox = document.getElementById("quiz-timer-box");
            const timerText = document.getElementById("quiz-timer-text");
            if (timerText) timerText.textContent = formatTime(secondsLeft);
            if (timerBox) {
              timerBox.classList.toggle("warning", secondsLeft <= 60);
            }
          },
          () => {
            showToast("Time's up! Submitting quiz automatically...", "warning");
            UIController.submitActiveQuiz();
          }
        );
      },

      renderCurrentQuestion: function () {
        const state = QuizEngine.getState();
        const currentQ = state.questions[state.currentIndex];
        if (!currentQ) return;

        // Meta tags
        document.getElementById("quiz-badge-category").textContent = currentQ.category;
        document.getElementById("quiz-badge-diff").textContent = currentQ.difficulty;

        // Progress text and bar
        const total = state.questions.length;
        const currentNum = state.currentIndex + 1;
        const pct = Math.round((currentNum / total) * 100);

        document.getElementById("quiz-progress-text").textContent = `Question ${currentNum} of ${total}`;
        document.getElementById("quiz-progress-pct").textContent = `${pct}% Progress`;
        document.getElementById("quiz-progress-bar").style.width = `${pct}%`;

        // Answered counter
        const answeredCount = Object.keys(state.userAnswers).length;
        document.getElementById("quiz-answered-count-indicator").textContent = `${answeredCount} of ${total} Answered`;

        // Question Title
        const titleEl = document.getElementById("quiz-question-title");
        titleEl.textContent = `${currentNum}. ${currentQ.question}`;

        // Options Container
        const container = document.getElementById("quiz-options-container");
        container.innerHTML = "";

        const letters = ["A", "B", "C", "D"];
        const selectedAnswer = state.userAnswers[state.currentIndex];

        currentQ.options.forEach((optText, i) => {
          const btn = document.createElement("button");
          btn.className = `option-btn ${selectedAnswer === optText ? 'selected' : ''}`;
          btn.setAttribute("role", "radio");
          btn.setAttribute("aria-checked", selectedAnswer === optText ? "true" : "false");
          btn.innerHTML = `
            <span class="option-badge">${letters[i]}</span>
            <span class="option-text">${optText}</span>
          `;

          btn.addEventListener("click", () => {
            SoundService.playSelect();
            QuizEngine.selectAnswer(state.currentIndex, optText);
            this.renderCurrentQuestion();
            this.renderQuestionNavigator();
          });

          container.appendChild(btn);
        });

        // Prev / Next button states
        const prevBtn = document.getElementById("quiz-prev-btn");
        const nextBtn = document.getElementById("quiz-next-btn");
        if (prevBtn) prevBtn.disabled = state.currentIndex === 0;
        if (nextBtn) {
          nextBtn.textContent = state.currentIndex === total - 1 ? "Finish & Review 🏁" : "Next →";
        }

        // Bookmark button state
        const bmBtn = document.getElementById("quiz-bookmark-btn");
        const bmIcon = document.getElementById("quiz-bm-icon");
        const bmText = document.getElementById("quiz-bm-text");
        const isBm = StorageService.isBookmarked(currentQ.id);

        if (bmBtn && bmIcon && bmText) {
          bmBtn.classList.toggle("active", isBm);
          bmIcon.textContent = isBm ? "★" : "🔖";
          bmText.textContent = isBm ? "Saved" : "Bookmark";
        }
      },

      renderQuestionNavigator: function () {
        const state = QuizEngine.getState();
        const grid = document.getElementById("quiz-navigator-grid");
        if (!grid) return;

        grid.innerHTML = "";

        state.questions.forEach((q, idx) => {
          const btn = document.createElement("button");
          btn.className = "nav-grid-btn";
          btn.textContent = idx + 1;
          btn.setAttribute("aria-label", `Jump to question ${idx + 1}`);

          if (idx === state.currentIndex) {
            btn.classList.add("current");
          } else if (state.userAnswers[idx] !== undefined) {
            btn.classList.add("answered");
          } else {
            btn.classList.add("unanswered");
          }

          if (StorageService.isBookmarked(q.id)) {
            btn.classList.add("bookmarked");
          }

          btn.addEventListener("click", () => {
            SoundService.playSelect();
            QuizEngine.goToQuestion(idx);
            this.renderCurrentQuestion();
            this.renderQuestionNavigator();
          });

          grid.appendChild(btn);
        });
      },

      submitActiveQuiz: function () {
        const state = QuizEngine.getState();
        const total = state.questions.length;
        const answered = Object.keys(state.userAnswers).length;
        const unanswered = total - answered;

        const performSubmit = () => {
          const results = QuizEngine.submitQuiz();
          currentResult = results;
          SoundService.playFanfare();
          this.renderResults(results);
          this.navigateTo("results");
          this.renderNavbarStreak();
          showToast("Quiz submitted successfully!", "success");
        };

        if (unanswered > 0 && state.timeRemaining > 0) {
          showConfirmModal(
            "Submit Quiz?",
            `You still have ${unanswered} unanswered question${unanswered > 1 ? 's' : ''}. Are you sure you want to finalize your score?`,
            performSubmit,
            "❓"
          );
        } else {
          performSubmit();
        }
      },

      /* ========================================================================
         VIEW: RESULTS VIEW
         ======================================================================== */
      renderResults: function (res) {
        if (!res) return;

        // Circular Progress Ring (circumference = 2 * PI * 70 = ~440)
        const circumference = 440;
        const offset = circumference - (res.accuracy / 100) * circumference;
        const circleFill = document.getElementById("results-radial-fill");
        if (circleFill) {
          circleFill.style.strokeDashoffset = offset;
        }

        document.getElementById("results-percentage").textContent = `${res.accuracy}%`;
        document.getElementById("results-score-fraction").textContent = `${res.correctCount} / ${res.totalQuestions}`;

        // Feedback Text
        let headline = "Outstanding Achievement!";
        let feedback = "You demonstrated extraordinary technical mastery. Keep up the brilliant pace!";
        let trophy = "🏆";

        if (res.accuracy >= 90) {
          headline = "Outstanding! You're a Quiz Master! 🌟";
          feedback = "Virtually flawless performance across technical concepts and problem-solving.";
          trophy = "🏆";
        } else if (res.accuracy >= 75) {
          headline = "Great Job! Keep Pushing! 🎯";
          feedback = "Solid demonstration of competency. Inspect your review questions to seal the gaps.";
          trophy = "🥈";
        } else if (res.accuracy >= 50) {
          headline = "Good Attempt! Practice Makes Perfect. 💡";
          feedback = "You have a respectable baseline. Dedicating a few minutes to explanations will skyrocket your results.";
          trophy = "🥉";
        } else {
          headline = "Keep Practicing. You'll Improve! 📚";
          feedback = "Every mistake is a learning blueprint. Review the in-depth rationale below and retry!";
          trophy = "💪";
        }

        document.getElementById("results-headline").textContent = headline;
        document.getElementById("results-feedback-text").textContent = feedback;
        document.getElementById("results-trophy-wrap").textContent = trophy;

        // Metrics Grid
        document.getElementById("results-correct-count").textContent = res.correctCount;
        document.getElementById("results-incorrect-count").textContent = res.incorrectCount;
        document.getElementById("results-unanswered-count").textContent = res.unansweredCount;
        document.getElementById("results-time-taken").textContent = formatTime(res.timeTakenSeconds);
      },

      /* ========================================================================
         VIEW: DETAILED REVIEW
         ======================================================================== */
      renderReview: function (filter = "all") {
        if (!currentResult || !currentResult.review) return;

        const rev = currentResult.review;
        document.getElementById("rev-count-all").textContent = rev.length;
        document.getElementById("rev-count-correct").textContent = rev.filter(q => q.isCorrect).length;
        document.getElementById("rev-count-incorrect").textContent = rev.filter(q => !q.isCorrect && !q.isUnanswered).length;
        document.getElementById("rev-count-unanswered").textContent = rev.filter(q => q.isUnanswered).length;

        let filtered = rev;
        if (filter === "correct") filtered = rev.filter(q => q.isCorrect);
        if (filter === "incorrect") filtered = rev.filter(q => !q.isCorrect && !q.isUnanswered);
        if (filter === "unanswered") filtered = rev.filter(q => q.isUnanswered);

        const list = document.getElementById("review-questions-list");
        list.innerHTML = "";

        filtered.forEach((item, idx) => {
          const card = document.createElement("div");
          let cardTypeClass = "correct-card";
          let statusPill = '<span class="status-pill correct">✅ Correct</span>';

          if (item.isUnanswered) {
            cardTypeClass = "unanswered-card";
            statusPill = '<span class="status-pill unanswered">⏭ Unanswered</span>';
          } else if (!item.isCorrect) {
            cardTypeClass = "incorrect-card";
            statusPill = '<span class="status-pill incorrect">❌ Incorrect</span>';
          }

          card.className = `review-card ${cardTypeClass}`;

          const isBm = StorageService.isBookmarked(item.id);

          card.innerHTML = `
            <div class="review-card-header">
              <div class="review-badges-row">
                <span class="badge badge-category">${item.category}</span>
                <span class="badge badge-difficulty">${item.difficulty}</span>
                ${statusPill}
              </div>
              <button class="icon-btn-text ${isBm ? 'active' : ''}" data-bm-id="${item.id}">
                <span>${isBm ? '★' : '🔖'}</span>
                <span>${isBm ? 'Saved' : 'Save'}</span>
              </button>
            </div>
            <h3 class="review-question-text">${item.question}</h3>
            <div class="review-answers-grid">
              ${item.options.map(opt => {
                let optClass = "";
                let indicator = "";
                if (opt === item.correctAnswer) {
                  optClass = "correct-choice";
                  indicator = "✅ Correct Answer: ";
                } else if (opt === item.userAnswer && !item.isCorrect) {
                  optClass = "user-selected-wrong";
                  indicator = "❌ Your Answer: ";
                }
                return `
                  <div class="review-answer-item ${optClass}">
                    <span>${indicator}${opt}</span>
                  </div>
                `;
              }).join("")}
            </div>
            <div class="explanation-box">
              <div class="explanation-header">💡 Comprehensive Explanation:</div>
              <div class="explanation-body">${item.explanation}</div>
            </div>
          `;

          // Bookmark handler
          const bmBtn = card.querySelector(`[data-bm-id="${item.id}"]`);
          if (bmBtn) {
            bmBtn.addEventListener("click", () => {
              const added = StorageService.toggleBookmark(item.id);
              SoundService.playSelect();
              showToast(added ? "Question saved to bookmarks!" : "Bookmark removed.", "info");
              this.renderReview(filter);
            });
          }

          list.appendChild(card);
        });
      },

      /* ========================================================================
         VIEW: USER DASHBOARD
         ======================================================================== */
      renderDashboard: function () {
        const stats = StorageService.getStats();
        const history = StorageService.getHistory();

        // Metrics
        document.getElementById("dash-stat-quizzes").textContent = stats.totalQuizzes;
        document.getElementById("dash-stat-questions").textContent = stats.totalQuestionsAnswered;
        const avgAcc = stats.totalQuestionsAnswered > 0
          ? Math.round((stats.correctAnswers / stats.totalQuestionsAnswered) * 100)
          : 0;
        document.getElementById("dash-stat-accuracy").textContent = `${avgAcc}%`;
        document.getElementById("dash-stat-best").textContent = `${stats.bestScorePercentage}%`;
        document.getElementById("dash-stat-streak").textContent = `${stats.streak} Days`;
        document.getElementById("dash-stat-best-streak").textContent = stats.bestStreak || stats.streak;

        // Category Mastery Breakdown
        const barsContainer = document.getElementById("dash-category-bars");
        if (barsContainer) {
          barsContainer.innerHTML = "";
          CATEGORIES.forEach(cat => {
            const catStat = stats.categoryStats[cat.id] || { correct: 0, total: 0 };
            const pct = catStat.total > 0 ? Math.round((catStat.correct / catStat.total) * 100) : 0;

            const item = document.createElement("div");
            item.className = "cat-bar-item";
            item.innerHTML = `
              <div class="cat-bar-meta">
                <span class="cat-bar-name">${cat.icon} ${cat.name} (${catStat.correct}/${catStat.total})</span>
                <span class="cat-bar-pct">${pct}%</span>
              </div>
              <div class="cat-bar-track">
                <div class="cat-bar-fill" style="width: ${pct}%;"></div>
              </div>
            `;
            barsContainer.appendChild(item);
          });
        }

        // Recent Attempts (last 5)
        const recentList = document.getElementById("dash-recent-attempts");
        if (recentList) {
          recentList.innerHTML = "";
          if (history.length === 0) {
            recentList.innerHTML = `
              <div class="empty-state" style="padding: 30px 10px;">
                <p>No attempts recorded yet. Finish a quiz to see your analytics take shape!</p>
              </div>
            `;
          } else {
            history.slice(0, 5).forEach(att => {
              const row = document.createElement("div");
              row.className = "attempt-item";
              row.innerHTML = `
                <div class="attempt-left">
                  <h4>${att.category} • ${att.difficulty}</h4>
                  <span class="attempt-meta">${att.date} • ${formatTime(att.timeTakenSeconds)}</span>
                </div>
                <div class="attempt-right">
                  <span class="attempt-score">${att.correctCount}/${att.totalQuestions} (${att.accuracy}%)</span>
                  <button class="btn btn-secondary btn-sm" data-attempt-id="${att.id}">Review</button>
                </div>
              `;

              row.querySelector("button").addEventListener("click", () => {
                currentResult = att;
                UIController.renderReview();
                UIController.navigateTo("review");
              });

              recentList.appendChild(row);
            });
          }
        }
      },

      /* ========================================================================
         VIEW: LEADERBOARD
         ======================================================================== */
      renderLeaderboard: function () {
        const stats = StorageService.getStats();
        const tbody = document.getElementById("leaderboard-tbody");
        if (!tbody) return;

        // Baseline simulated contenders to contextualize player's rank
        const simulatedPlayers = [
          { name: "DevMaster_99", avatar: "🚀", accuracy: 96, quizzes: 34, streak: 12, isUser: false },
          { name: "AlgoWizard", avatar: "🧙‍♂️", accuracy: 92, quizzes: 28, streak: 8, isUser: false },
          { name: "CodeNinja", avatar: "🥷", accuracy: 88, quizzes: 22, streak: 6, isUser: false },
          { name: "ByteLearner", avatar: "⚡", accuracy: 78, quizzes: 15, streak: 4, isUser: false },
          { name: "SyntaxSavant", avatar: "🧠", accuracy: 70, quizzes: 9, streak: 2, isUser: false }
        ];

        // Current User entry
        const userEntry = {
          name: "You (Local Profile)",
          avatar: "👨‍💻",
          accuracy: stats.bestScorePercentage || 0,
          quizzes: stats.totalQuizzes || 0,
          streak: stats.streak || 0,
          isUser: true
        };

        const allPlayers = [...simulatedPlayers, userEntry].sort((a, b) => {
          if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
          return b.quizzes - a.quizzes;
        });

        tbody.innerHTML = "";

        allPlayers.forEach((p, index) => {
          const rank = index + 1;
          const tr = document.createElement("tr");
          if (p.isUser) tr.className = "user-row";

          let rankBadge = `<span class="rank-badge">${rank}</span>`;
          if (rank === 1) rankBadge = `<span class="rank-badge rank-1">🥇</span>`;
          if (rank === 2) rankBadge = `<span class="rank-badge rank-2">🥈</span>`;
          if (rank === 3) rankBadge = `<span class="rank-badge rank-3">🥉</span>`;

          tr.innerHTML = `
            <td>${rankBadge}</td>
            <td>
              <div class="player-info">
                <span class="player-avatar">${p.avatar}</span>
                <span class="player-name">${p.name}</span>
                ${p.isUser ? '<span class="you-pill">YOU</span>' : ''}
              </div>
            </td>
            <td><strong>${p.accuracy}%</strong></td>
            <td>${p.quizzes}</td>
            <td>🔥 ${p.streak}d</td>
            <td><span class="badge ${p.isUser ? 'badge-category' : 'badge-difficulty'}">${p.isUser ? 'Active' : 'Benchmark'}</span></td>
          `;
          tbody.appendChild(tr);
        });
      },

      /* ========================================================================
         VIEW: BOOKMARKS
         ======================================================================== */
      renderBookmarks: function (searchQuery = "") {
        const container = document.getElementById("bookmarks-list-container");
        if (!container) return;

        const bookmarkIds = StorageService.getBookmarks();
        let questions = QUESTION_BANK.filter(q => bookmarkIds.includes(q.id));

        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase();
          questions = questions.filter(item => item.question.toLowerCase().includes(q) || item.category.toLowerCase().includes(q));
        }

        container.innerHTML = "";

        if (questions.length === 0) {
          container.innerHTML = `
            <div class="empty-state">
              <div class="empty-state-icon">🔖</div>
              <h3>No Saved Questions Yet</h3>
              <p>While taking or reviewing quizzes, tap the bookmark icon on any difficult question to save it for quick reference here.</p>
              <button class="btn btn-primary" onclick="document.querySelector('[data-view=\\'categories\\']').click();">Explore Questions</button>
            </div>
          `;
          return;
        }

        questions.forEach(q => {
          const card = document.createElement("div");
          card.className = "review-card";
          card.innerHTML = `
            <div class="review-card-header">
              <div class="review-badges-row">
                <span class="badge badge-category">${q.category}</span>
                <span class="badge badge-difficulty">${q.difficulty}</span>
              </div>
              <button class="btn btn-ghost btn-sm" data-remove-bm="${q.id}">✕ Remove</button>
            </div>
            <h3 class="review-question-text">${q.question}</h3>
            <div class="review-answers-grid">
              <div class="review-answer-item correct-choice">
                <span>✅ Correct Answer: ${q.correctAnswer}</span>
              </div>
            </div>
            <div class="explanation-box">
              <div class="explanation-header">💡 Educational Rationale:</div>
              <div class="explanation-body">${q.explanation}</div>
            </div>
          `;

          card.querySelector(`[data-remove-bm="${q.id}"]`).addEventListener("click", () => {
            StorageService.toggleBookmark(q.id);
            SoundService.playSelect();
            showToast("Bookmark removed.", "info");
            UIController.renderBookmarks(searchQuery);
          });

          container.appendChild(card);
        });
      },

      /* ========================================================================
         VIEW: HISTORY
         ======================================================================== */
      renderHistory: function () {
        const container = document.getElementById("history-items-list");
        if (!container) return;

        const history = StorageService.getHistory();
        container.innerHTML = "";

        if (history.length === 0) {
          container.innerHTML = `
            <div class="empty-state">
              <div class="empty-state-icon">📜</div>
              <h3>No Quiz History Recorded</h3>
              <p>Completed quizzes are safely recorded in LocalStorage with in-depth analytics.</p>
            </div>
          `;
          return;
        }

        history.forEach(att => {
          const row = document.createElement("div");
          row.className = "history-item-row";
          row.innerHTML = `
            <div class="history-item-main">
              <div class="history-cat-badge">🎯</div>
              <div>
                <div class="history-title">${att.category} (${att.difficulty})</div>
                <div class="history-sub">${att.date} • ${formatTime(att.timeTakenSeconds)} • ${att.totalQuestions} Questions</div>
              </div>
            </div>
            <div class="history-item-score">
              <div class="history-score-val">${att.correctCount} / ${att.totalQuestions}</div>
              <div class="history-score-pct">${att.accuracy}% Accuracy</div>
            </div>
            <button class="btn btn-secondary btn-sm" data-view-hist-id="${att.id}">Review Answers</button>
          `;

          row.querySelector(`[data-view-hist-id="${att.id}"]`).addEventListener("click", () => {
            currentResult = att;
            UIController.renderReview();
            UIController.navigateTo("review");
          });

          container.appendChild(row);
        });
      },

      /* ========================================================================
         GLOBAL EVENT LISTENERS
         ======================================================================== */
      setupEventListeners: function () {
        // Hero Buttons
        const heroStart = document.getElementById("hero-start-btn");
        if (heroStart) {
          heroStart.addEventListener("click", () => {
            SoundService.playSelect();
            this.navigateTo("setup");
          });
        }

        const heroCat = document.getElementById("hero-categories-btn");
        const viewAllCat = document.getElementById("view-all-categories-btn");
        [heroCat, viewAllCat].forEach(btn => {
          if (btn) btn.addEventListener("click", () => {
            SoundService.playSelect();
            this.navigateTo("categories");
          });
        });

        // Daily Challenge Buttons
        const dailyBtn = document.getElementById("daily-start-btn");
        if (dailyBtn) {
          dailyBtn.addEventListener("click", () => {
            SoundService.playSelect();
            currentSetupConfig = {
              category: "all",
              difficulty: "Medium",
              questionCount: 10,
              timeLimit: 300,
              isDaily: true
            };
            this.navigateTo("quiz");
            this.startQuizSession(false);
          });
        }

        // Category Search & Filter Chips
        const catSearch = document.getElementById("category-search-input");
        const catClear = document.getElementById("category-search-clear");
        if (catSearch) {
          catSearch.addEventListener("input", (e) => {
            if (catClear) catClear.style.display = e.target.value ? "block" : "none";
            const activeChip = document.querySelector("#category-filter-chips .chip.active");
            const filter = activeChip ? activeChip.dataset.filter : "all";
            this.renderCategoriesView(filter, e.target.value);
          });
        }
        if (catClear && catSearch) {
          catClear.addEventListener("click", () => {
            catSearch.value = "";
            catClear.style.display = "none";
            this.renderCategoriesView();
          });
        }

        document.querySelectorAll("#category-filter-chips .chip").forEach(chip => {
          chip.addEventListener("click", () => {
            document.querySelectorAll("#category-filter-chips .chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            const q = catSearch ? catSearch.value : "";
            this.renderCategoriesView(chip.dataset.filter, q);
          });
        });

        // Setup Form Controls
        const catSelect = document.getElementById("setup-category-select");
        if (catSelect) {
          catSelect.addEventListener("change", (e) => {
            currentSetupConfig.category = e.target.value;
            this.updateSetupSummary();
          });
        }

        document.querySelectorAll("#setup-difficulty-group .segment-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll("#setup-difficulty-group .segment-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentSetupConfig.difficulty = btn.dataset.difficulty;
            this.updateSetupSummary();
          });
        });

        document.querySelectorAll("#setup-count-group .segment-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll("#setup-count-group .segment-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentSetupConfig.questionCount = parseInt(btn.dataset.count, 10);
            this.updateSetupSummary();
          });
        });

        document.querySelectorAll("#setup-timer-group .segment-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            document.querySelectorAll("#setup-timer-group .segment-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentSetupConfig.timeLimit = parseInt(btn.dataset.timer, 10);
            this.updateSetupSummary();
          });
        });

        const cancelSetupBtn = document.getElementById("setup-cancel-btn");
        if (cancelSetupBtn) {
          cancelSetupBtn.addEventListener("click", () => this.navigateTo("categories"));
        }

        const startQuizBtn = document.getElementById("setup-start-quiz-btn");
        if (startQuizBtn) {
          startQuizBtn.addEventListener("click", () => {
            SoundService.playSelect();
            currentSetupConfig.isDaily = false;
            this.navigateTo("quiz");
            this.startQuizSession(false);
          });
        }

        // Quiz Navigation Buttons
        const prevBtn = document.getElementById("quiz-prev-btn");
        if (prevBtn) {
          prevBtn.addEventListener("click", () => {
            SoundService.playSelect();
            if (QuizEngine.prevQuestion()) {
              this.renderCurrentQuestion();
              this.renderQuestionNavigator();
            }
          });
        }

        const nextBtn = document.getElementById("quiz-next-btn");
        if (nextBtn) {
          nextBtn.addEventListener("click", () => {
            SoundService.playSelect();
            const state = QuizEngine.getState();
            if (state.currentIndex === state.questions.length - 1) {
              this.submitActiveQuiz();
            } else {
              QuizEngine.nextQuestion();
              this.renderCurrentQuestion();
              this.renderQuestionNavigator();
            }
          });
        }

        const submitBtn = document.getElementById("quiz-submit-btn");
        if (submitBtn) {
          submitBtn.addEventListener("click", () => this.submitActiveQuiz());
        }

        const quitBtn = document.getElementById("quiz-quit-btn");
        if (quitBtn) {
          quitBtn.addEventListener("click", () => {
            showConfirmModal(
              "Exit Quiz?",
              "Are you sure you want to exit this quiz session? Progress will be saved.",
              () => {
                QuizEngine.clearTimer();
                this.navigateTo("home");
              },
              "🚪"
            );
          });
        }

        // Bookmark in quiz
        const quizBmBtn = document.getElementById("quiz-bookmark-btn");
        if (quizBmBtn) {
          quizBmBtn.addEventListener("click", () => {
            const state = QuizEngine.getState();
            const q = state.questions[state.currentIndex];
            if (q) {
              const added = StorageService.toggleBookmark(q.id);
              SoundService.playSelect();
              showToast(added ? "Question saved to bookmarks!" : "Bookmark removed.", "info");
              this.renderCurrentQuestion();
              this.renderQuestionNavigator();
            }
          });
        }

        // Results Action Buttons
        const resReviewBtn = document.getElementById("results-review-btn");
        if (resReviewBtn) {
          resReviewBtn.addEventListener("click", () => {
            this.renderReview("all");
            this.navigateTo("review");
          });
        }

        const resRetryBtn = document.getElementById("results-retry-btn");
        if (resRetryBtn) {
          resRetryBtn.addEventListener("click", () => {
            this.navigateTo("quiz");
            this.startQuizSession(false);
          });
        }

        const resNewQuizBtn = document.getElementById("results-new-quiz-btn");
        if (resNewQuizBtn) {
          resNewQuizBtn.addEventListener("click", () => this.navigateTo("setup"));
        }

        const resHomeBtn = document.getElementById("results-home-btn");
        if (resHomeBtn) {
          resHomeBtn.addEventListener("click", () => this.navigateTo("home"));
        }

        // Review View Buttons
        const revBackResults = document.getElementById("review-back-results-btn");
        if (revBackResults) {
          revBackResults.addEventListener("click", () => this.navigateTo("results"));
        }

        const revHome = document.getElementById("review-home-btn");
        if (revHome) {
          revHome.addEventListener("click", () => this.navigateTo("home"));
        }

        document.querySelectorAll("#review-filter-chips .chip").forEach(chip => {
          chip.addEventListener("click", () => {
            document.querySelectorAll("#review-filter-chips .chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            this.renderReview(chip.dataset.reviewFilter);
          });
        });

        // Dashboard Buttons
        const dashQuiz = document.getElementById("dashboard-quick-quiz-btn");
        if (dashQuiz) {
          dashQuiz.addEventListener("click", () => this.navigateTo("setup"));
        }
        const dashHistory = document.getElementById("dash-view-history-btn");
        if (dashHistory) {
          dashHistory.addEventListener("click", () => this.navigateTo("history"));
        }

        // Bookmarks Search
        const bmSearch = document.getElementById("bookmarks-search-input");
        if (bmSearch) {
          bmSearch.addEventListener("input", (e) => this.renderBookmarks(e.target.value));
        }

        const clearBmBtn = document.getElementById("clear-all-bookmarks-btn");
        if (clearBmBtn) {
          clearBmBtn.addEventListener("click", () => {
            showConfirmModal(
              "Clear All Bookmarks?",
              "This will remove all saved questions from your revision library.",
              () => {
                StorageService.clearBookmarks();
                this.renderBookmarks();
                showToast("All bookmarks cleared.", "info");
              },
              "🗑️"
            );
          });
        }

        // History Clear Button
        const clearHistBtn = document.getElementById("clear-history-btn");
        if (clearHistBtn) {
          clearHistBtn.addEventListener("click", () => {
            showConfirmModal(
              "Clear Quiz History?",
              "This will delete all past recorded quiz logs. Your overall stats will remain intact.",
              () => {
                StorageService.clearHistory();
                this.renderHistory();
                showToast("Quiz history cleared.", "info");
              },
              "🗑️"
            );
          });
        }

        // Settings Controls
        const soundToggle = document.getElementById("setting-sound-toggle");
        if (soundToggle) {
          const settings = StorageService.getSettings();
          soundToggle.checked = settings.soundEnabled;
          soundToggle.addEventListener("change", (e) => {
            settings.soundEnabled = e.target.checked;
            StorageService.saveSettings(settings);
            showToast(`Sound effects ${e.target.checked ? 'enabled' : 'disabled'}`, "info");
          });
        }

        const timerSoundToggle = document.getElementById("setting-timer-sound-toggle");
        if (timerSoundToggle) {
          const settings = StorageService.getSettings();
          timerSoundToggle.checked = settings.timerWarning;
          timerSoundToggle.addEventListener("change", (e) => {
            settings.timerWarning = e.target.checked;
            StorageService.saveSettings(settings);
            showToast(`Low-timer warning audio ${e.target.checked ? 'enabled' : 'disabled'}`, "info");
          });
        }

        const testSoundBtn = document.getElementById("test-sound-btn");
        if (testSoundBtn) {
          testSoundBtn.addEventListener("click", () => {
            SoundService.playCorrect();
            showToast("Testing audio signal (Web Audio API)", "info");
          });
        }

        const resetDataBtn = document.getElementById("reset-all-data-btn");
        if (resetDataBtn) {
          resetDataBtn.addEventListener("click", () => {
            showConfirmModal(
              "Reset All Progress?",
              "WARNING: This will permanently delete your streak, full quiz history, accuracy metrics, and saved bookmarks from browser LocalStorage. This cannot be undone.",
              () => {
                StorageService.resetAllData();
                this.renderNavbarStreak();
                this.renderLandingPage();
                this.renderDashboard();
                this.renderBookmarks();
                this.renderHistory();
                this.renderLeaderboard();
                showToast("All data successfully reset to zero.", "warning");
              },
              "⚠️"
            );
          });
        }

        // Keyboard Navigation Support during Active Quiz
        window.addEventListener("keydown", (e) => {
          const quizView = document.getElementById("view-quiz");
          if (!quizView || !quizView.classList.contains("active")) return;

          const state = QuizEngine.getState();
          const currentQ = state.questions[state.currentIndex];
          if (!currentQ) return;

          // Keys 1, 2, 3, 4 to select options A, B, C, D
          if (["1", "2", "3", "4"].includes(e.key)) {
            const idx = parseInt(e.key, 10) - 1;
            if (currentQ.options[idx]) {
              SoundService.playSelect();
              QuizEngine.selectAnswer(state.currentIndex, currentQ.options[idx]);
              this.renderCurrentQuestion();
              this.renderQuestionNavigator();
            }
          }

          // Arrow Right / Enter for Next
          if (e.key === "ArrowRight") {
            if (QuizEngine.nextQuestion()) {
              SoundService.playSelect();
              this.renderCurrentQuestion();
              this.renderQuestionNavigator();
            }
          }

          // Arrow Left for Previous
          if (e.key === "ArrowLeft") {
            if (QuizEngine.prevQuestion()) {
              SoundService.playSelect();
              this.renderCurrentQuestion();
              this.renderQuestionNavigator();
            }
          }
        });
      }
    };
  })();

  /* ==========================================================================
     8. APP INITIALIZATION
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", function () {
    UIController.init();
  });

})();
