import { gobmailer } from '@/app/libs/gobmailer';
import { MailerOption, MailerStatus } from '@/app/libs/transporter';
import { NextRequest, NextResponse } from 'next/server';

const handler = async (req: NextRequest, res: NextResponse<MailerStatus>) => {
  const mailData: MailerOption<string> = await req.json();
  const mailResult = await gobmailer(mailData);

  if (mailResult.status === 'OK') {
    return Response.json({ mailData }, { status: 200 });
  }
  if (mailResult.status === 'ERROR') {
    return Response.json(
      { mailResult },
      { status: 501, statusText: mailResult.details as string }
    );
  }
};

export { handler as GET, handler as POST };
