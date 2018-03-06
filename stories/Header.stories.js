import React from 'react';
import { storiesOf } from '@storybook/react';

import { CHeader } from '../src';

storiesOf('Header', module).add('header', () => <CHeader className="custom-header" />);
