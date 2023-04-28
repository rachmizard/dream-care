import { Children, FC, PropsWithChildren } from "react";

import { Wrapper, Link, Item } from "./breadcrumb.styled";

interface BreadCrumbProps {
	gap?: number;
	separator?: React.ReactNode;
}

const BreadCrumbRoot: FC<PropsWithChildren<BreadCrumbProps>> = (props) => {
	const { children, gap = 8, separator } = props;

	const childrenCount = Children.count(children);

	return (
		<Wrapper
			css={{
				gap: gap ? `${gap}px` : "0px",
			}}>
			{Children.map(children, (child, index) => {
				if (index === Children.count(children) - 1) {
					return child;
				}

				const lastChild = index === childrenCount - 1;

				return (
					<>
						{child}

						{lastChild ? null : (
							<BreadCrumbSeparator separator={separator} />
						)}
					</>
				);
			})}
		</Wrapper>
	);
};

const BreadCrumbItem: FC<PropsWithChildren> = (props) => {
	const { children } = props;

	return <Item>{children}</Item>;
};

const BreadCrumbSeparator: FC<{
	separator?: React.ReactNode;
}> = ({ separator }) => {
	return <span>{separator ? separator : "/"}</span>;
};

const BreadCrumbLink: FC<{
	href: string;
	children: React.ReactNode;
}> = ({ href, children }) => {
	const isCurrentPage = href === window.location.pathname;

	return (
		<Link href={isCurrentPage ? undefined : href} active={isCurrentPage}>
			{children}
		</Link>
	);
};

export const BreadCrumb = {
	Root: BreadCrumbRoot,
	Item: BreadCrumbItem,
	Link: BreadCrumbLink,
};
