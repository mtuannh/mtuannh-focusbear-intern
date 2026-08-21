## Why is pushing directly to main problematic?

Pushing your modified code directly to the main branch is not a good approach when you are working on a project, especially in a team project. First, your code would be added directly to the main codebase, and you could not know what issues might happen because you are working on a specific feature, not the whole project. This could cause unexpected errors or conflicts for other parts of the project.

## How do branches help with reviewing code?

Branches help you double-check your code before merging it into the main codebase. This gives you and other team members a chance to review the changes and find unexpected errors or conflicts before they affect the main project.

## What happens if two people edit the same file on different branches?

If two people edit the same file on different branches, their changes can be different from each other. When the branches are merged, Git may detect a conflict if both people changed the same part of the file. The team then needs to review the changes and decide which changes should be kept before merging them into main.