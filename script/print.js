'use strict';

const path = require('path');
const puppeteer = require('puppeteer');

async function print() {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 2560, height: 1440 },
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:8000', { waitUntil: 'load' });

  //注入CSS代码
  await page.addStyleTag({ content: `` });

  await page.pdf({
    path: path.resolve(__dirname, 'test.pdf'),
    format: 'A4',
    printBackground: true, // 显示背景
  });

  await browser.close();
}

print();
