import React from 'react';

export interface IProps {
	learning: {
		content_type: string;
		question_type: string | number | Array<string>;
		lesson_type: string;
		video_url: string;
		markdown?: string;
		title: string;
		description: string;
		time_limit: number;
		options?: Array<string>;
		answer_value: string | Array<boolean>;
		viewed: boolean;
	}[];
}

export interface IButton {
	button: {
		color: string;
		text: string;
		onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	};
}

export interface ButtonProps {
	color: IButton['button']['color'];
	text: IButton['button']['text'];
	onClick: IButton['button']['onClick'];
}

export interface IYoutube {
	src: string;
}
