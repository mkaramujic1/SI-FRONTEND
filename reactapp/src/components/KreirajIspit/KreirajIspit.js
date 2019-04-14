import React, {Component} from 'react'

class KreirajIspit extends Component{
  
  render(){
    return(
    <div className='container'>
      <form>
        <div className='row'>
            
            <div className='col-3'>
              <button type="button" class="btn btn-primary" onClick={() => window.open( 'http://www.google.ba')}>Nazad</button>
            </div> 
            <div className='col-3'>
                
            </div> 
            <div className='col-3'>
                
            </div> 
            <div className='col-3'>
                
            </div>    

        </div>
      </form>
    </div>)
  }
}

export default KreirajIspit