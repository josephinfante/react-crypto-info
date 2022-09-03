import AddComma from "./AddComma"
import Dateformatter from "./Dateformatter"

const PriceFormatter = (props: {prices : [], type: string}) => {
    let arrayPrice:string[] = props.prices.map((price: [number, number]) => {
        return AddComma(Number(price[1].toFixed(2)))
    })
    let arrayTime = props.prices.map((price: [number, number]) => {
        return Dateformatter(price[0], "time")
    })
    return props.type === 'price' ? arrayPrice : props.type === 'time' ? arrayTime : null
}

export default PriceFormatter