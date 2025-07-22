import { useEffect, useState } from "react"
import Card from "./Card"
import RandomCard from "./RandomCard"
import { Pagination } from "antd"
import { scrollTop } from "../utility/scrollTop"
import Search from "../search/Search"
import { getAllCountry, getSearch as searchCountry } from "../../services"

function Main() {
    const [data, setData] = useState([])
    const [random, setRandom] = useState([])
    const [count, setCount] = useState(12)
    const [randomIndex, setRandomIndex] = useState(null)
    const [search, setSearch] = useState("")
    const [isSearch, setIsSearch] = useState(false)
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


    useEffect(() => {
        getAllCountry()
            .then(result => {
                setData(result)
                setRandom(result)
                setRandomIndex(rand(0, result.length - 1))
            })
    }, [])


    function getSearch(val) {
        if (val.trim().length === 0) {
            setData(random)
            setIsSearch(false)
        }
        else {
            setIsSearch(true)
            searchCountry(val)
                .then(result => {
                    setData(result)
                })
                .catch(error => {
                    console.error("Axtarış səhvi:", error)
                    setData([])
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
                    <Search getSearch={getSearch} setIsSearch={setIsSearch} />
                </div>
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">CountryApp</h2>
                    </div>
                    {!isSearch && randomIndex !== null && (
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
                scrollTop("content")
            }}
                pageSize={12} align="center" defaultCurrent={1} total={data.length} />
        </main>
    )

}
export default Main
