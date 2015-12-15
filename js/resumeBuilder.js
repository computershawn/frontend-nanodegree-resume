/*
Write a description of this script does...
 */


var bio = {
    "name": "Shawn Jackson",
    "role": "Interaction Designer & Freelance Astronaut",
    "contacts": {
        "mobile": "310.709.7244",
        "email": "hello@shawnj.es",
        "github": "github.com/computershawn",
        "twitter": "@computershawn",
        "location": "Los Angeles, CA"
    },
    "welcomeMessage": "Crafting experiences that are as delightful to use as they are functional",
    "skills": ["Visual Design", "Sandwiches", "Programming", "Chilling", "Plaid Shirts", "Various Things"],
    //"biopic": "http://static1.squarespace.com/static/55076de4e4b0ce615043ba3c/t/561c7fb7e4b0b6031fbf9edd/1446454882597/logo_12Oct2015.png?format=500w"
    "biopic": "images/shawnjackson.png"
};

/*  HELLO UDACITY CHECKER PERSON:
    IS THIS 'AFTER-THE-OBJECT-DECLARATION' DEFINITION
    OF MY 'display' FUNCTION ACCEPTABLE/STANDARD PRACTICE?
    MY CODE EDITOR (Adobe Brackets) RAISED WARNINGS WHEN I
    DEFINED THE 'display' FUNCTION WITHIN THE 'bio' OBJECT
    DECLARATION.
*/
/* Takes bio JSON data and generates
    HTML for this site's Bio section */
bio.display = function () {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    /* Instead of listing the word for the contact info,
        we can use sweet FontAwesome icons */
    var fAwesomeIcons = {
        "mobile": "mobile",
        "email": "envelope",
        "twitter": "twitter",
        "github": "github",
        "location": "map-marker"
    };
    var icoPrefix = "<i class='fa fa-", icoSuffix = "'></i>";
    $.each(bio.contacts, function (index, item) {
        /* Print item title as text by default */
        var iconOrText = index;
        /* But if a FontAwesome icon exists for that item,
            use the icon instead of text. */
        if (fAwesomeIcons.hasOwnProperty(index)) {
            iconOrText = icoPrefix + fAwesomeIcons[index] + icoSuffix;
        }
        var nextItem = HTMLcontactGeneric.replace("%contact%", iconOrText).replace("%data%", item);
        $("#topContacts").append(nextItem);
        $("#footerContacts").append(nextItem);
    });
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);

    $.each(bio.skills, function (index, skill) {
        var nextItem = HTMLskills.replace("%data%", skill);
        $("#skills").append(nextItem);
    });
};




var eduObject = {
    "schools": [
        {
            "name": "Art Center College of Design",
            "location": "Pasadena, CA",
            "degree": "Master of Fine Arts",
            "majors": ["Media Design Practices"],
            "dates": 1409554800000,
            "url": "www.artcenter.edu"
        },
        {
            "name": "UCLA",
            "location": "Los Angeles, CA",
            "degree": "Bachelor of Science",
            "majors": ["Mechanical Engineering"],
            "dates": 991378800000,
            "url": "www.ucla.edu"
        }],

    "onlineCourses": [
        {
            "title": "Front End Web Developer Nanodegree",
            "school": "Udacity",
            "date": 1433142000000,
            "url": "www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "iOS Developer Nanodegree",
            "school": "Udacity",
            "date": 1433142000000,
            "url": "www.udacity.com/course/ios-developer-nanodegree--nd003"
        }]
};

/* Takes education JSON data and generates
    HTML for this site's Education section */
eduObject.display = function () {
    // Degreed programs
    $.each(eduObject.schools, function (index, skool) {
        var nextItem = HTMLschoolName.replace("%data%", skool.name).replace('href="#"', 'href="http://' + skool.url + '" target="_blank"');
        /*
            IN THE ABOVE LINE, IS THERE A STANDARD OR MORE
            EFFICIENT WAY TO REPLACE THE LINK INSIDE 'href'?
        */
        nextItem += HTMLschoolDegree.replace("%data%", skool.degree);
        nextItem += HTMLschoolDates.replace("%data%", new Date(skool.dates).getFullYear());
        nextItem += HTMLschoolLocation.replace("%data%", skool.location);
        majorList = skool.majors[0];
        if (skool.majors.length > 0) {
            for (var i = 1; i < skool.majors.length; i++) {
                majorList += ", " + skool.majors[i];
            }
        }
        nextItem += HTMLschoolMajor.replace("%data%", majorList);
        $("#education").append($(HTMLschoolStart).append(nextItem));
    });

    // Online courses
    $("#education").append(HTMLonlineClasses);
    $.each(this.onlineCourses, function (index, course) {
        var nextItem = HTMLonlineTitle.replace("%data%", course.title).replace('href="#"', 'href="http://' + course.url + '" target="_blank"');
        nextItem += HTMLonlineSchool.replace("%data%", course.school);
        nextItem += HTMLonlineDates.replace("%data%", new Date(course.date).getFullYear());
        var shortURL = course.url.substr(0, course.url.indexOf("/"));
        nextItem += HTMLonlineURL.replace("%data%", shortURL).replace('href="#"', 'href="http://' + course.url + '" target="_blank"');
        $("#education").append($(HTMLschoolStart).append(nextItem));
    });
};




var work = {
    "jobs": [
        {
            "employer": "NASA/JPL",
            "title": "Data Visualization Design Intern",
            "location": "Pasadena, CA",
            "dates": "1/1/2000 – 1/1/2010",
            "description": "Description of the job"
        },
        {
            "employer": "Kaiser Permanente",
            "title": "Visual Design Intern",
            "location": "Oakland, CA",
            "dates": "1/1/2000 – 1/1/2010",
            "description": "Description of the job"
        },
        {
            "employer": "Frog Design",
            "title": "Visual Design Intern",
            "location": "San Francisco, CA",
            "dates": "1/1/2000 – 1/1/2010",
            "description": "Description of the job"
        }]
};

/* Takes work JSON data and generates HTML
    for this site's Experience section */
work.display = function () {
    $.each(this.jobs, function (index, job) {
        var nextItem = HTMLworkEmployer.replace("%data%", this.employer);
        nextItem += HTMLworkTitle.replace("%data%", this.title);
        nextItem += HTMLworkDates.replace("%data%", this.dates);
        nextItem += HTMLworkLocation.replace("%data%", this.location);
        nextItem += HTMLworkDescription.replace("%data%", this.description);
        $("#workExperience").append($(HTMLworkStart).append(nextItem));
    });
};




var projObject = {
    "projects": [
        {
            "title": "Lity Fertility Tracker",
            "dates": "December 2015",
            "description": "Using body temperature for minimal, beautiful fertility monitoring",
            "images": ["images/lity1.png", "images/lity2.png", tempImgURL()]
        },
        {
            "title": "Dataviz Web App",
            "dates": "August 2014",
            "description": "Allowing a broad audience of scientists and citizens to easily access data and create visualizations",
            "images": ["images/data1.png", "images/data2.jpg", tempImgURL()]
        }]
};

/* Takes project JSON data and generates
    HTML for this site's Projects section */
projObject.display = function () {
    $.each(this.projects, function (index, proj) {
        var nextItem = HTMLprojectTitle.replace("%data%", this.title);
        nextItem += HTMLprojectDates.replace("%data%", this.dates);
        nextItem += HTMLprojectDescription.replace("%data%", this.description);
        $.each(this.images, function(i, imageURL) {
            nextItem += HTMLprojectImage.replace("%data%", imageURL);
            //nextItem += HTMLprojectImage.replace("%data%", tempImgURL());
        });
        $("#projects").append($(HTMLprojectStart).append(nextItem));
    });
};




/* Description... */
function renderGoogleMap() {
    $("#map-div").append(googleMap);
}

/* Create a temporary placeholder image with a random background */
function tempImgURL() {
    tempURL = "http://placehold.it/320x320";
    hexNum = (Math.round(Math.random()*8+4)).toString(16);
    hexCo = hexNum+hexNum+hexNum+hexNum+hexNum+hexNum;
    tempURL += "/" + hexCo + "/ffffff";
    return tempURL;
}




function renderSections() {
    /* Render Bio Section */
    bio.display();

    /* Render Work Experience Section */
    work.display();

    /* Render Projects Section */
    projObject.display();

    /* Render Education Section */
    eduObject.display();

    renderGoogleMap();
}




renderSections();