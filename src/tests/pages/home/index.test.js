import React from 'react'
import { shallow } from 'enzyme'
import Home from 'pages/home'

describe('Custom Head Component', () => {
  it('It should match snapshot', () => {
    const page = shallow(<Home />)
    expect(page).toMatchSnapshot()
  })
})
