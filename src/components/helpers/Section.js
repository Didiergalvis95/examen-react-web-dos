const Section = () =>{
    return(
        <section className='m-2 section'>
            <form className='form'>
                <img className='proveedor' src='http://i-2.ghostxpsp3.net/2021/0813/8aa184ab01654f15a6a250a9cb34dc81.png'/>
                <h4 className='text-light'>Proveedores</h4>
                <input className='my-2 input' type='text' placeholder='Nombre'></input>
                <input className='my-2 input' type='text' placeholder='Nit'></input>
                <input className='my-2 input' type='text' placeholder='Direccion'></input>
                <input className='my-2 input' type='text' placeholder='Telefono'></input>
                <input className='my-2 input' type='text' placeholder='Correo'></input>
                <input className='my-2 input' type='text' placeholder='Producto que compra'></input>
                <textarea className='my-2 input' cols='22' rows='3' type='text' placeholder='Descripcion'></textarea>
                <input className='my-3 input boton' type='button' value='GUARDAR'></input>
            </form>
        </section>
    )
}

export default Section;