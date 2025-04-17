interface ITwoDayPackage {
    flatFee: number; // Ensure this is defined in the interface
    setFlatFee(flatFee: number): void;
    getFlatFee(): number;
    calculateCost(): number;
}