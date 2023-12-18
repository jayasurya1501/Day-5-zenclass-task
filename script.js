const jsonObj = {
    "name": "Jayasurya",
    "place": "Arakkonam",
    "state": "Tamil Nadu",
    "education": {
      "school": "Selvam Matric Hr Sec School",
      "tenthPercentage": 76,
      "twelfthPercentage": 56,
      "college": "Prathyusha Engineering College",
      "course": "B.E",
      "specialization": "ECE",
      "bePercentage": 80
    }
  }
  
  

  for (let key in jsonObj) {
    console.log(key, jsonObj[key]);
    if (Array.isArray(jsonObj[key])) {
      for (let element of jsonObj[key]) {
        console.log(element);
      }
      jsonObj[key].forEach(element => {
        console.log(element);
      });
    }
  }
  
  