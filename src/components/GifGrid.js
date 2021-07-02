// import React, { Fragment, useEffect, useState } from 'react';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers/getGifs';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({categoria}) => {
    // const [imgs, setImgs] = useState([]);
    const {data:imgs,loading} = useFetchGifs(categoria);

    // useEffect(()=>{
    //     getGifs(categoria)
    //         .then(setImgs);
    // }, [categoria]);

    // getGifs();

        return(
            <Fragment>
                <h3>{categoria}</h3>
                {loading && <p className="animate_animated animate_fadeIn">Loading</p>}
                <div className="card-grid">
                    { imgs.map((img) =>(<GifGridItem key={img.id} {...img}/>))}
                </div>
            </Fragment >
        );
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired,
}