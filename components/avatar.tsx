import Image from 'next/image';

import { ImageLink } from '@/interfaces/post';

type Props = {
	name: string;
	picture: ImageLink | ImageLink[];
};

export default function Avatar({ name, picture }: Props) {
	const url = (picture as ImageLink).url ?? (picture as ImageLink[])[0].url;

	return (
		<div className="flex items-center">
			<div className="w-12 h-12 relative mr-4">
				<Image
					src={`${
						url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
					}${url}`}
					layout="fill"
					className="rounded-full"
					alt={name}
				/>
			</div>
			<div className="text-xl font-bold">{name}</div>
		</div>
	);
}
