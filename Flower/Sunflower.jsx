import React from "react";
import { motion } from "framer-motion";
import "./Sunflower.css";

// Adjusted petal spacing and layering
const petalLayers = [
  { count: 30, distance: 75, scale: 1, opacity: 1 },
  { count: 24, distance: 60, scale: 0.85, opacity: 0.8 },
  { count: 18, distance: 45, scale: 0.75, opacity: 0.6 },
  { count: 12, distance: 30, scale: 0.5, opacity: 0.3 },
];

const Sunflower = () => {
  return (
    <div className="lotus-container">
      <motion.div
        className="lotus-glow"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <motion.div
        className="lotus"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {/* Central Petal */}
        <motion.div
          className="central-petal"
          initial={{ scale: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />

        {/* Petal Layers */}
        {petalLayers.map((layer, index) =>
          Array.from({ length: layer.count }).map((_, i) => (
            <motion.div
              key={`${index}-${i}`}
              className="petal"
              style={{
                transform: `rotate(${i * (360 / layer.count)}deg) translateY(-${layer.distance}px) scale(${layer.scale})`,
                opacity: layer.opacity,
                zIndex: 1,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.6, 1.2, 1], opacity: layer.opacity }}
              transition={{
                delay: i * 0.015,
                duration: 0.8,
                ease: "easeOut",
              }}
            />
          ))
        )}

        {/* Center circle */}
        <motion.div
          className="center"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Sunflower;
