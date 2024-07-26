# PROJECT
- Fictitious sports car dealership website developed with **React.js**, **Node.js**, and **MongoDB Atlas**.
- Front-End designed with **React.js** components, along with the **Axios** and **styled-components** libraries.
- Back-End coded with **Node.js**, **Express.js**, and **Mongoose** to provide RESTful API routes using HTTP methods, handle JSON objects, and store data in a database on **MongoDB Atlas** for the Front-End.



###
# INTERFACE
### HEADER
Contains navigation buttons for website pages ("Home", "Favorites", and "Race!").

![Header](/React.js/public/Autoshow%20-%20Header.png)

### HOME
Features a search bar to filter by a specific car and displays all the car cards from the dealership. On each card, there is an option to add it to the "Favorites" page list when the mouse pointer hovers over it.

![Home](/React.js/public/Autoshow%20-%20Home.png)

### FAVORITES
Displays favorited car cards and the option to unfavorite them, with no limit on the number and model of cards.

![Favorites](/React.js/public/Autoshow%20-%20Favorites.png)

### RACE!
Shows only favorited car cards and the option to have them (or not) "compete" based on the horsepower (hp) measurement of two selected cars. In this competition section, the car with the highest power wins and remains.

![Race](/React.js/public/Autoshow%20-%20Race.png)



###
# SIMULATION
To open the project, it is necessary to have an **Integrated Development Environment (IDE)** installed.
<br>
To execute the project, download and install [**Node.js**](https://nodejs.org/en) from the official website.

### React.js
- After cloning the repository, in a new terminal, execute the commands **cd PORTFOLIO-AUTOSHOW** and **cd React.js** to navigate to the correct folder. Then, use the command **npm install**.

- To view the website, run the command **npm start** to start the Front-End server. You will be redirected to the URL **http://localhost:3000**. The server supports hot-reloading, reflecting any code changes instantly in the browser.

### Node.js
- In another terminal, run the commands **cd PORTFOLIO-AUTOSHOW** and **cd Node.js** to navigate to the correct folder. Then, use the command **npm install dotenv** to install an environment variables library.

- Run the command **nodemon server.js** to start the Back-End server. It will operate at the URL **http://localhost:8000**.



###
# NOTES
If you have any doubts, [**VS Code**](https://code.visualstudio.com/download) is a great **IDE** for this project.

If the initialization commands are run in the terminal before the guided installations, use the shortcut **Ctrl + C** in terminal to cancel the operation.

The **cd..** command allows you to return to the previous folders.

Sometimes, an uncaught runtime error can occur when adding car cards to the competition area due to database delays. If this happens, press F5 on your keyboard to reset the page, remove the car card from the competition area, and try again.

The servers are configured to work on a local network, allowing access from any origin due to general [**CORS**](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings.

It is possible to view the JSON objects stored in the MongoDB database by typing **/cars**, **/favorites**, or **/race** after the Back-End server URL **http://localhost:8000**.



###
# TECHNOLOGIES
### Integrated Development Environment (IDE)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
- **Visual Studio Code** (Source-code editor. Also commonly referred to as VS Code).

### Programming Languages
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- **HTML5** (Markup language for structuring web pages).
- **CSS3** (Cascading Style Sheets for styling web pages).
- **JavaScript** (Programming language for interactivity and logic on the client side).

### Development Frameworks and Libraries
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- **React.js** (JavaScript library for building user interfaces).
- **Node.js** (JavaScript runtime environment on the server side).
- **MongoDB Atlas** (Cloud-based NoSQL database service).
  
### Front-End Libraries and Tools
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
- **styled-components** (Library for applying styles to React components).
- **Axios** (HTTP client for making API requests).
- **React Router DOM** (Library for managing routes and navigation in React applications, allowing the creation of a SPA with page navigation without reloading the page).

### Back-End Libraries and Tools
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

- **Express.js** (Framework for Node.js that simplifies the creation of servers and APIs).
- **Mongoose** (Data modeling library for MongoDB and Node.js).
- **CORS** (Security mechanism that allows or restricts requests for resources between different domains, configurable in Express.js to allow the API to be accessed from different origins).
- **dotenv** (Library for loading environment variables from a .env file, used to manage sensitive and environment-specific configurations securely).

### Development Tools
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
- **npm** (Package manager for Node.js).
- **Nodemon** (Tool that automatically restarts the Node.js server upon detecting changes).
- **Postman** (Tool for testing and debugging APIs, ensuring server routes work correctly).
- **Git** (Version control system for managing code history and collaborating with other developers).
