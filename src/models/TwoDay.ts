class TwoDayPackage extends Package implements ITwoDayPackage {
    public flatFee: number; // Change from private to public

    constructor(
        senderName: string,
        senderAddress: string,
        receiverName: string,
        receiverAddress: string,
        weight: number,
        shippingMethod: string,
        costPerUnitWeight: number,
        status: string,
        trackingNumber: string,
        flatFee: number
    ) {
        super(
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
        this.flatFee = flatFee;
    }

    setFlatFee(flatFee: number): void {
        this.flatFee = flatFee;
    }

    getFlatFee(): number {
        return this.flatFee;
    }

    calculateCost(): number {
        return super.calculateCost() + this.flatFee;
    }
}