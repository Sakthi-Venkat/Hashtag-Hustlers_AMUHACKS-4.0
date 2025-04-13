import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// Initialize the Twilio client
const client = twilio(accountSid, authToken);

/**
 * Sends an SMS using Twilio
 * @param {string} to - The recipient's phone number (e.g. '+919876543210')
 * @param {string} message - The message content
 */
export async function sendSMS(to, message) {
  try {
    const response = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: to,
    });
    console.log('SMS sent successfully:', response.sid);
    return response;
  } catch (error) {
    console.error('Failed to send SMS:', error);
    throw error;
  }
}
