import React from 'react';
import './PaginaLogin.css';
import ImagemPoly from "../assets/poly.png";
import Login from "../assets/login.png";
import Logo from "../assets/logo.png";

const PaginaLogin = () => {
    return (
        <div className="login-page">
            <header className="cabeçalho">
                <div className="menu">
                    <img
                        src={Logo}
                        alt="Logo"
                        id="imagemLogo" 
                    />
                </div>
            </header>
            <main>
            <div className="image-section">
                <img
                    src={ImagemPoly}
                    alt="Capa"
                    className="main-image"
                />
            </div>
            <div className="form-section">
                <img src={Login} alt="Login" className="logo" />
                <button className="google-login">Entrar com o Google</button>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Digite seu Email" />

                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" placeholder="Digite sua Senha" />

                    <a href="#" className="forgot-password">Esqueceu a senha?</a>
                    <button type="submit" className="login-button">Entrar</button>
                </form>
            </div>
            </main>
        </div>
    );
};

export default PaginaLogin;