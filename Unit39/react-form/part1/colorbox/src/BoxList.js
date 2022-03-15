import React , {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBoxes) => {
        setBoxes(boxes => [...boxes, { ...newBoxes, id: uuid() }])
    }
    const handleRemove = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }
    return (
        <>
        {boxes.map(({id, height, width, color})=>
        <Box key={id} handleRemove={handleRemove} id={id} width={width} height={height} color={color}></Box>)}
        <NewBoxForm addBox={addBox}></NewBoxForm>
        </>
    )
}


export default BoxList;