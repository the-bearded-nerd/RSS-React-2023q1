/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './modal.styles.css';

interface IModalProps {
  isActive: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isActive, onClose, children }: IModalProps) {
  return (
    <div className={isActive ? 'modal active' : 'modal'} onClick={() => onClose()}>
      <div
        className={isActive ? 'modal-content active' : 'modal-content'}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <button className="btn-close-modal" type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}
