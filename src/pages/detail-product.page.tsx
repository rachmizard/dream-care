import { useParams } from "react-router-dom";

import { MainLayout } from "@/components";
import { PathParams } from "@/interfaces";

const DetailProductPage = () => {
	const params = useParams<PathParams>();

	return (
		<MainLayout shouldScrollRestoration>
			<div>
				Detail Product Page
				<span>{params?.id}</span>
			</div>
		</MainLayout>
	);
};

export default DetailProductPage;
