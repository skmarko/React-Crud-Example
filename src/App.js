import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React,{Component} from 'react';
import './App.css';
import Plan from './activity';


class App extends Component {
state ={
  items:[],
  text:""
}
handleChange=e=>{
  this.setState({text:e.target.value})
}
handleAdd =e=>{
  if(this.state.text !== ""){
    const items = [...this.state.items ,this.state.text]
    this.setState({items:items ,text:''})
  }
}
handleDelete = id =>{
console.log("deleted" , id);
const oldItem = [...this.state.items]
console.log("Olditem" , oldItem)
const items = oldItem.filter((element , i)=>{
  return i!==id;
})
this.setState({items:items})
}
  render(){
  return (
    <div className=" container-fluid my-5">
      <div className='row'>
        <div className="col-sm-6 mx-auto text-white shadow p-1">
          <h1 className='text-center'>Todays Plan</h1>
          <div className="row">
            <div className="col-9">
              <input type="text" className='form-control' value={this.state.text} onChange={this.handleChange} placeholder='Write here...' />
            </div>
            <div className="col-2">
              <button className='btn btn-warning px-4 font-weight-bold' onClick={this.handleAdd}>Add</button>
            </div>
            <div className="container-fluid">
              {/* <ul className='list-unstyled row  m-5'>
              {
                this.state.items.map((value, i)=>{
                  return <Plan key={i}  id ={i} value= {value} sendData= {this.handleDelete}></Plan>
                })
              }
              
              </ul> */}
<ul className='list-unstyled row m-5'>
  <Plan p= {this.state.items} sendData={this.handleDelete} />

</ul>

              
            </div>
          </div>
        </div>

      </div>
    
    </div>
  )
}}

export default App;
