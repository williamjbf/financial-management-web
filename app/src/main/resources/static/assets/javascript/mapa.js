let map;
let marker;

let center = {lat: -6.888463202449027, lng: -38.558930105104125};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
  });

  marker = new google.maps.Marker({
      map: map,
      position: center,
      draggable: true
  });

  map.addListener("click", (evt) => {
    addMarker(evt);
  });

  marker.addListener('position_changed', ()=>{
      map.setCenter(marker.position);
  });

}

function addMarker(evt){
    marker.setPosition(evt.latLng);
}

function salvar(){

    let typeJson = {
        id:0,
    }
    let categoryJson ={
        id:0,
    }


    let typeSelecionado = document.getElementById("tipo").value;

    let categorySelecionado = document.getElementById("categoria").value;

    const pointObj = {
        type: "Point",
        coordinates: [marker.getPosition().lat(),marker.getPosition().lng()]
    }

    $.ajax({
        method: "GET",
        url:"type/find",
        data:"description="+typeSelecionado,
        contentType: "application/json; charset=utf-8",
        success: function (response){
            typeJson.id = response.id;
            console.log(typeJson);
        }
    }).fail(function (xhr,status,errorThrown){
        alert("error ao puxar os tipos: " + xhr.responseText);
    })

    $.ajax({
        method: "GET",
        url:"category/find",
        data:"description="+categorySelecionado,
        contentType: "application/json; charset=utf-8",
        success: function (response){
            categoryJson.id = response.id;
            console.log(categoryJson);
        }
    }).fail(function (xhr,status,errorThrown){
        alert("error ao puxar as categorias: " + xhr.responseText);
    })

    const obj={
        name: document.getElementById("name").value,
        value:document.getElementById("valor").value,
        point:pointObj,
        type:typeJson,
        category:categoryJson,
    }

    $.ajax({
        method: "POST",
        url:"financial/save",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        success: function (response){
            console.log(response)
        }
    }).fail(function (xhr,status,errorThrown){
        console.log(JSON.stringify(obj));
        alert("error ao salvar: " + xhr.responseText);
    })

}