var app = new Vue({

    el: '#app',

    data: {
        publications: [],
        citations: [],
        showBib: -1
    },

    methods: {

        fetchPublications: function (path, vue) {

            const Cite = require('citation-js')
            $.get(path, function (data) {
                vue.citations = new Cite(data);
                vue.publications = vue.citations.data;
                //console.log(vue.citations.data);
                //console.log(vue.citations)
                //console.log(example.format('bibtex'));
                //console.log(example.format('data'));
                //console.log(vue.citations.format('bibtex'));
            })
        },

        printBib: function (c) {
            const Cite = require('citation-js');
            return (new Cite(c)).format('bibtex').replace(/\t/g, " ");
        },

        showBibEntry: function (k) {
            if (this.showBib == k)
                this.showBib = -1;
            else
                this.showBib = k;
        }
    },

    created() {
        this.fetchPublications('assets/bib/publications.bib', this);
    }

});

