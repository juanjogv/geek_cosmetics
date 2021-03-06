import React from "react";
import ReactDom from 'react-dom';

export default function Modal({isOpen, children, onClose}) {

    const MODAL_STYLES = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '50px',
        zIndex: 1000
    }

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 1000
    }

    if (!isOpen.open) return null

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES}>
                <div style={MODAL_STYLES} className='col rounded-lg'>
                    <div className='row mb-3 '>
                        {children}
                    </div>
                    <div className='row'>
                        <button onClick={onClose} type="button"
                                className="btn btn-primary"> Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}