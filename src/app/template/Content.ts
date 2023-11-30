import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

export interface Content {
  subject: string;
  title: string;
  salute?: string;
  message: string;
  event: {
    location?: string;
    address: string;
    dateTime: Date;
    map?: (address: string) => string;
  };
}

export interface Review {
  authorName: string;
  authorImage: string;
  reviewText?: string;
}
