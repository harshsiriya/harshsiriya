import { addRowToSheet } from '@/lib/googleSheets';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing fields' }),
        { status: 400 }
      );
    }

    // Write to Google Sheet
    await addRowToSheet({ name, email, message });

    return new Response(
      JSON.stringify({ message: 'Message saved successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving message:', error);
    return new Response(
      JSON.stringify({ message: 'Server error', error: error.message }),
      { status: 500 }
    );
  }
}
