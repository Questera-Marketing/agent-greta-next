const { google } = require('googleapis');
const fs = require('fs');

async function getTopics() {
    try {
        const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = '1zu-e95Z94MEdGIcJt6QkpfxU9f2znum0qQFNGPMXdmQ';
        const range = 'A1:H200';

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            console.log('No data found.');
            return [];
        }
        
        console.log('Total rows:', rows.length);
        const headers = rows[0];
        console.log('Headers:', headers);
        console.log('Sample row:', rows[1]);
        const unpublished = rows.slice(1)
            .map((row, index) => {
                const entry = {};
                headers.forEach((header, i) => {
                    entry[header] = row[i];
                });
                entry.rowIndex = index + 2;
                return entry;
            })
            .filter(row => row['Status'] !== 'Published' && row['Topic'])
            .slice(0, 5);

        console.log(JSON.stringify(unpublished, null, 2));
    } catch (err) {
        console.error('Error fetching topics:', err.message);
    }
}

getTopics();
