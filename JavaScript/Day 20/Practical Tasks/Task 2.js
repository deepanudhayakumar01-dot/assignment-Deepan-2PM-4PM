const user = {
  username: "Deepan",
  isLoggedIn: false,

  login() {
    this.isLoggedIn = true;
    console.log(`${this.username} logged in`);
  },

  logout() {
    this.isLoggedIn = false;
    console.log(`${this.username} logged out`);
  }
};

// Usage
user.login();
user.logout();
