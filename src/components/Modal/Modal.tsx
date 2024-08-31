import { useEffect } from 'react';
import style from './modal.module.scss';

interface ModalProps {
  /**
   * The content to display inside the modal.
   */
  children: React.ReactNode;
}

/**
 * The `Modal` component displays a modal dialog with the provided content.
 * 
 * It handles the body's overflow style to prevent scrolling when the modal is open.
 * 
 * @param {ModalProps} props - The props for the modal component.
 * @param {React.ReactNode} props.children - The content to display inside the modal.
 * 
 * @returns {JSX.Element} The rendered modal component with the provided content.
 */
const Modal: React.FC<ModalProps> = ({ children }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={style.modal} data-testid="modal">
      <div className={style.modalContent} data-testid="modal-content">
        <div className={style.createMessage} data-testid="modal-message">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
