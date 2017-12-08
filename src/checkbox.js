(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.tcheckbox = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
    return {
        template: "<span class='t-checkbox'><input :id='cId' type='checkbox' value='test' @change='ch' v-model='c'><span></span></span>",
        data: function() {
            return {
                c: null
            }
        },
        props: ['value', "c-id"],
        watch: {
            value: {
                immediate: true,
                handler: function(val) {
                    this.c = val;
                }
            }
        },
        methods: {
            ch: function() {
                this.$emit("input", this.c);
            }
        }
    };

}));