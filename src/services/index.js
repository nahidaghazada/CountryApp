import { instance } from "./instance"

const fields = "name,cca3,capital,region,borders,area,flags,population"

export async function getAllCountry() {
    try {
        const res = await instance.get(`/all?fields=${fields}`)
        return res.data
    } catch (error) {
       console.error("Bütün ölkələri əldə etmək səhvi:", error.message, error.response?.status);
        return [];
    }
}

export async function getSearch(val) {
    try {
        const res = await instance.get(`/name/${val}?fields=${fields}`)
        return res.data
    } catch (error) {
      console.error("Axtarış zamanı səhv:", error.message, error.response?.status);
        return [];
    }
}