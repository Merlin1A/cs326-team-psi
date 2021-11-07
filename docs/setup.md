## Running the Server

1. Ensure that node is installed with express.js.
2. Copy the repository to a folder with the command "git clone https://github.com/Merlin1A/cs326-team-psi.git"
3. Edit the file public/render_courses.js and comment out line 244 and uncomment line 245 (this is to avoid CORS errors when fetching information from the server)
4. Edit the file server/index.js replacing line 8:
  
  const PORT = process.env.PORT || 80;
  
  with
  
  const PORT = 3000;

5. From the root directory, run "npm start"
6. The website can be reached at http://localhost:3000/
