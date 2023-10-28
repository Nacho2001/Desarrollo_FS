import 'primeflex/primeflex.css';
import React from 'react';

const Footer = () => {
    return (
        <div className='absolute sticky bottom-0 w-12 h-3rem bg-cyan-800'>
            <div className='ml-4 flex flex-column'>
                <div><b>Autor</b>: Ignacio Migoni</div>
                <div><b>Materia</b>: Laboratorio Full Stack II</div>
            </div>
        </div>
    )
}

export default Footer;