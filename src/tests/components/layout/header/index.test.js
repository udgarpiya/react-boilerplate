import React from 'react'
import { shallow } from 'enzyme'
import { Header } from 'components/layout/header'

describe('Header Component', () => {
  it('It should have main component and icon', () => {
    const component = shallow(<Header />)

    const HeaderMain = component.find('.header-component__main-container')

    expect(HeaderMain.length).toBe(1)
    expect(component).toMatchSnapshot()
  })
})
