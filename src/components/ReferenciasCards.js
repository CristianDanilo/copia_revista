// src/components/ReferenciasCards.jsx
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ReferenciasCards() {
  return (
    <div id='referencias-home' className='cards'>
      <h1>Referencias Éticas de la IA</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src='images/cards/ref-1.jpg' text='Referente #1: La autonomía y toma de decisiones de la IA' label='Referencia 1' title='Interacción humano-IA' path='/referencias' pageIndex={0} />
            <CardItem src='images/cards/ref-2.jpg' text='Referente #2: El sesgo algorítmico y la discriminación' label='Referencia 2' title='Transparencia y justicia' path='/referencias' pageIndex={1} />
            <CardItem src='images/cards/ref-3.jpg' text='Referente #3: La privacidad y la vigilancia' label='Referencia 3' title='Privacidad y datos' path='/referencias' pageIndex={2} />
          </ul>
          <ul className='cards__items'>
            <CardItem src='images/cards/ref-4.jpg' text='Referente #4: La responsabilidad moral y atribución de culpa' label='Referencia 4' title='Responsabilidad moral' path='/referencias' pageIndex={3} />
            <CardItem src='images/cards/ref-5.jpg' text='Referente #5: El impacto en la educación y la formación académica' label='Referencia 5' title='Educación e IA' path='/referencias' pageIndex={4} />
            <CardItem src='images/cards/ref-6.jpg' text='Referente #6: La relación entre IA y creatividad humana' label='Referencia 6' title='IA y creatividad' path='/referencias' pageIndex={5} />
            <CardItem src='images/cards/ref-7.jpg' text='Referente #7: Desafíos en la interacción humano-IA' label='Referencia 7' title='Interacción ética' path='/referencias' pageIndex={6} />
            <CardItem src='images/cards/bibliografia.jpg' text='Referencias Bibliográficas' label='Bibliografía' title='Referencias Bibliográficas' path='/referencias' pageIndex={7} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReferenciasCards;
