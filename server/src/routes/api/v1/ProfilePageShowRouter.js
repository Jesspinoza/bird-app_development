import express from "express"
import objection from "objection"
import { User } from "../../../models"

const ProfilePageShowRouter = new express.Router()

ProfilePageShowRouter.get("/users/:id", async (req, res) => {
        try {
            const response = await fetch ( "/api/v1/users" )
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const userData = await response.json()

        }
    } catch (error) {
        console.error(`Error in fetch: ${err.message}`)
    }

export default ProfilePageShowRouter