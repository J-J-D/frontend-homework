Hi Skyward!   Thank you for checking out my Weather app!   As a new developer, I think one of the most important skills I can conquer is adapting to new tech quickly.   So I decided to use this assignment to add more tools to my personal stack. Welcome to my first attempt at using Next.js and Tailwind CSS.   

TO RUN:

1) Clone this repo into a root folder
2) Go into your new folder 
3) Create .env file and add this Variable:
      NEXT_PUBLIC_OPENWEATHER_KEY = {your personal OpenWeatherAPI key}
      (Note your API key must work with the One Call by Call plan.  If you need one, contact me by email.)
4) Type $npm run start 
      (Note you may need to $npm install axios to get it to work)
5)Visit localhost:3000 on your machine and check it out

ASSUMPTIONS:

1) English and Farenheit are the preferred currency
2) I am the only developer working on this so a Docker container is not needed

WAYS TO IMPROVE STILL:

1) Sunrise and Sunset Times are in Military Time and set to timezone of the client not the time zone for the city on display 
2) Needs a spinner while loading in case of delayed response
3) Additional Details button could look more like a button
4) Error Handling could be more robust and provde client more info

Thank you so much and I look forward to talking with you soon!


