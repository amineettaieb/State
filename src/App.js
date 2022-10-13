
import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  hover: {
    '&>div': {
      transform: 'rotateY(180deg)',
    }
  },
  flipCard: {
    backgroundColor: 'transparent',
    width: 300,
    height: 300,
    margin: [40, 'auto'],
    border: [1, 'solid', '#f1f1f1'],
    perspective: 1000,
    '&>div': {
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      transition: 'transform 0.8s',
      transformStyle: 'preserve-3d',
      boxShadow: '0 0 5px black',
      '& button': {
        margin: 30,
        padding: [5, 10],
        background: 'white',
        border: 'none',
        borderRadius: 5,
        fontSize: '1.5em',
        color: 'dodgerblue',
        cursor: 'pointer',
      },
      '& img': {
        cursor: 'pointer',
        width: 300,
        height: 300
      },
      '&>*': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        '&:first-child': {
          backgroundColor: '#bbb',
          color: 'black',
          '&:hover:after': {
            display: 'flex',
            content: '"Show"',
            position: 'absolute',
            fontSize: '2em',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: '#0002',
            color: 'white',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center'
          }
        },
        '&:last-child': {
          backgroundColor: 'dodgerblue',
          color: 'white',
          transform: 'rotateY(180deg)',
        }
      }
    },

  },
})
export const App = () => {
  const [show, setShow] = useState(true)
  const [elapsed, setElapsed] = useState(0)
  const [person, setPerson] = useState(() => ({
    fullName: 'Amin',
    bio: 'hello',
    imgSrc: 'https://www.w3schools.com/howto/img_avatar.png',
    profession: 'web developer',
  }))

  useEffect(() => {
    if(!show) return
    const interval = setInterval(() => setElapsed(s => s + 1), 1000)
    return () => clearInterval(interval)
  }, [show])


  const { flipCard, hover } = useStyles()


  return (
    <div className="App">
      {/* <img src={this.Person.}/> */}
      <h3 style={{margin: '50px auto'}}>{elapsed}</h3>
      <div className={flipCard + (show ? ' ' + hover : '')}>
        <div>
          <div onClick={() => setShow(true)}>
            <img src={person.imgSrc} />
          </div>
          <div>
            <h1>{person.fullName}</h1>
            <h2>{person.bio}</h2>
            <h3>{person.profession}</h3>
            <button onClick={() => setShow(false)}>Hide</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App