export default function LoginForm() {
    return(
        <form
            action=""
            className="flex flex-col gap-4"
        >
            <label htmlFor="">Email:</label>
            <input type="email" />
            <label htmlFor="">Password:</label>
            <input type="password" />
            <button className="bg-blue-500">login</button>
        </form>
    );
}