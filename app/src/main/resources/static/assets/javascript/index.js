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

async function salvar(id) {

    let idCategory = await buscarIdCategory();
    let idType = await buscarIdType();

    console.log(idType.id);
    console.log(idCategory.id);

    const pointObj = {
        type: "Point",
        coordinates: [marker.getPosition().lat(), marker.getPosition().lng()]
    }

    const obj = {
        id:id,
        name: document.getElementById("name").value,
        value: document.getElementById("valor").value,
        point: pointObj,
        type: idType.id,
        category: idCategory.id,
    }

    if (id != null || id !== ''.trim()){
        obj.id = id
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

    location.reload();
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

function getOpcoesForm(){
    $.ajax({
        method: "GET",
        url:"type/list",
        data:'',
        contentType: "application/json; charset=utf-8",
        success: function (response){
            $('#tipo > option').remove();

            for(let index =0; index <response.length; index++){
                $('#tipo').append('<option>'+ response[index].description +'</option>');
            }
        }
    }).fail(function (xhr,status,errorThrown){
        alert("error ao puxar os tipos: " + xhr.responseText);
    })

    $.ajax({
        method: "GET",
        url:"category/list",
        data:'',
        contentType: "application/json; charset=utf-8",
        success: function (response){
            $('#categoria > option').remove();

            for(let index =0; index <response.length; index++){
                $('#categoria').append('<option>'+ response[index].description +'</option>');
            }
        }
    }).fail(function (xhr,status,errorThrown){
        alert("error ao puxar os tipos: " + xhr.responseText);
    })
}

function listar(){
    $.ajax({
        method: "GET",
        url:"financial/list",
        success: function (response){
            $('#resultado > tbody > tr').remove();

            for(let index =0; index < response.length; index++){
                $('#resultado > tbody').append('<tr id = '+ response[index].id +'>' +
                    '<td>'+response[index].id+'</td>' +
                    '<td>'+response[index].name+'</td>' +
                    '<td>'+response[index].category.description+'</td>' +
                    '<td>'+response[index].type.description+'</td>' +
                    '<td>'+response[index].value+'</td>' +
                    '<td><button type="button" class="btn btn-info" onclick="edit('+ response[index].id+')">Ver</button></td>'+
                    '</tr>');
            }
        }
    }).fail(function (xhr,status,errorThrown){
        alert("error when searching for user: " + xhr.responseText);
    })

}
