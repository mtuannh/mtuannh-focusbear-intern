# Clean Code Principles

## Simplicity

Simplicity means keeping code as straightforward as possible and avoiding unnecessary complexity. Code should solve the problem without adding extra logic or abstractions that are not needed.

Simple code is usually easier to understand, test and maintain. I think it is important to avoid over-engineering a solution when a simpler approach can achieve the same result.

## Readability

Readable code should be easy for another developer to understand. This includes using meaningful variable and function names, consistent formatting and clear logic.

For example, a variable called `totalScore` gives much more information than a variable called `x`. Good readability is important because developers often spend more time reading and understanding existing code than writing new code.

## Maintainability

Maintainability means writing code that can be easily changed, fixed or extended in the future.

Code should be organised into clear functions and should avoid unnecessary duplication. This is especially important in a long-running project because other developers may need to work with the code later.

## Consistency

Consistency means following the coding style and conventions used by the project. This includes things such as naming conventions, formatting, file structure and how components or functions are organised.

Consistent code makes it easier for developers to move between different parts of a project because the code follows similar patterns.

## Efficiency

Efficient code should perform its job without wasting unnecessary resources. However, I think efficiency should be balanced with readability and maintainability.

It is not always useful to optimise code before there is an actual performance problem. Developers should first write a clear solution and then optimise areas where performance actually matters.

# Messy Code Example

The following code is an example of intentionally messy JavaScript:

```javascript
function f(a,b,c){
let x=0;
for(let i=0;i<a.length;i++){
if(a[i].active===true){
if(a[i].age>=18){
x=x+a[i].score;
}
}
}
if(c===true){
return x/b;
}else{
return x;
}
}