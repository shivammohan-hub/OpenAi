const Cards = (props) => {
  let image = props.image ;
  let heading = props.heading ;
  let genre = props.genre ;
  let date = props.date ;

  return (
    <>
      <div className="">
          <img className="rounded-lg h-[430px]" src={image} alt="" />
          <h4 className="text-lg font-medium py-3">{heading}</h4>
          <span className="text-slate-500 text-sm"><span className="text-black">{genre} &nbsp;</span> {date}</span>
      </div>
    </>
  )
}

export default Cards