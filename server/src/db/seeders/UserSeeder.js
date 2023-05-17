import { User } from "../../models/index.js"

class UserSeeder {
    static async seed() {
        const usersData = [
            {
                username: "JessLovesBirds",
                email: "JessLovesBirds2@email.com",
                password: "12345"
            },
            { 
                username: "ericisacatperson",
                email: "ericisacatperson@email.com", 
                password: "54321" 
            },
            { 
                username: "DamienPrefersDogs",
                email: "DamienPrefersDogs111@email.com", 
                password: "24689" 
            }
        ]
        for (const singleUserData of usersData) {
            const currentUser = await User.query().findOne({ email: singleUserData.email })
            if (!currentUser) {
                await User.query().insert(singleUserData)
            }
        }
    }
}

export default UserSeeder

