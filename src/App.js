
import React ,{Component} from 'react'
import axios from 'axios'
import './App.css'



class App extends Component {
  constructor(){
    super()
    this.state = {
sitedate:[]
    }
    this.loaddata = this.loaddata.bind(this)
  }


loaddata(){
  axios.get("https://aimtell.com/files/sites.json").then(res=>{
    console.log(res)
    this.setState({
      sitedate:res.data.sites
    })
  }).catch(err){
    alert("error occured while fetching")
    }
}
  render(){
  const data = this.state.sitedate.map((item,i)=>{
    return(
      <tr>
      <th scope="row">

<img src= {item.icon} alt = {item.name} />
      </th>
    <td>{item.name}</td>
      <td>{item.url}</td>
    <td>{item.active === 1 ? <button  class="active">ACTIVE </button>:<button  class="noactive">INACTIVE </button> }</td>
    </tr>
    )
  })
    return (
      <div className="App">




        <button type="button" class="btn btn-primary" onClick = {this.loaddata}>Load Data</button>
        
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">URl</th>
      <th scope="col">Status</th>

    </tr>
  </thead>
  <tbody>
    {this.state.sitedate.length >0 ?
data :
<div className = "spanvalue">No data to Display Click <strong>Load Data </strong>button to load data</div>}
  </tbody>
  </table>
      </div>
    );
  }
 
}

export default App;
