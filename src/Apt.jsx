import { Component } from "react";

class Carte extends Component {

    state={
        show:true,
        elapsed:0,
        person:{
            fullName: 'Amin',
    bio: 'hello',
    imgSrc: 'https://www.w3schools.com/howto/img_avatar.png',
    profession: 'web developer',
        }
    }
    componentDidMount (){
        if(!this.state.show) return
        const interval = setInterval(() => this.setState({elapsed:s => s + 1}), 1000)
        return () => clearInterval(interval)
      }
      
    
    render(
       
    ){
        return(<div className="App">
        {/* <img src={this.Person.}/> */}
        <h3 style={{margin: '50px auto'}}>{this.state.elapsed}</h3>
        <div className={flipCard + (this.state.show ? ' ' + hover : '')}>
          <div>
            <div onClick={() => this.setSate({show:true})}>
              <img src={this.state.person.imgSrc} />
            </div>
            <div>
              <h1>{this.state.person.fullName}</h1>
              <h2>{this.state.person.bio}</h2>
              <h3>{this.state..profession}</h3>
              <button onClick={() => this.setSate({show:false})}>Hide</button>
            </div>
          </div>
        </div>
      </div>);
    }
}