
const createElements = () => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const backDiv = document.createElement('div');
    backDiv.className = 'background-img-container';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'card-content';

    const profImg = document.createElement('div');
    profImg.className = 'profile-img';

    const profTextContainer = document.createElement('div');
    profTextContainer.className = 'profile-text';

    //================ children of profText==========================
    const profHeader = document.createElement('div');
    const profName = document.createElement('h1');
    profHeader.className = 'header';
    profName.innerHTML = 'Rotem Amitay';
    profHeader.appendChild(profName);

    const profContent = document.createElement('div');
    const profText = document.createElement('p');
    profContent.className = 'content';
    profText.innerHTML = 'Passionate and detail-oriented Full Stack Developer with a strong foundation in frontend technologies, including HTML, CSS, JavaScript, and React, complemented by backend experience using Node.js and MySQL. With a proven ability to design and implement engaging web application'
    profContent.appendChild(profText);

    //================Append profText children==========================
    profTextContainer.appendChild(profHeader);
    profTextContainer.appendChild(profContent);
    //================================================================


    //================Contact Container=====================================
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact';

    //================ children of contactContainer=====================
    const linkContainer1 = document.createElement('div');
    const linkContainer2 = document.createElement('div');
    const linkContainer3 = document.createElement('div');

    linkContainer1.className = 'contact-link';
    linkContainer2.className = 'contact-link';
    linkContainer3.className = 'contact-link';
    //================================================================

    //================Contact Links=====================
    const link1 = document.createElement('a');
    link1.href = 'https://il.linkedin.com/in/rotem-amitay-327298267?trk=people-guest_people_search-card';

    const link2 = document.createElement('a');
    link2.href = 'https://github.com/weirdball7';

    const link3 = document.createElement('a');
    link3.href = 'mailto:devamitay04@gmail.com';

    //================ Link Icons=====================

    const linkIcon1 = document.createElement('i');
    linkIcon1.className = 'fab fa-linkedin fa-2xl';
    linkIcon1.style.color = 'rgb(230, 255, 234)';

    const linkIcon2 = document.createElement('i');
    linkIcon2.className = 'fab fa-github fa-2xl';
    linkIcon2.style.color = 'rgb(230, 255, 234)';

    const linkIcon3 = document.createElement('i');
    linkIcon3.className = 'fas fa-envelope fa-2xl';
    linkIcon3.style.color = 'rgb(230, 255, 234)';
    //================================================================

    //================Append Link icons=====================
    link1.appendChild(linkIcon1);
    link2.appendChild(linkIcon2);
    link3.appendChild(linkIcon3);

    //================Append Links=====================
    linkContainer1.appendChild(link1);
    linkContainer2.appendChild(link2);
    linkContainer3.appendChild(link3);

    //================Append Link Containers=====================
    contactContainer.appendChild(linkContainer1);
    contactContainer.appendChild(linkContainer2);
    contactContainer.appendChild(linkContainer3);
    //================================================================

    //================Append Children==========================
    cardDiv.appendChild(backDiv);
    cardDiv.appendChild(contentDiv);
    contentDiv.appendChild(profImg);
    contentDiv.appendChild(profTextContainer);
    contentDiv.appendChild(contactContainer);

    //================Append to body==========================
    document.body.appendChild(cardDiv);
}; 

createElements();