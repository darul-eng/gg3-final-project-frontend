# Tokopedia Play Clone - Front-End

A User Interface built using React with Axios to fetch API from Backend. The app is a ReactJS project that gives users access to a variety of features, including displaying a list of videos along with search options, the ability to view video details with an embedded YouTube player, a list of related products, and comments that update in real-time.



---

## How to Run
You can access production using url below

- Backend: [http://103.185.193.30:4000](http://103.185.193.30:4000)
- Full Website: [http://103.185.193.30:3000](http://103.185.193.30:3000)
- Docker Image: `docker pull drlkhsn/gigih-frontend:2.0`

### Requirements
Be sure to complete the following requirements
- `node.js v18.16.1`

### Configuration
1. First clone and perform the instructions in [https://github.com/darul-eng/gg3-final-project-backend.git](https://github.com/darul-eng/gg3-final-project-backend.git)
2. Open terminal and Clone project from [https://github.com/darul-eng/gg3-final-project-frontend.git](https://github.com/darul-eng/gg3-final-project-frontend.git)
3. Make sure you are at the root of the project. if not, you can use the command `cd destionation_path`
4. Run command `npm install` to install all dependencies.
5. Make file `.env.local` file following the `.env.local-example` and fill in each variable according to your needs.
6. Make sure mongodb is running and Run command `npm start` to start application using nodemon.
7. Website Ready to use

---

## Explanation of Pages
### Feature

- Default Credentials

  `username: darulikhsan`

  `password: 12345`

- Register
    - Access the app at URL `/`.
    - Click on the "Register" option to register as a new user.
    - Input your username and password, if success page will navigate to SignIn

- Login
    - Access the app at URL `/login`.
    - Enter the credentials you created earlier or use the default credentials above to log in to the user account.

- Home Page
    - Access the app at URL `/channels`.
    - This page displays a list of videos and a search button.
    - Use the search button to search for videos by product title.

- Video Details
    - Click on a video to enter the details page at URL `/channels/:videoId`.
    - On this page, the video can be played through the embed video player.
    - On the left, there is a list of products that correspond to the video.
    - On the right, there is a comment section. Logged-in users can comment.
    - Click on the user photo to log out.


---


## Explanation of Structure Project
1. In the root project you can see several folders and files, such as src, env.local-example, package.json, Dockerfile and so on.
2. Inside the src folder there are several folders and files

   - there is index.js and App.js which is the starting point of this project, in app js there is a definition of `React Router`
   - then there is a pages folder, which stores files according to the pages of the application, namely Authentication, Home, and Video Details.
   - then there is a components folder that contains the components used to build this application.
   - then there is a hooks folder that contains custom hooks that are used in this application.
   - then there is a context folder that stores the video context as data that can be accessed by all its children.
   - finally there is a helper folder that contains functions used for application utilities

---