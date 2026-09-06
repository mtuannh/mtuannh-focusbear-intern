# Code Smells Reflection

## Code smells I found

I identified several code smells in my example, including magic numbers, a long function, duplicate code, a large class, deeply nested conditionals, commented-out code and unclear variable names.

The original code was difficult to read because one function and class were responsible for too many things. Some values were also hardcoded and some variable names did not clearly explain their purpose.

## How did refactoring improve the readability and maintainability of the code?

Refactoring made the code easier to understand by breaking the large function into smaller functions with clear responsibilities. I also replaced magic numbers with named constants and removed duplicated and commented-out code.

The deeply nested conditions were moved into an `isEligibleUser` function, which makes the main logic much easier to follow. Clear variable and function names also make the purpose of each part of the code more obvious.

## How can avoiding code smells make future debugging easier?

Avoiding code smells makes debugging easier because the code is more organised and each function has a clear responsibility. If something goes wrong, it is easier to identify which function is responsible for the problem.

Reducing duplication also means that a change only needs to be made in one place, which reduces the chance of introducing bugs.

## What I learned

This task helped me understand that code smells are not necessarily errors, but they can make code harder to maintain over time. Refactoring these problems early can improve readability, reduce duplication and make future changes and debugging easier.