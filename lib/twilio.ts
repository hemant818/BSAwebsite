import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = accountSid && authToken ? twilio(accountSid, authToken) : null;

export async function sendWhatsAppMessage(to: string, message: string) {
  if (!client) {
    console.warn("Twilio client is not configured. Skipping WhatsApp message.");
    return false;
  }

  try {
    const response = await client.messages.create({
      body: message,
      from: process.env.TWILIO_WHATSAPP_FROM || "whatsapp:+14155238886",
      to: to.startsWith("whatsapp:") ? to : `whatsapp:${to}`
    });
    console.log(`WhatsApp message sent successfully: ${response.sid}`);
    return true;
  } catch (error) {
    console.error("Failed to send WhatsApp message:", error);
    return false;
  }
}
