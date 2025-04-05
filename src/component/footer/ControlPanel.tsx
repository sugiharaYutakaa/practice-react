
import '../../css/ControlPanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faPlay, faForwardStep } from '@fortawesome/free-solid-svg-icons';

function ControlPanel() {

    return (
        <>
            <div className="ControlPanel">
                <div className='preview'><button><FontAwesomeIcon icon={faBackwardStep} size="lg" /></button></div>
                <div className='play'><button><FontAwesomeIcon icon={faPlay} size="lg" /></button></div>
                <div className='next'><button><FontAwesomeIcon icon={faForwardStep} size="lg" /></button></div>
            </div >
        </>
    )
}

export default ControlPanel