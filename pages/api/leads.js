import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import twilio from 'twilio';

dotenv.config();

const uri = process.env.MONGODB_URI;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const recipientPhoneNumber = process.env.RECIPIENT_PHONE_NUMBER;

const client = new twilio(twilioAccountSid, twilioAuthToken);

export default async function leads(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, _id = new ObjectId() } = req.body;
    const lead = {
      name,
      email,
      phone,
      _id,
    }; 

    const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await mongoClient.connect();
      const leadsCollection = mongoClient.db('yulia').collection('leads');
      await leadsCollection.insertOne(lead);

      const message = `
      התקבל ליד חדש!
       ${name}\nEmail: ${email}\nPhone: ${phone}`;
    await client.messages.create({
      body: message,
      from: `whatsapp:${twilioPhoneNumber}`,
      to: `whatsapp:${recipientPhoneNumber}`,
    });
    
    res.status(200).json({ message: 'Lead saved successfully' });
    
    } catch (error) {
      console.error('Error saving lead:', error);
      res.status(500).json({ message: 'Error saving lead' });
    } finally {
      await mongoClient.close();
    }
  } else {
    res.status(400).json({ message: 'Invalid request method' });
  }
}
