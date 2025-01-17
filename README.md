Hi Skyward!   Thank you for checking out my Weather app!   As a new developer, I think one of the most important skills I can conquer is adapting to new tech quickly.   So I decided to use this assignment to add more tools to my personal stack. Welcome to my first attempt at using Next.js and Tailwind CSS.   

TO RUN:

1) Clone this repo into a root folder
2) Go into your new folder 
3) Create .env file and add this Variable:
      NEXT_PUBLIC_OPENWEATHER_KEY = {your personal OpenWeatherAPI key}
      (Note your API key must work with the One Call by Call plan.  If you need one, contact me by email.)
4) Type 'npm install' in your terminal and wait
5) You can type 'npm run dev' to see it in development mode or type 'npm run build' and then 'npm run start' to see it in production mode


ASSUMPTIONS:

1) English and Farenheit are the preferred currency
2) I am the only developer working on this so a Docker container is not needed
3) The OpenWeather One Call plan has the response that best fits our needs so I will use that
4) Using the latitude and longitude is the only way to get weather that isn't deprecated so I use that

WAYS TO IMPROVE STILL:

1) Sunrise and Sunset Times are in Military Time and set to time zone of the client not the time zone for the city on display 
2) Sunrise time falls off the bottom of the screen in some layouts
3) Needs a spinner while loading in case of delayed response
4) Additional Details button could look more like a button
5) Error Handling can be more robust

Thank you so much and I look forward to talking with you soon!


