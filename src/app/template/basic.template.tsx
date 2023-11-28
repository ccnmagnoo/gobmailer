import React from 'react';
import { Content, Review } from './Content';
import { Html } from '@react-email/html';
import { Body, Container, Head, Preview, Section, Text } from '@react-email/components';

interface Props extends Partial<Content> {}

export const Basic = (c: Props) => {
  const previewText = c.title ?? 'Seremi de Energía V';
  return (
    <Html lang='es' dir='ltr'>
      <Head></Head>
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text>{}</Text>
        </Container>
        <Section style={footer}></Section>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#efeef1',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  width: '580px',
  margin: '30px auto',
  backgroundColor: '#ffffff',
};

const footer = {
  width: '580px',
  margin: '0 auto',
};
