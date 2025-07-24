// src/app/api/contact/route.js
import { google } from 'googleapis';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Missing fields' }), { status: 400 });
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[new Date().toLocaleString(), name, email, message]],
      },
    });

    return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
  } catch (err) {
    console.error('Sheets error:', err);
    return new Response(JSON.stringify({ message: 'Google Sheets error' }), { status: 500 });
  }
}
