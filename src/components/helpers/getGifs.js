
    export const getGifs = async( categoria) => {

        // useEffect(()=>{
        //     setImgs();
        // }, []);

        const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(categoria)}&api_key=vFOCAMHBf2Il9PlbnNKjClm0zDSKSqqF`;
        const res = await fetch(url);
        const {data} = await res.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        return(gifs);
    }