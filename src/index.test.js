/* globals test, expect */

import React from 'react'
import { configure } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import Note from './index'
import 'jest-styled-components'

configure({ adapter: new EnzymeAdapter() })

test('Should render the note component', () => {
  const note = renderer.create(<Note />).toJSON()
  expect(note.type).toEqual('div')
  expect(note).toMatchSnapshot()
})
