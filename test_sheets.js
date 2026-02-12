const { google } = require('googleapis');
async function test() {
  try {
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1zu-e95Z94MEdGIcJt6QkpfxU9f2znum0qQFNGPMXdmQ';
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'A1:H5',
    });
    console.log(response.data.values);
  } catch (e) {
    console.error('Auth check failed:', e.message);
  }
}
test();
