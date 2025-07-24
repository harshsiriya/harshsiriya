import { google } from 'googleapis';

export async function POST(req) {
  const body = await req.json();

  const credentialsBase64 = process.env.GOOGLE_CREDENTIALS_BASE64;
  if (!credentialsBase64) {
    return new Response(JSON.stringify({ message: 'Missing credentials' }), { status: 500 });
  }

  const credentialsJson = Buffer.from(credentialsBase64, 'base64').toString('utf-8');
  const credentials = JSON.parse(credentialsJson);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[body.name, body.email, body.message, new Date().toLocaleString()]],
      },
    });

    return new Response(JSON.stringify({ message: 'Success', data: response.data }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error appending to spreadsheet:', error);
    return new Response(JSON.stringify({ message: 'Google Sheets error' }), { status: 500 });
  }
}
