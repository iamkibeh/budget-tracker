import { Money } from '@mui/icons-material';
// eslint-disable-next-line react/prop-types
function Balance() {

    const balance = 1000;

    return (
        <div className='flex gap-2 items-center text-primary-color'>
            <Money className='h-5 w-5' />
            <p>
                {`${balance}`}
            </p>
        </div>
    );
}

export default Balance;
