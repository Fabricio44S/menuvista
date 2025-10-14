import "./MenuButton.css";

type Props = {
  text: string;
  icon?: string;
  onClick?: () => void;
};

export default function MenuButton({ text, icon, onClick }: Props) {
  const clickSound = new Audio("/sounds/click.mp3");

  const handleClick = () => {
    clickSound.play();
    onClick?.();
  };

  return (
    <button className="menu-btn" onClick={handleClick}>
      {icon && <img src={icon} alt="" className="menu-icon" />}
      <span className="menu-text">{text}</span>
    </button>
  );
}
