import React from 'react';
import Layout5 from '../components/layouts/Layout5';
import {
  Section,
  Container1200,
} from '../components/reusableStyles/sections/Sections';
import { H1 } from '../components/reusableStyles/typography/Typography';

const about = () => {
  return (
    <Layout5>
      <Section>
        <Container1200>
          <H1>This is about page</H1>
        </Container1200>
      </Section>
    </Layout5>
  );
};

export default about;
