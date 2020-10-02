import React from 'react'
import Helmet from 'react-helmet'
import { shallow, mount } from 'enzyme'
import { CustomHead } from 'components/custom-head'

const props = {
  title: 'title',
  description: 'description',
}

describe('Custom Head Component', () => {
  it('It should match snapshot', () => {
    const component = shallow(<CustomHead {...props} />)
    expect(component).toMatchSnapshot()
  })

  it('It should mhave title as "Space X" and description as "description" ', () => {
    const component = mount(<CustomHead {...props} />)

    const helmet = Helmet.peek()
    expect(helmet.title).toBe(props.title)
    expect(helmet.metaTags[0].content).toBe(props.description)
  })
})
