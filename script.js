//Question 1 : For the given JSON iterate overall for loops (for,for in, for of, for each)

const jsonData =[
    {
        "name":"Dinesh",
        "age":"23",
        "city":"Pollachi"
    },
    {
        "name":"Ram",
        "age":"22",
        "city":"Chennai"
    },
    {
        "name":"Deepak",
        "age":"21",
        "city":"Palani"
    },
    {
        "name":"Hari",
        "age":"25",
        "city":"Kollam"
    },
    {
        "name":"Kirthick",
        "age":"24",
        "city":"Coimbatore"
    }
]
//By using for loop
console.log(jsonData);
console.log("By using for in loop");
for(let i =0;i<jsonData.length;i++){
    console.log(jsonData[i].name,jsonData[i].age,jsonData[i].city);
}

//By using for in loop
console.log("By using for in loop");
for(let index in jsonData){
    console.log(jsonData[index].name,jsonData[index].city,jsonData[index].age);
}

//By using for of loop
console.log("By using for of loop");
for(let obj of jsonData){
    console.log(obj.age,obj.name,obj.city);
}

//Question 2 : Create your own resume data in JSON format

const resume={
    "Name":"Dinesh Gowtham K",
    "Age":"23",
    "City":"Pollachi",
    "Education":{
        "10th standard":{
            "school":"LMHSS",
            "percentage":"93%"
        },
        "12 standard":{
            "school":"SLVM",
            "percentage":"79%"
        },
        "degree":{
            "course":"B.E - Mechanical",
            "college": "Sri Eshwar",
            "CGPA":"8.78"
        }
    },
    "Skills":["C","Java","JavaScript","SQL"],
    "Interest":["Sports","Travelling","Cooking"],
    "Certifications":{
        "certificate1":{
            "cname":"C Programming",
            "platform":"Sololearn"
        },
        "certificate2":{
            "cname":"Digital Manufacturing and Design",
            "platform":"Coursera"
        }
    },
    "Projects":{
        "project1":{
            "pname":"Automated Heavy Machinery Bearing Lubricator",
            "semester":"4th"
        },
        "project2":{
            "pname":"Smart Foldable Waiting Chair",
            "semester":"6th"
        },
        "project3":{
            "pname":"Numerical Investigation on evaporative cooling condenser",
            "semester":"8th"
        }
    },
    "Journal Publication":"A study on Foldable waiting chair in transportation platforms"
}
console.log(resume);
console.log(resume.Name,resume.City);