import { sendSMS } from '@/lib/send-sms'; // Adjust path if needed

export async function POST(req) {
  try {
    const { phoneNumber, message } = await req.json();

    if (!phoneNumber || !message) {
      return new Response(JSON.stringify({ error: 'Phone number and message are required' }), {
        status: 400,
      });
    }

    const smsResult = await sendSMS(phoneNumber, message);
    return new Response(JSON.stringify({ success: true, sid: smsResult.sid }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'SMS send failed' }), {
      status: 500,
    });
  }
}
