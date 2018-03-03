import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import {
  Accordion,
  AccordionPanel,
  Paragraph,
  Button,
  Columns,
  Box,
  Hero,
  Heading,
  Image,
  Notification,
  Spinning,
  TableHeader,
  Table,
  TableRow,
  Select,
  Split,
  Section,
  Card,
  Anchor,
} from 'grommet';

import { CButton, CSelect, CPage, CCard } from '../src';

import 'grommet/grommet.min.css';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Accordion', module).add('Example', () => (
  <Accordion>
    <AccordionPanel heading="First Title">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Paragraph>
    </AccordionPanel>
    <AccordionPanel heading="Second Title">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Paragraph>
    </AccordionPanel>
    <AccordionPanel heading="Third Title">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Paragraph>
    </AccordionPanel>
  </Accordion>
));

storiesOf('Button', module)
  .add('with text', () => <Button label="Label" onClick={() => {}} />)
  .add('cbutton with text', () => (
    <div>
      <CButton label="Label" onClick={() => {}} color="pink" />
      <CButton label="Label" onClick={() => {}} />
    </div>
  ));

storiesOf('Section', module).add('Example', () => (
  <Section>
    <h1>Heading 1</h1>
    <p>Some paragraph text</p>
  </Section>
));

storiesOf('Card', module).add('Example', () => (
  <div>
    <Columns size="medium" justify="between">
      <Card
        thumbnail="http://via.placeholder.com/350x150"
        heading="Sample Heading"
        description="Sample description providing more details."
        headingStrong={false}
        link={<Anchor href="" label="Sample anchor" />}
        contentPad="none"
      />

      <Card
        thumbnail="http://via.placeholder.com/350x150"
        heading="Sample Heading"
        description="Sample description providing more details."
        headingStrong={false}
        link={<Anchor href="" label="Sample anchor" />}
        contentPad="none"
      />

      <Card
        thumbnail="http://via.placeholder.com/350x150"
        heading="Sample Heading"
        description="Sample description providing more details."
        headingStrong={false}
        link={<Anchor href="" label="Sample anchor" />}
        contentPad="none"
      />
    </Columns>
  </div>
));

storiesOf('Columns', module).add('with text', () => (
  <Columns size="small" masonry={false} maxCount={4}>
    <Box align="center" pad="medium" margin="small" colorIndex="light-2">
      Box 1
    </Box>

    <Box align="center" pad="medium" margin="small" colorIndex="light-1">
      <Button label="Label" onClick={() => {}} />
    </Box>

    <Box align="center" pad="medium" margin="small" colorIndex="light-2">
      Box 1
    </Box>
    <Box align="center" pad="medium" margin="small" colorIndex="light-2">
      Box 2
    </Box>
    <Box align="center" pad="medium" margin="small" colorIndex="light-2">
      Box 3
    </Box>
    <Box align="center" pad="medium" margin="small" colorIndex="light-2">
      Box 4
    </Box>
    <Box align="center" pad="medium" margin="small" colorIndex="light-2">
      Box 5
    </Box>
    <Box align="center" pad="medium" margin="small" colorIndex="light-2">
      Box 6
    </Box>
  </Columns>
));

storiesOf('Hero', module).add('with text', () => (
  <Hero
    background={
      <Image
        src="http://via.placeholder.com/1000x350"
        fit="cover"
        full={true}
      />
    }
    backgroundColorIndex="dark"
  >
    <Box direction="row" justify="left" align="left">
      <Box basis="1" align="right" pad="large">
        <Heading margin="none">Sample Heading</Heading>
      </Box>
    </Box>
  </Hero>
));

storiesOf('Notification', module).add('with text', () => (
  <Notification state="Sample state" message="Sample message" timestamp={{}} />
));

storiesOf('Split', module).add('Example', () => (
  <Split showOnResponsive="both">
    <Box colorIndex="neutral-1" justify="center" align="center" pad="medium">
      Left Side
    </Box>
    <Box colorIndex="neutral-2" justify="center" align="center" pad="medium">
      Right Side
    </Box>
  </Split>
));

storiesOf('TableHeader', module).add('Example', () => (
  <Table>
    <TableHeader
      labels={['Name', 'Account Number', 'Client ID', 'Account Type', 'Status']}
    />
    <tbody>
      <TableRow>
        <td>Alan Scott</td>
        <td>01129990</td>
        <td>11-223</td>
        <td>Current</td>
        <td>Active</td>
      </TableRow>
      <TableRow>
        <td>Eric Smith</td>
        <td>01129990</td>
        <td>11-233</td>
        <td>Savings</td>
        <td>Active</td>
      </TableRow>
      <TableRow>
        <td>John Doe</td>
        <td>01129990</td>
        <td>11-223</td>
        <td>Current</td>
        <td>Active</td>
      </TableRow>
      <TableRow>
        <td>Jane Doe</td>
        <td>02129990</td>
        <td>10-123</td>
        <td>Current</td>
        <td>Active</td>
      </TableRow>
    </tbody>
  </Table>
));

storiesOf('Select', module)
  .add('Example', () => (
    <div style={{ width: '400px' }}>
      <Select
        placeHolder="None"
        options={[
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
        ]}
        value={undefined}
        onChange={({ target, option, value }) => {
          alert(`your choice: ${value}`);
        }}
      />
    </div>
  ))
  .add('Example 2', () => (
    <CSelect
      placeHolder="None"
      options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
      value={undefined}
      onChange={({ target, option, value }) => {
        alert(`your choice: ${value}`);
      }}
    />
  ));

storiesOf('Page', module).add('Page', () => (
  <CPage>
    <CCard title="Reset your password" />
  </CPage>
));
