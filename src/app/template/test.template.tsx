import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import React from 'react';

export const TestMail = ({ name }: { name: string }) => {
  return (
    <Html>
      este es un test {name}
      <Button>button test</Button>
    </Html>
  );
};
