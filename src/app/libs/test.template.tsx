import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import React from 'react';

export const TestMail = () => {
  return (
    <Html>
      este es un test
      <Button>button test</Button>
    </Html>
  );
};
