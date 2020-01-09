import React from 'react';

import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';

import { H1 } from '../components/reusableStyles/typography/Typography.js';
import Hero from '../components/heros/Hero.js';
import { Section } from '../components/reusableStyles/sections/Sections.js';
import Layout5 from '../components/layouts/Layout5';

const contact = () => {
  return (
    <Layout5>
      <Section>
        <H1>Contact Page</H1>
        You can reach me at (587) 501 7726 or fill out the form below
        <SimpleNetlifyForm />
        <Hero />
      </Section>
    </Layout5>
  );
};

export default contact;
