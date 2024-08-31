import style from './button.module.scss';

/**
 * Props for the Button component.
 * @interface
 */
interface ButtonProps {
  /**
   * Function to handle the click event of the button.
   * @param e - The click event object.
   */
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   * Content to be displayed inside the button.
   * Can be any valid React node (e.g., text, elements, etc.).
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
}

/**
 * A customizable button component.
 * @param {ButtonProps} props - The props for the button component.
 * @returns {JSX.Element} A styled button element.
 */
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button role='button' className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
