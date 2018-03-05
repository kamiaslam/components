import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

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
  SVGIcon,
} from 'grommet';

import { CButton, CSelect, CPage, CCard, CParagraph } from '../src';

import 'grommet/grommet.min.css';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Accordion', module).addWithInfo('Example', () => (
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
  .addWithInfo('with text', () => <Button label="Label" onClick={() => {}} />)
  .addWithInfo('cbutton with text', () => (
    <div>
      <CButton label="Label" onClick={() => {}} color="pink" />
      <CButton label="Label" onClick={() => {}} />
    </div>
  ));

storiesOf('Section', module).addWithInfo('Example', () => (
  <Section>
    <h1>Heading 1</h1>
    <p>Some paragraph text</p>
  </Section>
));

storiesOf('Card', module).addWithInfo('Example', () => (
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

storiesOf('Columns', module).addWithInfo('with text', () => (
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

storiesOf('Hero', module).addWithInfo('with text', () => (
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

storiesOf('Notification', module).addWithInfo('with text', () => (
  <Notification state="Sample state" message="Sample message" timestamp={{}} />
));

storiesOf('Split', module).addWithInfo('Example', () => (
  <Split showOnResponsive="both">
    <Box colorIndex="neutral-1" justify="center" align="center" pad="medium">
      Left Side
    </Box>
    <Box colorIndex="neutral-2" justify="center" align="center" pad="medium">
      Right Side
    </Box>
  </Split>
));

storiesOf('TableHeader', module).addWithInfo('Example', () => (
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
  .addWithInfo('Example', () => (
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
  .addWithInfo('Example 2', () => (
    <CSelect
      placeHolder="None"
      options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
      value={undefined}
      onChange={({ target, option, value }) => {
        alert(`your choice: ${value}`);
      }}
    />
  ));

storiesOf('Page', module).addWithInfo('Page', () => {
  const footer = (
    <div>
      <CButton>Action 1</CButton>
      <CButton danger>Action 2</CButton>

      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );

  return (
    <CPage>
      <CCard title="Reset your password" footer={footer}>
        <CParagraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <SVGIcon
            viewBox="0 0 130 108"
            version="1.1"
            type="logo"
            a11yTitle="Locations Finder"
          >
            <g
              stroke="#865CD6"
              strokeWidth="4"
              fill="none"
              strokeLinejoin="round"
            >
              <path d="M40,65 L40,96 L16,107 L16,49 L16,49 L28.4679195,43.2855369 M75.6892892,43.6424091 L88,38 L88,96 L64,107 L64,64.5 L64,64.5 M64,64 L64,107 L40,96 L40,65 M89,38 L113,49 L113,107 L89,96 L89,38 Z M52,49 C56.971,49 61,44.971 61,40 C61,35.029 56.971,31 52,31 C47.029,31 43,35.029 43,40 C43,44.971 47.029,49 52,49 L52,49 Z M52,76 C52,76 28,58 28,40 C28,25 40,16 52,16 C64,16 76,25 76,40 C76,58 52,76 52,76 Z" />
            </g>
          </SVGIcon>
        </CParagraph>
      </CCard>
    </CPage>
  );
});
