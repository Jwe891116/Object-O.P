import { Request, Response } from 'express';
import { Package } from "../models/Package";
import { OneDay } from "../models/OneDay";
import { TwoDay } from "../models/TwoDay";

interface PackageInterface {
    senderName: string;
    senderAddress: string;
    receiverName: string;
    receiverAddress: string;
    weight: number;
    shippingMethod: string;
    costPerUnitWeight: number;
    status?: string;
    flatFee?: number;
}

let packages: (Package | OneDay | TwoDay)[] = [];

// Model functions
const getAllPackages = (): (Package | OneDay | TwoDay)[] => {
    return packages;
};

const addPackage = (
    senderName: string,
    senderAddress: string,
    receiverName: string,
    receiverAddress: string,
    weight: number,
    shippingMethod: string,
    costPerUnitWeight: number,
    status: string = "Pending",
    flatFee: number = 0
): Package | OneDay | TwoDay => {
    const trackingNumber = packages.length + 1;
    let newPackage: Package | OneDay | TwoDay;

    if (shippingMethod === "OneDay") {
        newPackage = new OneDay(
            senderName,
            senderAddress,
            receiverName,
            receiverAddress,
            weight,
            shippingMethod,
            costPerUnitWeight,
            status,
            trackingNumber,
            flatFee
        );
    } else if (shippingMethod === "TwoDay") {
        newPackage = new TwoDay(
            senderName,
            senderAddress,
            receiverName,
            receiverAddress,
            weight,
            shippingMethod,
            costPerUnitWeight,
            status,
            trackingNumber,
            flatFee
        );
    } else {
        newPackage = new Package(
            senderName,
            senderAddress,
            receiverName,
            receiverAddress,
            weight,
            shippingMethod,
            costPerUnitWeight,
            status,
            trackingNumber
        );
    }

    packages.push(newPackage);
    return newPackage;
};

const searchPackages = (query: string = ''): (Package | OneDay | TwoDay)[] => {
    const queryLower = query.toLowerCase();
    return packages.filter(pkg => 
        pkg.getSenderName().toLowerCase().includes(queryLower) || 
        pkg.getReceiverName().toLowerCase().includes(queryLower)
    );
};

const findPackageByTrackingNumber = (trackingNumber: number): Package | OneDay | TwoDay | undefined => {
    return packages.find(pkg => pkg.getTrackingNumber() === trackingNumber);
};

// Controller functions
export const getHome = (req: Request, res: Response): void => {
    res.render("home");
};

export const getPackage = (req: Request, res: Response): void => {
    res.render("create_package");
};

export const getPackages = (req: Request, res: Response): void => {
    res.json(getAllPackages());
};

export const postPackages = (req: Request, res: Response): void => {
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
        res.status(400).send("All fields are required.");
        return;
    }

    // Validate weight and costPerUnitWeight are numbers
    if (isNaN(Number(weight)) || isNaN(Number(costPerUnitWeight))) {
        res.status(400).send("Weight and cost per unit weight must be numbers.");
        return;
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
        calculateCost: newPackage.calculateCost.bind(newPackage)
    });
};

export const getSearch = (req: Request, res: Response): void => {
    const query = req.query.query?.toString().toLowerCase() || '';

    const filteredPackages = searchPackages(query);
    res.render('track_package', { packages: filteredPackages });
};

export const getInfo = (req: Request, res: Response): void => {
    const trackingNumber = req.query.trackingNumber?.toString();
    const packages = searchPackages(trackingNumber);
    const page = parseInt(req.query.page?.toString() || '1');
    const perPage = 5;
    const totalPages = Math.ceil(packages.length / perPage);

    res.render("track_package", {
        packages,
        currentPage: page,
        totalPages,
    });
};