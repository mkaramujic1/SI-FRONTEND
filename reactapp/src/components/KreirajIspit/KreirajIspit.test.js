import React from 'react';
import {shallow} from 'enzyme';
import KreirajIspit from './KreirajIspit'

describe('<KreirajIspitDetalji />', () => {

  it('da li ima button za povratak nazad', () => {
    const wrapper = shallow(<KreirajIspit/>)
    expect(wrapper.find('#nazadDugme').exists()).toBe(true)
  })
})