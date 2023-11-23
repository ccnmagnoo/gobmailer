import { MailerStatus } from '@/app/libs/transporter';
import { NextApiRequest, NextApiResponse } from 'next';

const route = async (req: NextApiRequest, res: NextApiResponse<MailerStatus>) => {
  if (req.method === 'POST') {
    res.status(200).json({ status: 'OK', details: 'mail sent to ' });
  } else {
    res.status(501).json({ status: 'ERROR', details: 'bad request method' });
  }
};

export { route as GET, route as POST };
