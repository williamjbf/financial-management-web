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

async function salvar() {

    let idCategory = await buscarIdCategory();
    let idType = await buscarIdType();

    console.log(idType.id);
    console.log(idCategory.id);

    const pointObj = {
        type: "Point",
        coordinates: [marker.getPosition().lat(), marker.getPosition().lng()]
    }

    const obj = {
        name: document.getElementById("name").value,
        value: document.getElementById("valor").value,
        point: pointObj,
        type: idType.id,
        category: idCategory.id,
    }

    $.ajax({
        method: "POST",
        url: "financial/save",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            console.log(response)
        }
    }).fail(function (xhr, status, errorThrown) {
        alert("error ao salvar: " + xhr.responseText);
    })

}

async function buscarIdType(){

    let typeSelecionado = document.getElementById("tipo").value;

    return $.ajax({
        method: "GET",
        url:"type/find",
        data:"description="+typeSelecionado,
        contentType: "application/json; charset=utf-8",
        success: function (response){
            return response.id;
        }
    }).fail(function (xhr,status,errorThrown){
        alert("error ao puxar os tipos: " + xhr.responseText);
    })
}

async function buscarIdCategory(){

    let categorySelecionado = document.getElementById("categoria").value;

    return $.ajax({
        method: "GET",
        url: "category/find",
        data: "description=" + categorySelecionado,
        contentType: "application/json; charset=utf-8",
        success: function (response) {
            return response.id;
        }
    }).fail(function (xhr, status, errorThrown) {
        alert("error ao puxar as categorias: " + xhr.responseText);
    })
}

