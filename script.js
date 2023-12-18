const resumeData = {
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
  };
  
  console.log("Using for...in loop:");
  for (let key in resumeData) {
    if (typeof resumeData[key] !== "object") {
      console.log(key, ":", resumeData[key]);
    } else {
      for (let nestedKey in resumeData[key]) {
        console.log(nestedKey, ":", resumeData[key][nestedKey]);
      }
    }
  }
  
  console.log("\nUsing for...of loop (not applicable in this case):");
  for (let value of Object.values(resumeData)) {
    console.log(value);
  }
  
  console.log("\nUsing forEach (not applicable in this case):");
  Object.values(resumeData).forEach(value => {
    console.log(value);
  });
  
  
  