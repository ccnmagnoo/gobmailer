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
  location?: string;
  address: string;
  map?: (address: string) => string;
  date: Date;
}

export interface Review {
  authorName: string;
  authorImage: string;
  reviewText?: string;
}
