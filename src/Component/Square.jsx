function Square({value, handleClick, id}) {
    return (
        <button className="square" onClick={()=>handleClick(id)}>{value}</button>
    )
}

export default Square
