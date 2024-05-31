import React from 'react';

export default function Services() {
    const services = [
        "Web Development",
        "Automation",
        "Software Development",
        "Software Testing",
        "General IT support",
        "Seminar Facilitation"
    ];
    
    function ServiceList({services}){
        return React.createElement('ul', {className: 'services'},
            services.map((service,i) => React.createElement('li', {key: i}, service))
        );};
    return(
        <>
        <div style={{display:"flex",alignContent:"justify",width:"786px"}}>
            <div style={{margin:"1em",width:"50%"}}>
                <h2>Services</h2>
                <ServiceList services={services} />
            </div>
            <div style={{backgroundColor:"#e6d2ff",width:"50%"}}>
            <img src="src\photos\conference.jpg" width="200" style={{padding:"1em 0 1em 0"}}></img>
            </div>
        </div>
        </>
        );
};
