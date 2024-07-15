import PropTypes from 'prop-types';

const SectionTitle = ({ title = "", subTitle = "" }) => {
    return (
        <div className='text-center space-y-2 my-6'>
            <h3 className='font-yesevaOne font-bold text-athena text-2xl md:text-3xl'>{title}</h3>
            <h5 className='font-montserrat font-medium text-gray-400 '>{subTitle}</h5>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default SectionTitle;