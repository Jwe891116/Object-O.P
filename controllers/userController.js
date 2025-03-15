import { getAllPackages, addPackage, searchPackages, findPackageByTrackingNumber } from "../models/userModel.js";

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
    const {
        senderName,
        senderAddress,
        receiverName,
        receiverAddress,
        weight,
        shippingMethod,
        costPerUnitWeight,
        flatFee
    } = req.body;

    // Validate required fields
    if (!senderName || !senderAddress || !receiverName || !receiverAddress ||
        !weight || !shippingMethod || !costPerUnitWeight) {
        return res.status(400).send("All fields are required.");
    }

    // Validate weight and costPerUnitWeight are numbers
    if (isNaN(weight) || isNaN(costPerUnitWeight)) {
        return res.status(400).send("Weight and cost per unit weight must be numbers.");
    }

    // Add the new package to the array
    const newPackage = addPackage(
        senderName,
        senderAddress,
        receiverName,
        receiverAddress,
        parseFloat(weight),
        shippingMethod,
        parseFloat(costPerUnitWeight),
        "Pending",
        parseFloat(flatFee) || 0
    );

    // Render the thank you page with the new package details
    res.render("thankyou", { 
        title: "Thank You", 
        trackingNumber: newPackage.getTrackingNumber(),
        senderName: newPackage.getSenderName(),
        senderAddress: newPackage.getSenderAddress(),
        receiverName: newPackage.getReceiverName(),
        receiverAddress: newPackage.getReceiverAddress(),
        weight: newPackage.getWeight(),
        shippingMethod: newPackage.getShippingMethod(),
        status: newPackage.getStatus(),
        calculateCost: newPackage.calculateCost.bind(newPackage) // Bind the method to the instance
    });
};

export const getSearch = (req, res) => {
    const query = req.query.query?.toLowerCase(); // Ensure query is defined and lowercase

    // Redirect if query is empty
    // if (!query) {
    //     return res.redirect('/');
    // }

    const filteredPackages = searchPackages(query);
    res.render('track_package', { packages: filteredPackages });
};

export const getInfo = (req, res) => {
    const trackingNumber = req.query.trackingNumber;
    const packages = searchPackages(trackingNumber); // Replace with your search logic
    const page = parseInt(req.query.page) || 1; // Get the current page from the query string
    const perPage = 5; // Number of packages per page
    const totalPages = Math.ceil(packages.length / perPage);

    res.render("track_package", {
        packages,
        currentPage: page,
        totalPages,
    });
};