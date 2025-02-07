import { useEffect } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import "../css/SubWindow.css"; // Importing the new CSS file

interface ModalProps {
  imageSrc: string | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageSrc, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!imageSrc) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div>
        <div className="close-box">
          <button className="close-button" onClick={onClose}>
            <i className="fa fa-xmark"></i>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="modal-container"
        >
          <img src={imageSrc} alt="Certificate" className="modal-image" />
        </motion.div>
      </div>
    </div>,

    document.body // 💡 Mounts the modal to the body, preventing parent influence
  );
};

export default Modal;
