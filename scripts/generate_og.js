const { createCanvas } = require('canvas');
const fs = require('fs');

function generateOGImage(title, subtitle, filename) {
    const width = 1200;
    const height = 630;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, width, height);

    // Grid pattern
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 1;
    for (let i = 0; i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
    }
    for (let i = 0; i < height; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
    }

    // Logo
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Arial';
    ctx.fillText('GRETA', 60, 80);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px Arial';
    const words = title.split(' ');
    let line = '';
    let y = 240;
    for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        if (testLine.length > 20 && n > 0) {
            ctx.fillText(line, 60, y);
            line = words[n] + ' ';
            y += 90;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, 60, y);

    // Subtitle
    ctx.fillStyle = '#888888';
    ctx.font = '24px Arial';
    ctx.fillText(subtitle, 60, y + 80);

    // Accent line
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(60, y + 120, 80, 8);

    // Footer
    ctx.fillStyle = '#555';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('PROTOCOL V1.0 // BLOG // 2026-02-10', 60, 560);

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filename, buffer);
}

const args = process.argv.slice(2);
if (args.length >= 3) {
    generateOGImage(args[0], args[1], args[2]);
}
