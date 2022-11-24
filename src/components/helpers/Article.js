const Article = () =>{
    return(
        <article className='m-2 mx-5 article'>
            <form className='form'>
                <h4 className='text-light'>Productos</h4>
                <input className='my-2 input'  type='text' value='Nombre'></input>
                <input className='my-2 input'  type='text' value='Sexo'></input>
                <input className='my-2 input'  type='text' value='Referencia'></input>
                <input className='my-2 input'  type='text' value='Tamaño'></input>
                <input className='my-2 input'  type='text' value='Cantidad'></input>
                <textarea className='my-2 input' cols='22' rows='4'  type='text' value='Descripcion'></textarea>
                <input className='my-3 input boton' type='button' value='GUARDAR'></input>
            </form>
        </article>
    )
}

export default Article;