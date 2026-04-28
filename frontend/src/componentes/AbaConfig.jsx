import React from 'react';
import ReactDOM from 'react-dom/client';

function AbaConfig() {
    return (
        <div className="config-bg">
            <div className="config-container">
                <div className="config-header">
                    <h2 className="config-title">Configurações</h2>
                    <p className="config-subtitle">Customize sua experiência</p>
                </div>
                <div className="config-tema">
                    <h3>Tema</h3>
                    <button>Escuro</button>
                    <button>Claro</button>
                    <button>Sistema</button>
                </div>
                <div>
                    <div>
                        <h3>Tamanho da fonte</h3>
                        <p>16px</p>
                    </div>
                    <div className="config-fonte"></div>
                </div>
                <button className="config-restaurar">Restaurar Configurações</button>
            </div>
        </div>
    );
}