// userModel.js
import pool from '../database/db.cjs';

// Get all packages
export const getAllPackages = async () => {
  try {
    const res = await pool.query('SELECT * FROM packages');
    return res.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Add a new package
export async function addPackage(packageData) {
  const { sender_name, sender_address, receiver_name, receiver_address, weight, shipping_method } = packageData;

  const query = `
      INSERT INTO packages (sender_name, receiver_name, package_type, receiver_address, ...)
      VALUES ($1, $2, $3, $4, ...)
      RETURNING *;
  `;
  const values = [ssender_name, sender_address, receiver_name, receiver_address, weight, shipping_method];

  const result = await pool.query(query, values);
  return result.rows[0];
}

// let packages = [];
  
// export const getAllPackages = () => {
//           return packages
//     }

// export const addPackage = ( senderName, senderAddress, receiverName, receiverAddress,
//                             weight, shippingMethod) => {

//         const newPackage= { senderName, senderAddress, receiverName, receiverAddress,
//                             weight, shippingMethod }; 
                            
//         packages.push(newPackage); 
//         return newPackage;
//     };
