"use strict";

import { Package } from './Package.js';

export class TwoDay extends Package {
    constructor(senderName, senderAddress, receiverName, receiverAddress, weight, shippingMethod, costPerUnitWeight, status, trackingNumber, flatFee) {
        super(senderName, senderAddress, receiverName, receiverAddress, weight, shippingMethod, costPerUnitWeight, status, trackingNumber);
        this.flatFee = flatFee;
    }
    setFlatFee(flatFee) {
        this.flatFee = flatFee;
    }
    getFlatFee() {
        return this.flatFee;
    }
    calculateCost() {
        return super.calculateCost() + this.flatFee;
    }
}
