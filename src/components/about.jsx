//about.jsx Allison Ives 301283511 05/31/2024
export default function About(){
    return(
        <>
        <div>
            <div style={{width: "50%", float: "left"}}>
                <img src="\photosheadshot.jpg" width="400"></img>
            </div>
            <div style={{width: "50%", float: "right"}}>
            <h2>About Me</h2>
            <h3>My name is Allison Ives</h3>
            <p>I am a software engineering student with a Bachelor's degree in Business Administration.
                During my undergraduate studies, I concentrated on human resources management and organizational behaviour.
                 Over the last 8 years, I have presented at conferences and workshops including the Niagara Leadership Summit for Women and the
                  Canadian Conference on Student Leadership. I am presently working in the luxury beauty industry.</p>
            <hr></hr>
            <a href="src\photos\Resume.pdf" target="blank">Resume</a>
            <div style={{display: "flex", justifyContent: "center", marginTop: "4em"}}>
            <img src="src\photos\goodman.jpg" width="150" height="150" style={{paddingRight:"1.5em"}}></img>
            <img src="src\photos\cencol.png" width="150" style={{paddingLeft:"1.5em"}}></img>
            </div>
            </div>
        </div>
        </>
    );
}