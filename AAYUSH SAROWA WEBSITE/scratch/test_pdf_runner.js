const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, '..', 'js', 'vendor', 'jspdf.umd.min.js'), 'utf8');

const browserWindow = {
  atob: str => Buffer.from(str, 'base64').toString('binary'),
  btoa: str => Buffer.from(str, 'binary').toString('base64'),
  navigator: { userAgent: 'Chrome/120.0' }
};
browserWindow.window = browserWindow;
browserWindow.self = browserWindow;

const runner = new Function('window', 'self', 'module', 'exports', 'define', code);
runner.call(browserWindow, browserWindow, browserWindow, undefined, undefined, undefined);

const jsPDF = (browserWindow.jspdf && browserWindow.jspdf.jsPDF) || browserWindow.jsPDF;

const doc = new jsPDF({
  orientation: 'landscape',
  unit: 'mm',
  format: 'a4'
});

const pageWidth = 297;
const pageHeight = 210;
const name = 'Aayush Sarowa';
const fullCredentialString = 'DEV-58291';
const inst = 'PM Shri Kendriya Vidyalaya Churu';
const district = 'Churu';
const state = 'Rajasthan';
const country = 'India';
const age = '12';
const occ = 'Founder & Systems Architect';
const track = 'Low-Level Systems & Kernel (C++, Rust, WASM)';
const github = '@aayushsarowa';
const hashSig = '0x3f7a9c1...9c1';
const timestamp = new Date().toUTCString();

// 1. Deep Cyber Background
doc.setFillColor(11, 15, 25);
doc.rect(0, 0, pageWidth, pageHeight, 'F');

// 2. Borders
doc.setLineWidth(1.2);
doc.setDrawColor(76, 215, 246);
doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

doc.setLineWidth(0.4);
doc.setDrawColor(208, 188, 255);
doc.rect(13, 13, pageWidth - 26, pageHeight - 26);

// Corner Cyber Accents
const cornerLen = 12;
doc.setLineWidth(1.8);
doc.setDrawColor(76, 215, 246);
doc.line(8, 8, 8 + cornerLen, 8);
doc.line(8, 8, 8, 8 + cornerLen);
doc.line(pageWidth - 8, 8, pageWidth - 8 - cornerLen, 8);
doc.line(pageWidth - 8, 8, pageWidth - 8, 8 + cornerLen);
doc.line(8, pageHeight - 8, 8 + cornerLen, pageHeight - 8);
doc.line(8, pageHeight - 8, 8, pageHeight - 8 - cornerLen);
doc.line(pageWidth - 8, pageHeight - 8, pageWidth - 8 - cornerLen, pageHeight - 8);
doc.line(pageWidth - 8, pageHeight - 8, pageWidth - 8, pageHeight - 8 - cornerLen);

// 3. Header Banner
doc.setFont('helvetica', 'bold');
doc.setTextColor(76, 215, 246);
doc.setFontSize(11);
doc.text('dEVELoPE CLUB // CRYPTOGRAPHIC MEMBERSHIP CHARTER PROTOCOL', pageWidth / 2, 24, { align: 'center' });

doc.setTextColor(223, 226, 239);
doc.setFontSize(8);
doc.setFont('courier', 'normal');
doc.text('GLOBAL YOUTH TECH GUILD // FOUNDED BY AAYUSH SAROWA (AGE 12) // PM SHRI KV CHURU', pageWidth / 2, 29, { align: 'center' });

// 4. Main Certificate Title
doc.setFont('helvetica', 'bold');
doc.setTextColor(208, 188, 255);
doc.setFontSize(22);
doc.text('OFFICIAL CERTIFICATE OF INDUCTION', pageWidth / 2, 42, { align: 'center' });

doc.setFont('helvetica', 'normal');
doc.setTextColor(150, 160, 180);
doc.setFontSize(10);
doc.text('This is to certify that the following candidate has officially qualified as a Verified Junior Systems Fellow:', pageWidth / 2, 48, { align: 'center' });

// 5. Candidate Name Box
doc.setFillColor(24, 27, 37);
doc.roundedRect(40, 53, pageWidth - 80, 15, 2, 2, 'F');
doc.setDrawColor(76, 215, 246);
doc.setLineWidth(0.5);
doc.roundedRect(40, 53, pageWidth - 80, 15, 2, 2, 'S');

doc.setFont('helvetica', 'bold');
doc.setTextColor(255, 255, 255);
doc.setFontSize(17);
doc.text(name.toUpperCase(), pageWidth / 2, 63, { align: 'center' });

// 6. SPECIALISED REGISTRATION NUMBER HIGHLIGHT BOX
doc.setFillColor(16, 22, 36);
doc.roundedRect(55, 73, pageWidth - 110, 16, 3, 3, 'F');
doc.setDrawColor(208, 188, 255);
doc.setLineWidth(0.8);
doc.roundedRect(55, 73, pageWidth - 110, 16, 3, 3, 'S');

doc.setFont('courier', 'bold');
doc.setTextColor(76, 215, 246);
doc.setFontSize(10);
doc.text('SPECIALISED REGISTRATION NO.', pageWidth / 2, 79, { align: 'center' });

doc.setFontSize(14);
doc.setTextColor(255, 255, 255);
doc.text(fullCredentialString, pageWidth / 2, 85, { align: 'center' });

// 7. Telemetry & Credentials Table
const tableX = 30;
const tableY = 96;
const tableW = pageWidth - 60;
const tableH = 46;

doc.setFillColor(20, 24, 34);
doc.rect(tableX, tableY, tableW, tableH, 'F');
doc.setDrawColor(73, 68, 84);
doc.setLineWidth(0.3);
doc.rect(tableX, tableY, tableW, tableH, 'S');

// Row 1
doc.setFont('helvetica', 'bold');
doc.setTextColor(149, 142, 160);
doc.setFontSize(8.5);
doc.text('ACADEMIC INSTITUTION / SCHOOL NODE:', tableX + 5, tableY + 8);
doc.setTextColor(223, 226, 239);
doc.text(inst, tableX + 75, tableY + 8);

// Row 2
doc.setTextColor(149, 142, 160);
doc.text('GEOGRAPHIC COORDINATES:', tableX + 5, tableY + 17);
doc.setTextColor(223, 226, 239);
doc.text(district + ', ' + state + ', ' + country, tableX + 75, tableY + 17);

// Row 3
doc.setTextColor(149, 142, 160);
doc.text('CHRONOLOGICAL AGE & ROLE:', tableX + 5, tableY + 26);
doc.setTextColor(76, 215, 246);
doc.text(age + ' Years • ' + occ, tableX + 75, tableY + 26);

// Row 4
doc.setTextColor(149, 142, 160);
doc.text('PRIMARY GUILD TRACK FOCUS:', tableX + 5, tableY + 35);
doc.setTextColor(208, 188, 255);
doc.text(track, tableX + 75, tableY + 35);

// Row 5
doc.setTextColor(149, 142, 160);
doc.text('GITHUB REPO / DEV IDENTIFIER:', tableX + 5, tableY + 43);
doc.setTextColor(223, 226, 239);
doc.text(github, tableX + 75, tableY + 43);

// 8. Charter Covenant Declaration
doc.setFont('helvetica', 'italic');
doc.setTextColor(180, 185, 200);
doc.setFontSize(8);
const pledge = '"Better Code. Brighter Future. Code Connects People. Learn, Build, Grow Together."\nThe bearer is granted Tier 1 clearance across dEVELoPE Club distributed repositories, hardware grant pools, and architecture clinics.';
doc.text(pledge, pageWidth / 2, 150, { align: 'center' });

// 9. Verification & Signatures Bar
doc.setFont('courier', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(120, 130, 150);
doc.text('ISSUED BY: PM SHRI KV CHURU CHAPTER (NODE #01)', 30, 166);
doc.text('SECURITY SIGNATURE: SHA256-' + hashSig, 30, 171);
doc.text('TIMESTAMP: ' + timestamp, 30, 176);
doc.text('REGISTRY STATUS: VERIFIED ACTIVE // CRYPTOGRAPHIC SEAL AFFIXED', 30, 181);

// Digital Stamp & Founder Sign-Off
doc.setFont('helvetica', 'bold');
doc.setTextColor(208, 188, 255);
doc.setFontSize(11);
doc.text('Aayush Sarowa', pageWidth - 70, 168);
doc.setFont('helvetica', 'normal');
doc.setTextColor(76, 215, 246);
doc.setFontSize(8);
doc.text('Founder & Systems Architect (Age 12)', pageWidth - 70, 173);
doc.setTextColor(140, 140, 160);
doc.text('PM Shri Kendriya Vidyalaya Churu', pageWidth - 70, 178);

// Stamp Circle
doc.setDrawColor(76, 215, 246);
doc.setLineWidth(0.6);
doc.circle(pageWidth - 85, 172, 8);
doc.setFont('courier', 'bold');
doc.setFontSize(5);
doc.setTextColor(76, 215, 246);
doc.text('dEVELoPE', pageWidth - 85, 171, { align: 'center' });
doc.text('OFFICIAL', pageWidth - 85, 174, { align: 'center' });

// 10. Barcode Representation at bottom
doc.setFillColor(76, 215, 246);
for (let i = 0; i < 48; i++) {
  const barW = (i % 3 === 0) ? 1.5 : (i % 2 === 0) ? 0.8 : 0.4;
  doc.rect(30 + (i * 2.2), 188, barW, 4, 'F');
}
doc.setFont('courier', 'normal');
doc.setFontSize(7);
doc.setTextColor(120, 130, 150);
doc.text('VERIFICATION CODE: ' + fullCredentialString, 145, 191);

const pdfOutput = doc.output();
console.log('SUCCESS: Official PDF generated with 0 errors! PDF byte length:', pdfOutput.length);

const outPath = path.join(__dirname, 'sample_output_registration.pdf');
fs.writeFileSync(outPath, pdfOutput, 'binary');
console.log('SUCCESS: Written sample PDF to:', outPath);
