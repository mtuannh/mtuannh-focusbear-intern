## Why is pushing directly to main problematic?

Pushing your modified code directly to the main branch is not a good approach when you are working on a project, especially in a team project. First, your code would be added directly to the main codebase, and you could not know what issues might happen because you are working on a specific feature, not the whole project. This could cause unexpected errors or conflicts for other parts of the project.

## How do branches help with reviewing code?

Branches help you double-check your code before merging it into the main codebase. This gives you and other team members a chance to review the changes and find unexpected errors or conflicts before they affect the main project.

## What happens if two people edit the same file on different branches?

If two people edit the same file on different branches, their changes can be different from each other. When the branches are merged, Git may detect a conflict if both people changed the same part of the file. The team then needs to review the changes and decide which changes should be kept before merging them into main.

## What is the difference between staging and committing?

Staging and committing are two different steps in Git. Staging means choosing the files or changes that you want to include in the next commit. Committing means saving those staged changes as a new version in the local Git history.

For example, when I use git add <file>, the file is staged but it is not committed yet. After that, I can use git commit to save the staged changes.

## Why does Git separate these two steps?

Git separates these two steps because it gives you more control over what you want to include in a commit. You can make changes to several files but only stage the changes that are related to one specific task.

This also helps keep commits more organised because each commit can contain a specific group of changes instead of including everything that was changed.

## When would you want to stage changes without committing?

I would stage changes without committing when I want to prepare specific changes for a commit but I am not ready to save them yet. For example, if I have modified several files but only want to commit some of them, I can stage the files I need and check git status before committing.

During this process, I can also unstage a file if I change my mind or accidentally added the wrong file. This gives me a chance to check my changes before creating the commit.

# Git Merge Conflicts

## What caused the conflict?

The conflict happened because I made changes to the same part of the same file on two different branches.

I first created a `conflict-practice` branch and changed the file there. I then switched back to `main` and made a different change to the same part of the file. When I tried to merge the branch back into `main`, Git could not automatically decide which version should be kept, so it created a merge conflict.

## How did you resolve it?

I used GitHub Desktop to identify the conflicted file and compare the changes from the two branches. I reviewed both versions and decided what the final version of the file should contain.

I then removed the conflict markers, kept the changes that I wanted, marked the conflict as resolved and committed the merge.

## What did you learn?

I learned that merge conflicts happen when Git cannot automatically combine changes from different branches. They are not necessarily a problem with Git, but rather a situation where a developer needs to decide which changes should be kept.

I also learned that it is important to understand what changed on each branch before resolving a conflict. After resolving the conflict, I should test the project again to make sure the final changes work as expected.