!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports={template:"<span class='t-checkbox'><input :id='cId' type='checkbox' value='test' @change='ch' v-model='c'><span></span></span>",data:function(){return{c:null}},props:["value","c-id"],watch:{value:{immediate:!0,handler:function(e){this.c=e}}},methods:{ch:function(){this.$emit("input",this.c)}}}:e.tcheckbox={template:"<span class='t-checkbox'><input :id='cId' type='checkbox' value='test' @change='ch' v-model='c'><span></span></span>",data:function(){return{c:null}},props:["value","c-id"],watch:{value:{immediate:!0,handler:function(e){this.c=e}}},methods:{ch:function(){this.$emit("input",this.c)}}}}("undefined"!=typeof self?self:this,function(){return{template:"<span class='t-checkbox'><input :id='cId' type='checkbox' value='test' @change='ch' v-model='c'><span></span></span>",data:function(){return{c:null}},props:["value","c-id"],watch:{value:{immediate:!0,handler:function(e){this.c=e}}},methods:{ch:function(){this.$emit("input",this.c)}}}});