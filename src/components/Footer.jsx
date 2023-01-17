import React from "react";
const year=new Date();
const current=year.getFullYear();
function Footer() {
    return(<footer>
        <p>copyright content{current}</p>
    </footer>)
}
export default Footer;