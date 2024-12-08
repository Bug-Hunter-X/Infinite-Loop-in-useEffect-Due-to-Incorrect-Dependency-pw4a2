```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Set a timeout to prevent infinite loop or use other conditional logic
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Increment every 1 second
    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array - runs only once after mount 

  return <div>Count: {count}</div>;
}
```