import React, {Component} from 'react';

class PostWriteForm extends Component {
  state = {
    title: '',
    description: ''
  };

  onChangeInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  render() {
    return (
      <div>
        <span>title</span>
        <input name="title" onChange={this.onChangeInput} type="text" value={this.state.title} />
        <span>description</span>
        <input name="description" onChange={this.onChangeInput} type="text" value={this.state.description}/>
      </div>

    );
  }
}

PostWriteForm.propTypes = {};

export default PostWriteForm;
