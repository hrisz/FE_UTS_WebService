import { addInner } from "https://bukulapak.github.io/element/process.js";
import { aniData } from "../temp/table.js";

export function valTable(results) {
    clearTable();
    results.forEach(valRow);
}

function valRow(value) {
    let content =
        aniData.replace('<div class="text-transparent h-2 animate-pulse bg-slate-200 rounded col-span-2">#AnimationID#</div>', value.animation.uid)
            .replace('<div class="text-transparent h-2 animate-pulse bg-slate-200 rounded col-span-2">#Title#</div>', value.animation.title)
            .replace('<div class="text-transparent h-2 animate-pulse bg-slate-200 rounded col-span-2">#Producer#</div>', value.animation.producer)
            .replace('<div class="text-transparent h-2 animate-pulse bg-slate-200 rounded col-span-2">#Game#</div>', value.animation.games)
            .replace('<div class="text-transparent h-2 animate-pulse bg-slate-200 rounded col-span-2">#Date#</div>', value.animation.dates)
            .replace('<div class="text-transparent h-2 animate-pulse bg-slate-200 rounded col-span-2">#View#</div>', value.views)
            .replace('<div class="text-transparent h-2 animate-pulse bg-slate-200 rounded col-span-2">#Like#</div>', value.likes)
            .replace('<div class="text-transparent h-2 animate-pulse bg-slate-200 rounded col-span-2">#Comment#</div>', value.comments)
            .replace('<a href="#" id="watch">YouTube</a>', '<a href="' + value.animation.urlvid + '" id="watch">YouTube</a>')
        addInner("aniData", content);
}

function clearTable() {
    const tableBody = document.querySelector('#aniData tbody');
    if (tableBody) {
        tableBody.innerHTML = '';
    }
}