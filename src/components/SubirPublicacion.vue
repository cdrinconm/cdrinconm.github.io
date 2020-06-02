<template>
    <div id="SubirPublicacion">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <form ><!-- class="was-validated" -->
                    <div class="col-md-12 mb-3">
                        <label for="validationServer01"><h5>Hi, Mario Lopez</h5></label><br/>
                        <br><!-- <label for="validationServer01">Correo: mp@gmail.com</label> -->
                        <p> 
                            ¡Thanks for share your knowledge!
                            <br/>
                            <br/>
                        </p>
                    </div>
                    <div class="col-md-8 mb-3">
                        <label for="exampleFormControlInput10">Title</label>
                        <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Profesional ID">
                        <br/>
                        <label for="validationTextarea">Abstract</label>
                        <textarea class="form-control" id="validationTextarea" placeholder="Tell us someting of you..." required></textarea>
                        <!-- <div class="invalid-feedback">
                        Please enter a message in the textarea.
                        </div> -->
                        <br>
                        <div class="mb-3">
                            <!-- <v-select multiple v-model="tag" :options="['Canada','United States']" /> -->
                            <label for="exampleFormControlInput2">Key Words</label>
                            <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="New keword..." v-model="keyword">
                            <button type="button" class="btn btn-dark" @click="AddKeyWord()">Add</button>
                            <!-- <select class="custom-select" required>
                            <option value="">Seleccionar...</option>
                            <option value="1" @click="addTag('Sistemas')">Sistemas</option>
                            <option value="2" @click="addTag('Quimica')">Quimica</option>
                            <option value="3" @click="addTag('Civil')">Civil</option>
                            </select> -->
                        </div>
                        <div  class="mt-3" v-for="(item,index) in keywords" :key="item.id">
                            <div role="alert" class="alert alert-dark">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div> {{item}}</div>
                                    <div>
                                        <button type="button" class="btn btn-danger btn-sm" @click="eliminar(index)">X</button>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            <label class="form-check-label" for="inlineCheckbox1">Sistems</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                            <label class="form-check-label" for="inlineCheckbox2">Chemistry</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
                            <label class="form-check-label" for="inlineCheckbox3">Civil</label>
                        </div>
                        <br/>
                        <br/>
                        <!-- <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="customControlValidation1" required>
                            <label class="custom-control-label" for="customControlValidation1">
                                Acepto que todas mis publicaciones sean descargadas y compartidas a los usuarios de Ingenio.
                            </label>
                            <div class="invalid-feedback">Debe marcar la casilla</div>
                        </div> -->
                        <button type="submit" class="btn btn-dark mb-2">Add publication</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'SubirPublicacion',
  data: function (){
    return {
        keywords:[],
        keyword: ''
    }
    },
    componenets:{
    },
    methods:{        
        AddKeyWord(){
            this.keywords.push(this.keyword);
            console.log(this.keywords);
            this.keyword = ''
            // this.tags.push({tag: tag});
        },
        eliminar: function(index){
            //delete this.keywords[index];
            this.keywords.splice(index,1);
        }
    }
}
</script>

 <style scoped>
 
 </style>
