import mongoose from 'mongoose';
import { DB_URI } from './config/env.js';
import Subscription from './models/subscription.model.js';
import User from './models/user.model.js'; // Register User schema
import { sendReminderEmail } from './utils/send-email.js';

await mongoose.connect(DB_URI);
console.log('MongoDB connected successfully');



try {
  await mongoose.connect(process.env.DB_URI);

  const subscription = await Subscription.findById(
    '6ada7269e5fefc2826d9065b'
  ).populate('user', 'name email');

  if (!subscription) {
    throw new Error('Subscription not found');
  }

  await sendReminderEmail({
    to: subscription.user.email,
    type: '1 days before reminder',
    subscription,
  });

  console.log('Test reminder email sent successfully');
} catch (error) {
  console.error('Failed to send test email:', error);
} finally {
  await mongoose.disconnect();
}
