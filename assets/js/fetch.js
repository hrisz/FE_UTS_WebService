import { get } from "https://bukulapak.github.io/api/process.js";
let urlAPI = "https://uts-webservice-9c2ac02d9269.herokuapp.com/animeid"
get(urlAPI, valAniData);

function valAniData(results){
    console.log(results);
}