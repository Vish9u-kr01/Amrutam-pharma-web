// app/api/contact/route.js
import { connectToDatabase } from '@/lib/mongodb';
import ContactForm from '@/models/ContactForm';

export async function POST(req) {
  try {
    const body = await req.json();
    await connectToDatabase();
    await ContactForm.create(body);

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (error) {
    console.error('Error saving contact:', error);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), { status: 500 });
  }
}
