import React from "react";
import { motion } from "framer-motion";

const SignUp = ({ formData, setFormData, x }) => {
  return (
    <motion.div
      initial={{ x: x }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="form-container"
    >
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
    </motion.div>
  );
};

export default SignUp;
