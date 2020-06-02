<template>
    <div id="SubirPublicacion">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <form>
                    <div class="col-md-8 mb-3">
                        <label for="exampleFormControlInput100">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput200" placeholder="Category Name">
                        <br/>
                        <label for="validationTextarea">Description</label>
                        <textarea class="form-control" id="validationTextarea1" placeholder="Something about this category..." required></textarea>
                        <!-- <div class="invalid-feedback">
                        Please enter a message in the textarea.
                        </div> -->
                        <br>
                        <button type="submit" class="btn btn-dark mb-2">Add Category</button>
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
