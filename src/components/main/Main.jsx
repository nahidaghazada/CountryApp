import { useEffect, useState } from "react"
import Card from "./Card"
import RandomCard from "./RandomCard"
import { Pagination } from "antd"
import { scrollTop } from "../utility/scrollTop"
import Search from "../search/Search"

function Main() {
    const [data, setData] = useState([])
    const [random, setRandom] = useState([])
    const [count, setCount] = useState(12)
    const [randomIndex, setRandomIndex] = useState(null)
    const [search, setSearch] = useState("")
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,cca3,capital,region,borders,area,flags,population")
            .then(res => res.json())
            .then(result => {
                setData(result)
                setRandom(result)
                setRandomIndex(rand(0, result.length - 1))
            })
    }, [])


    function getSearch(val) {
        if (val.trim().length === 0) {
            setData(random)
        }
        else {
            fetch(`https://restcountries.com/v3.1/name/${val}?fields=name,cca3,capital,region,borders,area,flags,population`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                })
        }
    }

    if (data.length == 0) {
        return <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    return (
        <main className="dark:bg-gray-100">
            <section className="py-6 sm:py-12  dark:text-gray-800">
                <div className="overflow-hidden max-w-[400px] mx-auto">
                    <Search getSearch={getSearch} />
                </div>
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">CountryApp</h2>
                    </div>
                    {search.length > 0 && randomIndex !== null && (
                        <RandomCard {...random[randomIndex]} />
                    )}
                    <div id="content" className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {data.length > 0 && data
                            .slice(count - 12, count)
                            .map(item => <Card key={item.cca3} {...item} />)
                        }
                    </div>
                </div>
            </section>
            <Pagination onChange={(page, pageSize) => {
                setCount(page * pageSize)
                scrollTopByElement("content")
            }}
                pageSize={12} align="center" defaultCurrent={1} total={data.length} />
        </main>
    )

}
export default Main
