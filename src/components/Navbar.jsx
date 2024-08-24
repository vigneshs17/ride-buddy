import { NavLink } from "react-router-dom";
import UserProfile from "../UserProfile";

export default function NavBar() {
    console.log(UserProfile.getName())
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Ride Buddy</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/createUser">Create User</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/createPost">Create Post</a>
                    </li><li class="nav-item">
                        <a class="nav-link" href="/viewPosts">View Posts</a>
                    </li>
                </ul>
            </div>
        </nav >
    );
};