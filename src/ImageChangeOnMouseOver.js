import React, {useState} from 'react';
import donkeybw from '../images/donkey-bw.jpg';
import donkey from '../images/donkey.jpg';
import sheepbw from '../images/sheep-bw.jpg';
import sheep from '../images/sheep.jpg';
import ImageToggleOnMouseOver from './ImageToggleOnMouseOver'
import './App.css'

const ImageChangeOnMouseOver = () => {
      return (
            <div className="imagebox">
                <ImageToggleOnMouseOver primaryImage={donkeybw} secondaryImage={donkey} />
                <ImageToggleOnMouseOver primaryImage={sheepbw} secondaryImage={sheep} />
            </div>
            );
};

export default ImageChangeOnMouseOver;
