import React, { Component } from 'react'
import DOM from 'react-dom'
import styled from 'styled-components'

const EditBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  position: absolute;
  top: 0;
`

const Input = styled.textarea`
  flex-grow: 1;
  border: 1px solid #333;
  outline: none;
  border-radius: 2px;
  font-size: 16px;
  margin: 0;
`

const DeleteBtn = styled.button`
  width: 40px;
  border: 0;
  background-color: #ffdede;
  color: #cb6c6c;
  cursor: pointer;
  outline: none;

  :hover {
    background: tomato;
    color: #FFF;
  }
`

class EditPanel extends Component {
  componentDidUpdate () {
    if (this.props.isEditing) {
      const input = DOM.findDOMNode(this.input)
      input.focus()
      input.value = this.props.note.text
      this.input = input
    }
  }

  handleKeyPress = (e) => {
    if (e.keyCode === 27) {
      // Escape
      this.discart()
    }

    if (e.key === 'Enter') {
      this.props.onChange({
        ...this.props.note,
        text: this.input.value
      })
    }
  }

  discart = () => this.props.onDiscart()

  delete = () => this.props.onDelete(this.props.note)

  render () {
    if (!this.props.isEditing) return null
    return (
      <EditBox>
        <Input
          ref={input => { this.input = input }}
          onKeyDown={this.handleKeyPress}
        />
        <DeleteBtn onClick={this.delete}>
          X
        </DeleteBtn>
      </EditBox>
    )
  }
}

export default EditPanel
