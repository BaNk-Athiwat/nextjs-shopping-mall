import { getUsers } from "@/db/users";

export default async function Page() {

    const users = await getUsers();
    console.log("users: ", users);
    
    return(
        <div>manage product</div>
    );
}