import { useState } from "react";
import "../styles/CertificationsList.css";

function CertificationsList() {
    const [showCertifications, setShowCertifications] = useState(true);

    const certifications = [
        {
            id: 1,
            name: "React Developer",
        },
         {
            id: 2,
            name: "JavaScript Algorithms",
        },
         {
            id: 3,
            name: "Python Programming",
        },
         {
            id: 4,
            name: "Node.js Fundamentals",
        },
         {
            id: 5,
            name: "AWS Cloud Practitioner",
        },
    ];

    return (

        <div className="certifications-container">
            <h2 className="certifications-title">
                Certifications List
            </h2>
             
            {showCertifications &&
                certifications.map ((certificate) => (
                    <div 
                        key={certificate.id}
                        className="certificate-item"
                    >
                        <span>{certificate.name}</span>
                    </div>
                ))}

            <button
                className="toggle-button"
                onClick={() => 
                    setShowCertifications(!showCertifications)
                }
            >   
                {showCertifications 
                    ? "Hide Certifications" 
                    : "Show Certifications" }
            </button>
        </div>
    );
} 

export default CertificationsList;