## Code Formatting & Style Guides Reflection

### Why is code formatting important?

Code formatting is important because it makes the code easier to read and understand. When everyone follows the same formatting style, it is also easier for developers to work on the same project and review each other's code. Tools like ESLint and Prettier help keep the code consistent without having to format everything manually.

### What issues did the linter detect?

I ran ESLint using `npm run lint`, and it did not report any errors in my current codebase. This showed me that the existing code was already following the configured ESLint rules.

### Did formatting the code make it easier to read?

Yes. Prettier made the formatting more consistent across the project. It helped keep spacing, indentation and line formatting consistent, which makes the code easier to read and maintain.

### What I learned

This task helped me understand the difference between ESLint and Prettier. ESLint checks the code against rules, while Prettier focuses mainly on formatting. I also learned how these tools can be added to a project and used automatically through npm scripts.


## Naming Variables & Functions Reflection

### What makes a good variable or function name?

A good name should clearly describe what the variable stores or what the function does. Names should be meaningful and easy to understand without needing extra comments. For example, `totalScore` is much clearer than `x`, and `calculateTotalScore` explains the purpose of the function.

### What issues can arise from poorly named variables?

Poorly named variables can make code difficult to understand and maintain. Other developers may need to spend more time reading the code to understand what each variable means. It can also make debugging and modifying the code more difficult.

### How did refactoring improve code readability?

Refactoring the names made the purpose of the code much clearer. Instead of using short names such as `f`, `u`, `x`, `a`, and `s`, I used descriptive names such as `calculateTotalScore`, `users`, `totalScore`, `isActive`, and `score`. I could understand what the code was doing much faster after the changes.

### What I learned

This task helped me understand that good naming is an important part of clean code. Variable and function names should explain their purpose clearly and make the code easier for other developers to understand.


## Writing Small, Focused Functions Reflection

### Why is breaking down functions beneficial?

Breaking down a large function makes the code easier to understand, test and maintain. Each small function can focus on one specific task, which makes it easier to find and fix problems.

### How did refactoring improve the structure of the code?

The original function was responsible for counting users, calculating scores and displaying results all at once. I separated these responsibilities into smaller functions such as `countActiveUsers`, `calculateTotalScore`, `calculateAverageScore` and `displayResults`. This made the main `processUsers` function easier to read because it now mainly coordinates the smaller functions.

### What I learned

I learned that a function should ideally have one clear responsibility. Smaller functions can make a codebase easier to understand and maintain, especially when different parts of the code need to be changed later.

## Avoiding Code Duplication Reflection

### What were the issues with duplicated code?

The original example had the same calculation repeated in three different functions. This makes the code longer and can cause problems if the calculation needs to be changed later. We would have to update the same logic in multiple places, which increases the chance of making a mistake.

### How did refactoring improve maintainability?

I moved the repeated calculation into one reusable function called `calculateScoreWithBonus`. The same function can now be used whenever the calculation is needed. This reduces duplication and means that if the calculation changes in the future, I only need to update it in one place.

### What I learned

This task helped me understand the DRY principle. Avoiding unnecessary duplication makes code easier to maintain because there is less repeated logic to manage. However, I also learned that not every repeated line needs to be immediately turned into a function. The goal is to remove meaningful duplication without making the code unnecessarily complicated.