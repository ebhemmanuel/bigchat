import type { Except } from 'type-fest';

import Link from 'next/link';

import { PostData } from '@/interfaces/post';

import Avatar from './avatar';
import CoverImage from './cover-image';
import { Date } from './date';

type Props = Except<PostData, 'ogImage' | 'content'>;

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: Props) {
	return (
		<section>
			<div className="mb-8 md:mb-16">
				<CoverImage title={title} url={coverImage.url} slug={slug} />
			</div>
			<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				<div>
					<h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
						<Link href={`/posts/${slug}`}>
							<a className="hover:underline">{title}</a>
						</Link>
					</h3>
					<div className="mb-4 md:mb-0 text-lg">
						<Date dateString={date} />
					</div>
				</div>
				<div>
					<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
					<Avatar name={author.name} picture={author.picture} />
				</div>
			</div>
		</section>
	);
}
