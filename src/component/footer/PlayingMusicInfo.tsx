
import '../../css/PlayingMusicInfo.css'

function PlayingMusicInfo() {

    return (
        <>
            <div className='PlayingMusicInfo'>
                <div className='artistImage'>
                    <div className="square">
                        <img src="https://user0514.cdnw.net/shared/img/thumb/ramenPAR566542450_TP_V4.jpg" />
                    </div>
                </div>
                <div className='musicInfo'>
                    <span className='musicName'>braba</span>
                    <span className='artistName'>bababa</span>
                    <div className='btn'><button>歌詞</button></div>
                </div>
            </div>
        </>
    )
}

export default PlayingMusicInfo
