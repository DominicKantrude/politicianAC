
//Political Campaign
let politicians = [];

const politician = (name, congressionalDistrict, urlForDonationForm, biography, missionStatement, urlForRegisteringVote) => ({
    name: name,
    congressionalDistrict: congressionalDistrict,
    platformStatement: [],
    urlForDonationForm: urlForDonationForm,
    calendarOfEvents: [],
    volunteersInformation: [],
    biography: biography,
    imageGallery: {
        headShots: [],
        picsOfFamily: [],
        picsOfConstituents: [],
    },
    missionStatement: missionStatement,
    urlForRegisteringVote: urlForRegisteringVote
})

// const calendarOfEvents = () => ({

// })

// const platformStatemtent = () => ({
//     taxes: taxes,
//     jobs: jobs,
//     infrastructure: infrastructure,
//     healthcare: helathcare,
//     crimeAndEnforcement: crimeAndEnforcement,
// })

// const volunteer = () => ({
//     name: name,
//     address: address,
//     email: email,
//     phoneNumber: phoneNumber,
//     availability: availability,
//     activitiesWillingToDo: []
// })


const makePolitician = (name, congressionalDistrict, urlForDonationForm, biography, missionStatement, urlForRegisteringVote) => {
    let newPolitician = politician(name, congressionalDistrict, urlForDonationForm, biography, missionStatement, urlForRegisteringVote);
    //this would actually take the html from the dom and store it
    return newPolitician;
}

const addPoliticians = () => {
    console.log("hi  ");
    let name = "dom";
    let congressionalDistrict = "that one";
    let urlForDonationForm = "www.dat.com"
    let biography = "he did stuff";
    let missionStatement = "to keep doing stuff";
    let urlForRegisteringVote = "ww.vote.com";
    politicians.push(makePolitician(name, congressionalDistrict, urlForDonationForm, biography, missionStatement, urlForRegisteringVote));

    name = "jackddd";
    congressionalDistrict = "1";
    urlForDonationForm = "www.1.com";
    biography = "1";
    missionStatement = "1";
    urlForRegisteringVote = "1";
    politicians.push(makePolitician(name, congressionalDistrict, urlForDonationForm, biography, missionStatement, urlForRegisteringVote));

    name = "thatguy";
    congressionalDistrict = "2";
    urlForDonationForm = "2"
    biography = "2";
    missionStatement = "2";
    urlForRegisteringVote = "2";
    politicians.push(makePolitician(name, congressionalDistrict, urlForDonationForm, biography, missionStatement, urlForRegisteringVote));
}

addPoliticians();

function addToImageGallery(politicianName, newImage, imageType) {

    for (let index = 0; index < politicians.length; index++) {
        if (politicians[index].name === politicianName)
            politicians[index].imageGallery[imageType].push(newImage)
    }
}

addToImageGallery("thatguy", "professionalShot", "headShots");
console.log(politicians[2].imageGallery);

function changeBiography(politicianName, newBiography) {
    for (let index = 0; index < politicians.length; index++) {
        if (politicians[index].name === politicianName)
            politicians[index].biography = newBiography;
    }
}

function changePlatform(politicianName, topic, newPlatformStatement) {

}

