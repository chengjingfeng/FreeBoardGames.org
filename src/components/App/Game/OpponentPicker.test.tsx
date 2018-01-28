import * as React from 'react';
import { OpponentPicker, OpponentPickerOption } from './OpponentPicker';
import { ListItem } from 'material-ui/List';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import 'mocha';

describe('Opponent Picker', () => {

  it('should show all 4 options and accept clicks', () => {
    const historyMock = { push: jest.fn() };
    const optionsMock = [
      OpponentPickerOption.EasyAI,
      OpponentPickerOption.MediumAI,
      OpponentPickerOption.HardAI,
      OpponentPickerOption.Friend,
    ];
    const wrapper = shallow((
      <OpponentPicker options={optionsMock} history={historyMock}/>
    ));
    wrapper.find(ListItem).at(0).simulate('click');
    wrapper.find(ListItem).at(1).simulate('click');
    wrapper.find(ListItem).at(2).simulate('click');
    wrapper.find(ListItem).at(3).simulate('click');
    expect(historyMock.push.mock.calls.length).to.equal(4);
  });
});
