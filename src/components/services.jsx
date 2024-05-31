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
        <h3>Services</h3>;
        <ServiceList services={services} />
        </>
        );
};
