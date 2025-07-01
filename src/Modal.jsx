
import './modal.css'

export default function Modal({ children }) {
    return (
        <div className='overlay'>
            <div className='modal'>
                {children}
            </div>
        </div>
    )
}