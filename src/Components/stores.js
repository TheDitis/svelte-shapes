import {readable} from "svelte/store"


export const time = readable(0, (set) => {
    const interval = setInterval(() => {
        set(new Date());
    }, 200);

    return () => {
        clearInterval(interval)
    }
});




