```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const mounted = useRef(true);

  useEffect(() => {
    return () => {
      mounted.current = false; // Set mounted to false when unmounting
    };
  }, []);

  useEffect(() => {
    // ... other effects that can set count ...
    // If the component is still mounted, update state
    return () => {mounted.current = false;};
  }, []);

  useEffect(() => {
    // Simulate an asynchronous operation
    const timeoutId = setTimeout(() => {
      if (mounted.current) {
        setCount(10);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```