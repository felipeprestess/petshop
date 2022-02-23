import React, { useState, useEffect } from 'react';
import { busca } from '../api/api';

import { Link } from 'react-router-dom';

const ListaPost = ({ url }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        busca(url, setPosts);
    }, [url])    

    return(
        <section className="posts container">
            {posts.map(item => {
                return (
                    <Link key={item.id} className={`cartao-post cartao-post--${item.categoria}`} to={`/posts/${item.id}`}>
                        <article key={item.id}>
                            <h3 className="cartao-post__titulo">
                                {item.title}
                            </h3>
                            <p className="cartao-posta__meta">{item.metadescription}</p>
                        </article>
                    </Link>
                ); 
            })}
        </section>
    );
};

export default ListaPost;