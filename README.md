# TypeScript Type Error: String assigned to number parameter

This repository demonstrates a common type error in TypeScript where a function expecting a number receives a string argument. The error message will indicate that the string type is not assignable to a number type.

## Bug
The `add` function is defined to accept two number arguments. However, in the example, it's called with a string "10" as the second argument, causing a type error.

## Solution
The solution involves validating the input types to ensure that the function receives only numbers. This can be accomplished using type guards or more robust type checking at the function's entry point.