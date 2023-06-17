Book My Show App
Book My Show's frontend application is built using React.js and Thunderbolt API. React.js provides an efficient and component-based approach for creating a seamless user interface. The Thunderbolt API acts as a backend technology, offering data and functionality to the frontend. React.js enables the creation of reusable UI components, facilitating efficient development and maintenance. Thunderbolt API serves as a bridge between the frontend and backend, providing data on movies, showtimes, theaters, and ticket availability. Users can easily browse movies, view showtimes, select seats, and complete the booking process through the dynamic and interactive frontend interface. The combination of React.js and Thunderbolt API ensures efficient rendering, smooth navigation, and enhances the overall user experience.

Preview Of the Netlify hosted app : https://bookmyshownnetlify.netlify.app/

MoviesDB API TMDB ("https://www.themoviedb.org/settings/api")
I logined with my credentials not for you.. create your own
In our application we will create our env file and use API Key MovieDB API DOCUMENTATION ("https://developers.themoviedb.org/3")

Example API Request is : ("https://api.themoviedb.org/3/movie/550?api_key={yourKey}") Note : ?.api_key={your_key} Note : We Imported AXIOS package so that we can use thease API

TIP : Use JSON Fromatter for directly seeing the get rquests
This Project has many of the npm dev depencencies
Tailwind CSS
npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p

React-Stick
npm install react-slick for crousal

Axios
npm i axios for geting requests from API USED

Headless UI
npm install @headlessui/react for popups , switches , dialogue box,etc

React Icons
npm install react-icons

Extentions Used in this project in VS-Code :
Tailwind CSS Intellisence :
since our project is using tailwind so we have to make use of it for continus suggestions on the project.

External websites used in project for diffrent Purposes
TailWind CSS SHADES ("https://www.tailwindshades.com/"):
inorder to use the shades of the given colour we use this and use it by storing it in 'tailqind.config.js' in extentions --> color --> yourTitle Actually Tailwind Provides with default color palates ("https://tailwindcss.com/docs/customizing-colors") Many times it is sufficent but if we need our shade then use "tailwindshades"

Getting Started with Create React App
npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

Diploying the Webiste on Netlify
1. npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance. Your app is ready to be deployed!

2. uploding the sight to Netlify
https://app.netlify.com/ go to sight and deploy the sight manually.