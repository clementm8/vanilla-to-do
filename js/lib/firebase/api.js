/*

Read Data from the RTDB(Real-time database) 

*/

import { ref, child, get } from "firebase/database";

import { db } from "./../../config/firebase/firebaseInit"

/* 

connecting to the to-do list
    1. create a reference const -> dbRef= ref(db, '/todos')
asking for the data
    1. creates a path to the node in the JSON file 
    2. using get(ref) we get a data snapshot 
extracting the data
1. snapshot.val

*/

async function getToDoData() {
    const dbRef = ref(db, '/todos');
    const dataSnapshot = await get(dbRef);
    return await dataSnapshot.val()
}

export {getToDoData}