// How JS Works..............

// Our JavaScript Code -->

// Parsing Phase (by JavaScript Engine) -->
// Step 1: Lexical Analysis (Tokenizing)
//        JS code is split into meaningful tokens.

// Step 2: Syntax Parsing
//        Tokens are checked for syntax errors.
//        Then, an Abstract Syntax Tree (AST) is created.

// Compilation Phase -->
//        Using JIT (Just-In-Time) Compiler,
//        AST is converted into Intermediate Code or
//        optimized Machine Code (via Bytecode in modern engines like V8).

// Execution Phase -->
// Execution Phase - In Execution Phase, We Have Call Stack With 

// (1) Creation Phase -->
// Memory is allocated for variables and functions.
// Functions are hoisted.
// Variables are hoisted and set to undefined.

// (2) Execution Contexts -->
// Code is executed line-by-line.
// Values are assigned to variables.
// Functions are invoked.

// (i) Call Stack - Data Structure LIFO(pushed,popped), Stack Overflow (Tracks function calls (not object values))
// (ii) Heap Memory - Unstructured memory used to store objects, arrays, and functions. JS engine uses Garbage Collection to clear unused memory in the heap.