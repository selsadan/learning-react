// import { renderIntoDocument } from "react-dom/test-utils";

// export default function Profile() {
//     return (
//       <div>
//         <div className="card">
//           <div className="card-content">
//             <h1>Photo</h1>
//             <img
//               className="avatar"
//               src="https://i.imgur.com/OKS67lhm.jpg"
//               alt="Aklilu Lemma"
//               width={70}
//               height={70}
//             />
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-content">
//             <h1>About</h1>
//             <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
  

//   function Card({ children }) {
//     return (
//       <div className="card">
//         <div className="card-content">
//           {children}
//         </div>
//       </div>
//     );
//   }
  
//   export default function Profile() {
//     return (
//       <div>
//         <Card>
//           <h1>Photo</h1>
//           <img
//             className="avatar"
//             src="https://i.imgur.com/OKS67lhm.jpg"
//             alt="Aklilu Lemma"
//             width={100}
//             height={100}
//           />
//         </Card>
//         <Card>
//           <h1>About</h1>
//           <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//         </Card>
//       </div>
//     );
//   }
  



//   name
//   imageId
//   imageSize 
//   profession
//   awards
//   discovered
  
//   export function Profile({
//       name,
//       imageId,
//       imageSize = 70, 
//       profession,
//       awards,
//       discovered
//   }){
//       return(
//           <section className="profile">
//           <h2>{name}</h2>
//           <img
//             className="avatar"
//             src={getImageUrl({imageId})}
//             alt={name}
//             width={imageSize}
//             height={imageSize}
//           />
//           <ul>
//             <li>
//               <b>Profession: </b> 
//               {profession}
//             </li>
//             <li>
//               <b>Awards: {awards.list} </b> 
//               {awards.join(', ')})
//             </li>
//             <li>
//               <b>Discovered: </b>
//               {discovered}
//             </li>
//           </ul>
//         </section>
//       )
//   }
  
  
//   export default function Gallery(){
//       return(
//           <>
//               <h1>Scientist</h1>
//               <Profile 
//                   name='Daniel Datuhung'
//                   imageId='hdhdJHsdij9983298'
//                   profession='Computer Scientist'
//                   awards={[
//                       'First Award',
//                       'Second Award',
//                       'Third Award',
//                       'Fourth Award'
//                   ]}
//                   discovered='School Software'
//               />
//           </>
//       )
//   }  


// export function Card({children}){
//     return(
//         <div className="card">
//           <div className="card-content">
//             <h1>{title}</h1>
//             {children}
//           </div>
//         </div>
//     );
// }

//   export default function Profile() {
//     return (
//       <div>
//         <Card title="Heading One">
//             <img
//               className="avatar"
//               src="https://i.imgur.com/OKS67lhm.jpg"
//               alt="Aklilu Lemma"
//               width={70}
//               height={70}
//             />
//         </Card>
//         <Card title='About'>
//             <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//         </Card>
//       </div>
//     );
//   }
  
// function Item({name, isPacked}){
//     return
//         <li className="item">
//             {name}
//         </li>
// }

// function Item({name, isPacked}){
//     if (isPacked){
//         return 
//             <li className="item">
//                 {name} ✔
//             </li>
//     }
//         return
//             <li className="item">
//                 {name}
//             </li>
// }

// function Item({name, isPacked}){
//     return
//         <li className="item">
//             {isPacked ? name + "✔" : name}
//         </li>
// }

// function Item({name, isPacked}){
//     return
//         <li className="item">
//             {isPacked ? (
//                 <del>
//                     {name + '✔'}
//                 </del>
//             ) : (
//                 name
//             )}
//         </li>
// }


// function Item({name, isPacked}){
//     if (isPacked){
//         return null;
//     }
//         return 
//             <li className="item">
//                 {name}
//             </li>
// }


// function Item({name, isPacked}){
//     return(
//         <li className="item">
//             {name} {isPacked && "✔"}
//         </li>
//     );
// }



// function Item({name, isPacked}){
//     let itemContent = name;
//     if (ispacked){
//         let itemContent = name + ' ✔';
//     }
//     return
//         <li className="item">
//             {itemContent}
//         </li>
// }
// function Item({name, isPacked}){
//     let itemContent = name;
//     if (ispacked){
//         let itemContent = (
//             <del>
//                 {name + ' `✔`'}
//             </del>
//         );
//     }
//     return
//         <li className="item">
//             {itemContent}
//         </li>
// }


// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];


// export function list(){
//     const listItem = people.map(person=> 
//         <li key={person.id}>{person}</li>
//     );
//     return (
//         <ul>
//             {listItem}
//         </ul>
//     );
// }




// const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//   }, {
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',  
//   }, {
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//   }];

//   export function FilterArray(){
//     const chemist = people.filter(person=> person.profession === chemist);
//     const listItem = chemist.map(person=> <li key={person.id}>{person}</li>);
//     return(
//         <ul>
//             {listItem}
//         </ul>
//     );
//   }


// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );

//   export function chemist(){
//     const receiveItem = people.filter(person => person.profession === 'chemist');
//     const displayInCode = receiveItem.map(person=> <li>{person}</li>)
//   }
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ul>{listItems}</ul>
//       <ul>{displayInCode}</ul>
//     </article>
//   );
// }


// import { recipes } from './data.js';

// export default function RecipeList() {
//     const Name = people.map(person => person.name <h2>{person}</h2>);
//     const List = people.map(person => person.ingredients <li>{people}</li>)
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {name}
//       <ul>
//         {list}
//       </ul>
//     </div>
//   );
// }




// export const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//     accomplishment: 'spaceflight calculations',
//     imageId: 'MK3eW3A'
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//     accomplishment: 'discovery of Arctic ozone hole',
//     imageId: 'mynHUSa'
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//     accomplishment: 'electromagnetism theory',
//     imageId: 'bE7W1ji'
//   }, {
//     id: 3,
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',
//     accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//     imageId: 'IOjWm71'
//   }, {
//     id: 4,
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//     accomplishment: 'white dwarf star mass calculations',
//     imageId: 'lrWQx8l'
//   }];
  

//   export function getImageUrl(person) {
//     return (
//       'https://i.imgur.com/' +
//       person.imageId +
//       's.jpg'
//     );
//   }
  


//   import { people } from './data.js';
//   import { getImageUrl } from './utils.js';
  
//   export default function List() {
//     const chemists = people.filter(person =>
//         person.profession === 'chemist'
//     );
//     const nonChemsits = people.filter(person =>
//         person.profession !== 'chemist'
//     );

//     return (
//       <article>
//         <h1>Scientists</h1>
//         <h2>Chemist</h2>
//         <ul>
//             {chemists.map(person=>
//                 <li key={person.id}>      
//                     <img
//                         src={getImageUrl(person)}
//                         alt={person.name}
//                     />
//                     <p>
//                         <b>{person.name}:</b>
//                         {' ' + person.profession + ' '}
//                         known for {person.accomplishment}
//                     </p>
//                 </li>
//             )};
//         </ul>
//         <h2>Non-Chemist</h2>
//         <ul>
//             {nonChemists.map(person=>
//                 <li key={person.id}>      
//                     <img
//                         src={getImageUrl(person)}
//                         alt={person.name}
//                     />
//                     <p>
//                         <b>{person.name}:</b>
//                         {' ' + person.profession + ' '}
//                         known for {person.accomplishment}
//                     </p>
//                 </li>
//             )};
//         </ul>
//       </article>
//     );
//   }  




// function ListSection({title}){
//     return(
//         <article>
//             <h1>Chemist and Non Chemist</h1>
//             <h2>{title}</h2>
//             <ul>
//                 {people.map(person=> 
//                     <li key={person.id}>
//                         <img
//                             src={getImageUrl(person)}
//                             alt={person.name}
//                         />
//                         <p>
//                             <b>{person.name}:</b>
//                             {' ' + person.profession + ' '}
//                             known for {person.accomplishment}
//                         </p>
//                     </li>
//                 )}
//             </ul>
//         </article>
//     )
// }

// export default function MainWork(){
//     const chemist = people.filter(person=> 
//         person.profession === 'chenists'
//     );
//     const nonChemist = people.filter(person=> 
//         person.profession !== 'chenists'
//     );
//     return(
//         <>
//             <ListSection
//                 title='All Chemist'
//                 people={chemist}
//             />
//             <ListSection
//                 title='Non Chemist'
//                 peopl={nonChemist}
//             />
//         </>
//     )
// }

























// import { people } from './data.js';
// import { getImageUrl } from './utils.js';

// export default function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ul>{listItems}</ul>
//     </article>
//   );
// }

// export function ListItems({title, people}){
//     return(
//         <article>
//             <h1>Scientist</h1>
//             <h2>{title}</h2>
//             <ul>
//                 {people.map(person=>
//                     <li key={person.id}>
//                         <img
//                             src={getImageUrl(person)}
//                             alt={person.name}
//                         />
//                         <p>
//                             <b>{person.name}:</b>
//                             {' ' + person.profession + ' '}
//                             known for {person.accomplishment}
//                         </p>
//                     </li>
//                 )};
//             </ul>
//         </article>
//     )
// }

// export default function  Main(){
//     const chemist = people.filter(person=> 
//         person.profession === 'chemist'
//     );
//     const nonChemist = people.filter(person=> 
//         person.profession !== 'chemist'
//     );

//     return(
//         <>
//             <ListItems
//                 title='chemist'
//                 people={chemist}
//             />
//             <ListItems
//                 title='Non chemist'
//                 people={nonChemist}
//             />
//         </>
//     )
// }



// import { recipes } from './data.js';
// import { Fragment } from "react";


// function Recipes({}){
//     return(
//         <Fragment key={person.id}>
//             {recipes.map(person=>
//                 <h2>{person.name}</h2>
//                 <ul>
//                     <li>{person.ingredients}</li>
//                 </ul>
//             )}
//         </Fragment>
//     );
// }

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       <Recipes/>
//     </div>
//   );
// }

// export default function ListItems(){
//     return(
//         <div>
//             <h1>Recipes</h1>
//             {recipes.map(recipe=>
//             <div key={recipe.id}>
//                 <h2>
//                     {recipe.name}
//                 </h2>
//                 <ul>
//                     {recipe.ingredients.map(ingredient=>
//                         <li key={ingredient}>
//                             {ingredient}
//                         </li>
//                     )}
//                 </ul>
//             </div>
//             )}
//         </div>
//     );
// }




// function Recipe({id, name, ingredients}){
//   return(
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {recipes.map(recipe=>
//           <li key={recipe.i}>{}</li>
//         )}
//       </ul>
//     </div>
//   )
// }

// <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>

// function ListItem({title, people}){
//     return(
//         <article>
//           <h1>Scientist</h1>
//           <h2>{title}</h2>
//           <ul>
//             {people.map(person=> 
//               <li key={persom.id}>
//                 <img
//                   src={getImageUrl(person)}
//                   alt={person.name}
//                 />
//                 <p>
//                   <b>{person.name}:</b>
//                   {' ' + person.profession + ' '}
//                   known for {person.accomplishment}
//                 </p>
//               </li>
//             )}
//           </ul>  
//         </article>
//     )
// }

// export default function Main(){
//   const chemist = people.filter(person=> 
//     person.profession === 'chemists'
//   );
//   const everyoneElse = people.filter(person => 
//     person.profession !== 'chemist'
//     );

//   return(
//     <>
//       <ListItem
//         title='Chemist'
//         people={chemist}
//       />
//       <ListItem
//         title='Every One Else'
//         people={everyoneElse}
//       />
//     </>
//   );
// }



// export function List({title, people}){
//   return(
//     <article>
//       <h1>Scientist</h1>
//       <h2>{title}</h2>
//       <ul>
//         {people.map(person => 
//         <li key={person.id}>
//         <img
//           src={getImageUrl(person)}
//           alt={person.name}
//         />
//         <p>
//           <b>{person.name}:</b>
//           {' ' + person.profession + ' '}
//           known for {person.accomplishment}
//         </p>
//         </li>
//         )}
//       </ul>
//     </article>
//   );
// }


// export default function Main(){
//   const chemist = people.filter(person => 
//   person.profession === 'chemists'
//   );
//   const everyoneElse = people.filter(person => 
//   person.profession !== 'chemists'
//   );
//   return(
//     <>
//       <List
//         title='Chemist'
//         person={chemist}
//       />
//       <List
//         title='Every One Else'
//         person={everyoneElse}
//       />
//     </>
//   );
// }




// import { recipes } from './data.js';

// export default function RecipeList() {  
//   return (
//     <div>
//       <h1>Recipes</h1>
//         <div>
//           {recipes.map(recipe => 
//             <h2 key={recipe.id}>{Recipe.name}</h2>
//           )}
//           <ul>
//             {recipe.ingredients.map(ingredient =>
//               <li key={ingredient}>
//                 {ingredient}
//               </li>
//             )}
//           </ul>
//         </div>
//     </div>
//   );
// }



// import { recipes } from './data.js';

// export default function Recipe({id, name, ingredient}){
//   return(
//     <div>
//       <h1>Recipes</h1>
//         <div key={id}>
//           <h2>{name}</h2>
//           <ul>
//             {recipe.ingredients.map(ingredient =>
//               <li key={ingredient}>
//                 {ingredient}
//               </li>
//             )}
//           </ul>
//         </div>
//     </div>
//   );
// }

// export default function RecipeList() {
//   return (
//     <div>
//         {recipes.map(recipe =>
//           <Recipe
//             {...recipe} key={recipe.id}
//           />
//         )}
//     </div>
//   );
// }


// const poem = {
//   lines: [
//     'I write, erase, rewrite',
//     'Erase again, and then',
//     'A poppy blooms.'
//   ]
// };

// export default function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) =>
//       <Fragment key={i}>
//         {i > 0 && <hr/>}
//         <p>
//           {line}
//         </p>
//       </Fragment>
//       )}
//     </article>
//   );
// }