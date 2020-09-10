### Soundcloud Tracklists
##### Final Extension
Find repo at https://github.com/nwelter1/SC-tracklister-extension

As an extension, SCTracklister will use a query selector to grab the title of a mix from the current Soundcloud page. It will then open an instance of chrome in puppeteer, go to 1001Tracklists.com, and search it's database for that title. If it finds a match, puppeteer will navigate to that page, and store an Array of each tack in the mix.

This information will then be displayed inside of an HTML document within the chrome extension display. 

##### Web App
Find repo at https://github.com/nwelter1/SC-Tracklister
Using as a Test to make sure this will actually work.

As a Web app, SCTracklister will take a Soundcloud URL as a user input, and open an instance of chrome in puppeteer to navigate to the URL given. It will then store the title of the mix. It will then navigate to 1001Tracklists.com, and do the same search/array storage listed above.

Array of tracks displayed on the web page under the input bar.
