import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function Details() {
    const { name } = useParams()
    const [country, setCountries] = useState()

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCountries(data)
                }
            })
    }, [name])

    if (country == undefined) {
        return <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    return (

        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src={country?.[0].flags.svg} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3>Country: {country?.[0].name.common}</h3>
                        <h3>Capital: {country?.[0].capital}</h3>
                        <h3>Population: {country?.[0].population}</h3>
                        <h3>Area: {country?.[0].area}</h3>
                        <span className="text-xs dark:text-gray-600">{country?.[0].flags.alt}</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {country?.[0].borders?.map((item, index) => (
                                <Link key={index} to={`/details/${item}`} className="px-4 py-2 text-sm font-semibold rounded bg-indigo-500 text-white">{item}</Link>
                            )
                            )}
                        </div>

                    </div>
                </a>
            </div>
        </section>
    )
}

export default Details
