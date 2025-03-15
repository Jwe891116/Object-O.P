import { Package } from "../Package.js";
import { OneDay } from "../OneDay.js";
import { TwoDay } from "../TwoDay.js";

let packages = [];

// Hard-code 5 packages into the array
packages.push(
    new Package(
        "John Doe",
        "123 Main St, Anytown, USA",
        "Jane Smith",
        "456 Elm St, Othertown, USA",
        2.5,
        "Standard",
        5.0,
        "Pending",
        1 // Tracking number
    )
);

packages.push(
    new OneDay(
        "Alice Johnson",
        "789 Oak St, Sometown, USA",
        "Bob Brown",
        "321 Pine St, Anothertown, USA",
        3.0,
        "OneDay",
        10.0,
        "Shipped",
        2, // Tracking number
        15.0 // Flat fee
    )
);

packages.push(
    new TwoDay(
        "Charlie Davis",
        "654 Maple St, Yourtown, USA",
        "Eve White",
        "987 Birch St, Theirtown, USA",
        4.0,
        "TwoDay",
        7.5,
        "Delivered",
        3, // Tracking number
        10.0 // Flat fee
    )
);

packages.push(
    new Package(
        "Frank Wilson",
        "135 Cedar St, Mytown, USA",
        "Grace Lee",
        "246 Walnut St, Histown, USA",
        1.5,
        "Standard",
        4.0,
        "Pending",
        4 // Tracking number
    )
);

packages.push(
    new OneDay(
        "Hank Green",
        "369 Spruce St, OurTown, USA",
        "Ivy Black",
        "258 Fir St, YourTown, USA",
        5.0,
        "OneDay",
        12.0,
        "In Transit",
        5, // Tracking number
        20.0 // Flat fee
    )
);

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