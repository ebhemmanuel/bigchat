import { PostData } from '@/interfaces/post';

import Avatar from './avatar';
import CoverImage from './cover-image';
import { Date } from './date';
import PostTitle from './post-title';

type Props = Pick<PostData, 'title' | 'date' | 'coverImage' | 'author'>;

export default function PostHeader({ title, coverImage, date, author }: Props) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="hidden md:block md:mb-12">
				<Avatar name={author.name} picture={author.picture} />
			</div>
			<div className="mb-8 md:mb-16 sm:mx-0">
				<CoverImage title={title} url={coverImage.url} />
			</div>
			<div className="max-w-2xl mx-auto">
				<div className="block md:hidden mb-6">
					<Avatar name={author.name} picture={author.picture} />
				</div>
				<div className="mb-6 text-lg">
					<Date dateString={date} />
				</div>
			</div>
		</>
	);
}
