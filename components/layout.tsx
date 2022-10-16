import { PropsWithChildren } from 'react';

import { Alert } from './alert';
import { Footer } from './footer';
import Meta from './meta';

interface Props extends PropsWithChildren {
	preview: boolean | null;
}

export default function Layout({ preview, children }: Props) {
	return (
		<>
			<Meta />
			<div className="min-h-screen">
				<Alert preview={preview} />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
