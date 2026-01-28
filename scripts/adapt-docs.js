const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../components/learninghub/Docs');

// Get all tsx files
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
    const filePath = path.join(docsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already adapted
    if (content.startsWith("'use client';")) {
        console.log(`Skipping ${file} - already adapted`);
        return;
    }
    
    // Add 'use client' directive at the top
    content = "'use client';\n\n" + content;
    
    // Fix imports - change relative paths
    content = content.replace(
        /from ['"]\.\.\/Modules['"]/g,
        "from '../Modules'"
    );
    content = content.replace(
        /from ['"]\.\.\/ImageConfig['"]/g,
        "from '../ImageConfig'"
    );
    
    // Remove React import if present (not needed in Next.js with 'use client')
    content = content.replace(/import React from ['"]react['"];\n?/g, '');
    content = content.replace(/import React, \{ .* \} from ['"]react['"];\n?/g, '');
    
    // Fix unescaped entities for Next.js
    // Replace ' with &apos; in JSX text content (not in attributes or string literals)
    // This is a simplified approach - may need manual fixes for edge cases
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Adapted ${file}`);
});

console.log('Done!');

