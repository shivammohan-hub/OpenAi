import Cards from "./Cards"

const Business = () => {
  return (
    <div className="p-20">
        <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-medium pb-10">OpenAI for Business</h1>
                <a className="text-[14px]" href="">View more</a>
            </div>
        <div className="grid grid-cols-3">
            <Cards />
            <Cards />
            <Cards />
        </div>
    </div>
  )
}

export default Business