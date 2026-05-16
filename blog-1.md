### Understanding Pick and Omit Utility Types in TypeScript

1. Introduction 
   
   When a typeScript developer building a large application, they faced a problem.When they create a interface of many properties.They need different type of interface but properties are same of the previous interface.So it is duplicating of code.Code looks so massy and not follow the DRY
   (Don't Repeat Yourself) role.In this problem solved by typescript Utility types(omit and pick).Here is
   this blog i will discuss about this utility types(pick and omit).

2. How to implement Pick and Omit.

 ***without pick and omit

``` typescript
  interface User {
           id: number;
           name: string;
           email: string;
           password: string;
           role: string;
}```
```typescript
interface logIn {
    id: number;
    name: string,
    email: string,
    password: string,
    role: string
}
```
It's the repetition of the code.To solve this problem Utility types pick and omit helps.

*** When use pick [syntax : Pick <Type, Keys>]
```typescript
type logIn = Pick<User, "name" | "email" | 'password' | 'role'>
```
 The resulting type becomes:

 ```typescript
 interface logIn {
    id: number;
    name: string,
    email: string,
    password: string,
    role: string
}
 ```  
* Why Pick Is Useful

Pick helps developers:

Reuse existing interfaces
Reduce repeated code
Maintain consistency
Update types automatically when the original interface changes

This makes applications easier to maintain as they grow.

*** When use Omit [syntax : Omit<Type, Keys>]

```typescript
type logIn = Pick<User, "password" >
```
This produces:

```typescript
interface logIn{
  id: number;
  name: string;
  email: string;
  role: string;
}
```
* Omit is especially useful for:

Removing sensitive information
Creating safe API response objects
Simplifying frontend data structures

For example, passwords should never be exposed to frontend users, so Omit provides a clean solution.

3. How Pick and Omit Keep Code DRY(don't repeat yourself)

   i. One master interface becomes the single source of truth
   ii.Specialized versions are generated automatically
   iii.Maintenance becomes much easier.

   This leads to cleaner and more scalable TypeScript applications.

4. Conclusion 

TypeScript’s Pick and Omit utility types are powerful tools for reducing code duplication and improving maintainability. 

* Pick allows developers to select specific properties from an interface.
* Omit removes unnecessary properties safely.
* Both help developers follow the DRY principle and keep applications organized.

