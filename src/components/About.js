// src/components/About.js
import React from 'react';
import perfil from '../assets/imh.jpg';
import endereco from '../assets/address-icon.png';
import youtube from '../assets/youtube-icon2.png';
import likdin  from '../assets/linkedIn-icon2.png';
import instagram  from '../assets/instagram-icon2.png';
import github  from '../assets/github-icon2.png';
import teste  from '../assets/teste.png';

function About() {
  return (
   <div className="container2">
        <div className="card2">

            <img src={perfil} alt="Foto de perfil" className="profile-img" />

            <div className="container-text2">
                <h1 className="name">
                    Paulo de Barros
                </h1>

                <h3 className="desc">
                    lore lore lore <b>lore</b> <br />
                    lore lore llore<br /><br />

                    <img src={endereco} alt="Ícone de endereço" className="address-icon" /> São Paulo, São Paulo - ZO
                </h3>
            </div>

            <div className="socials">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Ícone do GitHub" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Ícone do Instagram" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={likdin} alt="Ícone do LinkedIn" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="Ícone do YouTube" />
                </a>
            </div>
        </div>

        <div className="card2">

            <img src={teste} alt="Foto de perfil" className="profile-img" />

            <div className="container-text2">
                <h1 className="name">
                    Cristhian
                </h1>

                <h3 className="desc">
                    lore lore lore <b>lore</b> <br />
                    lore lore llore<br /><br />

                    <img src={endereco} alt="Ícone de endereço" className="address-icon" /> São Paulo, São Paulo - ZO
                </h3>
            </div>

            <div className="socials">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Ícone do GitHub" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Ícone do Instagram" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={likdin} alt="Ícone do LinkedIn" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="Ícone do YouTube" />
                </a>
            </div>
        </div>
        <div className="card2">

            <img src={teste} alt="Foto de perfil" className="profile-img" />

            <div className="container-text2">
                <h1 className="name">
                    Natalia
                </h1>

                <h3 className="desc">
                    lore lore lore <b>lore</b> <br />
                    lore lore llore<br /><br />

                    <img src={endereco} alt="Ícone de endereço" className="address-icon" /> São Paulo, São Paulo - ZO
                </h3>
            </div>

            <div className="socials">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Ícone do GitHub" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Ícone do Instagram" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={likdin} alt="Ícone do LinkedIn" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="Ícone do YouTube" />
                </a>
            </div>
        </div>
        <div className="card2">

            <img src={teste} alt="Foto de perfil" className="profile-img" />

            <div className="container-text2">
                <h1 className="name">
                    Joao
                </h1>

                <h3 className="desc">
                    lore lore lore <b>lore</b> <br />
                    lore lore llore<br /><br />

                    <img src={endereco} alt="Ícone de endereço" className="address-icon" /> São Paulo, São Paulo - ZO
                </h3>
            </div>

            <div className="socials">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Ícone do GitHub" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Ícone do Instagram" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={likdin} alt="Ícone do LinkedIn" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="Ícone do YouTube" />
                </a>
            </div>
        </div>
        <div className="card2">

            <img src={teste} alt="Foto de perfil" className="profile-img" />

            <div className="container-text2">
                <h1 className="name">
                    Renata
                </h1>

                <h3 className="desc">
                    lore lore lore <b>lore</b> <br />
                    lore lore llore<br /><br />

                    <img src={endereco} alt="Ícone de endereço" className="address-icon" /> São Paulo, São Paulo - ZO
                </h3>
            </div>

            <div className="socials">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Ícone do GitHub" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Ícone do Instagram" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={likdin} alt="Ícone do LinkedIn" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="Ícone do YouTube" />
                </a>
            </div>
        </div>

    </div>
  );
}

export default About;
