
import '../css/Footer.css'
import PlayingMusicInfo from './footer/PlayingMusicInfo'
import ControlPanel from './footer/ControlPanel'
import RightContent from './footer/RightContent'
function Footer() {

    return (
        <>
            <div className="Footer">
                <PlayingMusicInfo />
                <ControlPanel />
                <RightContent />
            </div >
        </>
    )
}

export default Footer
