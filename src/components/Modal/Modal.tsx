import { useEffect } from 'react';
import style from './modal.module.scss';

interface ModalProps {
  /**
   * The content to display inside the modal.
   */
  children: React.ReactNode;
  
  /**
   * Function to be called when the modal is closed.
   */
  onClose: () => void;
}

/**
 * The Modal component displays a modal dialog with content and handles the body's overflow style.
 * 
 * @param {React.ReactNode} children - The content to display inside the modal.
 * @param {() => void} onClose - Function to be called when the modal is closed.
 * 
 * @returns {JSX.Element} The rendered modal component with content.
 */
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when the modal is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <div className={style.createMessage}>{children}</div>
        <button className={style.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
