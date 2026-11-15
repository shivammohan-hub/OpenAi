import Cards from "./Cards"

const Research = () => {
  return (
    <div className="py-16">
        <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-medium pb-10">Latest Research</h1>
                <a className="text-[14px]" href="">View more</a>
            </div>
        <div className="grid grid-cols-3 gap-7">
            <Cards image="research1.png" heading="An OpenAI model proposes a solution to the Navier–Stokes problem" genre="Research" date="Sep 8, 2026" />
            <Cards image="research2.png" heading="Research acceleration: The view inside OpenAI" genre="Research" date="Sep 6, 2026" />
            <Cards image="research3.png" heading="Ten advantages in mathematics and theoritical computer science" genre="Publication" date="Aug 1, 2026" />
        </div>
    </div>
  )
}

export default Research