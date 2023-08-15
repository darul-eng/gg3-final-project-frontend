# Tokopedia Play Clone - Front-End

A User Interface built using React with Axios to fetch API from Backend.

---

## How to Use
You can access production using url below

- Backend: `http://103.185.193.30:4000`
- Backend + Frontend: `http://103.185.193.30:3000`
- Docker Image: `docker pull drlkhsn/gigih-frontend:2.0`

### Requirements
Be sure to complete the following requirements
- `node.js v18.16.1`

### Configuration
1. Open terminal and Clone project from `https://github.com/darul-eng/gg3-final-project-frontend.git`
2. Make sure you are at the root of the project. if not, you can use the command `cd destionation_path`
3. Run command `npm install` to install all dependencies.
4. Make file `.env.local` file following the `.env.local-example` and fill in each variable according to your needs.
5. Make sure mongodb is running and Run command `npm start` to start application using nodemon.
6. Website Ready to use

---

## Explanation of Pages
### Feature

- Register
  - Access the app at URL `/`.
  - Click on the "Register" option to register as a new user.

- Login
  - Access the app at URL `/login`.
  - Enter your credentials to log in to the user account.

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

