class Package implements IPackage {
    public senderName: string;
    public senderAddress: string;
    public receiverName: string;
    public receiverAddress: string;
    public weight: number;
    public shippingMethod: string;
    public costPerUnitWeight: number;
    public status: string;
    public trackingNumber: string;
  
    constructor(
      senderName: string,
      senderAddress: string,
      receiverName: string,
      receiverAddress: string,
      weight: number,
      shippingMethod: string,
      costPerUnitWeight: number,
      status: string,
      trackingNumber: string
    ) {
      this.senderName = senderName;
      this.senderAddress = senderAddress;
      this.receiverName = receiverName;
      this.receiverAddress = receiverAddress;
      this.weight = weight;
      this.shippingMethod = shippingMethod;
      this.costPerUnitWeight = costPerUnitWeight;
      this.status = status;
      this.trackingNumber = trackingNumber;
    }
  
    setSenderName(senderName: string): void {
      this.senderName = senderName;
    }
  
    getSenderName(): string {
      return this.senderName;
    }
  
    setSenderAddress(senderAddress: string): void {
      this.senderAddress = senderAddress;
    }
  
    getSenderAddress(): string {
      return this.senderAddress;
    }
  
    setReceiverName(receiverName: string): void {
      this.receiverName = receiverName;
    }
  
    getReceiverName(): string {
      return this.receiverName;
    }
  
    setWeight(weight: number): void {
      this.weight = weight;
    }
  
    getWeight(): number {
      return this.weight;
    }
  
    setShippingMethod(shippingMethod: string): void {
      this.shippingMethod = shippingMethod;
    }
  
    getShippingMethod(): string {
      return this.shippingMethod;
    }
  
    setCostPerUnitWeight(costPerUnitWeight: number): void {
      this.costPerUnitWeight = costPerUnitWeight;
    }
  
    getCostPerUnitWeight(): number {
      return this.costPerUnitWeight;
    }
  
    setStatus(status: string): void {
      this.status = status;
    }
  
    getStatus(): string {
      return this.status;
    }
  
    setTrackingNumber(trackingNumber: string): void {
      this.trackingNumber = trackingNumber;
    }
  
    getTrackingNumber(): string {
      return this.trackingNumber;
    }
  
    calculateCost(): number {
      return this.weight * this.costPerUnitWeight;
    }
  
    printLabel(): void {
      console.log(`Sender: ${this.senderName}, ${this.senderAddress}`);
      console.log(`Receiver: ${this.receiverName}, ${this.receiverAddress}`);
      console.log(`Weight: ${this.weight} kg`);
      console.log(`Shipping Method: ${this.shippingMethod}`);
      console.log(`Status: ${this.status}`);
      console.log(`Tracking Number: ${this.trackingNumber}`);
    }
  
    updateStatus(newStatus: string): void {
      this.status = newStatus;
    }
  }
  