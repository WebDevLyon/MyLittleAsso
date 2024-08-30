//Import modules et compléments
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const fs = require("fs")
const { handleLogin } = require("../utilities/authUtilities")
const User = require("../models/user")

const ConnectionTypes = {
	LOGIN: "login",
	GOOGLE: "Google",
}

//Get controllers
//Post controllers
exports.register = async (req, res) => {
	try {
		if (req.body && req.body.password && req.body.name && req.body.email) {
			const password = await bcrypt.hash(req.body.password, 10)
			const user = {
				name: req.body.name,
				email: req.body.email,
				password: password,
			}

			const userWithMail = await User.findByEmail(user.email)
			if (userWithMail) {
				res.status(400).json({ error: "Impossible de créer l'enregistrement" })
			} else {
				try {
					const response = await User.createNew(user)
					res.json(response)
				} catch (error) {
					res.status(400).json({ error: error.message })
				}
			}
		} else {
			res.sendStatus(400)
		}
	} catch (error) {
		console.error("Error during register process:", error.message)
		res.status(500).json({ error: "Internal server error" })
	}
}

exports.login = async (req, res) => {
	try {
		if (
			!req.body ||
			!req.body.typeOfConnect ||
			!req.body.userInformations
		) {
			return res.status(400).json({ error: "Invalid request" })
		}
		const { typeOfConnect, userInformations } = req.body
		if (typeOfConnect == ConnectionTypes.LOGIN) {
			try {
				const response = await handleLogin(userInformations)
				res.json(response)
			} catch (error) {
				res.status(400).json({ error: error.message })
			}
		} else {
			res.status(400).json({ error: "Unknown connection type" })
		}
	} catch (error) {
		console.error("Error during login process:", error.message)
		res.status(500).json({ error: "Internal server error" })
	}
}
//Put controllers
