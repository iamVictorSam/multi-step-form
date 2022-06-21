import React from "react";
import { motion } from "framer-motion";


const OtherInfo = ({ formData, setFormData, x }) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="form-container"
    >
      <input
        type="text"
        placeholder="Highest Qualification"
        value={formData.highestQualification}
        onChange={(e) =>
          setFormData({ ...formData, highestQualification: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Occupation"
        value={formData.occupation}
        onChange={(e) =>
          setFormData({ ...formData, occupation: e.target.value })
        }
      />
      <textarea
        type="text"
        placeholder="About"
        value={formData.about}
        onChange={(e) => setFormData({ ...formData, about: e.target.value })}
      />
    </motion.div>
  );
};

export default OtherInfo;
