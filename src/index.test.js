/* globals test, expect */

import React from 'react'
import { configure, shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Note from './index'

configure({ adapter: new EnzymeAdapter() })

test('Should render the note coponent', () => {
  const note = shallow(<Note />)

  expect(note.find('div').length).toBe(0)
})
