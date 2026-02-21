/**
 * Data Browser domain data
 * Extracted from: DataBrowser.jsx
 */

export const TABS = [
    "Schools",
    "Students",
    "Teachers",
    "Staff",
    "Sections",
    "Terms",
    "Courses",
    "Contacts"
];

export const SCHOOLS_DATA = [
    {
        name: "Default District Office (Auto-generated)",
        city: "--",
        state: "--",
        students: { value: "--", link: false },
        dataSource: "SIS",
        sections: { value: "--", link: false },
        teachers: { value: "--", link: false },
        lastModified: { date: "Jul 14, 2025", time: "7:24 p.m." }
    },
    {
        name: "Cedar Ridge Elementary",
        city: "Bloomington",
        state: "KS",
        students: { value: "1713", link: true },
        dataSource: "SIS",
        sections: { value: "17", link: true },
        teachers: { value: "9", link: true },
        lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." }
    },
    {
        name: "Cedar Ridge High School",
        city: "Fort Enola",
        state: "NY",
        students: { value: "1613", link: true },
        dataSource: "SIS",
        sections: { value: "14", link: true },
        teachers: { value: "7", link: true },
        lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." }
    },
    {
        name: "Cedar Ridge Middle School",
        city: "Stantonchester",
        state: "RI",
        students: { value: "1674", link: true },
        dataSource: "SIS",
        sections: { value: "19", link: true },
        teachers: { value: "9", link: true },
        lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." }
    }
];

export const STUDENTS_DATA = [
    { school: "Cedar Ridge Middle School", first: "Remington", last: "Stoltenberg", gender: "F", dataSource: "SIS", dob: "2013-08-25", grade: "7", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Madisyn", last: "Hoeger", gender: "M", dataSource: "SIS", dob: "2012-11-22", grade: "8", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Brando", last: "Hane", gender: "M", dataSource: "SIS", dob: "2014-07-24", grade: "6", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Lavon", last: "Botsford", gender: "X", dataSource: "SIS", dob: "2012-12-12", grade: "8", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Albert", last: "Sawayn", gender: "F", dataSource: "SIS", dob: "2013-10-12", grade: "7", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Leslie", last: "Flatley", gender: "M", dataSource: "SIS", dob: "2014-08-13", grade: "6", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Rhiannon", last: "Hackett", gender: "M", dataSource: "SIS", dob: "2012-03-24", grade: "8", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Adrianna", last: "Muller", gender: "X", dataSource: "SIS", dob: "2014-08-25", grade: "6", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Cleveland", last: "Grant", gender: "M", dataSource: "SIS", dob: "2012-03-02", grade: "8", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Nicklaus", last: "Turner", gender: "M", dataSource: "SIS", dob: "2012-06-28", grade: "8", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Dan", last: "Schumm", gender: "F", dataSource: "SIS", dob: "2014-09-05", grade: "6", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Sierra", last: "Grimes-Ebert", gender: "X", dataSource: "SIS", dob: "2014-01-22", grade: "6", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Bernardo", last: "Halvorson", gender: "M", dataSource: "SIS", dob: "2012-10-23", grade: "8", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Everette", last: "Klohn", gender: "F", dataSource: "SIS", dob: "2013-05-08", grade: "7", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Irwin", last: "Herman", gender: "X", dataSource: "SIS", dob: "2013-09-30", grade: "7", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Alaina", last: "Kilback", gender: "M", dataSource: "SIS", dob: "2012-05-21", grade: "8", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Jarrell", last: "Wisoky", gender: "X", dataSource: "SIS", dob: "2014-03-24", grade: "6", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Eldred", last: "Reinger", gender: "M", dataSource: "SIS", dob: "2012-04-27", grade: "8", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Zoe", last: "Goyette", gender: "X", dataSource: "SIS", dob: "2014-05-20", grade: "6", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Guy", last: "Kuh", gender: "M", dataSource: "SIS", dob: "2012-08-31", grade: "8", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } }
];

export const TEACHERS_DATA = [
    { school: "Cedar Ridge Middle School", first: "Betty", last: "Bauch", title: "Ms.", dataSource: "SIS", email: "betty_bauch@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Earnest", last: "Rolfson", title: "Dr.", dataSource: "SIS", email: "earnest_rolfson82@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Rogelio", last: "Welch", title: "Ms.", dataSource: "SIS", email: "rogelio.welch93@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Uriah", last: "Connelly", title: "Dr.", dataSource: "SIS", email: "uriah_connelly17@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Walter", last: "Krajcik", title: "Ms.", dataSource: "SIS", email: "walter.krajcik@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Gerardo", last: "Erdman", title: "Mrs.", dataSource: "SIS", email: "gerardo_erdman91@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Lorelne", last: "Brakus", title: "Dr.", dataSource: "SIS", email: "lorelne_brakus@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Freeman", last: "Koney", title: "Dr.", dataSource: "SIS", email: "freeman.koney1@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Middle School", first: "Jalen", last: "Reinger", title: "Dr.", dataSource: "SIS", email: "jalen.reinger61@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Elementary", first: "Sierra", last: "Hintz", title: "Mrs.", dataSource: "SIS", email: "sierra_hintz@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Elementary", first: "Claudie", last: "Cummings", title: "Mr.", dataSource: "SIS", email: "claudie_cummings22@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Elementary", first: "Anibal", last: "Hand-Schroeder", title: "Dr.", dataSource: "SIS", email: "anibal.hand-schroeder@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Elementary", first: "Skylar", last: "Corwin", title: "Ms.", dataSource: "SIS", email: "skylar_corwin74@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Elementary", first: "Gregory", last: "Crist", title: "Mr.", dataSource: "SIS", email: "gregory.crist57@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Elementary", first: "Malcolm", last: "Reynolds", title: "Mr.", dataSource: "SIS", email: "malcolm_reynolds43@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Elementary", first: "Destiny", last: "Kunze", title: "Ms.", dataSource: "SIS", email: "destiny_kunze@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Elementary", first: "Alexane", last: "Hyatt", title: "Mrs.", dataSource: "SIS", email: "alexanne_hyatt@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge Elementary", first: "Erna", last: "Keeling", title: "Dr.", dataSource: "SIS", email: "erna.keeling71@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge High School", first: "Armen", last: "Yost", title: "Mr.", dataSource: "SIS", email: "armen.yost@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } },
    { school: "Cedar Ridge High School", first: "Drake", last: "Keiser", title: "Dr.", dataSource: "SIS", email: "drake_keiser@exampledistrict.org", lastModified: { date: "Feb 1, 2026", time: "9:45 a.m." } }
];

export const STAFF_DATA = [
    { first: "Maegan", last: "Fadel", title: "Principal", email: "maegan.fadel73@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Shyanne", last: "Kuhic", title: "Librarian", email: "shyanne.kuhic@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Jaycee", last: "O'Hara", title: "Assistant Principal", email: "jaycee.ohara@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Donavon", last: "Johnson", title: "Principal", email: "donavon_johnson5@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Andy", last: "Willms", title: "Counselor", email: "andy.willms36@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Tess", last: "Heaney", title: "Special Education Coordinator", email: "tess.heaney@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Fanny", last: "Stracke", title: "Librarian", email: "fanny.stracke@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Percival", last: "Beier", title: "Teaching Assistant", email: "percival_beier23@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Leland", last: "Greenholt", title: "Counselor", email: "leland_greenholt@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Arvid", last: "Crooks", title: "Teaching Assistant", email: "arvid_crooks31@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Irving", last: "Labadie", title: "Assistant Principal", email: "irving_labadie22@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Seth", last: "Roberts", title: "Nurse", email: "seth.roberts@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Penelope", last: "Goyette", title: "Custodian", email: "penelope.goyette@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Carolina", last: "Parker", title: "Secretary", email: "carolina_parker2@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { first: "Tyrel", last: "McGlynn", title: "Nurse", email: "tyrel.mcglynn38@exampledistrict.com", dataSource: "SIS", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } }
];

export const SECTIONS_DATA = [
    { school: "Cedar Ridge Middle School", name: "Mathematics - Grade 6 - Krajcik - 0", grade: "6", subject: "math", dataSource: "SIS", teacher: "Walter Krajcik", course: "Mathematics - Grade 6", term: "2025-2026 School Year", students: "66", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { school: "Cedar Ridge Middle School", name: "Art - Grade 7 - Koney - 0", grade: "7", subject: "arts and music", dataSource: "SIS", teacher: "Freeman Koney", course: "Art - Grade 7", term: "2025-2026 School Year", students: "30", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { school: "Cedar Ridge Middle School", name: "Music - Grade 6 - Erdman - 2", grade: "6", subject: "arts and music", dataSource: "SIS", teacher: "Gerardo Erdman", course: "Music - Grade 6", term: "2025-2026 School Year", students: "66", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { school: "Cedar Ridge Middle School", name: "Physical Education - Grade 7 - Rolfson - 7", grade: "7", subject: "PE and health", dataSource: "SIS", teacher: "Earnest Rolfson", course: "Physical Education - Grade 7", term: "2025-2026 School Year", students: "36", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { school: "Cedar Ridge Middle School", name: "Mathematics - Grade 8 - Rolfson - 6", grade: "8", subject: "math", dataSource: "SIS", teacher: "Earnest Rolfson", course: "Mathematics - Grade 8", term: "2025-2026 School Year", students: "50", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { school: "Cedar Ridge Middle School", name: "Science - Grade 6 - Krajcik - 3", grade: "6", subject: "science", dataSource: "SIS", teacher: "Walter Krajcik", course: "Science - Grade 6", term: "2025-2026 School Year", students: "66", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { school: "Cedar Ridge Middle School", name: "Music - Grade 8 - Reinger - 5", grade: "8", subject: "arts and music", dataSource: "SIS", teacher: "Jalen Reinger", course: "Music - Grade 8", term: "2025-2026 School Year", students: "50", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { school: "Cedar Ridge Middle School", name: "Art - Grade 7 - Brakus - 4", grade: "7", subject: "arts and music", dataSource: "SIS", teacher: "Lorelne Brakus", course: "Art - Grade 7", term: "2025-2026 School Year", students: "32", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { school: "Cedar Ridge Middle School", name: "Science - Grade 6 - Krajcik - 5", grade: "6", subject: "science", dataSource: "SIS", teacher: "Walter Krajcik", course: "Science - Grade 6", term: "2025-2026 School Year", students: "66", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { school: "Cedar Ridge Middle School", name: "World Languages - Grade 8 - Reinger - 8", grade: "8", subject: "language", dataSource: "SIS", teacher: "Jalen Reinger", course: "World Languages - Grade 8", term: "2025-2026 School Year", students: "50", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } }
];

export const TERMS_DATA = [
    { name: "2025-2026 School Year", start: "Aug 15, 2025", end: "Jun 15, 2026", cleverId: "697ee1f29df72ba415b49128", created: { date: "Feb 1, 2026", time: "12:17 a.m." }, sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "12:17 a.m." } }
];

export const COURSES_DATA = [
    { number: "ART182", name: "Art - Grade 2", cleverId: "697ee1f29df72ba415b49129", sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { number: "ART209", name: "Art - Grade Kindergarten", cleverId: "697ee1f29df72ba415b4912a", sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { number: "ART402", name: "Art - Grade 3", cleverId: "697ee1f29df72ba415b4912b", sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { number: "ART618", name: "Art - Grade 7", cleverId: "697ee1f29df72ba415b4912c", sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { number: "ART721", name: "Art - Grade 7", cleverId: "697ee1f29df72ba415b4912d", sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { number: "ART816", name: "Art - Grade 7", cleverId: "697ee1f29df72ba415b4912e", sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { number: "ART862", name: "Art - Grade 5", cleverId: "697ee1f29df72ba415b4912f", sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { number: "ART978", name: "Art - Grade Kindergarten", cleverId: "697ee1f29df72ba415b49130", sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { number: "ENG218", name: "English Language Arts - Grade Kindergarten", cleverId: "697ee1f29df72ba415b49131", sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } },
    { number: "ENG226", name: "English Language Arts - Grade 4", cleverId: "697ee1f29df72ba415b49132", sections: "Sections", lastModified: { date: "Feb 1, 2026", time: "10:52 a.m." } }
];

export const CONTACTS_DATA = [];
