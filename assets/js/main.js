var app = new Vue({
    el: '#app',
    data: {
        publications: []
    },
    methods: {
        fetchFromJson: function (jsonPath, vue, v) {
            $.get(jsonPath, function (json) {
                vue[v] = json.data;
            })
        }
    },
    created() {
        this.fetchFromJson('assets/json/publications.json', this, 'publications')
    }

})