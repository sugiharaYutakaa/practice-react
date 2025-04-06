
import { useState } from 'react';
import '../../css/MusicTimeBar.css'
function MusicTimeBar({ audio }: { audio: HTMLAudioElement }) {

    const [currentTime, setCurrentTime] = useState(0);
    audio?.addEventListener("timeupdate", () => { setCurrentTime(audio.currentTime) });

    return (
        <>
            <input type="range" value={currentTime} className='timeBar'></input>
        </>
    )
}

export default MusicTimeBar
