import { FC } from 'react';
import { ButtonProps } from '../interfaces/interface';
import '../styles/components/Button.css';

const Button: FC<ButtonProps> = ({ onClick, color, text }) => {
	return (
		<button onClick={onClick} style={{ backgroundColor: color }}>
			{text}
		</button>
	);
};

export default Button;
