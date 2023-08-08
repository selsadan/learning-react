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

// export default function App(){
//   return(
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the div tag');
//     }}>
//       <button onClick={() => alert("Playing Movie!")}>
//         Play Movie
//       </button>
//       <button onClick={() => alert("Playing !")}>
//         Play Movie
//       </button>
//     </div>
//   );
// }

// export default function App(){
//   return(
//     <div className="ToolBar" onClick={() => {
//       alert('You clicked on the div tag');
//     }}>
//       <button onClick={() => alert('Playing Movie!')}>
//         Play Movie
//       </button>
//       <button onClick={() => alert('Uploading Image!')}>
//         Upload Image
//       </button>
//     </div>
//   );
// }

// function Button({onClick, children}){
//   return(
//     <button onClick={e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function App(){
//   return(
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the div tag');
//     }}>
//       <Button onClick={() => alert('Playing Movie')}>
//         Play Movie
//       </Button>
//       <Button onClick={() => alert('Uploading Image')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({onClick, children}){
//   return(
//     <button onClick={e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function App(){
//   return(
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked the Toolbar!')
//     }}>
//       <Button onClick={() => alert('Playing Movie')}>
//         Play Movie
//       </Button>
//       <Button onClick={() => alert('Upload Image')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }
// Preventing default behavior

// export default function SignUp(){
//   return(
//     <form onSubmit={() => alert('Submitting Form!')}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

// export default function Signup(){
//   return(
//     <form onSubmit={e => {
//       e.preventDefault();
//       alert('Submitting this form')
//     }}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

// Exercise 1

// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>
//       Toggle the lights
//     </button>
//   );
// }

// Exercise 2

// export default function App({onChangeColor}){
//   return(
//     <button onClick={e => {
//       e.stopPropagation();
//       onChangeColor();
//     }}>
//       Change color
//     </button>
//   );
// }


// import { sculptureList } from "./data";

// export default function App(){
//   let index = 0;

//   function handleClick(){
//     index = index + 1;
//   }

//   let sculpture = sculptureList[index];

//   return(
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }

// import { sculptureList } from "./data";

// export default function App(){
//   let index = 0;

//   function handleClick(){
//     index = index + 1;
//   }

//   let sculpture = sculptureList[index];

//   return(
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }

// import { sculptureList } from "./data";

// export default function App(){
//   let index = 0;

//   function handleClick(){
//     index = index + 1;
//   }

//   let sculpture = sculptureList[index];

//   return(
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }

// import { useState } from "react";
// import { sculptureList } from "./data";

// export default function App(){
//   const [index, setIndex] = useState(0);

//   function handleClick(){
//     setIndex(index + 1);
//   }

//   let sculpture = sculptureList[index]

//   return(
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} 0f {sculptureList.length})
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//        />
//     </>
//   );
// }

// import { useState } from "react";
// import { sculptureList } from "./data";

// export default function App(){
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleClick(){
//     setIndex(index + 1);
//   }

//   function handleMoreClick(){
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];

//   return(
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} 0f {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }


// import { useState } from "react";
// import { sculptureList } from "./data";

// export default function App(){
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleClick(){
//     setIndex(index + 1);
//   }

//   function handleMoreClick(){
//     setShowMore(!showMore)
//   }

//   let sculpture = sculptureList[index];

//   return(
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// import { useState } from "react";
// import { sculptureList } from "./data";

// export default function App(){
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleClick(){
//     setIndex(index + 1);
//   }

//   function handleMoreClick(){
//     setShowMore(!showMore)
//   }

//   let sculpture = sculptureList[index];

//   return(
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h1>Learning More About React useState</h1>
//       <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} datails
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// State is isolated and private

// import Gallery from "./Gallery";

// export default function App(){
//   return(
//     <div className="page">
//       <Gallery />
//       <br />
//       <br />
//       <Gallery />
//     </div>
//   );
// }

// When you press “Next” on the last sculpture, the code crashes. Fix the logic to prevent the crash. You may do this by adding extra logic to event handler or by disabling the button when the action is not possible.
// After fixing the crash, add a “Previous” button that shows the previous sculpture. It shouldn’t crash on the first sculpture.

// import { useState } from "react";
// import { sculptureList } from "./data";

// export default function App(){
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let hasPrev = index > 0;
//   let hasNext = index < sculptureList.length - 1;

//   function handlePreClick(){
//     if(hasPrev){
//       setIndex(index - 1)
//     }
//   }

//   function handleNextClick(){
//     if (hasNext){
//       setIndex(index + 1);
//     }
//   }

//   function handleMoreClick(){
//     setShowMore(!showMore)
//   }

//   let sculpture = sculptureList[index];

//   return(
//     <>
//       <button 
//         onClick={handlePreClick}
//         disabled={!hasPrev}
//       >
//         Previous
//       </button>
//       <button 
//         onClick={handleNextClick}
//         disabled={!hasNext}
//       >
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// Trying to solve exercise one the more

// import { useState } from "react";
// import { sculptureList } from "./data";

// export default function App(){
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let hasPrev = index > 0;
//   let hasNext = index < sculptureList.length - 1;

//   function handlePrevClick(){
//     if(hasPrev){
//       setIndex(index - 1);
//     }
//   }
  
//   function handleNextClick(){
//     if(hasNext){
//       setIndex(index + 1);
//     }
//   }

//   function handleMoreClick(){
//     setShowMore(!showMore)
//   }

//   let sculpture = sculptureList[index];

//   return(
//     <>
//       <button 
//         onClick={handlePrevClick}
//         disabled={!hasPrev}
//       >
//         Previous
//       </button>
//       <button 
//         onClick={handleNextClick}
//         disabled={!hasNext}
//       >
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   )
// }


//Exercise two: When you type into the input fields, nothing appears. It’s like the input values are “stuck” with empty strings. The value of the first <input> is set to always match the firstName variable, and the value for the second <input> is set to always match the lastName variable. This is correct. Both inputs have onChange event handlers, which try to update the variables based on the latest user input (e.target.value). However, the variables don’t seem to “remember” their values between re-renders. Fix this by using state variables instead.
// export default function Form() {
//   let firstName = '';
//   let lastName = '';

//   function handleFirstNameChange(e) {
//     firstName = e.target.value;
//   }

//   function handleLastNameChange(e) {
//     lastName = e.target.value;
//   }

//   function handleReset() {
//     firstName = '';
//     lastName = '';
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

// Understanding the question

// export default function App(){
//   let firstName = '';
//   let lastName = '';

//   function handleFirstNameChange(e){
//     firstName = e.target.value;
//   }

//   function handleLastNameChange(e){
//     lastName = e.target.value;
//   }

//   function handleReset(){
//     firstName = '';
//     lastName = '';
//   }

//   return(
//     <form onSubmit={ e => e.preventDefault()}>
//       <input 
//         placeholder="First Name"
//         onChange={handleFirstNameChange}
//         value={firstName}
//       /> 
//       <input 
//         placeholder="Last Name"
//         onChange={handleLastNameChange}
//         value={lastName}
//       /> 
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

// Understanding the excercise

// export default function App(){
//   let firstName = '';
//   let lastName = '';

//   function handleFirstNameChange(e){
//     firstName = e.target.value;
//   }

//   function handleLastNameChange(e){
//     lastName = e.target.value;
//   }

//   function handleReset(){
//     firstName = '';
//     lastName = '';
//   }

//   return(
//     <form onSubmit={e => e.preventDefault}>
//       <input 
//         placeholder="First Name"
//         onChange={handleFirstNameChange}
//         value={firstName}
//       />

//       <input 
//         placeholder="Last Name"
//         onChange={handleLastNameChange}
//         value={lastName}
//       />

//       <h1>Hi, am {firstName} {lastName} just trying to learn tons of things </h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

// Solution to the exercise

// import { useState } from "react";

// export default function App(){
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   function handleFirstNameChange(e){
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e){
//     setLastName(e.target.value);
//   }

//   function handleReset(){
//     setFirstName('');
//     setLastName('');
//   }

//   return(
//     <form onSubmit={e => e.preventDefault}>
//       <input 
//         placeholder="First Name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />

//       <input 
//         placeholder="Last Name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />

//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

// Mastering the solution

// import { useState } from "react";

// export default function App(){
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   function handleFirstNameChange(e){
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e){
//     setLastName(e.target.value);
//   }

//   function handleReset(){
//     setFirstName('');
//     setLastName('');
//   }

//   return(
//     <form onSubmit={e => e.preventDefault}>
//       <input 
//         placeholder="First Name"
//         onChange={handleFirstNameChange}
//         value={firstName}
//       />

//       <input 
//         placeholder="Last Name"
//         onChange={handleLastNameChange}
//         value={lastName}
//       />

//       <h1>Hi, am {firstName} {lastName} by Name. I love you!</h1>
//       <button onClick={handleReset}> Click to Reset</button>
//     </form>
//   );
// }

// Exercise three: Here is a small form that is supposed to let the user leave some feedback. When the feedback is submitted, it’s supposed to display a thank-you message. However, it crashes with an error message saying “Rendered fewer hooks than expected”. Can you spot the mistake and fix it?

// import { useState } from "react";

// export default function App(){
//   const [isSent, setIsSent] = useState(false);

//   if(isSent){
//     return <h1>Thank You</h1>
//   }else{
//     const [message, setMessage] = useState('');
//     return(
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea 
//             placeholder="Message"
//             value={message}
//             onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">send</button>
//       </form>
//     );
//   }
// }

// Solution to the Excercise

// import { useState } from "react";

// export default function App(){
//   const [isSent, setIsSent] = useState(0);
//   const [message, setMessage] = useState('');

//   function handleSentMessageClick(){
//     if(isSent){
//       return <h1>Thank You for returning my message</h1>
//     }
//   }

//   function handleMessageClick(e){
//     setMessage(e.target.value);
//   }

//   return(
//     <form onSubmit={e => {
//       e.preventDefault();
//       alert('Thank you for submitting')
//     }}>
//       <textarea 
//         placeholder="Text Area"
//         onChange={handleMessageClick}
//         value={message}
//       />
//     </form>
//   );
// }

// Trying to understand the code

// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');

//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   }

//   return (
//     <form onSubmit={e => {
//       e.preventDefault();
//       alert(`Sending: "${message}"`);
//       setIsSent(true);
//     }}>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <br />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// Understanding the code

// import { useState } from "react";

// export default function App(){
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');

//   if(isSent){
//     return <h1>Thank You!</h1>
//   }

//   return(
//     <form onSubmit={e => {
//       e.preventDefault();
//       alert(`Sending: "${message}"`);
//       setIsSent(true);
//     }}>
//       <textarea 
//         placeholder="Text Area"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       /> 
//       <br />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// Keep learning the exercise

// import { useState } from "react";

// export default function App(){
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');

//   if (isSent){
//     return <h1>Thank You!</h1>
//   }

//   return(
//     <form onSubmit={e => {
//       e.preventDefault();
//       alert(`Sending "${message}"`);
//       setIsSent(true);
//     }}>
//       <textarea 
//         value={message}
//         placeholder="Text Area"
//         onChange={e => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }


// I keep practising the exercise

// import { useState } from "react";

// export default function App(){
//   const [sent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');

//   if(sent){
//     return <h1>Thanks for Sending!</h1>
//   }

//   return(
//     <form onSubmit={e => {
//       e.preventDefault();
//       alert(`Sending: "${message}"`);
//       setIsSent(true);
//     }}>
//       <textarea 
//         placeholder="Text Area"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <br />
//       <button type="submit">Send</button>
//     </form>
//   );
// }


// Exercise four: When the button is clicked, this example should ask for the user’s name and then display an alert greeting them. You tried to use state to keep the name, but for some reason it always shows “Hello, !“.

// To fix this code, remove the unnecessary state variable. (We will discuss about why this didn’t work later.)

// Can you explain why this state variable was unnecessary?

// import { useState } from "react";

// export default function App(){
//   const [name, setName] = useState('');

//   function handleClick(){
//     setName(prompt('Whats Your Name?'));
//     alert(`Hello, ${name}`);
//   }

//   return(
//     <button onClick={handleClick}>
//       Greet
//     </button>
//   );
// } 

// Solution to the problem

// export default function App(){
//   function handleClick(){
//     const name = prompt('What is your name?');
//     alert(`Hello, ${name}`);
//   }
  
//   return(
//     <button onClick={handleClick}>Greet</button>
//   );
// }

// export default function App(){
//   function handleClick(){
//     const name = prompt('What is your name?');
//     alert(`Hello, ${name}`);
//   }

//   return(
//     <button onClick={handleClick}>Greet</button>
//   );
// }

// React Render and Commit

// import Image from "./Image";
// import { createRoot } from 'react-dom/clients';

// const root = createRoot(document.getElementById('root'))
// root.render(<Image />); 

// export default function App(){
//   return(
//     <h1>We are fully dropped in Love!</h1>
//   );
// }


// React state as a snapshot

// import { useState } from "react";

// export default function App(){
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('Hi!');

//   if(isSent ){
//     return(
//       <>
//         <h1> Your message is on the way!</h1>
//       </>
//     );
//   }

//   return(
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       setIsSent(true);
//       sendMessage(message);

//     }}>

//     <textarea 
//       placeholder="Message"
//       value={message}
//       onSubmit={e => setMessage(e.target.value)}
//     />  
    
//     <button type="submit">Send</button>
//     </form>
//   );
// }

// function sendMessage(message){
//   // ...
// }

// import { useState } from "react";

// export default function App(){
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('Hi');

//   if(isSent){
//     return<h1>Your message it's on the way!</h1>
//   }

//   return(
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       setIsSent(true);
//       sendMessage(message);
//     }}>
//       <textarea 
//         placeholder="Message"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// function sendMessage(message){
//   // ...
// }


// import { useState } from "react";

// export default function App(){
//   const [number, setNumber] = useState(0);

//   return(
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 1);
//         setNumber(number + 1);
//         setNumber(number + 1);
//       }}>
//         +3
//       </button>
//     </>
//   );
// }


// import { useState } from "react";

// export default function App(){
//   const [number, setNumber] = useState(0);

//   return(
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         alert(number);
//       }}>+5</button>
//     </>
//   );
// }

// React State in a snapshot with timeout set

// import { useState } from "react";

// export default function App(){
//   const [number, setNumber] = useState(0);

//   return(
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 5);
//         setTimeout(() => {
//           alert(number);
//         },300);
//       }}>+5</button>
//     </>
//   );
// }

// import { useState } from "react";

// export default function Form(){
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('Hi');

//   if(isSent){
//     return(<h1>You are sending a message now!</h1>);
//   }

//   return(
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       setIsSent(true);
//       sendMessage(message);
//     }}>
//       <textarea 
//         placeholder="Messsage"
//         onChange={e => setMessage(e.target.value)}
//         value={message}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// function sendMessage(){
//   // ...
// }

// import { useState } from "react";

// export default function Form(){
//   const [number, setNumber] = useState(0);

//   return(
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 1);
//         setNumber(number + 1);
//         setNumber(number + 1);
//       }}>+3</button>
//     </>
//   );
// }


// import { useState } from "react";

// export default function App(){
//   const [number, setNumber] = useState(0);

//   return(
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(number + 1);
//         setNumber(number + 1);
//         setNumber(number + 1);
//       }}>+3</button>
//     </>
//   );
// }

// React State over time
// import { useState } from "react";

// export default function Counter(){
//     const [number, setNumber] = useState(0);

//     return(
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 5);
//                 alert(number);
//             }}>+5</button>
//         </>
//     );
// }

// import { useState } from "react";

// export default function Counter(){
//     const [number, setNumber] = useState(0);

//     return(
//         <>
//             <h1>{number}</h1>
//             <button  onClick={() => {
//                 setNumber(number + 5);
//                 setTimeout(() => {
//                     alert(number)
//                 }, 3000);
//             }}>+5</button>
//         </>
//     );
// }


// Working on React state over time

// import { useState } from "react";

// export default function App(){
//     const [to, setTo] = useState('Alice');
//     const [message, setMessage] = useState('Hello');

//     function handleSubmit(e){
//         e.preventDefault();
//         setTimeout(() => {
//         alert(`You said ${message} to ${to}`);
//         }, 5000);
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <label>
//                 To:{' '}
//                 <select
//                     value={to}
//                     onChange={e => setTo(e.target.value)}>
//                     <option value="Alice">Alice</option>
//                     <option value="Bob">Bob</option>
//                 </select>
//             </label>

//             <textarea
//                 placeholder="Message"
//                 onChange={e => setMessage(e.target.value)}
//                 value={message}
//             />
//             <button type="submit">Send</button>
//         </form>
//     );
// }

// import { useState } from "react";

// export default function App(){
//     const [to, setTo] = useState('Alice');
//     const [message, setMessage] = useState('Hello');

//     function handleSummit(e){
//         e.preventDefault();
//         setTimeout(() => {
//             alert(`You said ${message} to ${to}`);
//         }, 5000);
//     }

//     return(
//         <form onSubmit={handleSummit}>
//             <label>
//                 To: {' '}
//                 <select 
//                     onChange={e => setTo(e.target.value)}
//                     value={to}
//                 >
//                     <option valut="Alice">Alice</option>
//                     <option valut="Bob">Bob</option>
//                 </select>
//             </label>
//             <textarea 
//                 placeholder="Message"
//                 value={message}
//                 onChange={e => setMessage(e.target.value)}
//             />
//             <button type="submit">Send</button>
//         </form>
//     );
// }

// Exercise on Traffic Light

// import { useState } from "react";

// export default function TrafficLight(){
//     const [walk, setWalk] = useState(false);

//     function handleClick(){
//         setWalk(!walk);
//     }

//     return(
//         <>
//             <button onClick={handleClick}>
//                 Change to {walk ? 'Stop' : 'Walk'}
//             </button>
//             <h1 style={{
//                 color: walk ? 'darkgreen' : 'darkred'
//             }}>
//                 {walk ? 'walk' : 'Stop'}
//             </h1>
//         </>
//     );
// }


// import { useState } from "react";

// export default function TrafficLight(){
//     const [walk, setWalk] = useState(false);

//     function handleClick(){
//         setWalk(!walk)
//         alert(walk ? 'Stop is next' : 'Walk is next')
//     }

//     return(
//         <>
//             <button onClick={handleClick}>
//                 Change to {walk ? 'Stop' : 'Walk'}
//             </button>
//             <h1 style={{
//                 color: walk ? 'darkgreen' : 'darkred'
//             }}>
//                 {walk ? 'walk' : 'stop'}
//             </h1>
//         </>
//     );
// }

// Re-learning React State as Snapshot

// import { useState } from "react";

// export default function App(){
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState('Hi!');

//     if(isSent){
//         return<h1>Your message its on it's way!</h1>
//     }

//     return(
//         <form onSubmit={(e) => {
//             e.preventDefault();
//             setIsSent(true);
//             sendMessage(message);
//         }}>
//             <textarea 
//                 placeholder="Message"
//                 value={message}
//                 onChange={e => setMessage(e.target.value)}
//             />
//         </form>

//     );
    
//     function sendMessage(message){
//             // ...
//         }
// }

// import { useState } from "react";

// export default function App(){
//     const [number, setNumber] = useState(0);

//     return(
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//                 alert(number);
//             }}>+5</button>
//         </>
//     );
// }

// import { useState } from "react";

// export default function App(){
//     const [number, setNumber] = useState(0);

//     return(
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 1);
//                 setTimeout(() => {
//                     alert(number);
//                 }, 3000);
//             }}>+5</button>
//         </>
//     );
// }

// import { useState } from "react";

// export default function App(){
//     const [to, setTo] = useState('Alice');
//     const [message, setMessage] = useState('Hello');

//     function handleSubmit(e){
//         e.preventDefault();
//         setTimeout(() => {
//             alert(`You said ${message} to ${to}`)
//         }, 5000);
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//             <label>
//                 To: {''}
//                 <select 
//                     value={to}
//                     onChange={e => setTo(e.target.value)}
//                 >
//                     <option value='Alice'>Alice</option>
//                     <option value='Bob'>Bob</option>
//                 </select>
//             </label>
//             <br />
//             <textarea 
//                 placeholder="Message"
//                 value={message}
//                 onChange={e => setMessage(e.target.value)}
//             />
//             <br />
//             <button type="submit">Send</button>
//         </form>
//     );
// }

// import { useState } from "react";
// export default function TrafficLight(){
//     const [walk, setWalk] = useState(false);

//     function handleClick(){
//         setWalk(!walk)
//         alert(walk ? 'Stop is next' : 'Walk is next'    );
//     }

//     return(
//         <>
//             <button onClick={handleClick}>
//                 Change to { walk ? 'Stop' : 'Walk'}
//             </button>
//             <h1 style={{
//                 color: walk ? 'darkgreen' : 'darkred'
//             }}>
//                 {walk ? 'Walk' : 'Stop'}
//             </h1>
//         </>
//     );
// }

// Queing a series of state update

// import { useState } from "react";

// export default function App(){
//     const [number, setNumber] = useState(0);

//     return(
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//             }}>+3</button>
//         </>
//     );
// }

// Updating the same state multiple times before the next render

// import { useState } from "react";

// export default function App(){
//     const [number, setNumber] = useState(0);

//     return(
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber( n => n + 1);
//                 setNumber( n => n + 1);
//                 setNumber( n => n + 1);
//             }}>+3</button>
//         </>
//     );
// }

// What happen if you update state after replacing it in React

// import { useState } from "react";

// export default function App(){
//     const [number, setNumber] = useState(0);

//     return(
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 5);
//                 setNumber(n => n + 1);
//             }}>Increase the number</button>
//         </>
//     );
// }

// import { useState } from "react";

// export default function App(){
//     const [number, setNumber] = useState(0);

//     return(
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 1);
//                 setNumber(n => n + 1);
//                 setNumber(42);
//             }}>Increase Number</button>
//         </>
//     );
// }

// Exercise on React state queueing

// import { useState } from "react";

// export default function ArtApp(){
//     const [pending, setPending] = useState(0);
//     const [completed, setCompleted] = useState(0);

//     async function handleClick(){
//         setPending(p => p + 1);
//         await delay(3000);
//         setPending(p => p - 1);
//         setCompleted(c => c + 1);
//     }

//     return(
//         <>
//             <h3>
//                 Pending: {pending}
//             </h3>
//             <h3>
//                 complete: {completed}
//             </h3>
//             <button onClick={handleClick}>Buy</button>
//         </>
//     );
// }

// function delay (ms){
//     return new Promise(resolve => {
//         setTimeout(resolve,ms);
//     });
// }

// import { useState } from "react";

// export default function MarketApp(){
//     const [pending, setPending] = useState(0);
//     const [completed, setCompleted] = useState(0);

//     async function handleClick(){
//         setPending(p => p + 1);
//         await delay(3000);
//         setPending(p => p - 1);
//         setCompleted(c => c + 1);
//     }

//     return(
//         <>
//             <h3>
//                 Pending: {pending}
//             </h3>
//             <h3>
//                 Completed: {completed}
//             </h3>
//             <button onClick={handleClick}>Buy</button>
//         </>
//     );
// }

// function delay(ms){
//     return new Promise(resolve => { 
//         setTimeout(resolve, ms);
//     });
// }

// import { useState } from "react";

// export default function MarketApp(){
//     const [pending, setPending] = useState(0);
//     const [completed, setCompleted] = useState(0);

//     async function handleClick(){
//         setPending(p => p + 1);
//         await delay(3000);
//         setPending(p => p - 1);
//         setCompleted(c => c + 1);
//     }

//     return(
//         <>
//             <h3>
//                 Pending: {pending}
//             </h3>
//             <h1>Let the poor breathe</h1>
//             <h3>
//                 Completed: {completed}
//             </h3>
//             <button onClick={handleClick}>Buy</button>
//         </>
//     );
// }

// function delay(ms){
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }

// React -  updating State using object

import { useState } from "react";

export default function MovingDt(){
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    return(
        <div
            onPointerMove={e => {
                position.x = e.clientX;
                position.y = e.clientY;
            }}

            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh'
            }}>
            <div style={{
                position: 'absoulute',
                background: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }}/>
        <div />
        </div>
    );
}