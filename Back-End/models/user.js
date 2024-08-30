const db = require("../utilities/db")
const sequelize = require("../utilities/db")
const { DataTypes, Model } = require("sequelize")

class User extends Model {
	static async findByEmail(email) {
    return await User.findOne({ where: { email } });
		}
	
	static async createNew(user) {
		try {
			return await User.create(user);
		} catch (error) {
			console.log("Error during register processus", error)
			throw error
		}
  }
/*
  // Exemple de méthode d'instance
  async isValidPassword(password) {
    return await bcrypt.compare(password, this.password);
	}
	
	static async getUser(user) {
		const { name, email, password, googleId } = user
		try {
			// Requête pour obtenir les informations de l'utilisateur depuis la base de données
			const [rows] = await db.query(
				"SELECT * FROM users WHERE email = ?",
				[email]
			)
			if (rows.length === 0) {
				return
			} else {
				return rows[0]
			}
		} catch (error) {
			throw error
		}
	}*/
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		googleId: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize, 
		modelName: "users",
	}
)


module.exports = User
