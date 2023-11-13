import { memo } from "react";

let render = {
    count1: 0,
    count2: 0,
}

function Counter({value, elem}) {
    
    console.log(`Компонент ${elem} был обновлен ${++render[elem]}`);
    
    return (
        <div>
            <h2>{value}</h2>
        </div>
    )
}

export default memo(Counter, (previousProps, nextProp) => {
   return previousProps.value > 5
})