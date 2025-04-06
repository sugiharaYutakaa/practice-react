
import '../css/Footer.css'
import PlayingMusicInfo from './footer/PlayingMusicInfo'
import ControlPanel from './footer/ControlPanel'
import RightContent from './footer/RightContent'
import { useState } from 'react'
function Footer() {
    type Song = {
        url: String;
        title: String;
        artist: String;
        image: string;
    }
    const song = {
        url: "../../../public/music/island.mp3",
        title: "island",
        artist: "騒音のない世界",
        image: "https://storage.googleapis.com/studio-design-assets/projects/EjOQzNdqJ1/s-2400x2400_v-frms_webp_4c491b79-1c76-49d6-9464-1369fbebd3b9_middle.webp"
    }
    const [playingSong, setPlayingSongState] = useState<Song>(song)
    return (
        <>
            <div className="Footer">
                <PlayingMusicInfo song={playingSong} />
                <ControlPanel song={song} setPlayingState={setPlayingSongState} />
                <RightContent />
            </div >
        </>
    )
}

export default Footer
