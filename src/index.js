import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Assessment extends React.Component
{
constructor(props)
{
  super(props)

   this.state={value:""}
}

 
  oninputchange = (event) => {
    this.setState({
      value : event.target.value
    })
  }

  render()
  {
    
    return( 
      
      <div className='prebox'>
      <textarea name='box1' value={this.state.box1} onChange={this.oninputchange} className='firstbox' type='text'></textarea>
      <textarea value={this.state.value} className='secondbox' type='text' readOnly></textarea></div>
    );
  }
} 





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Assessment/>);
  

