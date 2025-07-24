import { google } from 'googleapis';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
      });
    }

    // Get credentials from Base64 env
    const base64Credentials = process.env.GOOGLE_CREDENTIALS_BASE64;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!base64Credentials || !sheetId) {
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500 }
      );
    }

    // Decode credentials
    const credentials = JSON.parse(
      Buffer.from(base64Credentials, 'base64').toString('utf-8')
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1', // Adjust if your sheet name/range differs
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, message, new Date().toLocaleString()]],
      },
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Google Sheets API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Server error, please try again later.' }),
      {
        status: 500,
      }
    );
  }
}
