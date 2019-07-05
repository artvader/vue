class Post {
    constructor(fighter, pilot, faction) {
        this.fighter = fighter;
        this.pilot = pilot;
        this.faction = faction;
    }
}

var searchFilter = new Vue({
    el: '#search-filter',
    data: {
        search: "",
        postList: [
            new Post(
                "Red-1",
                "Cmdr. Garven Dreis",
                "Rebels",
            ),
            new Post(
                "Red-2",
                "Lt. Wedge Antilles",
                "Rebels",
            ),
            new Post(
                "Red-3",
                "Biggs Darklighter",
                "Rebels",
            ),
            new Post(
                "Red-4",
                "John D. Branon",
                "Rebels",
            ),
            new Post(
                "Red-5",
                "Luke Skywalker",
                "Rebels",
            ),
            new Post(
                "TA-1",
                "Darth Vader",
                "Imperial",
            )
        ]
    },
    computed: {
        filteredList() {
            return this.postList.filter(post => {
                return post.pilot.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    }
});