import React from 'react'
import { motion } from "framer-motion";


const PersonalInfo = ({ formData, setFormData, x }) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="form-container"
    >
      <input
        type="text"
        placeholder="Nickname"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </motion.div>
  );
};

export default PersonalInfo