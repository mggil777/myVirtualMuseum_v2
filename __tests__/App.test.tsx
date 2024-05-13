import React from 'react';
import {screen} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import App from '../App';

test('renders correctly', () => {
  renderer.create(<App />);
  const appComponent = screen.getByTestId('App-component');
  expect(appComponent).toBeDefined();
});

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
