const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '..', 'apps', 'client', 'public', 'images');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const images = [
  {
    url: 'https://hijala.com/wp-content/uploads/2024/09/02-1.webp',
    dest: path.join(dir, 'trait-hoarder-banner.webp')
  },
  {
    url: 'https://hijala.com/wp-content/uploads/2024/09/01-2-webp.jpg',
    dest: path.join(dir, 'trait-hoarder-cover.jpg')
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://hijala.com/'
      }
    };
    https.get(url, options, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: Status ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${url} to ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const img of images) {
    try {
      await download(img.url, img.dest);
    } catch (err) {
      console.error(err);
    }
  }
}

run();
