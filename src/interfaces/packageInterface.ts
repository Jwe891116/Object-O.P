// Interface for Package
interface IPackage {
    senderName: string;
    senderAddress: string;
    receiverName: string;
    receiverAddress: string;
    weight: number;
    shippingMethod: string;
    costPerUnitWeight: number;
    status: string;
    trackingNumber: string;
  
    setSenderName(senderName: string): void;
    getSenderName(): string;
    setSenderAddress(senderAddress: string): void;
    getSenderAddress(): string;
    setReceiverName(receiverName: string): void;
    getReceiverName(): string;
    setWeight(weight: number): void;
    getWeight(): number;
    setShippingMethod(shippingMethod: string): void;
    getShippingMethod(): string;
    setCostPerUnitWeight(costPerUnitWeight: number): void;
    getCostPerUnitWeight(): number;
    setStatus(status: string): void;
    getStatus(): string;
    setTrackingNumber(trackingNumber: string): void;
    getTrackingNumber(): string;
  
    calculateCost(): number;
    printLabel(): void;
    updateStatus(newStatus: string): void;
  }
  
  // Interface for TwoDayPackage
  interface ITwoDayPackage extends IPackage {
    flatFee: number;
  
    setFlatFee(flatFee: number): void;
    getFlatFee(): number;
  }
  
  // Interface for OneDayPackage
  interface IOneDayPackage extends IPackage {
    flatFee: number;
  
    setFlatFee(flatFee: number): void;
    getFlatFee(): number;
  }
  