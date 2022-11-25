const Aside = () =>{
    return(
        <aside className='m-2 aside'>
            <form className='form '>
                <img className='cliente' src='https://myket.ir/app-icon/com.baltorogames.monsterrun_a6e7f819-80c7-4a4f-a3a6-713c91b5af79.png'/>
                <h4 className='text-light '>Clientes</h4>
                <input className='my-2 input'  type='text' placeholder='Nombre'></input>
                <input className='my-2 input'  type='text' placeholder='Documento'></input>
                <input className='my-2 input'  type='text' placeholder='Correo'></input>
                <input className='my-2 input'  type='text' placeholder='Direccion'></input>
                <input className='my-2 input'  type='text' placeholder='Barrio'></input>
                <input className='my-2 input'  type='text' placeholder='Telefono'></input>
                <input className='my-3 input boton' type='button' value='GUARDAR'></input>
            </form>
        </aside>
    )
}

export default Aside;