var config = {
    apiKey: "AIzaSyDqbVrMVRuQqw4ZEkeyyKU13vm7dPihm9Y",
    authDomain: "train-scheduler-abfd5.firebaseapp.com",
    databaseURL: "https://train-scheduler-abfd5.firebaseio.com",
    projectId: "train-scheduler-abfd5",
    storageBucket: "train-scheduler-abfd5.appspot.com",
    messagingSenderId: "116564666242"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  
   $("#add-train").on("click", function(event){
    event.preventDefault();

   var trainnum = $("#train-number-input").val().trim();
   var dtn = $("#destination-input").val().Trim();
   var fttime = $("#next-train-arriving-input").val().trim();
   var fqy = $("#frequency-input").val().trim();
   
    var newtrain ={
      trainnumber:trainnum,
      destination:dtn,
      firsttraintime:fttime,
      frequency:fqy,
    };
    
    databased.ref().push(newtrain);
    
    console.log(trainnum.trainnumber);
    console.log(dtn.destination);
    console.log(tttime.firsttraintime);
    console.log(fqy.frequency);
     
//alert trai added 

     $("#train-number-input").val("");;
     $("#destination-input").val("");
     $("#next-train-arriving-input").val("");
     $("#frequency-input").val("");

});

    database.ref().on("child_added", function(childsnapshot){
       console.log(childsnapshot.val());

   var trainnum = childsnapshot.val().trainnumber;
   var dtn = childsnapshot.val().destination;
   var fttime = childsnapshot.val().firsttraintime;
   var fqy = childsnapshot.val().frequency; 

   console.log(trainnum);
    console.log(dtn);
    console.log(fttime);
    console.log(fqy);

    var newRow = ("<tr>").append(
        $("<td>").text(trainnum),
        $("<td>").text(dtn),
        $("<td>").text(fttime),
        $("<td>").text(fqy),
    );
    


   $("#train-table > tbody").append(newRow);
    });
    




   