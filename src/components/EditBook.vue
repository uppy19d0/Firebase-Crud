<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Editar Libros</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateBook">
                 <div class="form-group">
                        <label>Nombre del Libro:</label>
                        <input type="text" class="form-control" v-model="newBook.name"/>
                    </div>
                    <div class="form-group">
                        <label>Autor:</label>
                        <input type="text" class="form-control" v-model="newBook.autor"/>
                    </div>
                    <div class="form-group">
                        <label>Genero:</label>
                        <input type="text" class="form-control" v-model="newBook.genero"/>
                    </div>
                    <div class="form-group">
                        <label>Page Number:</label>
                        <input type="number" class="form-control" v-model="newBook.numero_de_pagina"/>
                    </div>
                    <div class="form-group">
                        <label>Editora:</label>
                        <input type="text" class="form-control" v-model="newBook.editora"/>
                    </div>
                     <div class="form-group">
                        <label>Precio:</label>
                        <input type="number" class="form-control" v-model="newBook.precio"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Book"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { db } from '../config/db';

export default {
  components: {
      name: 'EditItem'
  },
  firebase: {
    books: db.ref('books'),
    itemsObj: {
      source: db.ref('books'),
      asObject: true
    }
  },
  data () {
    return {
      newBook: {}
    }
  },
  created() {
     let book = this.itemsObj[this.$route.params.id]
     this.newBook = {
            name: book.name,
            autor: book.autor,
            genero:book.genero,
            numero_de_pagina:book.numero_de_pagina,
            editora:book.editora,
            precio:book.precio
     }
  },
  methods: {
    updateBook() {
      this.$firebaseRefs.books.child(this.$route.params.id).set(this.newBook);
      this.$router.push('/index')
    }
  }
}
</script>