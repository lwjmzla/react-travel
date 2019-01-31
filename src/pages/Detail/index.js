import React from 'react'

class Detail extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div>Detail  {this.props.match.params.id}</div>
    )
  }
}

export default Detail