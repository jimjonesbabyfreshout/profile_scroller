const profiles = profileIterator(data);

//Call first Profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);


// Next Profile Display 
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {

        document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name:${currentProfile.name}
    </li>
    <li class="list-group-item">Age:${currentProfile.age}
    </li>
    <li class="list-group-item">Location:${currentProfile.location}
    </li>
    <li class="list-group-item">Preference:${currentProfile.gender} looking for 
    ${currentProfile.lookingfor}
    </li>
    </ul>
    `;

        document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">`;
    } else {
        // No more profiles
        window.location.reload();
    }
}


// Profile Iterator 
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }


        }
    };

}
