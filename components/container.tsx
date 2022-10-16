import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
	return <div className="container mx-auto px-5">{children}</div>;
};
