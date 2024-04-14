const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;
app.use(express.static("."))
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

// Registration Page
app.get('/register', (req, res) => {
  res.sendFile('/register.html', { root:'./' });
});

// Registration Process
app.post('/register', (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  // Read existing users data from JSON file
  fs.readFile('./server/users.json', 'utf8', (err, data) => {
    if (err) throw err;

    const users = JSON.parse(data);

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.send('User already exists');
    }

    // Add new user to users array
    const newUser = { email, firstName, lastName, password };
    users.push(newUser);

    // Write updated users data back to JSON file
    fs.writeFile('./server/users.json', JSON.stringify(users, null, 2), 'utf8', (err) => {
      if (err) throw err;
      res.send('Registration successful');
    });
  });
});


// Start the server
app.get('/login', (req, res) => {
  res.sendFile('/login.html', { root:'./' });
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Read user data from JSON file
    fs.readFile('./server/users.json', 'utf8', (err, data) => {
      if (err) throw err;
  
      const users = JSON.parse(data);
      const user = users.find(user => user.email === email);
  
      if (user && user.password === password) {
        // Redirect to dashboard with authenticated=true query parameter
        res.sendFile('/index.html', { root:'./'});    } else {
        res.send('Incorrect username or password');
      }
    });
  });
  
  // Logout
  app.get('/logout', (req, res) => {
    res.redirect('/');
  });
  
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});