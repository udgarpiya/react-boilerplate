import React from 'react'
import { shallow } from 'enzyme'
import { Layout } from 'components/layout'
import { Header } from 'components/layout/header'
import { Footer } from 'components/layout/footer'

describe('Layout Component', () => {
  let component

  const props = {
    children: <h1>Child component</h1>,
    title: 'title',
    description: 'description',
  }

  beforeEach(() => {
    component = shallow(<Layout {...props} />)
  })

  it('It should have main component and child component', () => {
    const LayoutMain = component.find('.layout-component__main-component')
    const ChildContainer = component.find(
      '.layout-component__children-container',
    )

    expect(LayoutMain.length).toBe(1)
    expect(ChildContainer.length).toBe(1)
    expect(ChildContainer.text()).toBe('Child component')
    expect(component).toMatchSnapshot()
  })

  it('It should have Header and Footer component', () => {
    expect(component.containsMatchingElement(<Header />)).toEqual(true)
    expect(component.children().find(Header).length).toEqual(1)
    expect(component.containsMatchingElement(<Footer />)).toEqual(true)
    expect(component.children().find(Footer).length).toEqual(1)
  })
})
