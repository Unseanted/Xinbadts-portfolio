declare module 'nodemailer' {
  type TransportOptions = {
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: {
      user?: string;
      pass?: string;
    };
  };

  type SendMailOptions = {
    from?: string;
    to?: string;
    replyTo?: string;
    subject?: string;
    text?: string;
  };

  interface Transporter {
    sendMail(mailOptions: SendMailOptions): Promise<unknown>;
  }

  function createTransport(options: TransportOptions): Transporter;

  const nodemailer: {
    createTransport: typeof createTransport;
  };

  export default nodemailer;
}
