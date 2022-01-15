import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
  }
  return() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are Ready"}</div>;
  }
}

export default App;
