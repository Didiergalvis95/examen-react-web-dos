const Section = () =>{
    return(
        <section className='m-2 mx-3 section'>
            <form className='form'>
                <h4 className='text-light'>Proveedores</h4>
                <input className='my-2 input' type='text' value='Nombre'></input>
                <input className='my-2 input' type='text' value='Nit'></input>
                <input className='my-2 input' type='text' value='Direccion'></input>
                <input className='my-2 input' type='text' value='Telefono'></input>
                <input className='my-2 input' type='text' value='Correo'></input>
                <input className='my-2 input' type='text' value='Producto que compra'></input>
                <textarea className='my-2 input' type='text' value='Descripcion'></textarea>
                <input className='my-3 input boton' type='button' value='GUARDAR'></input>
            </form>
        </section>
    )
}

export default Section;