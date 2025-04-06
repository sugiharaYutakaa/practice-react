
import '../../css/PlayingMusicInfo.css'
type Song = {
    url: String;
    title: String;
    artist: String;
    image: string;
}
function PlayingMusicInfo({ song }: { song: Song }) {

    return (
        <>
            <div className='PlayingMusicInfo'>
                <div className='artistImage'>
                    <div className="square">
                        <img src={song.image} />
                    </div>
                </div>
                <div className='musicInfo'>
                    <span className='musicName'>{song.title}</span>
                    <span className='artistName'>{song.artist}</span>
                    <div className='btn'><button>歌詞</button></div>
                </div>
            </div>
        </>
    )
}

export default PlayingMusicInfo
