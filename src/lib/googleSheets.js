import { google } from 'googleapis';
import path from 'path';
import { promises as fs } from 'fs';

export async function addRowToSheet({ name, email, message }) {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), 'credentials.json'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = '1M2p_bNVcst1k8hh2G39__PV7z2PRR9RAYtKwux7Lrco'; // replace with your real ID
  const range = 'Sheet1!A:C'; // assuming your headers are in A1, B1, C1

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[name, email, message]],
    },
  });
}
