//const GoogleAuth = require("./google")
const jwt = require("jsonwebtoken")
const db = require("./db")
const User = require("../models/user")
const bcrypt = require("bcrypt")

require("dotenv").config()

const TOKEN_EXPIRATION = "1h"

const handleLogin = async (userInformations, userInfo) => {
	const { email, password } = userInformations
	try {
		const userFound = await User.findByEmail(email)
		if (userFound.length === 0) {
			throw new Error("Email et/ou mot de passe non valide")
		}

		let passwordOK = await bcrypt.compare(password, userFound.password)
		if (passwordOK) {
			const token = jwt.sign(
				{ email: userFound.email, name: userFound.name },
				process.env.SECRET_KEY,
				{
					expiresIn: TOKEN_EXPIRATION,
				}
			)
			return { token, email: userFound.email, name: userFound.name }
		} else {
			throw new Error("Email et/ou mot de passe non valide")
		}
	} catch (error) {
		console.log(error)
		throw new Error(error.message)
	}
}

/*const handleGoogleLogin = async (userInformations) => {
  const googleAuth = new GoogleAuth(userInformations.credential);
  try {
    const data = await googleAuth.verifyToken();
    const googleUserId = data.payload.sub;
    console.log("googleUserId", googleUserId);
   // Requête pour obtenir les informations de l'utilisateur depuis la base de données
    const [rows] = await db.query('SELECT * FROM users WHERE googleId = ?', [googleUserId]);
    console.log("rows", rows);
    if (rows.length === 0) {
      throw new Error("Google ID not found");
    }
    const userInfo = rows[0];

    const token = jwt.sign({ email: userInfo.email, name: userInfo.name }, process.env.SECRET_KEY, {
      expiresIn: TOKEN_EXPIRATION,
    });
    return { token, email: userInfo.email, name: userInfo.name };
  } catch (error) {
    throw new Error("Failed to verify Google token");
  }
};*/

// Export
module.exports = {
	handleLogin,
	//handleGoogleLogin,
}
