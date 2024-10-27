import { useEffect, useState } from "react"

let lastSlected: null | 'x' | 'o' = null

export const useTicTac = () => {
    const createDeafaultCells = () => (
        Array(9).fill(null).reduce(
            (accum, _, id) => {
              accum[id] = false
              
              return accum
            }, {}
        )
    )

    const [cells, setCells] = useState(createDeafaultCells)

    const [winer, setWiner] = useState(null)

    const cellListener = (key) => {
        if(winer || cells[key]) {
            return
        }

        setCells({
        ...cells,
        [key]: lastSlected === 'x'? 'o': 'x'
        })
            
        lastSlected = lastSlected === 'x'? 'o': 'x'
    }

    const restart = () => {
        lastSlected = null

        setWiner(null)
        setCells(createDeafaultCells)
    }

    useEffect(() => {
        [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ].some((line) => {
            if(cells[line[0]] === cells[line[1]] && cells[line[1]] === cells[line[2]]) {
                setWiner(cells[line[0]])
                
                return true
            }

            return false
        })
    }, [cells])

    return {
        cells,
        winer,
        lastSlected,
        restart,
        cellListener,
    }
}