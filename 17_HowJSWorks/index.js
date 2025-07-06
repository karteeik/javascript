// How JavaScript Works...

// Our JavaScript Code -->

// Parsing Phase (by JavaScript Engine):
// Step 1: Lexical Analysis (Tokenizing)
//         JavaScript code is split into meaningful tokens.

// Step 2: Syntax Parsing
//         Tokens are checked for syntax correctness.
//         Then, an Abstract Syntax Tree (AST) is created.

// Compilation Phase:
//         Using JIT (Just-In-Time) Compiler,
//         The AST is converted into Intermediate Code,
//         then optimized into Machine Code (or Bytecode in engines like V8).

// Execution Contexts:
//         During execution, the engine sets up Execution Contexts and uses:

// (1) Creation Phase:
//         Memory is allocated for variables and functions.
//         Function declarations are hoisted (stored in memory completely).
//         Variable declarations are hoisted but initialized as undefined.

// (2) Execution Phase:
//         Code is executed line-by-line.
//         Variables are assigned actual values.
//         Functions are invoked and contexts are created.

// Memory Management Involves:

// (i) Call Stack:
//         A data structure (LIFO - Last In, First Out).
//         Tracks function calls via Execution Contexts.
//         When the stack gets too deep → Stack Overflow.

// (ii) Heap Memory:
//         An unstructured memory area used to store:
//         objects, arrays, and functions.
//         Managed by JavaScript's Garbage Collector
//         to free up unused memory and avoid memory leaks.