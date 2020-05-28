import React, { useState } from 'react';


const VolumeControls = () => {
    const [volume, setVolume] = useState(0);
    const [treble, setTreble] = useState(0);
    const [mid, setMid] = useState(0);
    const [bass, setBass] = useState(0);

    const volumeDown = () => {
        setVolume(volume - 1)
    }

    const volumeUp = () => {
        setVolume(volume + 1)
    }

    const trebleDown = () => {
        setTreble(treble - 1)
    }

    const trebleUp = () => {
        setTreble(treble + 1)
    }

    const midDown = () => {
        setMid(mid - 1)
    }

    const midUp = () => {
        setMid(mid + 1)
    }

    const bassDown = () => {
        setBass(bass - 1)
    }

    const bassUp = () => {
        setBass(bass + 1)
    }

    return (
        <div className="volume-controller">
            <button onClick={volumeDown}>-</button> <span>Volume level is {volume}</span><button onClick={volumeUp}>+</button><br />
            <button onClick={trebleDown}>-</button> <span>Treble level is {treble}</span><button onClick={trebleUp}>+</button><br />
            <button onClick={midDown}>-</button> <span>Mid level is {mid}</span><button onClick={midUp}>+</button><br />
            <button onClick={bassDown}>-</button> <span>Bass level is {bass}</span><button onClick={bassUp}>+</button>
        </div>
    )
}


export default VolumeControls;