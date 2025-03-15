"use strict";
export class Package {
    constructor(senderName, senderAddress, receiverName, receiverAddress, weight, shippingMethod, costPerUnitWeight, status, trackingNumber) {
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
    setSenderName(senderName) {
        this.senderName = senderName;
    }
    getSenderName() {
        return this.senderName;
    }
    setSenderAddress(senderAddress) {
        this.senderAddress = senderAddress;
    }
    getSenderAddress() {
        return this.senderAddress;
    }
    setReceiverName(receiverName) {
        this.receiverName = receiverName;
    }
    getReceiverName() {
        return this.receiverName;
    }
    setReceiverAddress(senderAddress) {
        this.senderAddress = senderAddress;
    }
    getReceiverAddress() {
        return this.senderAddress;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    setShippingMethod(shippingMethod) {
        this.shippingMethod = shippingMethod;
    }
    getShippingMethod() {
        return this.shippingMethod;
    }
    setCostPerUnitWeight(costPerUnitWeight) {
        this.costPerUnitWeight = costPerUnitWeight;
    }
    getCostPerUnitWeight() {
        return this.costPerUnitWeight;
    }
    setStatus(status) {
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
    setTrackingNumber(trackingNumber) {
        this.trackingNumber = trackingNumber;
    }
    getTrackingNumber() {
        return this.trackingNumber;
    }
    calculateCost() {
        return this.weight * this.costPerUnitWeight;
    }
    printLabel() {
        console.log(`Sender: ${this.senderName}, ${this.senderAddress}`);
        console.log(`Receiver: ${this.receiverName}, ${this.receiverAddress}`);
        console.log(`Weight: ${this.weight} kg`);
        console.log(`Shipping Method: ${this.shippingMethod}`);
        console.log(`Status: ${this.status}`);
        console.log(`Tracking Number: ${this.trackingNumber}`);
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
