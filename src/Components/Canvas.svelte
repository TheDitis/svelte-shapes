<script>
    import Circles from "./Circles.svelte";

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    const start = Date.now()

    let i = 1

    import { time } from "./stores"

    $: shiftY = (time - start) % 200

    console.log($time);

</script>


<svg height={"100vh"} width={"100vw"}>
    <Circles x={cx / 4} y={cy} count={100} shiftR={-10} shiftY={shiftY}/>
</svg>