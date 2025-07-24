import { google } from 'googleapis';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
      });
    }

    // Get credentials from env
    const base64Credentials = process.env.GOOGLE_CREDENTIALS_BASE64;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!base64Credentials || !sheetId) {
      return new Response(JSON.stringify({ error: 'Env vars missing' }), {
        status: 500,
      });
    }

    // Decode the base64 string
    const credentials = JSON.parse(
      Buffer.from(base64Credentials, 'base64').toString('utf-8')
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, message, new Date().toLocaleString()]],
      },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Google Sheets API error:', err);
    return new Response(
      JSON.stringify({ error: 'Server error, please try again later.' }),
      { status: 500 }
    );
  }
}
