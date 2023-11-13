import { memo, useMemo } from "react"

let render = 0

function Burden ({value}) {
    
    // useMemo позволяет указать зависимости, по которым будет определяться вызов указанной 
    // Хук позволяет по условию определить, нужно ли выполнить тело функции (возвращать)
    // Сама функция внутри обвертки далее перестанет быть функцией

    // useCallback позволяет не определять функцию в момент обновления компонента!
    // useMemo в отличии от useCallback, возврашает не функцию
    // Наличие ключевого слово return внутри колбека useMemo обязательное
    
    console.log(`Компонент Burden был обновлен ${++render} раз`)
    
    let burdenHandler = useMemo(() => {
        console.log('Нагрузка!');
        let i = 0
        while(i < 1_000_000_000) {
            i++
        }
        return (value > 5 ) ? 'Значение больше 5' : 'Значение не четное'
    }, [value])
    
    return (
        <div>
            <h2>{burdenHandler}</h2>
        </div>
    )
}
// Если коллбек вернет false - компонент обновится
// Если вернет true - компонент обновляться не будет
export default memo(Burden, (previousProp, nextProp) => {
    return nextProp.value !== 6
})