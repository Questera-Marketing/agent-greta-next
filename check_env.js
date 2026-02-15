console.log('Keys:', Object.keys(process.env).filter(k => k.toLowerCase().includes('google') || k.toLowerCase().includes('sheet') || k.toLowerCase().includes('service')));
