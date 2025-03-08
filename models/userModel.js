let packages = [];
  
export const getAllPackages = () => {
          return packages
    }

export const addPackage = ( senderName, senderAddress, receiverName, receiverAddress,
                            weight, shippingMethod) => {

        const newPackage= { senderName, senderAddress, receiverName, receiverAddress,
                            weight, shippingMethod }; 
                            
        packages.push(newPackage); 
        return newPackage;
    };
