const Aside = () =>{
    return(
        <aside className='m-2 mx-3 aside'>
            <form className='form'>
                <h4 className='text-light '>Clientes</h4>
                <input className='my-2 input'  type='text' value='Nombre'></input>
                <input className='my-2 input'  type='text' value='Documento'></input>
                <input className='my-2 input'  type='text' value='Correo'></input>
                <input className='my-2 input'  type='text' value='Direccion'></input>
                <input className='my-2 input'  type='text' value='Barrio'></input>
                <input className='my-2 input'  type='text' value='Telefono'></input>
                <input className='my-3 input boton' type='button' value='GUARDAR'></input>
            </form>
        </aside>
    )
}

export default Aside;