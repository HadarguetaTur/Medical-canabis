import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicePreview = ({ service }) => {
    return (
        <div className="bg-white z-30 flex flex-col rounded-lg shadow-lg p-8  text-center w-550 h-550">
            <FontAwesomeIcon icon={service.icon} className="text-green-200 text-6xl" />
            <div className='max-w-550'>
                <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
                <p className="mt-4 max-w-550">{service.detail}</p>

            </div>

        </div>
    );
};

export default ServicePreview;
