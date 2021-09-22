"use strict" // chat about strict mode

// JS TYPES
    // PRIMITIVES: is not an object and has no methods
      //Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values
        String, Number, Symbol, Boolean, BigInt
      // Primitive:
        var bar = "baz";
        console.log(bar);
        bar.toUpperCase();
        console.log(bar);

        // STRING
            "Character, Word or Sentence within double quotes", 
            'Character, Word or Sentence within single quotes', 
            `Character, Word or Sentence within backticks`,
            new String("A String object")
        // NUMBER
          // The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java or C#. This means it can represent fractional values, but there are some limits to what it can store. A Number only keeps about 17 decimal places of precision; arithmetic is subject to rounding. 
          // A number literal like 37 in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use
          // Min/Max Safe Integer 2^53 - 1
          123 === 123.0  // true
          Number("blablabla") === Nan

        // SYMBOL
            // dynamically produces an anonymous, unique value. A symbol may be used as an object property.
            // can have an optional description, but for debugging purposes only.
            let Sym1 = Symbol("Sym")
            let Sym2 = Symbol("Sym")
            Sym1 === Sym2

            alert(Sym1)
            alert(Sym1.description)
            alert(String(Sym1))
        
        // BIGINT
          // describes integers with arbitrary precicion format. 
          // based on the computer possibilities rather than a predifined set of memory capacity.
            7n // Check with: 7n.constructor
        
    // STRUCTURED
        OBJECT, FUNCTION

        // OBJECT
            // It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
            // Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).
            new Object(), new Object(undefined), new Object(null)

        // FUNCTION
            // Every JavaScript function is actually a Function object. This can be seen with the code (function(){}).constructor === Function, which returns true.
            // Instance methods: apply, bind, call, ...
            // Instance properties: arguments, length, name, ...
            // Declaration
            function nameInCamelCase() {console.log("I am a function")} //declare a function
            nameInCamelCase() // invoke a function
            function withArguments(x, y) {console.log(`The sum is ${x + y}`)}
            withArguments(2, 3)
            function withDefaultArguments(x, y = 3) {console.log(`The sum is ${x + y}`)}
            withDefaultArguments(2, 4)
            withDefaultArguments(2, 4, 2)
            withDefaultArguments(2)

// LET, CONST, VAR
    // Declaration and Re-declaration
    // Assignment and Re-assignment
    // Hoisting
    let name = "Matteo"
    const age = 30
    var profession = "Educator"

// SCOPE
    // Block
        {let name = "Matteo!"}
        console.log(name) //ReferenceError: name is not defined

        let nameTwo = "Mateò"
        var nameThree = "Matthew"
        if (nameTwo && nameThree) {
            let nameTwo = "Matt Two"
            var nameThree = "Matt Three"
            console.log(nameTwo, nameThree)
        }
        console.log(nameTwo, nameThree)

    // Function
        function introduce() {
            let profession = "Educator"
            let age = 30
            console.log (`Hello, I am a/an ${profession} and I'm ${age} years old`)
            return `Hello, I am a/an ${profession} and I'm ${age} years old!`
        }
        console.log(profession, age) // ReferenceError: profession is not defined
        introduce()

    // Global
        let studentCount = 10;
        (function tellCount() {
            console.log(studentCount)
        })()

// Context
    // With the word context in JS we refer to the object that the current function belongs to
    // While scope is about variable visibility, context is about objects
// Execution Context
    // Refers to the environment in which JS code runs
    // Two main duties: parsing the code and storing variables and functions into memory
    // There are two types of Execution Context:

        // Global Execution Context is the first thing that is created when you write JavaScript code. It is the default context.
        // Local Execution Context is created when you call a function (not defining a function).
    
    // The creation of the Execution Context has two phases:
    // Creation Phase
    // Execution Phase

    // In the creation phase, the engine first creates Activation object or Variable object. 
    // This object consists of variables, arguments, function declarations. In this stage, they are assigned the value of undefined.
    // The arguments property is also an object (an array-like object) that has a length property and all arguments passed to the function call are stored in this object.
    // After that, the engine creates the scope chain. Each execution context knows its scope. 
    // It has a reference to its outer scopes all the way to the global scope, and the engine searches variables (if exists or not) starting from the current to the global scope. 
    // And this is called scope chain. The scope chain is a list of objects consisting of its own variable object and its parents’ variable objects.
    


// HOISTING
        // Hoisting refers to the process of lifting to the top of the file parameters, variable and function declarations
