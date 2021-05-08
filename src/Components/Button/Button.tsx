import "./Button.scss";


interface ButtonProps{
  children: any;
  inverted: boolean;
  otherProps?: [x: string];
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ children, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;