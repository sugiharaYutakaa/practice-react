
import '../../css/ControlPanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faPlay, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import MusicTimeBar from './MusicTimeBar'
import React, { useState, useRef } from 'react';
type Song = {
    url: string;
    title: string;
    artist: string;
    image: string;
};
type Props = {
    song: Song;
    setPlayingState: (song: Song) => void;
};


function ControlPanel({ song, setPlayingState }: Props) {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
                setPlayingState(song)
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <MusicTimeBar audio={audioRef.current!} />
            <div className="ControlPanel">
                <div className='preview'><button><FontAwesomeIcon icon={faBackwardStep} size="lg" /></button></div>
                <div className='play'><button><FontAwesomeIcon icon={faPlay} size="lg" onClick={togglePlay} /></button></div>
                <div className='next'><button><FontAwesomeIcon icon={faForwardStep} size="lg" /></button></div>
            </div >
            <audio
                ref={audioRef}
                src={song.url}
            />
        </>
    )
}

export default ControlPanel