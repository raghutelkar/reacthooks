import React, {useContext} from 'react';
import {DataContext} from "./dataContext";

function Mainpage() {
    
    const {users} = useContext(DataContext);

    // const {comments, isLoading, loadMoreCommit, count} = useContext(DataContext);
    // return (
    // <div>
    //   <h1> API calls with React Hooks & total count is {count} </h1>
    //   {isLoading && <p>Wait I'm Loading comments for you</p>}

    //   {comments.length !== 0 && (
    //     <button onClick={loadMoreCommit}>Load More Commits</button>
    //   )}

    //   {comments.map((c, index) => (
    //     <div key={index}>
    //       {c.commit && (
    //         <>
    //           <div>
    //             <h2 style={{ textDecoration: "Underline" }}>
    //               {c.commit.committer.name}
    //             </h2>
    //             <p>{c.commit.message}</p>
    //           </div>
    //           <hr />
    //         </>
    //       )}
    //     </div>
    //   ))}
    // </div>
    // )
    return (
        <ul>
            { users.map((person, index) => <li key={index}>{person.name}</li>)}
        </ul>
    )
}
export default Mainpage;