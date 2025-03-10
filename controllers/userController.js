import { getAllPackages, addPackage } from "../models/userModel.js";

export const getHome = (req, res) => {
  res.render("home");
};

export const getPackage = (req, res) => {
    res.render("create_package");
};

export const getPackages = (req, res) => {
    res.json(getAllPackages());
  };

export  async function postPackages(req, res) {
    const { sender_name, sender_address, receiver_name, receiver_address, weight, shipping_method} = req.body;

    try {
        const newPackage = await addPackage({ sender_name, sender_address, receiver_name, receiver_address, weight, shipping_method });
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}