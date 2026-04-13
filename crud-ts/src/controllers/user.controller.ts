import { Request, Response } from "express"
import { User } from "../models/user.models.js"

let users: User[] = []
let idCounter = 1

// CREATE
export const createUser = (req: Request, res: Response) => {
  console.log("BODY:", req.body)

  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email required" })
  }

  const newUser: User = {
    id: idCounter++,
    name,
    email
  }

  users.push(newUser)
  res.status(201).json(newUser)
}

// READ ALL
export const getUsers = (req: Request, res: Response) => {
  res.json(users)
}

// READ ONE
export const getUserById = (req: Request, res: Response) => {
  const user = users.find(u => u.id === Number(req.params.id))

  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  res.json(user)
}

// UPDATE
export const updateUser = (req: Request, res: Response) => {
  const user = users.find(u => u.id === Number(req.params.id))

  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  user.name = req.body.name || user.name
  user.email = req.body.email || user.email

  res.json(user)
}

// DELETE
export const deleteUser = (req: Request, res: Response) => {
  users = users.filter(u => u.id !== Number(req.params.id))

  res.json({ message: "User deleted" })
}