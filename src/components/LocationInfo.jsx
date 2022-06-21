import React from "react";
import { motion } from "framer-motion";


const LocationInfo = ({ formData, setFormData, x}) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="form-container"
    >
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={(e) =>
          setFormData({ ...formData, nationality: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Zipcode"
        value={formData.zipcode}
        onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
      />
    </motion.div>
  );
};

export default LocationInfo;
