# React JS interview question 1

## Problem

```javascript
const addValue = () => {
  //counter = counter + 1;
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
};
```

In React, the useState hook's setter function (setCounter in this case) does not immediately update the state. Instead, it schedules the update, which will happen asynchronously. This means that within a single function call, multiple calls to setCounter with the same counter value will not see the updates made by previous calls to setCounter within that same function call.

Here is a step-by-step explanation of what's happening in your addValue function:

1. Initially, counter is 0.

2. You call setCounter(counter + 1) five times in quick succession.

   - During the first call, setCounter(counter + 1) schedules an update to set counter to 1. However, the state has not yet updated, so counter is still 0.

   - During the second call, setCounter(counter + 1) again schedules an update to set counter to 1 (since counter is still 0 at the time of this call).

   - The same happens for the third, fourth, and fifth calls. Each call is using the old counter value (which is still 0) and schedules an update to set counter to 1.

3. After all the scheduled updates are processed, React merges them and updates the state once to 1.

## Solution

To achieve the desired behavior of incrementing the counter by 5, you should use the functional form of the setCounter function, which ensures that each update is based on the most recent state:

```javascript
const addValue = () => {
  setCounter((prevCounter) => prevCounter + 1);
  setCounter((prevCounter) => prevCounter + 1);
  setCounter((prevCounter) => prevCounter + 1);
  setCounter((prevCounter) => prevCounter + 1);
  setCounter((prevCounter) => prevCounter + 1);
};
```

In this revised version, each setCounter call receives the latest state value (prevCounter) and increments it by 1. This ensures that each increment is based on the updated state value from the previous setCounter call.
