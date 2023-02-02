# The Complete JavaScript Course - 01 - Fundamentals - Part - 1

This contains all the topics I learnt in this section.

## Table of contents

- [Variables](#variables)
  - [Naming Variables](#naming-variables)
- [Data Types](#data-types)

## Variables

Variable is a box or container used to store values.

Variable Naming conventions in Javascript:

- variable names can't start with a number.
- can only contain letters, numbers, underscore and dollar sign.
- cannot be reserved keywords.
- don't start with uppercase letters.
- uppercase named variables are reserved for constants variables.

### Naming variables

```
let first = "Ade";
let firstName = "Adedamola";
let first_name = "Ola";
```

## Data Types

A value is either an object or primitive data types.

- 7 Primitive Data Types

  - Number: Floating point numbers Used for decimals and integer.
    ```
    let age = 22;
    ```
  - String: Sequence of characters Used for text
    ```
    let firstName = "Wale";
    ```
  - Boolean: logical type that can only be true or false.
    ```
    let haveFood = true;
    ```
  - Undefined: Value taken by a variable that is not yet defined ('empty value').
    ```
    let work;
    ```
  - Null: Also means empty value.
  - Symbol(ES2015): Value that is unique and cannot be changed.
  - BIgInt(ES2020): Larger integers than the Number type can hold.

JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable.
Instead, data types are determined automatically
The typeof method is used to check the data type of a variable.

```
console.log(typeof age);
```
