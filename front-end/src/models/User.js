export default class User {
  constructor({ name, email, token }) {
    this.name = name;
    this.email = email;
    this.token = token;
  }

  static fromApiResponse(response) {
    return new User({
      name: response.name,
      email: response.email,
      token: response.token,
    });
  }

  isAuthenticated() {
    return !!this.token;
  }

  saveToLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this));
  }

  static loadFromLocalStorage() {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      return new User(userData);
    }
    return null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
