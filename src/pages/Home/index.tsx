import React from 'react';

import './Home.scss';

const helloWorld = [
  'Hello, world!',
  'Bonjour le monde!',
  'Hallo Welt!',
  '¡Hola Mundo!',
];

export default () => {
  return (
    <div className={'home'} id={'home'}>
      <h1>
        {helloWorld[Math.floor(Math.random() * Math.floor(helloWorld.length))]}
      </h1>
      <h4>I'm Ian.</h4>
      <p>I come from the small town of Creston, British Columbia.</p>
      <p>
        I'm a student at Thompson Rivers University, where I've studied two
        years of chemistry and two years of computer science. I'm currently in
        the process of finishing my BSc, majoring in comp sci.
      </p>
      <p>
        I also run my own company,{' '}
        <a href={'https://swartz.dev'}>Swartz Software Development</a>. We offer
        full stack development services on a contract basis and additionally
        have a couple of in-house projects.
      </p>
    </div>
  );
};
