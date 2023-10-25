
# Theory Questions & Answers

## 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

### Ans:
Both `if-else` and Switch are conditional statements. Let’s discuss some major differences between `if-else` and switch cases.

| #         | `if-else`| `switch`                   |
| :-------- | :------- | :------------------------- |
| 1 | `if-else` allows complex expressions in the condition | `switch` wants a constant |
|2  |The `if-else` blocks are executed based on the condition in the if statement|expression inside `switch` statement decide which case to execute|
|3| Tests both logical expressions and equality| Tests only equality|
|4| Multiple statements for multiple decisions | Single statements for multiple decisions|
|5| Used to choose between two options | Used to choose among multiple options |
|6| Used for integer, character, pointer, floating-point type, or Boolean type | Used for character expressions and integers |
|7| Either the code block in if statement is executed or the code block in else statement | If condition inside `switch` statements does not match any of the cases, either `default` statement is executed or end of the `switch` statement is reached |
|8| Values are determined by constraints | Values are determined by user preferences |
|9| Difficult to edit | Easy to edit |

and so on...


## 2. What is `JavaScript`, and what is its primary purpose in web development?

### Ans:

`JavaScript` is a powerful and efficient scripting or programming language that allows you to implement complex features on web pages. Used primarily by Web browsers to create a dynamic and interactive experience for the user. It's used to build dynamic web applications and websites such as displaying timely content updates, interactive maps, animated 2D/3D graphics. It allows developers to create complex and interactive webpages and applications with the use of different programming techniques and functions; Even more exciting is the functionality built on top of the client-side `JavaScript` called Application Programming Interfaces (APIs) provide you extra superpowers to use in your `JavaScript` code.

So the purpose of `JavaScript` varied for a wide range of tasks, from creating animations, creating interactive user interfaces, to developing complex web applications, from manipulating the Document Object Model (DOM) of a webpage, to creating server-side applications, mobile and desktop applications etc.

In summary, `JavaScript` is a versatile scripting/programming language that is used to build modern, dynamic, and interactive webpages, applications, and websites.

## 4. Explain the concept of "scope" in `JavaScript` and the difference between global and local scope.

### Ans:

*Scope* in general is about the creation of an *execution context* on the single threaded `JavaScript`, inside which code runs. It refers to the current context of code, which determines the accessibility of variables to `JavaScript`. So, scope of a variable defines where it’s accessible in a program based off of where it was created.

There are two types of scope in JavaScript.These are: *local* also known as *block* scope and *global*.

#### Difference between *global* and *local* scope:

- **Global scope** — Global scope contains all of the things defined outside of all code *block*. A code block simply consists of grouped statements inside curly braces ({ }). if statement, loops, function are examples of structure that create a code block. A global variable has global scope and is accessible from anywhere in the code.
- **Local Scope** — Local scope contains things defined inside code blocks. A local variable has local scope and only accessible where it’s declared.

## 5. What is the difference between `null` and `undefined` in JavaScript?

### Ans:

#### Difference between `null` and `undefined` in a tabular form

| # | `null`     | `undefined`                |
| :-------- | :------- | :------------------------- |
| 1 | It's an assignment value. It can be assigned to a variable which indicates that a variable does not point any object. | It's not an assignment value. It means a variable has been declared but has not yet been assigned a value. |
|2| It's converted to zero (0) while performing primitive operations. | It's converted to `NaN` while performing primitive operations.|
|3| The `typeof()` operator returns the type as an `object` for a variable whose value is assigned as `null`. It's an object. | The `typeof()` operator returns `undefined` for an *undefined* variable. It is a type itself. |
|4| `null` value is a primitive value which represents the *null, empty, or non-existent* reference. |`undefined` value is a primitive value, which is used when a variable has not been assigned a value. |