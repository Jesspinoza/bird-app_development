import express from "express"
import objection from "objection"
import { User } from "../../../models/index.js"

const ProfilePageShowRouter = new express.Router()

ProfilePageShowRouter.get("/:id", async (req, res) => {
    const { name, description } = req.body
    const { id } = req.user
    const userId = req.params.id
    console.log(req.body)
})

export default ProfilePageShowRouter