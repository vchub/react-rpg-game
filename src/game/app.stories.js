import React from 'react';
import { action } from '@storybook/addon-actions';

import App from './app';

export default {
  component: App,
  title: 'RPG Game',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Default = () => <App />;
