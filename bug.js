```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of the return function in useEffect
    return () => {
      // Cleanup function should only set state if component is still mounted 
      setCount(10); // This will cause a warning or error if component is unmounted
    };
  }, []);

  return <div>Count: {count}</div>;
}
```