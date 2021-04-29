import React from "react";
import '../dashMain/dashMain.css';
import firestore from '../../../../firebase'


// firestore.collection("events").doc("Duathlon Hi Trail").collection("participants").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//     });
//   });

firestore.collection("events").doc("Duathlon Hi Trail").collection("participants").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
            let foodDiv = document.createElement('div');
            foodDiv.className = 'content-menu__items__block__item';
            foodDiv.innerHTML = `<p>${doc.data().name}`;
            document.getElementById("dashMain").append(foodDiv);
    });
  });



function dashMain () {
    return (
        <div className='dashMain' id="dashMain">
        </div>
    )}

export default dashMain;