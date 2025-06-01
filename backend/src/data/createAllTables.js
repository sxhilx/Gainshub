import { createUsersTable } from "./createUsersTable.js";
import { createWorkoutsTable } from "./createWorkoutsTable.js";
import { createPrsTable } from "./createPrsTable.js";

export const createAllTables = async() => {
    try {
        console.log("Creating tables if not exists");
        await createUsersTable();
        await createWorkoutsTable();
        await createPrsTable();  
        console.log("All tables created if not exists");      
    } catch (error) {
        console.error("Error while creating tables", error.message);        
    }
}