import React from 'react'
import { shallow } from 'enzyme'
import { Footer } from 'components/layout/footer'

describe('Footer Component', () => {
  it('It should have footer component and text to be "© 2020"', () => {
    const component = shallow(<Footer />)
    const FooterMain = component.find('.footer-component__main-container')

    expect(FooterMain.length).toBe(1)
    expect(FooterMain.text()).toBe('© 2020')
    expect(component).toMatchSnapshot()
  })
})
