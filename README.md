# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with the cleanup function in React's `useEffect` hook.  Incorrectly managing state within the cleanup function after the component has unmounted can lead to warnings or errors.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

## Problem

The problem lies in the way the `setCount` state is updated inside the cleanup function of the `useEffect` hook. When the component unmounts, any state updates scheduled within the cleanup function will continue to run and may cause issues. If the component has already unmounted, attempting to update state can result in warnings or errors. 

## Solution

The solution involves checking if the component is still mounted before attempting to update state. This is commonly done by using a ref to track the mounted state of the component.