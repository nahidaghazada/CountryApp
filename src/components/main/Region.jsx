import { useParams } from "react-router-dom"
import Card from "./Card"
import { useEffect, useState } from "react"

function Region() {

    const { continent } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${continent}`)
            .then(res => res.json())
            .then(result => setData(result))            
            }, [continent])    
    return (
        <main className="dark:bg-gray-100">
            <section className="py-6 sm:py-12  dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">{continent}</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {data && data.map(item => <Card key={item.cca3} {...item} />)
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Region
