import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => <Component slice={variation} />);
});


