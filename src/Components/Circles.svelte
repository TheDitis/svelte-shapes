<script>
    export let x;
    export let y;
    export let r = 100;
    export let count = 1;
    export let shiftX = 20;
    export let shiftY = 0;
    export let shiftR = 0;
    export let fill = "transparent";

    x = x + shiftX;
    y = y + shiftY;
    r += shiftR;

    if (r === 0) r = 1;
    if (r < 0) {
        r = Math.abs(r);
        shiftR = Math.abs(shiftR)
    }
</script>


<circle cx={x} cy={y} r={r} fill={fill} stroke={"black"}></circle>

{#if count > 1}
    <svelte:self count={count - 1} x={x} y={y} r={r} shiftX={shiftX} shiftY={shiftY} shiftR={shiftR} fill={fill}/>
{/if}