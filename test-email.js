import transporter, { accountEmail } from './config/nodemailer.js';

try {
  await transporter.verify();
  console.log('SMTP connection successful');

  const info = await transporter.sendMail({
    from: accountEmail,
    to: 'hrishikeshpathak2009@gmail.com',
    subject: 'Subscription Tracker Test',
    text: 'Your email setup is working!',
  });

  console.log('Email sent:', info.messageId);
} catch (error) {
  console.error('Email test failed:', error);
}