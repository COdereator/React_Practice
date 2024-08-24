## React Components : 
    - Components are independent and reusable bits of code
    - Componenet are javascript files
    - They serve teh same purpose as Javascript functions
    - But works in isolation and returns HTML via a render function 

## There are two types of components

### 1. Class Component
    - Class-based components are ES6 classes that extend React.Component. They require you to define a render() method that returns JSX (or null).
    
```jsx
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}
```
    - Class components use this.state to hold local state. State is initialized in the constructor and updated using this.setState().
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```
    - Class components have lifecycle methods that allow you to hook into different phases of a component’s lifecycle, such as mounting, updating, and unmounting.
    
    1. componentDidMount(): Invoked immediately after a component is mounted.

    2. componentDidUpdate(prevProps, prevState): Invoked immediately after updating occurs.

    3. componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed.
```jsx
class LifecycleExample extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Lifecycle Methods</div>;
  }
}
```
    - Class components are heavier due to the overhead of maintaining state and lifecycle methods. They have a higher memory footprint and can be more complex to manage.
### 2. Functional Component
    - Functional components are simply JavaScript functions that return JSX. They are more straightforward and have less boilerplate than class components.
```jsx
import React from 'react';

function MyComponent(props) {
  return <div>Hello, {props.name}!</div>;
}
```
    - With React Hooks, functional components can use state and side effects. Hooks like useState, useEffect, useContext, etc., provide functionalities similar to class component state and lifecycle methods

```jsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or updated');
    return () => {
      console.log('Cleanup');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Summary
### Class-Based Components:

    Require more boilerplate, including binding methods and setting up lifecycle methods.
    Use ES6 classes and this context.
    Have built-in state management and lifecycle methods.
    Can be more verbose and less intuitive for new developers.

### Functional Components:

    Use simple functions and hooks for state and lifecycle management.
    No need for this binding; simpler and more concise.
    Generally preferred in modern React development due to simplicity and performance benefits.
    Hooks provide powerful features for managing state, side effects, and context.


## JSX 
    Stand for Javascript and XML
    JSX also contains all the HTML like attributes
    JSX make the code simpler and it look elegant
    All the tags are wrapped in a single parent 
    It is not necessary to write JSX  to render HTML tags
    React.createElement() method can be used in place

### Syntax of React.createElement()
```jsx
React.createElement(){
    "parent-node",
    optional properties,
    "child node",
}
```

```jsx
import React, { Component } from "react";

class Practice extends Component {
  render() {
    return React.createElement(
      "div",
      { class: "App-header" },
      React.createElement(
        "h1",
        null,
        React.createElement("i", null, "Welcome to Hacker World")
      )
    );
  }
}

export default Practice;
```
### JSX Example
```jsx
import React, { Component } from "react";

class Practice extends Component {
  render() {
    return (
      <div className="App-Header">
        <h1>
          <i>Welcome To React World</i>
        </h1>
      </div>
    );
  }
}

export default Practice;
``` 

## Props
    - React is  a component-based library which divides the UI into little reusable pieces
    - In some cases ,those components need to communicate ( send data to each other ) and the way to pass data between components is by using props.
    - "Props" is a simple keyword in React, which stands for properrties and is being used for passing data from one component to another
    - But the important part here is that data with props are being passed in a uni-directional flow. ( one way from parent to child ) 

## Class Component 
```jsx
import React, { Component } from "react";

class Class extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <h1>
          <i>
            I am learning {this.props.language} from {this.props.hours} Hours
          </i>
        </h1>
      </div>
    );
  }
}
export default Class;
```

## Functional Component 
```jsx
import React from "react";

const Functional = (props) => {
  return (
    <div>
      <h1>
        <i>{props.number}</i>
      </h1>
    </div>
  );
};

export default Functional;
```
## State Changes - Class

```jsx
import React, { Component } from "react";

class Class extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      language: "Hello",
      hours: 1,
    };
  }

  namechange() {
    console.log(this.state);
    this.setState({ language: "Hacker", hours: 10101 }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <h1>
          <i>
            I am learning {this.state.language} from {this.state.hours} Hours
          </i>
          <br />
          <button onClick={this.namechange.bind(this)}>Click Me</button>
        </h1>
      </div>
    );
  }
}

export default Class;
```


