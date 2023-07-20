// // // export default function App(){
// // //   return(
// // //     <Toolbar
// // //       onPlayMovie={()=> alert('Playing!')}
// // //       onUploadImage={()=> alert('Uploading!')}
// // //     />
// // //   );
// // // }

// // import { Children } from "react";

// // import { Children } from "react";

// // // function Toolbar({onPlayMovie, onUploadImage}){
// // //   return(
// // //     <div>
// // //       <Button onClick={onPlayMovie}>
// // //         Play Movie
// // //       </Button>
// // //       <Button onClick={onUploadImage}>
// // //         Upload Image
// // //       </Button>
// // //     </div>
// // //   );
// // // }

// // // function Button({onClick, children}){
// // //   return(
// // //     <button onClick={onClick}>
// // //       {children}
// // //     </button>
// // //   );
// // // }

// // import { useState } from "react";
// // import { sculptureList } from "./data";

// // export default function Gallery(){
// //   const [index, setIndex] = useState(0);
// //   const [showMore, setShowMore] = useState(false);
// //   const hasNext = index < sculptureList.length - 1;
  
// // function handleNextClick(){
// //   if(hasNext){
// //     setIndex(index + 1);
// //   } else{
// //     setIndex(0)
// //   }
// // }

// // function handleMoreClick(){
// //   setShowMore(!showMore)
// // }

// // let sculpture = sculptureList[index];
// //   return(
// //     <>
// //       <button onClick={handleNextClick}>
// //         Next
// //       </button>
// //       <h2>
// //         <i>{sculpture.name}</i>
// //         by {sculpture.artist}
// //       </h2>
// //       <h3>
// //         ({index + 1} of {sculptureList.length})
// //       </h3>
// //       <button onClick={handleMoreClick}>
// //         {showMore ? 'hide' : 'show'}
// //         details
// //       </button>
// //       {showMore && <p>{sculpture.description}</p>}
// //       <img
// //         src={sculpture.url}
// //         alt={sculpture.alt}
// //       />
// //     </>
// //   );
// // }

// // import { people } from "./data";

// // export default function App(){
// //   const chemist = people.filter(persons=> persons.profession === 'chemist')
// //   const listItem = chemist.map(useanyname=> 
// //       <li key={useanyname.id}>
// //         <p>My name is {useanyname.name},</p>
// //         <p>Am a {useanyname.profession} by profession</p>
// //         <p>Some of my accomplishment includes: {useanyname.accomplishment}</p>
// //       </li>
// //     );
// //   return(
// //     <>
// //       <h1>Understanding filter, mapping of arrays, object, and arrays of object.</h1>
// //       <ul>
// //         {listItem}
// //       </ul>
// //     </>
// //   );
// // }


// // export function Recipe({drinkers}){
// //   return(
// //     <ol>
// //       <li>
// //         Boil {drinkers} cups of water.
// //       </li>
// //       <li>
// //         Add {drinkers} spoons of spice.
// //       </li>
// //       <li>
// //         Add {0.5 * drinkers} cups of milk to boil and sugar to taste.
// //       </li>
// //     </ol>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <section>
// //       <h1>Special Chai Recipe</h1>
// //       <h2>For Two</h2>
// //       <Recipe drinkers={2} />
// //       <h2>For a gathering</h2>
// //       <Recipe drinkers={4} />
// //     </section>
// //   );
// // }


// // let guest = 0;

// // function Cup(){
// //   guest = guest + 1;
// //   return(
// //     <h2>Tea cup for #{guest}</h2>
// //   );
// // }


// // export default function App(){
// //   return(
// //     <>
// //       <Cup/>
// //       <Cup/>
// //       <Cup/>
// //       <Cup/>
// //       <Cup/>
// //       <Cup/>
// //       <Cup/>
// //     </>
// //   );
// // }



// // export function Cup({guest}){
// //   return(
// //     <h2>The cup for {guest}</h2>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <>
// //       <Cup guest={1} />
// //       <Cup guest={2} />
// //       <Cup guest={3} />
// //       <Cup guest={4} />
// //       <Cup guest={5} />
// //       <Cup guest={6} />
// //       <Cup guest={7} />
// //       <Cup guest={8} />
// //       <Cup guest={9} />
// //     </>
// //   );
// // }



// // export default function App(){
// //   return(
// //     <Toolbar 
// //       onPlayMovie={()=> alert('Playing!')}
// //       onUploadImage={()=> alert('Uploading!')}
// //     />
// //   );
// // }

// // function Toolbar({onPlayMovie, onUploadImage}){
// //   return(
// //     <div>
// //       <Button onClick={onPlayMovie}>
// //         Play Movie
// //       </Button>
// //       <Button onClick={onUploadImage}>
// //         Upload Image
// //       </Button>
// //     </div>
// //   );
// // }


// // function Button({onClick, children}){
// //   return(
// //     <button onClick={onClick}>
// //       {children}
// //     </button>
// //   );
// // }


// // import { people } from "./data";

// // export default function App(){
// //   const chemist = people.filter(person=> 
// //     person.profession === 'chemist'  
// //   );
// //   const chemis = chemist.map(person=> 
// //     <li key={person.id}>
// //       <p>My Name is {person.name}</p>
// //       <p>My Profession is {person.profession}</p>
// //       <p>My accomplishment includes: {person.accomplishment}</p>
// //     </li>
// //   );
// //   return (
// //     <ul>
// //       {chemis}
// //     </ul>
// //   );
// // }


// // 

// // function Toolbar({onPlayMovie, onUploading}){
// //   return(
// //     <>
// //       <Button onClick={onPlayMovie}>
// //         Play Movie
// //       </Button>
// //       <Button onClick={onUploading}>
// //         Upload
// //       </Button>
// //     </>
// //   );
// // }

// // function Button({children, onClick}){
// //   return(
// //     <>
// //       <button onClick={onClick}>
// //         {children}
// //       </button>
// //     </>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <>
// //       <Toolbar 
// //       onPlayMovie={()=> alert('Playing!')} 
// //       onUploading={()=> alert('Playing!')} 
// //       />
// //       <Toolbar />
// //     </>
// //   );
// // }


// // function Toolbar({onPlaying, onUploading}){
// //   return(
// //     <>
// //       <Button onClick={onPlaying}>
// //         Play Movie
// //       </Button>
// //       <Button onClick={onUploading}>
// //         Upload
// //       </Button>
// //     </>
// //   );
// // }

// // function Button({onClick, children}){
// //   return(
// //     <button onClick={onClick}>
// //       {children}
// //     </button>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <>
// //       <Toolbar 
// //       onPlaying={()=> alert('What My God cannot do, does not exist')}
// //       onUploading={()=> alert('Please God, do not allow me fall. Amen.')}
// //       />
// //     </>
// //   );
// // }



// // import React, { useState } from 'react';

// // const Counter = () => {
// //   const [count, setCount] = useState(0);

// //   const increment = () => {
// //     setCount(count + 1);
// //   };

// //   return (
// //     <div>
// //       <h1>Counter</h1>
// //       <button onClick={increment}>Increment</button>
// //       <p>Count: {count}</p>
// //     </div>
// //   );
// // };

// // export default Counter;

// // import React, {useState} from "react";

// // export default function App(){

// //   const [count, setCounter] = useState(1);

// //   const HandleClick = ()=> {
// //     setCounter(count * 3993993)
// //   }
// //   return(
// //     <>
// //       <h1>Counter</h1>
// //       <button onClick={HandleClick}>Increment</button>
// //       <p>Count: {count}</p>
// //     </>
// //   );
// // }

// // import React, { useState } from 'react';

// // export default function App(){

// //   const [count, setCount] = useState(0);

// //   const HandleClick = () => {
// //     setCount(count + 1);
// //   }
// //   return(
// //     <>
// //       <h2>Counter</h2>
// //       <button onClick={HandleClick}>Click to increment value of counter</button>
// //       <p>Count: {count}</p>
// //     </>
// //   );
// // }


// // import React, {useState} from "react";

// // export default function App(){
// //   const [count, setCount] = useState(0);

// //   function handleClick(){
// //     setCount(count + 1);
// //   }
// //   return(
// //     <>
// //       <h1>Counter!</h1>
// //       <button onClick={handleClick}>When I click, let it change State</button>
// //       <p>Count: {count}</p>
// //     </>
// //   );
// // }


// // import React, {useState} from "react";

// // export default function App(){
// //  const [to, setTo] = useState('Alice'); 
// //  const [message, setMessage] = useState('Hello');

// //  function handleSubmit(e){
// //   e.preventDefault();
// //   setTimeout(() => {
// //     alert(`You said ${message} to ${to}`);
// //   }, 5000)
// //  }
// //  return(
// //   <form onSubmit={handleSubmit}>
// //     <label>
// //       To: {' '}
// //       <select
// //       value={to}
// //       onChange={e => setTo(e.target.value)}>
// //       <option value='Alice'>Alice</option>
// //       <option value='Bob'>Bob</option>
// //       </select>
// //     </label>
// //     <textarea
// //       placeholder="Message"
// //       value={message}
// //       onChange={e => setMessage(e.target.value)}
// //       />
// //       <button type="submit"> Send </button>
// //   </form>
// //  );
// // }

// // import React, {useState} from "react";

// // export default function App(){
// //   const [count, setCount] = useState(0);

// //   function increment(){
// //     setCount(c => c + 1);
// //   }

// //   return(
// //     <div>
// //       <button onClick={() => increment()}>+1</button>
// //       <button onClick={() => {
// //         increment();
// //         increment();
// //         increment();
// //         }}>+3</button>
// //       <h1>Score: {count}</h1>
// //     </div>
// //   );
// // }


// // import React, {useState} from "react";

// // export default function App(){
// //   const [person, setPerson] = useState({
// //     name: 'Selsa Daniel',
// //     artwork: {
// //       title: 'Blue Nana',
// //       city: 'Hamburg',
// //       image: 'https://www.i.imgur.com/Sd1AgUOm.jpg',
// //     }
// //   });

// //   function handleNameChange(e){
// //     setPerson({
// //       ...person, 
// //       name: e.target.value
// //     });
// //   }

// //   function handleTitleChange(e){
// //     setPerson({
// //       ...person,
// //       artwork: {
// //         ...person.artwork,
// //         title: e.target.value
// //       }
// //     });
// //   }

// //   function handleCityChange(e){
// //     setPerson({
// //       ...person,
// //       artwork: {
// //         ...person.artwork,
// //         city: e.target.value
// //       }
// //     });
// //   }

// //   function handleImageChange(e){
// //     setPerson({
// //       ...person,
// //       artwork: {
// //         ...person.artwork,
// //         image: e.target.value
// //       }
// //     });
// //   }

// //   return(
// //     <>
// //       <label>
// //         Name:
// //         <input 
// //         value={person.name}
// //         onChange={handleNameChange}
// //         />
// //       </label>
// //       <label>
// //         Title:
// //         <input 
// //         value={person.artwork.title}
// //         onChange={handleTitleChange}
// //         />
// //       </label>
// //       <label>
// //         City:
// //         <input 
// //         value={person.artwork.city}
// //         onChange={handleCityChange}
// //         />
// //       </label>
// //       <label>
// //         Image:
// //         <input 
// //         value={person.artwork.image}
// //         onChange={handleImageChange}
// //         />
// //       </label>
// //       <p>
// //         <i>{person.artwork.title}</i>
// //         {' by '}
// //         {person.name}
// //         <br />
// //       </p>
// //       <img 
// //         src={person.artwork.image}
// //         alt={person.artwork.title}
// //       />
// //     </>
// //   );
// // }

// // import React, {useState} from "react";

// // let nextID = 3;
// // const initialLIst = [
// //   {id: 0, title: 'Big Bellies', seen: 'false'},
// //   {id: 1, title: 'Lunar Landscape', seen: 'false'},
// //   {id: 2, title: 'Terracotta Army', seen: 'true'},
// // ];

// // export default function App(){
// //   const [list, setList] = useState(
// //     initialLIst
// //   );

// //   function handleToggle(artworkID, nextSeen){
// //     setList(list.map(artwork => {
// //       if(artwork.id === artworkID){
// //         return {...artwork, seen: nextSeen};
// //       } else{
// //         return artwork;
// //       }
// //     }));
// //   }
  
// //   return(
// //     <>
// //       <h1>Art Bucket List</h1>
// //       <h2>My list of art to see:</h2>
// //       <ItemList 
// //         artworks={list}
// //         onToggle={handleToggle}
// //       />
// //     </>
// //   );
// // }

// // function ItemList ({artworks, onToggle}){
// //   return(
// //     <ul>
// //       {artworks.map(artworks => (
// //         <li key={artworks.id}>
// //           <label>
// //             <input 
// //               type="checkbox"
// //               checked={artworks.id}
// //               onChange={e => {
// //                 onToggle(
// //                   artworks.id,
// //                   e.target.checked
// //                 );
// //               }}
// //             />
// //             {artworks.title}
// //           </label>
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // }


// // export default function App(){
// //   function handleClick(){
// //     alert('You\'ve clicked this button.')
// //   }
// //   return(
// //     <>
// //       <button onClick={handleClick}> I cannot do anything</button>
// //     </>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <>
// //       <button onClick={function handleClick(){
// //         alert('You are now clicking!');
// //       }}
// //       >Click-able</button>
// //     </>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <button onClick={() => {
// //       alert('Using Arrow function on this!')
// //     }}>Arrow functions </button>
// //   );
// // }

// // export default function App(){
// //   function handleClick(){
// //     alert('Checking on something!');
// //   }
// //   return(
// //     <>
// //       <button onClick={handleClick}>It Fires Immediately Before I call</button>
// //     </>
// //   );
// // }


// // export default function App(){
// //   return(
// //     <>
// //       <button onClick={alert('Message shows after rendering!')}>Button</button>
// //     </>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <>
// //       <button onClick={() => alert('Working Anonymously')}>Click for info!</button>
// //     </>
// //   );
// // }

// // export function AlertButton({message, children}){
// //   return(
// //     <>
// //       <button onClick={() => alert(message)}>
// //         {children}
// //       </button>
// //     </>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <>
// //       <AlertButton message='Playing'>
// //         Play Movie
// //       </AlertButton>
// //       <AlertButton message='Uploading'>
// //         Uploading
// //       </AlertButton>
// //     </>
// //   );
// // }


// // export function AlertButton({message, children}){
// //   return(
// //     <>
// //       <button onClick={() => alert(message)}>
// //         {children}
// //       </button>
// //     </>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <>
// //       <AlertButton message="Order same for playing button">
// //         Playing
// //       </AlertButton>
// //       <AlertButton message="Order to make changes to message for upload button">
// //         Uploading
// //       </AlertButton>
// //     </>
// //   );
// // }


// // function Button({onClick, children}){
// //   return(
// //     <>
// //       <button onClick={onClick}>
// //         {children}
// //       </button>
// //     </>
// //   );
// // }

// // function PlayButton({movieName}){
// //   function handlePlayButton(){
// //     alert(`Playing ${movieName}!`)
// //   }
// //   return(
// //     <>
// //       <Button onClick={handlePlayButton}>
// //         Play"{movieName}"
// //       </Button>
// //     </>
// //   );
// // }

// // function UploadButton(){
// //   return(
// //     <Button onClick={() => alert('Uploading!')}>
// //       Upload Image
// //     </Button>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <>
// //       <PlayButton movieName="Kik's delivery Service" />
// //       <UploadButton />
// //     </>
// //   );
// // }

// // function AlertButton({message, children}){
// //   return(
// //     <button onClick={() => alert(message)}>
// //       {children}
// //     </button>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <>
// //       <AlertButton message='Uploading!'>
// //         Click to upload
// //       </AlertButton>
// //       <AlertButton message='Prayer is the Key'>
// //         Please Help Me Lord!
// //       </AlertButton>
// //     </>
// //   );
// // }

// // function Button({children, onClick}){
// //   return(
// //     <button onClick={onClick}>
// //       {children}
// //     </button>
// //   );
// // }

// // function PlayMovie({onClick}){
// //   function handlePlayMovie(){
// //     alert('Playing ${movieName}')
// //   }
// //   return(
// //     <>
// //       <Button onClick={handlePlayMovie}>
// //         Play Movie
// //       </Button>
// //     </>
// //   );
// // }

// // function Upload({onClick}){
// //   return(
// //     <Button onClick={() => ale}>
// //       Upload
// //     </Button>
// //   );
// // }


// // export default function Button(){
// //   function handleClick(){
// //     alert('Heyo People!')
// //   }
  
// //   return(
// //     <button onClick={handleClick}>Click Me!</button>
// //   );
// // }


// // export default function App(){
// //   return(
// //     <button onClick={ function handleClick(){
// //       alert('Good Morning my people')
// //     }}>
// //        FUNC </button>
// //   );
// // }



// // export default function App(){
// //   return(
// //     <button onClick={() => {
// //       alert('God is not Dead');
// //     }}>Click Me!</button>
// //   );
// // }

// // function AlertButton({message, children}){
// //   return(
// //     <button onClick={() => alert(message)}>
// //     {children}
// //   </button>
// //     );
// // }


// // export default function App(){
// //   return(
// //     <div>
// //       <AlertButton message='Let it Show that I met you'>
// //         I came for you!
// //       </AlertButton>
// //       <AlertButton message='I will follow you step by best'>
// //         I'm tasty for you!
// //       </AlertButton>
// //     </div>
// //   );
// // }


// // function Button({onClick, children}){
// //   return(
// //     <button onClick={onClick}>
// //       {children}
// //     </button>
// //   );
// // }

// // function PlayButton({message}){
// //   function handleClick(){
// //     alert(`Playing is ${message}`)
// //   }
// //   return(
// //     <Button onClick={handleClick}>
// //       Play '{message}'
// //     </Button>
// //   );
// // }

// // function Upload(){
// //   return(
// //     <Button onClick={() => alert('So help me God Amen!')}>
// //       Uploading
// //     </Button>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <div>
// //       <PlayButton message='Gyara ya Yesu na!' />
// //       <Upload/>
// //     </div>
// //   );
// // }

// // function Button({onClick, children}){
// //   return(
// //     <button onClick={onClick}>
// //       {children}
// //     </button>
// //   );
// // }

// // function PlayButton({movieName}){
// //   function handleClick(){
// //     alert(`Playing ${movieName}`)
// //   }
// //   return(
// //     <Button onClick={handleClick}>
// //       Play '{movieName}'
// //     </Button>
// //   );
// // }

// // function UploadButton(){
// //   return(
// //     <Button onClick={() => alert('The King is Alive')}>
// //       God's Not Dead!
// //     </Button>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <div>
// //       <PlayButton movieName='I overcame, Halleluyah' />
// //       <UploadButton/>
// //     </div>
// //   );
// // }


// // function Button({onClick, children}){
// //   return(
// //     <button onClick={onClick}>
// //       {children}
// //     </button>
// //   );
// // }

// // function Toolbar({onPlayMovie, onUploadImage}){
// //   return(
// //     <div>
// //       <Button onClick={onPlayMovie}>
// //         Play Movie
// //       </Button>
// //       <Button onClick={onUploadImage}>
// //         Upload image
// //       </Button>
// //     </div>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <Toolbar
// //       onPlayMovie={() => alert('Playing Movie')}
// //       onUploadImage={() => alert('Uploading Image')}
// //     />
// //   );
// // }


// // export default function App(){
// //   return(
// //     <div className='Toolbar' onClick={() => alert('You click the div JSX')}>
// //       <button onClick={() => alert('Now Playing')}>
// //         Play
// //       </button>
// //       <button onClick={() => alert('Now Uploading')}>
// //         Uploading
// //       </button>
// //     </div>
// //   );
// // }

// // function Button({children, onClick}){
// //   return(
// //     <button onClick={e => {
// //       e.stopPropagation();
// //       onClick();
// //     }}>
// //       {children}
// //     </button>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <div className='Toolbar' onClick={() => alert('You click the div button')}>
// //       <Button onClick={() => alert('Playing Movie')}>
// //         Play Movie
// //       </Button>
// //       <Button onClick={() => alert('Listening to Music')}>
// //         Listen to Music
// //       </Button>  
// //     </div>
// //   );
// // }

// // export default function App(){
// //   return(
// //   <button onClick={()=> alert('Doing')}>Click and Listen to event</button>
// //   );
// // }

// // export default function App(){
// //   function handleClick(){
// //     alert('Its Working!')
// //   }
// //   return(
// //     <button onClick={handleClick}>
// //       ClickAble
// //     </button>
// //   );
// // }

// // 

// // import { useState } from 'react';
// // import { sculptureList } from './data.js';

// // export default function Gallery() {
// //   const [index, setIndex] = useState(0);
// //   const [showMore, setShowMore] = useState(false);

// //   function handleNextClick() {
// //     setIndex(index + 1);
// //   }

// //   function handleMoreClick() {
// //     setShowMore(!showMore);
// //   }

// //   let sculpture = sculptureList[index];
// //   return (
// //     <>
// //       <button onClick={handleNextClick}>
// //         Next
// //       </button>
// //       <h2>
// //         <i>{sculpture.name} </i> 
// //         by {sculpture.artist}
// //       </h2>
// //       <h3>  
// //         ({index + 1} of {sculptureList.length})
// //       </h3>
// //       <button onClick={handleMoreClick}>
// //         {showMore ? 'Hide' : 'Show'} details
// //       </button>
// //       {showMore && <p>{sculpture.description}</p>}
// //       <img 
// //         src={sculpture.url} 
// //         alt={sculpture.alt}
// //       />
// //     </>
// //   );
// // }

// // export default function App(){
// //   function  handleClick(){
// //     alert('Now am working!')
// //   }
// //   return(
// //     <button onClick={handleClick}>
// //       I don't do anything
// //     </button>
// //   );
// // }

// function Item({name, isPacked}){
//  if(isPacked){
//   return(
//     <li className='item'>{name} +</li>
//   )
//  }
//  return(
//   <li className='item'>{name}</li>
//  )
// }

// export default function App(){
//   return(
//     <section>
//       <Item
//         name='Do not disturb me please' isPacked='true'
//       />
//       <Item
//         name='Ive got a couple things i should fix' isPacked='false'
//       />
//     </section>
//   );
// }

// export default function App(){
// function handleClick(){
//   alert("I have been clicked!")
// }
//   return(
//     <button onClick={handleClick}>
//       Now am working!
//   </button>
// );
// }

// export default function App(){
//   return(

//     <button onClick={function (){
//       alert('Using inline coding to display a message!')
//     }}>
//       Keep Thinking Broo
//     </button>
//   );
//   } 

// export default function App(){
//   return(
//     <button onClick={() => alert('Using arrow function to display an inline messagex')}>
//       You Love Me So Much
//     </button>
//   );
// }


// export default function App(){
//   function handleClick(){
//     alert('You are working')
//   }
//   return(
//     <button onClick={handleClick}>
//       I'm doing something now!
//     </button>

//   );
// }

// export default function App(){
//   return(
//     <button onClick={function handleClick(){
//       alert('Writing inline Function')
//     }}>
//       Inline function
//     </button>
//   );
// }

// export default function  App(){
//   return(
//     <button onClick={() => {
//       alert('Writing Arrow function')
//     }}>
//       Arrow Function
//     </button>
//   );
// }

// function AlertButton({children, message}){
//   return(
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// export default function App(){
//   return(
//     <>
//     <AlertButton message='Playing Movie'>
//       Play Movie
//     </AlertButton>
//     <AlertButton message='Uploading!'>
//       Upload 
//     </AlertButton>
//     </>
//   );
// }

// function AlertButton({children, message}){
//   return(
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// export default function App(){
//   return(
//     <>
//     <AlertButton message='Playing Movie!'>
//       Play Movie
//     </AlertButton>
//     <AlertButton message='Uploading!'>
//       Uploading
//     </AlertButton>
//     </>
//   );
// }

// function AlertButton({children, message}){
//   return(
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// export default function App(){
//   return(
//     <>
//       <AlertButton message='Playing Movie!'>
//         Play Movie
//       </AlertButton>
//       <AlertButton message='Uploading !'>
//         Upload 
//       </AlertButton>
//     </>
//   );
// }


// function Button({onClick, children}){
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({moviename}){
//   function handlePlayButton(){
//     alert('Playing{moviename}');
//   }
//   return(
//     <>
//       <Button onClick={handlePlayButton}>
//         Play
//       </Button>
//     </>
//   );
// }

// function Upload(){
//   return(
//     <Button onClick={() => alert('Uploading')}>
//       Uploading
//     </Button>
//   );
// }


// export default function App(){
//   return(
//   <>
//     <PlayButton movieNname="a mu nan"/>
//     <Upload/>
//   </>
//   );
// // }
// function Button({children, onClick}){
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({movieName}){
//   function handlePlayClick(){
//     alert(`Playing {movieName}`);
//   }
//   return(
//     <>
//       <Button onClick={handlePlayClick}>
//         play "{movieName}"
//       </Button>
//     </>
//   );
// }

// function joyEnter(){
//   return(
//   <>
//     <Button onClick={() => alert('Uploading Image')}>
//       Upload Image
//     </Button>
//   </>
//   );
// }

// export default function App(){
//   return(
//     <>
//       <PlayButton movieName='Im a winner'/>
//       <joyEnter/>
//     </>
//   );
// }

// function Button ({children, onClick}){
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({movieName}){
//   function handlePlayClick(){
//     alert(`Playing ${movieName}!`);
//   }
//   return(
//     <>
//       <Button onClick={{handlePlayClick}}>
//         Play "{movieName}"
//       </Button>
//     </>
//   );
// }

// function uploadButton (){
//   return(
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// export default function App(){
//   return(
//     <>
//       <PlayButton movieName='Im a winner!'/>
//       <uploadButton/>
//     </>
//   );
// }


// function Button({children, onClick}){
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({movieName}){
//   function handlePlayButton(){
//     alert(`Playing ${movieName}!`);
//   }
//   return(
//     <Button onClick={handlePlayButton}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton(){
//   return(
//     <Button onClick={() => alert("Uploading!")}>
//       Upload Image
//     </Button>
//   );
// }

// export default function App(){
//   return(
//     <>
//       <PlayButton movieName="Make sure you have both wisdom and insight" />
//       <UploadButton/>
//     </>
//   );
// }

// function Button ({children, onClick}){
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({movieName}){
//   function handlePlayButton(){
//     alert(`Playing ${movieName}`);
//   }
//   return(
//     <Button onClick={handlePlayButton}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton(){
//   return(
//     <Button onClick={() => alert("Uploading Image!")}>
//       Upload Image
//     </Button>
//   );
// }

// export default function App(){
//   return(
//     <>
//       <PlayButton movieName='Event Handler (Button)' />
//       <UploadButton/>
//     </>
//   );


// function Button({onClick, children}){
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({movieName}){
//   function handlePlayButton(){
//     alert(`Playing ${movieName}`);
//   }
//   return(
//     <button onClick={handlePlayButton}>
//       Play "{movieName}"
//     </button>
//   );
// }

// function UploadButton(){
//   return(
//     <Button onClick={() => alert('Uploading Picture')}>
//       Upload Image
//     </Button>
//   );
// }

// export default function App(){
//   return(
//     <>
//       <PlayButton movieName="Handle Event Using Prop" />
//       <UploadButton />
//     </>
//   );
// }

// function Button({onSmash, children}){
//   return(
//     <button onClick={onSmash}>
//       {children}
//     </button>
//   );
// }

// export default function App(){
//   return(
//     <>
//       <Button onSmash={() => alert('Playing Movie')}>
//         Play Movie
//       </Button>
//       <Button onSmash={() => alert('Uploading Images')}>
//         Upload Image
//       </Button>
//     </>
//   );
// }

// export default function App(){
//   return(
//     <Toolbar
//       onUploading={() => alert('Uploading!')}
//       onPlaying={() => alert('Playing!')}
//     />
//   );
// }

// function Toolbar({onPlaying, onUploading}){
//   return(
//     <>
//       <Button onClick={onPlaying}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploading}>
//         Upload Image
//       </Button>
//     </>
//   );
// }

// function Button({children, onClick}){
//   return(
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }


// Event propagation

// export default function App(){
//   return(
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar');
//     }}>
//       <button onClick={() => alert('Playing Movie!')}>
//         Play Movie
//       </button>
//       <button onClick={() => alert('Uploading Images!')}>
//         Uploading Image
//       </button>
//     </div>
//   );
// }

export default function App(){
  return(
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the div tag');
    }}>
      <button onClick={() => alert("Playing Movie!")}>
        Play Movie
      </button>
      <button onClick={() => alert("Playing !")}>
        Play Movie
      </button>
    </div>
  );
}