

function Button({label, click}){
return (
    <div>
        <button onClick={click}>{label}</button>
    </div>
)
}


export default Button;