import React, { Component } from 'react';
import api from "../services/api";

import './Feed.css';

import more from '../assets/more.svg'; 
import like from '../assets/like.svg'; 
import comment from '../assets/comment.svg'; 
import send from '../assets/send.svg'; 

class Feed extends Component {
render(){
return (
<section id="post-list">
    <article>
        <header>
            <div class="user-info">
                <span>Gustavo</span>
                <span class="place">Cidade Jardim</span>
            </div>

            <img src={more} alt="Mais" />
        </header>
        <img src="http://localhost:3333/files/blastoise-pictures-click-to-edit-cool-blastoise-pictures.jpg" alt="" />

        <footer>
            <div class="actions">
                <img src={like} alt="Likes" />
                <img src={comment} alt="Comment" />
                <img src={send} alt="Enviar" />
            </div>

            <strong>900 Curtidas</strong>
            <p>
                Um post Muito legal
                <span>#Blastoise</span>
            </p>
        </footer>
    </article>

    <article>
            <header>
                <div class="user-info">
                    <span>Gustavo</span>
                    <span class="place">Cidade Jardim</span>
                </div>
    
                <img src={more} alt="Mais" />
            </header>
            <img src="http://localhost:3333/files/blastoise-pictures-click-to-edit-cool-blastoise-pictures.jpg" alt="" />
    
            <footer>
                <div class="actions">
                    <img src={like} alt="Likes" />
                    <img src={comment} alt="Comment" />
                    <img src={send} alt="Enviar" />
                </div>
    
                <strong>900 Curtidas</strong>
                <p>
                    Um post Muito legal
                    <span>#Blastoise</span>
                </p>
            </footer>
        </article>
</section>
);
}
}

export default Feed;