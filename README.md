# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly including the state variable in the dependency array.  The `useEffect` hook is designed to perform side effects based on changes to its dependencies. However, if the state variable being updated within `useEffect` is also listed as a dependency, an infinite loop can result as the state changes constantly trigger re-renders and subsequent `useEffect` calls.

## Bug Description

The `bug.js` file contains a functional component that attempts to increment a state variable (`count`) within its `useEffect` hook.  The `count` variable is mistakenly included in the dependency array, causing the `useEffect` function to execute repeatedly, leading to an infinite loop and potential browser crashes.

## Solution

The `bugSolution.js` file demonstrates the correct usage of `useEffect` in this scenario. By removing the `count` variable from the dependency array or using a conditional check, we prevent the infinite loop.  The solution illustrates how to correctly manage dependencies to avoid unintended side effects and maintain React application stability.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and run it. You will likely observe an infinite loop in your browser's developer console.
3. Open `bugSolution.js` and run it.  You will see the counter increment only once. 

This example highlights the importance of carefully managing dependencies in React's `useEffect` hook to ensure efficient and reliable application behavior.