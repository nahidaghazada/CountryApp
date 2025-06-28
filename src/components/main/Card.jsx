import { Link } from "react-router-dom"

function Card({flags, name, cca3, capital, region, borders, area}) {
    return (
        <article className="flex flex-col dark:bg-gray-50">
            <Link to={`/Details/${name.common}`} aria-label="Te nulla oportere reprimique his dolorum">
                <img alt={flags.alt} className="object-cover w-full h-52 dark:bg-gray-500" src={flags.svg} />
            </Link>
            <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{region}</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{name.common}, {capital}</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    {flags?.alt?.slice(0, 150)}...
                </div>
                <span>{cca3}</span>
                <span>{area}</span>
            </div>
        </article>
    )
}

export default Card
