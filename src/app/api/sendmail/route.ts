import { gobmailer } from '@/app/libs/gobmailer';
import { MailerStatus } from '@/app/libs/transporter';
import { NextRequest, NextResponse } from 'next/server';
import Mail from 'nodemailer/lib/mailer';

const handler = async (req: NextRequest, res: NextResponse<MailerStatus>) => {
  const mailData: Mail.Options = await req.json();
  const mailResult = await gobmailer(mailData);

  if (mailResult.status === 'OK') {
    return Response.json(
      { mailData },
      { status: 200, statusText: `success message to ${mailData.to}` }
    );
  }

  if (mailResult.status === 'ERROR') {
    return Response.json(
      { mailResult },
      { status: 501, statusText: mailResult.details as string }
    );
  }
};

export { handler as GET, handler as POST };
