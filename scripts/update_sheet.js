const { google } = require('googleapis');
const fs = require('fs');

async function updateStatus(rowIndex, status, link) {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'service_account.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1zu-e95Z94MEdGIcJt6QkpfxU9f2znum0qQFNGPMXdmQ';
    
    // Status is Column B (index 1), Link is Column C (index 2), Date is Column D (index 3)
    const values = [
        [status, link, new Date().toISOString().split('T')[0]]
    ];

    await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `B${rowIndex}:D${rowIndex}`,
        valueInputOption: 'RAW',
        resource: { values },
    });
}

const args = process.argv.slice(2);
if (args.length >= 3) {
    updateStatus(parseInt(args[0]), args[1], args[2]).catch(console.error);
}
