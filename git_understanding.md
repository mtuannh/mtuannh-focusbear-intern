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

# Advanced Git Commands

## git checkout main -- <file>

### What does it do?

This command restores a specific file to the version that exists on the `main` branch without switching branches or affecting other files.

### When would I use it?

I would use it when I have made unwanted changes to a particular file and want to restore the version from another branch. It can be useful in a long-running project when I only want to undo changes to one file without affecting other work.

### What did I learn?

I learned that `git checkout` can be used for more than switching branches. It can also restore a specific file from another branch.

---

## git cherry-pick <commit>

### What does it do?

`git cherry-pick` applies the changes from a specific commit to the current branch. It allows me to take one particular change without merging the entire branch.

### When would I use it?

I would use cherry-pick when a useful fix or feature exists in another branch but I do not want to merge all of that branch's changes. This could be useful in a project with multiple developers when a specific bug fix needs to be added to another branch quickly.

### What did I learn?

I learned that cherry-pick is useful when I need a specific commit rather than an entire branch. I also learned that the commit needs to be tested after cherry-picking because the changes are being applied in a different branch context.

---

## git log

### What does it do?

`git log` displays the commit history of the repository. It can show information such as commit messages, authors and commit dates.

### When would I use it?

I would use `git log` when I need to understand how the project has changed over time or investigate when a particular change was introduced. It is especially useful in long-running projects with multiple developers.

### What did I learn?

Using `git log --oneline --graph --all` made it easier to understand how branches and commits were connected. It gives a much clearer overview of the project's history than looking at individual commits.

---

## git blame <file>

### What does it do?

`git blame` shows which commit and author last modified each line of a file.

### When would I use it?

I would use `git blame` when I find a line of code that I do not understand and want to know when or why it was added. I could then use the commit ID with `git show` to investigate the original change.

### What did I learn?

I learned that `git blame` is useful for understanding the history of specific lines rather than just looking at the overall commit history. It can help developers find the context behind existing code in a large project.

---

## Overall Reflection

These commands are useful for understanding and managing changes in a long-running project. They provide more control over individual files, commits and the history of the codebase.

The command I found most interesting was `git cherry-pick` because it allows a specific change to be moved between branches without merging everything. I also found `git blame` useful because it can help identify the history behind a particular line of code.

I think these commands would become more useful as I work on larger projects with more developers and more complex Git histories.


# Git Bisect

## What does git bisect do?

`git bisect` helps identify which commit introduced a bug into a project. It works by using a binary search between a known good commit and a known bad commit.

I tell Git which commit is good and which commit is bad, and Git checks a commit in the middle of that range. I then test that version and tell Git whether it is good or bad. Git continues narrowing down the possible commits until it identifies the first bad commit.

## When would you use it in a real-world debugging situation?

I would use `git bisect` when I know that a feature worked at some point in the past but is currently broken, and there have been many commits since the last known working version.

For example, if a bug appeared somewhere during a long-running project with many developers and I could not easily identify which change caused it, `git bisect` would help me find the problematic commit much faster than manually checking every commit.

## How does it compare to manually reviewing commits?

Manually reviewing commits can take a long time, especially when there are many changes. `git bisect` is more efficient because it uses binary search to reduce the number of commits that need to be tested.

Instead of checking every commit one by one, I only need to test a smaller number of commits and tell Git whether each one is good or bad.

## My Experience

For this task, I created several commits in a test file and intentionally introduced a bug into one of them. I then used `git bisect` to find the commit that introduced the incorrect calculation.

The process helped me understand how Git can be used as a debugging tool, rather than only for managing and sharing code.

One thing I found useful was that I did not need to understand exactly which line caused the problem before starting the process. I only needed a known good version and a known bad version, and `git bisect` helped narrow down where the problem was introduced.