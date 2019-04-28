import React from 'react';
import axios from 'axios';

class CategoryComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryArray: [],
      categoryTitle: ''
    };
  }

  componentDidMount(){
    axios.get('/category/get').then( res => {

      let displayNames = [];
      for(let i = 0; i < res.data.length; i++)
      {
        displayNames.push(res.data[i].DisplayName)
      }
    
      this.setState({categoryArray: displayNames, loading: true});
    })
  }

  onChangeTitle = (e) => {
    this.setState({categoryTitle: e.target.value});
    this.props.triggerGetTitleFromCategoryComponent(e.target.value) 
  };

  render() {
    let options = [];
    for(let j = 0; j < this.state.categoryArray.length; j++)
      options.push(<option key={j}>{this.state.categoryArray[j]}</option>)
    return (
      <select
        className="form-control col-6 col-sm-7 col-md-8 col-lg-9" 
        id="naslovSelect"
        onChange = {this.onChangeTitle}
        style={{marginLeft:'10px'}}
      >{options}
      </select>
      
     
    );
  }
}

 
export default CategoryComponent;

