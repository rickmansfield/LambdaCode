const user = {
    username: 'dan.frehner',
    password: 'abc123',
    lovesJavascript: true,
    favoriteNumber: 42,
  };
  
  const passString = 'password';
  user['lovesJavascript']; // true
  user['username'];        // dan.frehner
  user[passString];        // abc123