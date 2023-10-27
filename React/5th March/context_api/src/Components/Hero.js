import UserCard from "./UserCard";

const Hero = () => {
    return (
        <div className="image_section">
            <img src="https://plus.unsplash.com/premium_photo-1698117059857-afdb96271acc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image"/>
            <UserCard/>
        </div>
    )
}

export default Hero;