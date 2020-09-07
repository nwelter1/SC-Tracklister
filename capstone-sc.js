const puppeteer = require('puppeteer');

(async () => {
    // Getting title of track from Soundcloud Link
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://soundcloud.com/partyfavormusic/party-favor-hard-2018');
  await page.screenshot({ path: 'example.png' });
  await page.waitForSelector('span.soundTitle__title');


  const titleContent = await page.evaluate(() => 
      document.querySelector('span.soundTitle__title').innerText
  );
  console.log(titleContent);

 //1001Tracklists Section
 await page.goto('https://www.1001tracklists.com/')
 await page.setViewport({width: 1920, height: 1001 })
 //Finding Search Bar
 await page.waitForSelector('input.search-box-input')
 await page.click('.search-box-input')
 //Filling in searchbar
 page.keyboard.type(titleContent)
 //Clicking on top search result
 await page.waitForSelector('.acObjLi')
 await page.click('.acObjLi')
 //screenshot test
 await page.screenshot({ path: '1001.png' });

 //Grabbing tracklist and putting it into a list
 const tracklistContent = await page.evaluate(() => 
    Array.prototype.slice.call(document.getElementsByClassName('trackFormat')).map(function(x){ return x.innerText })
 );
 console.log( tracklistContent )

 await browser.close();
})();