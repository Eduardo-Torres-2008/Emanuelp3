 

function Boton({ children, dedos, type = 'button' }) {
    return (
        <button type={type} onClick={dedos}>
            {children}
        </button>
    );
}

export default Boton;