<template>
    <div class="container">
                <div class="col-xl-20">
                    <div class="card">
                        <div class="card-header">
                            <img alt="Vue logo" height="120px" src="https://findicons.com/files/icons/2799/flat_icons/256/book_add.png" />
                            <h3>Add A New LIBRO</h3>
                        </div>
                        <div class="card-body">
                            <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Nombre del Libro:</label>
                        <input type="text" class="form-control" v-model="newBook.nombre"/>
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
                        <input type="text" class="form-control" v-model="newBook.numero_de_pagina"/>
                    </div>
                    <div class="form-group">
                        <label>Editora:</label>
                        <input type="text" class="form-control" v-model="newBook.editora"/>
                    </div>
                     <div class="form-group">
                        <label>Precio:</label>
                        <input type="text" class="form-control" v-model="newBook.precio"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
                        </div>
                    </div>
                </div>
            </div>
    
</template>

<script>

import { db } from '../config/db';

export default {
  components: {
      name: 'AddItem'
  },
  firebase: {
    books: db.ref('books')
  },
  data () {
    return {
      newBook: {
            nombre: '',
            autor: '',
            genero: '',
            numero_de_pagina: '',
            editora: '',
            precio: '',
      }
    }
  },
  methods: {
      addItem() {
        this.$firebaseRefs.books.push({
            name: this.newBook.nombre,
            autor: this.newBook.autor,
            genero:this.newBook.genero,
            numero_de_pagina:this.newBook.numero_de_pagina,
            editora:this.newBook.editora,
            precio:this.newBook.precio

        })
        this.newBook.nombre,
            this.newBook.autor,
            this.newBook.genero,
            this.newBook.numero_de_pagina,
            this.newBook.editora,
            this.newBook.precio
        this.$router.push('/index')
      }
    }
}
</script>