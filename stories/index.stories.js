import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import 'grommet/scss/vanilla/index.scss';

import Button from 'grommet/components/Button';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Notification from 'grommet/components/Notification';
import Spinning from 'grommet/components/icons/Spinning';
import TableHeader from 'grommet/components/TableHeader';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';


import { Button as CButton } from '../src';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button label="Label" onClick={() => { }} />
  ))
  .add('cbutton with text', () => (
    <div>
      <CButton label="Label" onClick={() => { }} color="pink"/>
      <CButton label="Label" onClick={() => { }} />
    </div>
  ));

storiesOf('Columns', module).add('with text', () => (
  <Columns>
    <Box align='center'
      pad='medium'
      margin='small'
      colorIndex='light-2'>
      Box 1
  </Box>

    <Box align='center'
      pad='medium'
      margin='small'
      colorIndex='light-1'>
      <Button label="Label" onClick={() => { }} />
    </Box>
  </Columns>
));

storiesOf('Hero', module).add('with text', () => (
  <Hero background={<Image src='http://via.placeholder.com/1000x350'
    fit='cover'
    full={true} />}
    backgroundColorIndex='dark'>
    <Box direction='row'
      justify='center'
      align='center'>
      <Box basis='1/2'
        align='end'
        pad='medium' />
      <Box basis='1/2'
        align='start'
        pad='medium'>
        <Heading margin='none'>
          Sample Heading
      </Heading>
      </Box>
    </Box>
  </Hero>
));

storiesOf('Notification', module).add('with text', () => (
  <Notification state='Sample state'
  message='Sample message'
  timestamp={{}} />
));


storiesOf('TableHeader', module).add('Example', () => (
  <Table>
  <TableHeader labels={['Name', 'Note']} />
  <tbody>
    <TableRow>
      <td>
        Alan
      </td>
      <td>
        plays accordion
      </td>
    </TableRow>
    <TableRow>
      <td>
        Chris
      </td>
      <td>
        drops the mic
      </td>
    </TableRow>
    <TableRow>
      <td>
        Tracy
      </td>
      <td>
        travels the world
      </td>
    </TableRow>
  </tbody>
</Table>
  
));


