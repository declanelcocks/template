import React from 'react'
import { shallow } from 'enzyme'
import SignupButton from '.'

const onSignup = jest.fn()

const wrap = (props = {}) => shallow(<SignupButton {...{ onSignup }} {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
