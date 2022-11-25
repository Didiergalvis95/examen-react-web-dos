import { useState } from "react";

const Article = () =>{
    const [nombre, setNombre] = useState();
    return(
        <article className='m-2  article'>
            <form className='form'>
                <img className='producto' src='https://blog.offgamers.com/wp-content/uploads/2015/07/plants_vs_zombies_256_png_icon_by_kingreverant.png'/>
                <h4 className='text-light'>Productos</h4>
                <input className='my-2 input'  type='text' placeholder='Nombre'></input>
                <input className='my-2 input'  type='text' placeholder='Sexo'></input>
                <input className='my-2 input'  type='text' placeholder='Referencia'></input>
                <input className='my-2 input'  type='text' placeholder='Tamaño'></input>
                <input className='my-2 input'  type='text' placeholder='Cantidad'></input>
                <textarea className='my-2 input' cols='22' rows='4'  type='text' placeholder='Descripcion'></textarea>
                <input className='my-3 input boton' type='button' value='GUARDAR'></input>
            </form>
        </article>
    )
}

export default Article;