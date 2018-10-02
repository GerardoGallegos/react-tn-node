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

const Button = styled.button`
  width: 35px;
  border: 1px solid #f1f1f1;
  border-radius: 3px;
  background: #FFF;
  color: #bbafaf;
  cursor: pointer;
  outline: none;
  transition: background 150ms ease-out;
  will-change: background;
`

const Delete = styled(Button)`
  :hover {
    background: #e24949;
    color: #FFF;
  }
`

const Confirm = styled(Button)`
  :hover {
    background: #524e4e;
    color: #FFF;
  }
`

const Discart = styled(Button)`
  :hover {
    background: #ffc107;
    color: #FFF;
  }
`

const Buttons = styled.div`
  background-color: #FFF;
  width: 120px;
  display: flex;
  justify-content: space-around;
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
        <Buttons>
          <Confirm>OK</Confirm>
          <Discart>X</Discart>
          <Delete onClick={this.delete}>XX</Delete>
        </Buttons>
      </EditBox>
    )
  }
}

export default EditPanel
