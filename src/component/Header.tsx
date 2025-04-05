
import '../css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faList } from '@fortawesome/free-solid-svg-icons';

function Header() {

    return (
        <>
            <div className="Header">
                <div className="logo">夜鹿</div>
                <div className="btn"><FontAwesomeIcon icon={faHouse} />ホーム</div>
                <div className="btn"><FontAwesomeIcon icon={faList} />ライブラリ</div>
            </div >
        </>
    )
}

export default Header
