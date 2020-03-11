<template>
  <div class="col-xl-20 text-center">
    <img
      alt="Vue logo"
      height="90px"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX////ZlmY0mIbiV0w/ldQsgXL3y4s2f7SazMPASkDSrXcxj34yfbMuloMrgG9AlthXj71vs6YziJbXjlnFRTx3fW7LTkTlb2f68u3hT0jxr3v40I7wqHftmG7phGSZxLvglmSBoIDet37md29WmILhYVCYq7n9zYfXt4nxxoiDm3rUv56Hr6f40Zngll1dlcdUnteJwrfNlWnHclbJgV6Bkp62o4fKbmdXgqpRhHBHoI/EV0YljdHalJC8NyrgSDv43Nntm5W91NBhn5PP5ODq8vFHkIPE1+hnncdrq9yqzOrn7/ahyOjd7Ptin6DgqaXphX3yyceIlIbzuIx7inXslHnLjmXvpIJYj4tzl4F/tLWzsajJ0Nl0o82xxdrT2dFGsvrfAAADZElEQVR4nO3de1MSURiA8VXAJFmEopSsLE0rs4zuKeYFES+Z2N3K/P7fokVTz1HcfRdxdl94nr93mfObs8BeZvY4TrtbrqSMBgZ6fZstrbR9BJdbdTWbNYH+Pi/XzUc95lBVU6YvFeg7MM5GPeowVSxg8AweEktRD1veigWUTWGDWI164OJGW5lCT7gc9cDFTbcoHI164OIQIox/CBHGP4QI4x9ChPEPIcL4hxBh/EPYoULXLq7C2lrOaOb56dY3Gls1E7r5frN8E2IMhJu5jNGVZJPK5Q3Fwk1PZdQM2DB+1CvMSYAecUursGYBzxcm17UK92RTmEwOflIqFB6knvAaQoQIESJEiLCpsHfW7izwUDi8/dZs3L/60mJ8hME1hNuFQvqkQqKYKPq3UB9WJZz/YPjSNxOCihNtI16+sH8nPNAj1hUJ50xgWgZMJBYW1Qg/F1oSFpe0CHtvFFo4SD3heKcLE0MIESJE2C3C4OcWyoVuvmTW7OpJvTDw+hAhQoQIESJEiBAhwpgIrQLudp+kRzj1wuqWtC9ahO79q2ZjI32yRp5qFQqBfX0IESJso3DM/qWRpkf49aXVXWnftAhPn9MUhac0iv7xu+GsDSFCXcKOvLb4btZzW5rea4vO+8fvgrM2hAgRIkSIECFChAgRIkSIECFChAgRIkR4KOz8p9yvrO5I+6FF2AXPnrrt+SFChAgRIkSIECFChAgRIkQYldAsOXh+WoWTr80mffqpVPjIupv50KepVCcIH59/gxYhQoQIESJEiBAhQoQIESJEiFC1MP7voL2YUMN7hC8oFIQQIcJwQg8S6p63BuEbqyc+7SoV2s+eyj516Xv1ESJEiBAhQoQIESJEGA+hG/X6h3ti4a8Whb8jXsOyZgl9iOtVS5gSH6VOuiVh29YhlR6m5S1nupVJdPudiNeSdTYzEmJ5w9t0NTzRzXv7RbsesEds3Mg4AmYy3jfuzFewnKwdbFrJZsMQXdctHexnr+kcTCwuSGdwWNaftXdmuZlT7f092nJ/973ZA/8qo/v/91ucn7Oa8G2oviMcunNd2LOgjre8F67j/XrCJR24E/Jz9YVQfwj1h1B/CPWHUH8I9YdQfwj1h1B/CPWHUH8I9YdQfwj1h1B/CPWHUH8I9YdQfwj19w+tbfoLV/83ZgAAAABJRU5ErkJggg=="
    />
    <div class="card">
      <div class="card-header">
        <h3>Lista de LIBROS</h3>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Autor</th>
              <th>Genero</th>
              <th>Cantidad de pagina</th>
              <th>Editoria</th>
              <th>Precio</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book of books" :key="book['.key']">
              <td>{{ book.name }}</td>
              <td>{{ book.autor }}</td>
              <td>{{ book.genero }}</td>
              <td>{{ book.numero_de_pagina }}</td>
              <td>{{ book.editora }}</td>
              <td>{{ book.precio }}</td>

              <td>
                <router-link
                  :to="{ name: 'Edit', params: {id: book['.key']} }"
                  class="btn btn-warning"
                >Edit</router-link>
              </td>
              <td>
                <button @click="deleteItem(book['.key'])" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>



<script>
import { db } from "../config/db";

export default {
  components: {
    name: "ListBook"
  },
  data() {
    return {
      books: []
    };
  },
  firebase: {
    books: db.ref("books")
  },
  methods: {
    deleteItem(key) {
      var conf = confirm("Seguro De Que Quiere Borrar este libro");
      if (conf == true) {
        this.$firebaseRefs.books.child(key).remove();
      } else {
        return false;
      }
    }
  }
};
</script>