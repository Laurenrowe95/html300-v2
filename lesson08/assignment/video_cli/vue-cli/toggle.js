export const toggleBorder = {
    data () {
        return {
            aToggle: true
          }
        },

    computed = {
        style() {
            let styleA  = {
                border: solid,
                color: gray,
                weight: 10px,
            };

    },
    methods = {
        myToggleBorder() {
          this.aToggle = !this.aToggle;
        }
      }
}
