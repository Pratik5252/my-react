import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

const Waveform = ({ audio }) => {
  const containerRef = useRef();
  const waveSurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (waveSurferRef.current) {
      waveSurferRef.current.destroy();
    }

    waveSurferRef.current = WaveSurfer.create({
      container: containerRef.current,
      responsive: true,
      barWidth: 2,
      height: 40,
      backend: 'WebAudio',
      sampleRate: 76000,
      waveColor: 'black',
      progressColor: '#2D5BFF',
      cursorWidth: 0,
      barRadius: 5,
    });
    waveSurferRef.current.load(audio);
    waveSurferRef.current.on('ready', () => {
      setIsPlaying(waveSurferRef.current.isPlaying());
    });

    return () => {
      waveSurferRef.current.destroy();
    };
  }, [audio]);

  const togglePlayPause = () => {
    if (waveSurferRef.current) {
      if (isPlaying) {
        waveSurferRef.current.pause();
      } else {
        waveSurferRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <WaveSurferWrap>
      <button onClick={togglePlayPause} type="button">
        {isPlaying ? <PauseRoundedIcon size="2em" className='w-4 h-4'/> : <PlayArrowRoundedIcon size="2em" className='w-4 h-4'/>}
      </button>
      <div ref={containerRef} />
    </WaveSurferWrap>
  );
};

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
};

const WaveSurferWrap = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
  }
`;

export default Waveform;







