// import Profile from "./Profile";

// export default function Gallery(){
//     return(
//         <section>
//             <h1>Amazing Scientist</h1>
//             <Profile />
//             <Profile />
//             <Profile />
//         </section>
//     );
// }

// import { useState } from "react";
// import { sculptureList } from "./data";

// export default function Gallery (){
//     const [index, setIndex] = useState(0);
//     const [showMore, setShowMore] = useState(false);

//     function handleClick(){
//         setIndex(index + 1);
//     }

//     function handleMoreClick(){
//         setShowMore(!showMore);
//     }

//     let sculpture = sculptureList[index];
    
//     return(
//         <>
//             <button onClick={handleClick}>
//                 Next
//             </button>
//             <h2>
//                 <i>{sculpture.name}</i>
//                 by {sculpture.artist}
//             </h2>
//             <h3>
//                 ({index + 1} of {sculptureList.length})
//             </h3>
//             <button onClick={handleMoreClick}>
//                 {showMore ? 'Hide' : 'Show'} details
//             </button>
//             {showMore && <p>{sculpture.description}</p>}
//             <img 
//                 src={sculpture.url}
//                 alt={sculpture.alt}
//             />
//         </>
//     );
// }

// Working on React Trigger, Render, and Commit

export default function Gallery(){
    return(
        <>
            <h1>Displaying all component image</h1>
            <Image />
            <Image />
            <Image />
        </>
    );
}

function Image(){
    return(
        <>
            <h1>This is my Image Component</h1>
            <img 
                src="https://i.imgur.com/Mx7dA2Y.jpg"
                alt="A bronze statue of two crossed hands delicately holding a human brain in their fingertips."
            />
        </>
    );
}