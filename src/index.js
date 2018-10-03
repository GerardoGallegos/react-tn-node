import React, { Component } from 'react'
import types from 'prop-types'
import styled from 'styled-components'
import Editor from './Editor'
import noop from './noop'
import Avatar from './Avatar'

const avatar = 'https://ui-avatars.com/api/?background=FF0000&color=fff&size=200&name=J+G&rounded=true'

const NoteBox = styled.div`
  width: 100%;
  height: 100%;
  padding: .5em;
  cursor: pointer;
  transition: .2s ease-out;
  border-radius: 3px;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;

  :hover {
    background: #e9f3f5;
  }
`

const TimeNote = styled.span`
  font-size: 13px;
  color: #c5c5c5;
  font-weight: 100;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-space-between;
  align-items: center;
  justify-content: space-between;
  padding-top: .5em;
`

const AuthorName = styled.span`
  font-size: 10px;
  margin: 0 .5em;
`

const NoteText = styled.div`
  max-width: 90%;
  height: auto;
  font-size: 15px;
  margin: 0 1em;
  text-align: left;
`

const Body = styled.div`
  display: flex;
  justify-content: space-space-between;
  align-items: center;
`

class NoteComponent extends Component {
  state = { isEditing: false }

  static propTypes = {
    // Object Note, { text: '...', createdAt: '' }
    note: types.object,

    // Username
    username: types.string,

    // The src of avatar
    avatar: types.string,

    // Is trigger when the user press enter key
    // The note Object is passed in param
    onChange: types.func,

    // Is trigger when the user press remove button
    // The note Object is passed in param
    onDelete: types.func
  }

  static defaultProps = {
    avatar,
    note: {},
    username: '',
    onChange: noop,
    onDelete: noop
  }

  activeEdit = () => {
    this.setState({ isEditing: true })
  }

  discart = () => {
    this.setState({ isEditing: false })
  }

  confirm = (note) => {
    this.setState({ isEditing: false })
    this.props.onChange(note)
  }

  delete = (note) => {
    this.setState({ isEditing: false })
    this.props.onDelete(note)
  }

  render () {
    const { isEditing } = this.state
    const { note, username, avatar } = this.props

    return (
      <NoteBox onDoubleClick={this.activeEdit}>
        <Body>
          <Avatar size='20px' src={avatar} />
          <NoteText>
            { note.text }
          </NoteText>
        </Body>
        <Footer>
          <AuthorName>
            { username }
          </AuthorName>
          <TimeNote>
            { note.createdAt }
          </TimeNote>
        </Footer>
        <Editor
          isEditing={isEditing}
          note={note}
          onDiscart={this.discart}
          onChange={this.confirm}
          onDelete={this.delete}
        />
      </NoteBox>
    )
  }
}

export default NoteComponent
