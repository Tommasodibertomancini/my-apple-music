interface NewsElementProps {
  description: string;
  imgUrl: string;
}

const NewsElement = (props: NewsElementProps) => {
  return (
    <div className='d-block'>
      <h6>NUOVA STAZIONE RADIO</h6>
      <p>{props.description}</p>
      <img
        src={props.imgUrl}
        alt='radio poster'
        className=' rounded-5'
        width={'500px'}
      />
    </div>
  );
};

export default NewsElement;
