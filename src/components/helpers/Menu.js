const Menu = () =>{
    return(
            <ul className='d-flex lista'>
                <li className='mx-3 elemento'>
                    <a className='enlace text-light' href='#'>Inicio</a> 
                </li>
                <li className='mx-3 elemento'>
                    <a className='enlace text-light' href='#'>Productos</a> 
                </li>
                <li className='mx-3 elemento'>
                    <a className='enlace text-light' href='#'>Clientes</a> 
                </li>
                <li className='mx-3 elemento'>
                    <a className='enlace text-light' href='#'>Proveedores</a> 
                </li>
            </ul>
    )
}

export default Menu;
