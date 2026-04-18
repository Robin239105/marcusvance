export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email } = req.body;

  if (!email || !firstName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'Resend API key not configured on server' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Marcus Vance <onboarding@resend.dev>', // Update this to your verified domain once ready
        to: [email],
        subject: 'Welcome to the 7-Day Challenge Protocol',
        html: `
          <h1>Welcome to the Protocol, ${firstName}!</h1>
          <p>You have successfully enrolled in the Marcus Vance 7-Day Challenge.</p>
          <p>Your journey to personal and financial transformation begins now.</p>
          <br />
          <p>Expect your Day 1 transmission in the next few hours.</p>
          <p>Best regards,</p>
          <p><strong>Marcus Vance Team</strong></p>
        `,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return res.status(200).json({ success: true, data });
    } else {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.message || 'Failed to send email' });
    }
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
