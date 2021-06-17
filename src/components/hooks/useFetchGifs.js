import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data:[],
        losding: true
    });

    useEffect(()=>{ console.log(categoria);
        getGifs(categoria)
          .then(imgs => setState({
              data: imgs,
              loading: false
          }));
    },[categoria]);

    return state;
}
