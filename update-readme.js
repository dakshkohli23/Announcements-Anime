const fs = require('fs');

const data = fs.readFileSync('data.json');
const animeData = JSON.parse(data);

let readmeContent = `<p align="center"><a href=""><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=FFDA5D&center=true&vCenter=true&repeat=false&width=435&lines=Daftar+Anime+Terbaru" alt="Typing SVG" /></a></p>`;

// Fungsi untuk menulis hasil ke file README.md
animeData.result.forEach((anime) => {
   readmeContent += `<table align="center">`;
   readmeContent += `<tr>`;
   readmeContent += `<th><h3 align="center">${anime.title}</h3></th>`;
   readmeContent += `</tr>`;
   readmeContent += `<tr>`;
   readmeContent += `<td>`;
   readmeContent += `<p align="center">`;
   readmeContent += `<img src="${anime.thumb}", height="256">`;
   readmeContent += `</p>`;
   readmeContent += `</td>`;
   readmeContent += `</tr>`;
   readmeContent += `<td>`;
   readmeContent += `<table align="center">`;
   readmeContent += `<tr>`;
   readmeContent += `<td>📗 Episode :</td>`;
   readmeContent += `<td align="center">${anime.eps}</td>`;
   readmeContent += `</tr>`;
   readmeContent += `<tr>`;
   readmeContent += `<td>📘 Tanggal :</td>`;
   readmeContent += `<td align="center">${anime.date}</td>`;
   readmeContent += `</tr>`;
   readmeContent += `<tr>`;
   readmeContent += `<td>📙 Hari :</td>`;
   readmeContent += `<td align="center">${anime.day}</td>`;
   readmeContent += `</tr>`;
   readmeContent += `<tr>`;
   readmeContent += `<td>📕 Link :</td>`;
   readmeContent += `<td align="center"><a href="${anime.link}">Streaming ${anime.title}</a></td>`;
   readmeContent += `</tr>`;
   readmeContent += `<tr>`;
   readmeContent += `<td>📔 Id :</td>`;
   readmeContent += `<td align="center">${anime.id}</td>`;
   readmeContent += `</tr>`;
   readmeContent += `</table>`;
   readmeContent += `</td>`;
   readmeContent += `</tr>`;
   readmeContent += `</table>`;
  });

fs.writeFileSync('README.md', readmeContent);
