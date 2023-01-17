import React from 'react';
import Footer from './Footer';
import Note from './Note';
import Header from './Header';
import expen from './data';



  function App() {
    return(<div>
        <Header></Header>
        {expen.map(expenitem=><Note key={expenitem.id} title={expenitem.title} amount={expenitem.amount}></Note>)
}
    
        <Footer></Footer>
        
    </div>)
  }
  export default App;