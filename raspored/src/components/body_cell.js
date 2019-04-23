import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import Modal from 'react-modal';
import { stringify } from 'querystring';
import axios from 'axios';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



const MojModal = (ovaj) => {
  ovaj=ovaj.ovaj; //samo ignorisite ovo i ponasajte se u daljem dijelu da je ovaj == this znaci npr ovaj.props.termin.sala ce vam vratiti salu iz bekendaaa
  if(!ovaj.state.showModal)
    return null;
  return(
    //ovo je citav modal, html mijenjate i tu nakon biljeske treba dodati textbox polje za unos azuriranje i brisanje biljeske
    
    <div>
            <Modal 
               isOpen={ovaj.state.showModal}
               contentLabel="Minimal Modal Example"
               style = {customStyles}
            >
              <b>Tip aktivnosti: </b>{ovaj.props.termin.title} <br></br>
              <b>Predmet: </b><a href="http://www.etf.unsa.ba" >{ovaj.props.termin.predmet}</a> <br></br>
              <b>Sala: </b><a href="http://www.etf.unsa.ba">{ovaj.props.termin.sala}</a><br></br> 
              <b>Bilješka: </b>{ovaj.props.termin.biljeska} <br></br>            
              <b>Unesi novu/ažuriraj staru bilješku</b>    <br/>
              <input type="text" className="form-control" aria-describedby="Unesi zabilješku" placeholder="Bilješka" value =  {ovaj.state.title} onChange={ovaj.handleChange}></input>
              <br/>
              <div style={divStyle}>
              <button style={stylishLeft} className = 'btn btn-primary' onClick= {ovaj.handleClick}>Unesi</button>
              <button style={stylishCenter} type="button" class="btn btn-danger" onClick= {ovaj.handleDestroy}>Obriši</button>
              <button style={stylishRight} className = 'btn btn-secondary' onClick={ovaj.handleCloseModal}>Zatvori</button>
              </div>
            </Modal>
    </div>
  );
}

const MojHover = (ovaj) => {
  ovaj=ovaj.ovaj; //samo ignorisite ovo i ponasajte se u daljem dijelu da je ovaj == this znaci npr ovaj.props.termin.sala ce vam vratiti salu iz bekendaaa
  if(!ovaj.state.isHover)
    return null; 

  return(
    //ovo je citav hover
    //ako se celija hovera a ima biljesku, umjesto slicice se prikazuje biljeska    
    <div> 
      <b>{ovaj.props.termin.biljeska}</b>
         <MojModal ovaj={ovaj}></MojModal>      
    </div>
  );
}


export class Body_Cell extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      isHover: false
    };

        
    
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  componentDidMount () {
    Modal.setAppElement('body');
 }

  handleHoverOn () {
   this.setState({ isHover: true });
 }

  handleHoverOff () {
  this.setState({ isHover: false });
 }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleClick(event) {
    this.setState({title: event.target.value});

    //ukoliko nema biljeska onda samo ubaci novu
    if(this.props.termin.biljeska == undefined || this.props.termin.biljeska=="")
    {      
      if(!(this.state.title == undefined || this.state.title==""))
      {
        this.props.termin.biljeska = this.state.title;
        console.log('http://localhost:3001/addZabiljeska'+'/'+this.props.termin.biljeska+'/'+this.props.idStudenta+'/'+this.props.termin.id+'/'+this.props.termin.ispit);
        axios({
          method:'get',
          url:'http://localhost:3001/addZabiljeska'+'/'+this.props.termin.biljeska+'/'+this.props.idStudenta+'/'+this.props.termin.id+'/'+this.props.termin.ispit,
          responseType:'json'
        })
          .then(function (response) {
            if(response.data.success)
            {
              //signalna poruka kad je dodan

            }
            else
            {
              //signalna poruka kad nije dodan
            }
            console.log(response);
           });               
      }      
    }
    else{
      if(!(this.state.title == undefined || this.state.title==""))
      {
        this.props.termin.biljeska = this.state.title;
        console.log('http://localhost:3001/updateZabiljeska'+'/'+this.state.title+'/'+this.props.idStudenta+'/'+this.props.termin.id+'/'+this.props.termin.ispit);
        axios({
          method:'get',
          url:'http://localhost:3001/updateZabiljeska'+'/'+this.state.title+'/'+this.props.idStudenta+'/'+this.props.termin.id+'/'+this.props.termin.ispit,
          responseType:'json'
        })
          .then(function (response) {
            if(response.data.success)
            {
              //signalna poruka kad je update-ano

            }
            else
            {
              //signalna poruka kad nije update-ano
            }
            console.log(response);
           });
      }        
    }    
  }

  handleDestroy(event) {
    this.setState({title: event.target.value});

    this.props.termin.biljeska = this.state.title;
    console.log('http://localhost:3001/deleteZabiljeska'+'/'+this.props.idStudenta+'/'+this.props.termin.id+'/'+this.props.termin.ispit);
      axios({
        method:'get',
        url:'http://localhost:3001/deleteZabiljeska'+'/'+this.props.idStudenta+'/'+this.props.termin.id+'/'+this.props.termin.ispit,
        responseType:'json'
      })
        .then(function (response) {
          if(response.data.success)
          {
            //signalna poruka kad je uspjelo
         }
          else
          {
            //signalna poruka kad nije uspjelo
          }
          console.log(response);
         });  
  }



  
  render() {
    if(this.props.redniBroj%2==0)
    {
      
      // Ukoliko je paran red
      if(this.props.termin==undefined)
      {
        //Ako je celija prazna
        return (
          <td style={tdStyleParan}></td>
        );
      }     
      else
      {
        if(this.props.termin.biljeska != null && this.props.termin.biljeska!="")
        {
          if(this.state.isHover)
          {
            //mis je iznad celije, celija ima biljesku
           return (
             <td style={tdStyleParan} onMouseEnter = {(this.state).isHover ? null : this.handleHoverOn} onMouseLeave = {(this.state).isHover ? this.handleHoverOff : null} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
         
              <MojHover ovaj={this}></MojHover>
              
                 <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
                 <MojModal ovaj={this}></MojModal> 
                 
             </td>
            
           );
          }        
          else
          {
           //Mis nije iznad celije, celija ima biljesku
          return(
            <td style={tdStyleParan} onMouseEnter = {(this.state).isHover ? null : this.handleHoverOn} onMouseLeave = {(this.state).isHover ? this.handleHoverOff : null} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
          
               <img src="slicicaZabiljeska.png" height="20" width="20" ></img>
               <br></br>
                  <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
                  <MojModal ovaj={this}></MojModal> 
              </td>
            );
          }
        }
        else if(this.props.termin.biljeska == null || this.props.termin.biljeska=="")
        {
          // Celija nema biljesku
          return (
            <td style={tdStyleParan} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
           
                <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
                <MojModal ovaj={this}></MojModal>           
            </td>       
          );
        }
      }
    }
    else
    {
      // Ukoliko je neparan red
      if(this.props.termin==undefined)
      {
        //Ako je celija prazna
        return (
          <td style={tdStyleNeparan}></td>
        );
      }     
      else
      {
        if(this.props.termin.biljeska != null && this.props.termin.biljeska!="")
        {
          if(this.state.isHover)
          {
            //Mis je iznad celije, celija ima biljesku
            return (
              <td style={tdStyleNeparan} onMouseEnter = {(this.state).isHover ? null : this.handleHoverOn} onMouseLeave = {(this.state).isHover ? this.handleHoverOff : null} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
              <MojHover ovaj={this}></MojHover>
               <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
                  <MojModal ovaj={this}></MojModal>
                  
              </td>
            );
          }        
          else
          {
            //Mis nije iznad celije, celija ima biljesku
            return (
              <td style={tdStyleNeparan} onMouseEnter = {(this.state).isHover ? null : this.handleHoverOn} onMouseLeave = {(this.state).isHover ? this.handleHoverOff : null} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
              <img src="slicicaZabiljeska.png" height="20" width="20"></img>
               <br></br>   <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
                  <MojModal ovaj={this}></MojModal>
                  
              </td>
            );
          }      
        }
        else if(this.props.termin.biljeska == null || this.props.termin.biljeska=="")
        {
          //Celija nema biljesku
          return (
            <td style={tdStyleNeparan} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
            
                <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
                <MojModal ovaj={this}></MojModal>
                <MojHover ovaj={this}></MojHover>
                
            </td>
          );
        } 
      } 
    }
  }
}

const tdStyleNeparan=
{
    rowspan:'5',
    border:'2px solid #504c4c',
    textAlign:'center',
    padding:'8px',
    textAlign: 'left',
    width:'10vw', 
    backgroundColor: 'rgba(240,240,240)' 
}

const tdStyleParan=
{
    rowspan:'5',
    border:'2px solid #504c4c',
    textAlign:'center',
    padding:'8px',
    textAlign: 'left',
    width:'10vw', 
    backgroundColor:'lightgoldenrodyellow' 
}
const stylishLeft=
{
    float:'left'
}
const stylishRight=
{
    float:'right'
}
const stylishCenter=
{  
  margin: '0 auto'  
}
const divStyle=
{
  display: 'flex',
  justifyContent: 'center'
}


export default Body_Cell

/*
render() {
    if(this.props.redniBroj%2==0)
    {
      
      // Ukoliko je paran red
      if(this.props.termin==undefined)
      {
        //Ako je celija prazna
        return (
          <td style={tdStyleParan}></td>
        );
      }     
      else
      {
        if(this.props.termin.biljeska != null && this.props.termin.biljeska!="") {
          
        return (
          <td style={tdStyleParan} onMouseEnter = {(this.state).isHover ? null : this.handleHoverOn} onMouseLeave = {(this.state).isHover ? null : this.handleHoverOff} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
      
           <img src="slicicaZabiljeska.png" height="20" width="20" ></img>
           <br></br>
              <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
              <MojModal ovaj={this}></MojModal> 
          </td>
         
        );
      
      }

    else if(this.props.termin.biljeska == null || this.props.termin.biljeska=="")
    return (
      <td style={tdStyleParan} onMouseEnter = {(this.state).isHover ? null : this.handleHoverOn} onMouseLeave = {(this.state).isHover ? null : this.handleHoverOff} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
     
          <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
          <MojModal ovaj={this}></MojModal>
         
      </td>
     
    );
  
  }
     
    }
    else
    {
      // Ukoliko je neparan red
      if(this.props.termin==undefined)
      {
        //Ako je celija prazna
        return (
          <td style={tdStyleNeparan}></td>
        );
      }     
      else
      {
        if(this.props.termin.biljeska != null && this.props.termin.biljeska!="") {
        return (
          <td style={tdStyleNeparan} onMouseEnter = {(this.state).isHover ? null : this.handleHoverOn} onMouseLeave = {(this.state).isHover ? null : this.handleHoverOff} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
          <img src="slicicaZabiljeska.png" height="20" width="20"></img>
           <br></br>   <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
              <MojModal ovaj={this}></MojModal>
              
          </td>
        ); }
        else if(this.props.termin.biljeska == null || this.props.termin.biljeska=="") {
          return (
            <td style={tdStyleNeparan} onMouseEnter = {(this.state).isHover ? null : this.handleHoverOn} onMouseLeave = {(this.state).isHover ? null : this.handleHoverOff} onClick = {(this.state).showModal ? null : this.handleOpenModal}>
            
                <b>{this.props.termin.title + ' '}</b>{'('+ this.props.termin.sala+')'} {this.props.termin.predmet}
                <MojModal ovaj={this}></MojModal>
                
            </td>
          );

        } 




      } 
    }



  }
  */