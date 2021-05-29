import React from 'react';

function App() {
	return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
}
class App extends React.Component {
   render() {
      
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default App;