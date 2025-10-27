import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, honeypot } = req.body;

    // Check honeypot field (should be empty)
    if (honeypot) {
      return res.status(400).json({ error: 'Invalid submission' });
    }

    // Validate email
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Send email notification to admin
    const { data, error } = await resend.emails.send({
      from: 'Pulse Pantry Waitlist <onboarding@resend.dev>',
      to: 'mollyroselyons3@gmail.com',
      subject: 'New Waitlist Signup - Pulse Pantry',
      html: `
        <h2>New Waitlist Signup</h2>
        <p>A new user has joined the Pulse Pantry waitlist:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send notification' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
