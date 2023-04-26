<section class="container">
    <slot></slot>
</section>

<style>
    .container {
        min-height: 90vh;
        min-width: 80vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
    }
</style>