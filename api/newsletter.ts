import type { VercelRequest, VercelResponse } from '@vercel/node';

const apiKey = process.env.VITE_BREVO_API_KEY!;
const listId = Number(process.env.VITE_BREVO_LIST_ID!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
        'accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    const data = await brevoRes.json();

    if (brevoRes.ok) {
      return res.status(200).json({ message: 'Thank you for subscribing!' });
    } else {
      return res.status(brevoRes.status).json({ message: data.message || 'Subscription error.' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
