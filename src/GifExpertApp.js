import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({categoriasDef = []}) => {
    // const categorias = ['One Puch','Samurai X','Dragon Ball'];
    // const [categorias, setCategorias] = useState(['One Puch','Samurai X','Dragon Ball'])
    const [categorias, setCategorias] = useState(categoriasDef);
    
    // const handelAdd = () => {
    //     setCategorias(['Hunter x Hunter',...categorias]);
    //     // setCategorias('Hunter x Hunter'); // Cambia el estado de array a string
    //     // categorias.push('Hunter x Hunter'); // Mala practica
    // }

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />
            {/* <button onClick={handelAdd}>Agregar</button> */}
            <ol>
            {
                categorias.map(
                    (categoria) => (
                        <GifGrid
                            key={categoria}
                            categoria={categoria}
                        />
                    )
                )
            }
            </ol>
        </Fragment>
    );
}

export default GifExpertApp;