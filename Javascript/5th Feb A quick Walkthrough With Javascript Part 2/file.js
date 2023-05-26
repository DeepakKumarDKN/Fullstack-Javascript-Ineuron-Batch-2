function Outer(){
    let name = "deepak"
    function Inner(){
        let surname = "nayak"
        function deep(){
            console.log(name)
            console.log(surname)
        }
        deep()
    }
    Inner()

}
Outer()
