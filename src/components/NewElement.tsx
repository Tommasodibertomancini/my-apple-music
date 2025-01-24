import { ExplicitFill } from 'react-bootstrap-icons';

interface NewElementProps {
  imgUrl: string;
  description: string;
  isExplicit: boolean;
}

const NewElement = (props: NewElementProps) => {
  return (
    <>
      <img src={props.imgUrl} width={'100%'} className=' rounded-3' />
      <div className='d-flex justify-content-between align-items-center'>
        <span>{props.description}</span>
        {props.isExplicit && <ExplicitFill />}
      </div>
    </>
  );
};

export default NewElement;
