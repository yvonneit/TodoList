import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { index } = this.props;
    this.props.delete(index);
  }

  render() {
    const { content } = this.props;
    return <div onClick={this.handleDelete}>{content}</div>;
  }
}

export default TodoItem;
