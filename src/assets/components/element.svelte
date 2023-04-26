<script>
    export let text = undefined;
</script>

<div 
    class={"element" + ($$restProps.class ? " " + $$restProps.class : "")} 
    on:click on:keydown>
    <p>{text}</p>
</div>

<style>
    .element {
        background-color: #F6FFDE;
        border: 1px solid #AAC8A7;
        color: #222222;
        padding: 1rem;
        text-align: center;
        transition: 0.4s;
    }

    .element:not(.visor) {
        cursor: pointer;
    }

    .element:hover:not(.visor) {
        transform: scale(1.1);
    }

    p {
        margin: 0;
        font-size: 30px;
        word-break: break-all;
    }
</style>