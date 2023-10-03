const puppeteer = require('puppeteer');



(async()=>{
    console.log('Navegador');
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://nodejs.org/es/docs')

    var titulo1 = await page.evaluate(() =>{
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
    })

    console.log('Cerrar navegador');
    // browser.close();
    console.log('Navegador cerrado');
}) ();