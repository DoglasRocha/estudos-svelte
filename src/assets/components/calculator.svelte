<script>
    import Element from "./element.svelte"
    import Calculator from "../features/calculator.js"

    let calculator = new Calculator();

    function updateBuffer(newChar) {
        calculator.updateBuffer(newChar);
        calculator = calculator;
    }

    function eraseLastFromBuffer() {
        calculator.eraseFromBuffer();
        calculator = calculator;
    }

    function clearBuffer() {
        calculator.clearBuffer();
        calculator = calculator;
    }

    function displayMemory() {
        calculator.displayMemory();
        calculator = calculator;
    }

    function addToMemory() {
        calculator.addToMemory();
        calculator = calculator;
    }

    function substractFromMemory() {
        calculator.subtractFromMemory();
        calculator = calculator;
    }

    function execOperation() {
        calculator.execOperation();
        calculator = calculator;
    }
</script>

<section class="calculator">
    <Element class="visor" text={calculator.getBuffer()}/>
    <Element class="btn-size-2-start" text="Erase" on:click={eraseLastFromBuffer}/>
    <Element class="btn-size-2-end" text="Clear" on:click={clearBuffer}/>
    <Element class="btn-size-2-start" text="M" on:click={displayMemory}/>
    <Element text="M+" on:click={addToMemory}/>
    <Element text="M-" on:click={substractFromMemory}/>
    <Element text="7" on:click={() => updateBuffer("7")}/>
    <Element text="8" on:click={() => updateBuffer("8")}/>
    <Element text="9" on:click={() => updateBuffer("9")}/>
    <Element text="/" on:click={() => updateBuffer("/")}/>
    <Element text="4" on:click={() => updateBuffer("4")}/>
    <Element text="5" on:click={() => updateBuffer("5")}/>
    <Element text="6" on:click={() => updateBuffer("6")}/>
    <Element text="*" on:click={() => updateBuffer("*")}/>
    <Element text="1" on:click={() => updateBuffer("1")}/>
    <Element text="2" on:click={() => updateBuffer("2")}/>
    <Element text="3" on:click={() => updateBuffer("3")}/>
    <Element text="+" on:click={() => updateBuffer("+")}/>
    <Element text="0" on:click={() => updateBuffer("0")}/>
    <Element text="." on:click={() => updateBuffer(".")}/>
    <Element text="-" on:click={() => updateBuffer("-")}/>
    <Element text="=" on:click={execOperation}/>
</section>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .calculator {
        display: grid;
        border: 1px solid #efefef;
        padding: 2px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(7, 1fr);
        max-width: 50vw;
        width: 50vw;
    }

    .calculator :global(.visor) {
        grid-column: 1 / 5;
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: right;
    }

    .calculator :global(.btn-size-2-start) {
        grid-column: 1 / 3;
    }

    .calculator :global(.btn-size-2-end) {
        grid-column : 3 / 5;
    }
</style>