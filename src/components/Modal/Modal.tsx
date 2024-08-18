import { useEffect } from 'react';
import style from './modal.module.scss';

interface ModalProps {
  /**
   * The content to display inside the modal.
   */
  children: React.ReactNode;
}

/**
 * The Modal component displays a modal dialog with content and handles the body's overflow style.
 * 
 * @param {React.ReactNode} children - The content to display inside the modal.
 * 
 * @returns {JSX.Element} The rendered modal component with content.
 */
const Modal: React.FC<ModalProps> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <div className={style.createMessage}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
