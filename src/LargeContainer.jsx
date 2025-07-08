
import HistoryLinks from './HistoryLinks'
import './large.css'

export default function LargeContainer({ children, tile }) {
    return (
        <>
            <HistoryLinks title={tile}></HistoryLinks>
            <section className="res-container">
                {children}
            </section>
        </>
    )
}