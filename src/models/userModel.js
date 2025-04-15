import { Package } from "../Package.js";
import { OneDay } from "../OneDay.js";
import { TwoDay } from "../TwoDay.js";

let packages = [];

export const getAllPackages = () => {
    return packages;
};

export const addPackage = (
    senderName,
    senderAddress,
    receiverName,
    receiverAddress,
    weight,
    shippingMethod,
    costPerUnitWeight,
    status = "Pending",
    flatFee = 0
) => {
    const trackingNumber = packages.length + 1; // Generate a unique tracking number
    let newPackage;

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

export const searchPackages = (query) => {
    return packages.filter(pkg => 
        pkg.getSenderName().toLowerCase().includes(query) || 
        pkg.getReceiverName().toLowerCase().includes(query)
    );
};

export const findPackageByTrackingNumber = (trackingNumber) => {
    return packages.find(pkg => pkg.getTrackingNumber() === trackingNumber);
};