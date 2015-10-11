var work = {
    "jobs": [
        {
            "employer": "University of Alaska Fairbanks",
            "title": "Graduate Teaching Assistant",
            "location": "Fairbanks, AK",
            "dates": "9/2009-5/2011",
            "description": "Graduate Assistant teaching 100 level course, assisting in research and TA"
        },
        {
            "employer": "Next Step Living",
            "title": "Marketing Analyst",
            "location": "Boston, MA",
            "dates": "2/2012-11/2012",
            "description": "Reporting, forecasting, field IT, strategy, compensation management"
        },
        {
            "employer": "Next Step Living",
            "title": "Senior Marketing Analyst",
            "location": "Boston, MA",
            "dates": "11/2012-2/2015",
            "description": "Managed team of Analysts for data quality, referral program, and marketing analysis"
        },
        {
            "employer": "Next Step Living",
            "title": "Product Manager",
            "location": "Boston, MA",
            "dates": "2/2015-Present",
            "description": "User stories, Product strategy, development, UX etc etc etc"
        }
    ]
}

work.display = function() {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedworkEmployerTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
    });
}

var bio = {
    "name": "Zack Boyd",
    "role": "Product Manager",
    "welcomeMessage": "Always up for a challenge.",
    "contacts": {
        "mobile_number": "907-750-5609",
        "email" : "zhboyd@gmail.com",
        "github" : "https://github.com/ZackBoyd",
        "location" : "Boston, MA"
    },
    "pictureURL":"images/zack.png",
    "skills" : ["Product Management", "Data Analysis","Economics", "UX"]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile_number);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};

var education = {
    "schools": [
        {
            "school": "University of Alaska Fairbanks",
            "years": "2009-2011",
            "degree": "Masters of Science",
            "city": "Fairbanks, AK",
            "major": "Natural Resource Economics"
        },
        {
            "school": "University of Alaska Fairbanks",
            "years": "2005-2009",
            "city": "Fairbanks, AK",
            "degree": "Bachelors",
            "major": "Economics"
        },
        {
            "school": "University of Stirling",
            "years": "2006-2007",
            "degree": "Bachelors",
            "city": "Stirling, Scotland, UK",
            "major": "History"
        },
        {
            "school": "University of Oregon",
            "years": "2007-2008",
            "degree": "Bachelors",
            "city": "Eugene, OR",
            "major": "Economics"
        }
    ],
    "onlineCourses": [
        {
            "title": "Into to HTML and CSS",
            "school": "Udacity",
            "dates": "8/2015",
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "dates": "8/2015",
            "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": "8/2015",
            "url": "https://www.udacity.com/course/responsive-images--ud882"
        },
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "10/2015",
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "dates": "10/2015",
            "url": "https://www.udacity.com/course/intro-to-jquery--ud245"
        },
        {
            "title": "Version Control With Git and GitHub",
            "school": "Udacity",
            "dates": "10/2015",
            "url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
        },
        {
            "title": "Python Track",
            "school": "Codeacademy",
            "dates": "5/2015",
            "url": "https://www.codecademy.com/tracks/python"
        }
    ]
};

education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.school).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.years);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.city);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolMajor);
    });
    $(".education-entry:last").append(HTMLonlineClasses);
    if (education.onlineCourses.length > 0) {
    	$("#education").append(HTMLonlineStart);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedURL = HTMLonlineURL.replace("%data%", course.url);

            $(".education-entry:last").append(formattedOnlineTitle);
            $(".education-entry:last").append(formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedURL);
        });
    }
};

var projects = {
    "projects": [
    {
        "title": "Evaluating power export methods for a remote Geothermal power resource",
        "dates": "2011",
        "description":"Graduate Thesis"
    }
]
};

projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    })
};

function inName() {
    var name = $("#name").html();
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

work.display();
bio.display();
education.display();
projects.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);
