import React from 'react';

const UseEffectDemo = () => {

    const [count, setCount] = React.useState(0);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => { setCount(count + 1) }}>Click me!!!1!</button>
      </div>
    )
  
  }

  export default UseEffectDemo;