let datamap = [{
  name_tmpat: "yogya",
  lat: -7.797068,
  lng: 110.370529,
  ket: "ktoa jogja"
}, {
  name_tmpat: "bantul",
  lat: -7.840243,
  lng: 110.408333,
  ket: "ktoa bantul"
}, {
  name_tmpat: "sleman",
  lat: -7.714944,
  lng: 110.359383,
  ket: "ktoa sleman"
}]


// console.log(datamap);

// function tt() {
//     let habib = "habib rifqi";
//     return habib
// }

function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -7.797068, lng: 110.370529 },
    zoom: 8,
    mapTypeId: "roadmap",
  });

  function pin() {
    datamap.forEach(dmap => {
      console.log(dmap.name_tmpat, dmap.ket);
      let myLatLng = { lat:dmap.lat, lng: dmap.lng };
      const marker = new google.maps.Marker({
          position: myLatLng,
          map,
          title: `${dmap.name_tmpat}`,
        });

        const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        `<h1 id="firstHeading" class="firstHeading"> ${dmap.name_tmpat}</h1>` +
        '<div id="bodyContent">' +
        `<p><b>Uluru</b>, ${dmap.name_tmpat}</p>` +
        '<p>Attribution: Uluru,'
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>"; 

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          ariaLabel: "Uluru",
        });

        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
          });
        });

        google.maps.event.addListener(map, 'click', function() {
          infowindow.close();
        });






    });
      
  }


  // const contentString =
  //   '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   "</div>" +
  //   '<h1 id="firstHeading" class="firstHeading">yogyakarta</h1>' +
  //   '<div id="bodyContent">' +
  //   "<p><b>Uluru</b>, KOTA JOGJA</p>" +
  //   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  //   "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
  //   "(last visited June 22, 2009).</p>" +
  //   "</div>" +
  //   "</div>";

    // const infowindow = new google.maps.InfoWindow({
    //   content: contentString,
    //   ariaLabel: "Uluru",
    // });

  //   const marker = new google.maps.Marker({
  //   position: map.center,
  //   map,
  //   title: "Hello World!",
  // });

  // marker.addListener("click", () => {
  //   infowindow.open({
  //     anchor: marker,
  //     map,
  //   });
  // });

  map.setTilt(45);

  pin();
}

initMap();

console.log("asa");
