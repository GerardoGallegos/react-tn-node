import React, { Component } from 'react'
import styled from 'styled-components'
import Editor from './Editor'
import noop from './noop'
import Avatar from './Avatar'

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

  static defaultProps = {
    note: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: 'December 5 2018'
    },
    username: 'Gerardo Gallegos',
    avatar: 'https://ui-avatars.com/api/?background=FF0000&color=fff&size=200&name=Go+G&rounded=true',
    onConfirm: noop,
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
    this.props.onConfirm(note)
  }

  delete = (_id) => {
    this.setState({ isEditing: false })
    this.props.onDelete(_id)
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
          onConfirm={this.confirm}
          onDelete={this.delete}
        />
      </NoteBox>
    )
  }
}

export default NoteComponent
