import { useEffect } from 'react';
import style from './modal.module.scss';
import Button from '../Button/Button';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
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
        <div className={style.closeButton}><Button onClick={onClose}>Close</Button></div>
        {/* <button className={style.close} onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
}

export default Modal;
