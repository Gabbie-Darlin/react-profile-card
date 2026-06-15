import ProfileCard from "./components/ProfileCard";
import SkillsList from "./components/SkillsList";

function App() {
    return(
    <>
        <div>

            <h1>First React Application</h1>
            <ProfileCard 
                name="Gab-Darlin" 
                role="Fullstack Software Developer" 
            />

            <SkillsList />

        </div>
    </>
    );
}

export default App;