
import '../../css/TopImage.css'
function TopImage() {

    return (
        <>
            <div className='TopImage'>
                <img className="back" src="https://press.moviewalker.jp/api/resizeimage/news/article/229834/1439534?h=500" />
                <div className="glass" />
                <div className="front" >
                    <div className="harf">
                        <img src="https://press.moviewalker.jp/api/resizeimage/news/article/229834/1439534?h=500" />
                    </div>
                </div>
                <div className='flaver'>
                    <span>YORUSIKA</span>
                    <span className='sm'>music station</span>
                </div>
            </div>
        </>
    )
}

export default TopImage
