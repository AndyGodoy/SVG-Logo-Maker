// index.js is entry point for my application, it will use imports from the 'lib' folder
// index.js
const fs = require('fs');
const { createSVG } = require('svg');

const prompt = (question) => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    readline.question(question, (answer) => {
      readline.close();
      resolve(answer);
    });
  });
};

const generateLogoSVG = async () => {
  const text = await prompt('Enter up to three characters: ');
  const textColor = await prompt('Enter text color (keyword or hexadecimal): ');
  const shapeOptions = ['circle', 'triangle', 'square'];
  const shape = await prompt(`Choose a shape (${shapeOptions.join(', ')}): `);
  const shapeColor = await prompt('Enter shape color (keyword or hexadecimal): ');

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <text x="50%" y="50%" font-size="48" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
};

generateLogoSVG();
