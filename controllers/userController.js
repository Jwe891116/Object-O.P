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

export const postPackages = (req, res) => {
    const { senderName, senderAddress, receiverName, receiverAddress,
            weight, shippingMethod} = req.body;
    if (!senderName || !senderAddress || !receiverName || !receiverAddress ||
        !weight || !shippingMethod) {
      return res.status(400).send("Required.");
    }

    const newPackage = addPackage(senderName, senderAddress, receiverName, receiverAddress,
                                  weight, shippingMethod);

    res.render("thankyou", { title: "Thank You", ...newPackage});
};