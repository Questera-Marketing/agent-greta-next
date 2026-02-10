const { google } = require('googleapis');
const fs = require('fs');

async function getTopics() {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'service_account.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1zu-e95Z94MEdGIcJt6QkpfxU9f2znum0qQFNGPMXdmQ';
    const range = 'A1:H50';

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
        console.log('No data found.');
        return [];
    }
    
    const headers = rows[0];
    const unpublished = rows.slice(1)
        .map((row, index) => {
            const entry = {};
            headers.forEach((header, i) => {
                entry[header] = row[i];
            });
            entry.rowIndex = index + 2;
            return entry;
        })
        .filter(row => row['Status'] !== 'Published' && row['Links'])
        .slice(0, 10);

    return unpublished;
}

getTopics().then(topics => console.log(JSON.stringify(topics, null, 2))).catch(console.error);
