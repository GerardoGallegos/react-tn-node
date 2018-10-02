/* globals test, expect */

import React from 'react'
import { configure } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Editor from './Editor'

configure({ adapter: new EnzymeAdapter() })

test('Must not render editor if isEditing prop is false', () => {
  const editor = renderer.create(<Editor />).toJSON()
  expect(editor).toEqual(null)
})

test('Must render Editor', () => {
  const editor = renderer.create(<Editor isEditing />).toJSON()
  expect(editor.type).toEqual('div')
})

test('Must render Editor', () => {
  const editor = renderer.create(<Editor isEditing />).toJSON()
  expect(editor.type).toEqual('div')
})
