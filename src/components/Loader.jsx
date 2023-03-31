import { DotSpinner } from '@uiball/loaders';

export const Loader = () => {
	return (
        <div className="container-loader">
            <DotSpinner size={50} speed={0.5} color='black' />;
        </div>
    )
};

